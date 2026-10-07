import "server-only";
import { Redis } from "@upstash/redis";
import { unstable_cache } from "next/cache";
import type { ChartPeriod, MarketSnapshot, MetalId, PriceHistory, PurchasePriceTable, SpotKey, SpotQuote } from "@/types/metal";
import { PRICE_REFRESH_MS } from "./config";
import type { MarketDataProvider } from "./types";

/**
 * Purchase prices scraped from gold-sohn.de and stored in Upstash Redis.
 *
 *   Vercel Cron → /api/cron/prices → refreshStoredPrices()   scrapes and writes Redis
 *   page + /api/prices → goldSohnProvider.getSnapshot()      only reads Redis (cached 60 s)
 *
 * Visitors never trigger a scrape. Price history for the charts is built up from
 * the stored scrapes, so charts fill in over time after the first deployment.
 */

const SOURCE_URL = "https://gold-sohn.de/preise/";
const SOURCE_LABEL = "gold-sohn.de";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

/** Give every site that shares the Upstash database its own prefix. */
const PREFIX = process.env.PRICES_KEY_PREFIX || "cash4gold";
const KEYS = {
  current: `${PREFIX}:prices`,
  intraday: `${PREFIX}:history:intraday`,
  daily: `${PREFIX}:history:daily`,
};
/** ~25 h of 5-minute scrapes. */
const INTRADAY_MAX = 300;
const DAY_MS = 86_400_000;

/** Source name → own metal id. "zahngold" must come before "gold" ("Zahngold" contains "gold"). */
const METAL_BY_NAME: [string, MetalId][] = [
  ["zahngold", "zahngold"],
  ["gold", "gold"],
  ["silber", "silber"],
  ["platin", "platin"],
  ["palladium", "palladium"],
];

/** The 999 price of these metals is used as the quote for ticker, charts and daily change. */
const SPOT_METALS: Record<SpotKey, MetalId> = { XAU: "gold", XAG: "silber", XPT: "platin", XPD: "palladium" };
const SPOT_KEYS = Object.keys(SPOT_METALS) as SpotKey[];

export interface StoredPrices {
  /** ISO time of the scrape. */
  scrapedAt: string;
  /** ISO time of the source's own "Letzte Aktualisierung", if found. */
  sourceUpdatedAt: string | null;
  metals: PurchasePriceTable;
}

type SpotPrices = Record<SpotKey, number>;

interface IntradayPoint {
  t: string;
  p: SpotPrices;
}

// ---------------------------------------------------------------------------
// Redis
// ---------------------------------------------------------------------------

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

/** True when Upstash credentials are set (Vercel integration or upstash.com naming). */
export const hasRedisConfig = Boolean(REDIS_URL && REDIS_TOKEN);

let client: Redis | null = null;

function redis(): Redis {
  if (!REDIS_URL || !REDIS_TOKEN) throw new Error("Upstash Redis is not configured");
  client ??= new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
  return client;
}

// ---------------------------------------------------------------------------
// Scraper
// ---------------------------------------------------------------------------

async function fetchSourceHtml(): Promise<string> {
  const res = await fetch(SOURCE_URL, {
    cache: "no-store",
    headers: { "User-Agent": USER_AGENT, Accept: "text/html", "Accept-Language": "de-DE,de;q=0.9" },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`gold-sohn.de: HTTP ${res.status}`);
  return res.text();
}

function cellText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&euro;/g, "€")
    .replace(/\s+/g, " ")
    .trim();
}

/** "1.234,56 €" → 1234.56 (NaN if there is no number, e.g. "—"). */
function parseGermanNumber(text: string): number {
  return Number.parseFloat(text.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", "."));
}

/**
 * Reads every table row "585er Gold | 68,75 € | ▲ 0,03%" into metals.gold["585"].
 * Throws if a 999 price of gold, silver, platinum or palladium is missing, so a changed
 * page layout never overwrites good prices with incomplete data.
 */
export function parsePrices(html: string): Omit<StoredPrices, "scrapedAt"> {
  const metals: PurchasePriceTable = {};

  for (const row of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => cellText(m[1]));
    if (cells.length < 3) continue;

    const label = cells[0].match(/^(\d{3})er\s+(.+)$/i);
    if (!label) continue;
    const name = label[2].toLowerCase();
    const metal = METAL_BY_NAME.find(([key]) => name.includes(key))?.[1];
    const price = parseGermanNumber(cells[1]);
    if (!metal || !Number.isFinite(price) || price <= 0) continue;

    const change = parseGermanNumber(cells[2]);
    (metals[metal] ??= {})[label[1]] = {
      price,
      changePercent: Number.isFinite(change) ? (cells[2].includes("▼") ? -Math.abs(change) : change) : 0,
    };
  }

  for (const metal of Object.values(SPOT_METALS)) {
    if (!metals[metal]?.["999"]) throw new Error(`gold-sohn.de: no 999 price for ${metal} – did the page layout change?`);
  }

  const stamp = html.match(/Letzte Aktualisierung:\s*(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}(?::\d{2})?)/);
  return { metals, sourceUpdatedAt: stamp ? berlinToIso(stamp[1], stamp[2]) : null };
}

function spotPrices(metals: PurchasePriceTable): SpotPrices {
  const prices = {} as SpotPrices;
  for (const key of SPOT_KEYS) prices[key] = metals[SPOT_METALS[key]]!["999"].price;
  return prices;
}

/**
 * Scrapes gold-sohn.de and stores current prices plus history points.
 * Throws (and writes nothing) if fetching or parsing fails.
 */
export async function refreshStoredPrices(): Promise<StoredPrices> {
  const parsed = parsePrices(await fetchSourceHtml());
  const stored: StoredPrices = { scrapedAt: new Date().toISOString(), ...parsed };
  const point: IntradayPoint = { t: parsed.sourceUpdatedAt ?? stored.scrapedAt, p: spotPrices(parsed.metals) };

  await redis()
    .pipeline()
    .set(KEYS.current, stored)
    .lpush(KEYS.intraday, point)
    .ltrim(KEYS.intraday, 0, INTRADAY_MAX - 1)
    // Last price of each (Berlin) day, used for the 1W … 5J charts.
    .hset(KEYS.daily, { [berlinDate(Date.parse(point.t))]: point.p })
    .exec();

  return stored;
}

// ---------------------------------------------------------------------------
// Snapshot (read side)
// ---------------------------------------------------------------------------

interface Store {
  current: StoredPrices | null;
  intraday: IntradayPoint[];
  daily: Record<string, SpotPrices> | null;
}

/** One Redis round trip, shared by all visitors for 60 s. */
const readStore = unstable_cache(
  async (): Promise<Store> => {
    const [current, intraday, daily] = await redis()
      .pipeline()
      .get<StoredPrices>(KEYS.current)
      .lrange<IntradayPoint>(KEYS.intraday, 0, -1)
      .hgetall<Record<string, SpotPrices>>(KEYS.daily)
      .exec<[StoredPrices | null, IntradayPoint[], Record<string, SpotPrices> | null]>();
    return { current, intraday, daily };
  },
  ["gold-sohn-store", PREFIX],
  { revalidate: 60 },
);

const labelFormat = {
  day: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit" }),
  month: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", month: "2-digit", year: "2-digit" }),
  year: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", year: "numeric" }),
  time: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit" }),
};

interface Point {
  date: Date;
  prices: SpotPrices;
}

/** Keeps at most `max` evenly spaced points (always including the last one). */
function downsample<T>(items: T[], max: number): T[] {
  if (items.length <= max) return items;
  return Array.from({ length: max }, (_, i) => items[Math.round((i / (max - 1)) * (items.length - 1))]);
}

function buildHistory(points: Point[], key: SpotKey, fmt: Intl.DateTimeFormat): PriceHistory {
  const values = points.map((p) => p.prices[key]);
  const labels =
    points.length === 0
      ? ["", "", "", ""]
      : [0, 1, 2, 3].map((i) => fmt.format(points[Math.round((i / 3) * (points.length - 1))].date));
  // Charts need two points; a flat line is shown until enough history has been collected.
  return { values: values.length >= 2 ? values : [values[0], values[0]], labels };
}

export async function createGoldSohnSnapshot(): Promise<MarketSnapshot> {
  const { current, intraday, daily } = await readStore();
  if (!current) throw new Error("no gold-sohn prices stored yet – call /api/cron/prices once");

  const now = Date.now();
  const updatedAt = current.sourceUpdatedAt ?? current.scrapedAt;
  const updatedMs = Date.parse(updatedAt);
  const currentPoint: Point = { date: new Date(updatedMs), prices: spotPrices(current.metals) };

  // Intraday list is newest first (LPUSH); keep the last 24 h, oldest first, one point per source update.
  const intradayPoints: Point[] = [];
  for (const p of [...intraday].reverse()) {
    const t = Date.parse(p.t);
    if (t < updatedMs - DAY_MS || t >= updatedMs) continue;
    if (intradayPoints.at(-1)?.date.getTime() === t) continue;
    intradayPoints.push({ date: new Date(t), prices: p.p });
  }

  // Closing prices of the previous days, oldest first.
  const today = berlinDate(updatedMs);
  const dailyPoints: Point[] = Object.entries(daily ?? {})
    .filter(([date]) => date < today)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, prices]) => ({ date: new Date(`${date}T12:00:00Z`), prices }));

  const quotes = {} as Record<SpotKey, SpotQuote>;
  const history = {} as Record<SpotKey, Record<ChartPeriod, PriceHistory>>;

  for (const key of SPOT_KEYS) {
    const ref = current.metals[SPOT_METALS[key]]!["999"];
    quotes[key] = { key, pricePerGram: ref.price, changePercent: ref.changePercent };
    history[key] = {
      "1T": buildHistory([...intradayPoints, currentPoint], key, labelFormat.time),
      "1W": buildHistory([...dailyPoints.slice(-7), currentPoint], key, labelFormat.day),
      "1M": buildHistory([...dailyPoints.slice(-30), currentPoint], key, labelFormat.day),
      "1J": buildHistory(downsample([...dailyPoints.slice(-365), currentPoint], 52), key, labelFormat.month),
      "5J": buildHistory(downsample([...dailyPoints, currentPoint], 60), key, labelFormat.year),
    };
  }

  const nextUpdateAt = Math.max(Date.parse(current.scrapedAt) + PRICE_REFRESH_MS, now + 60_000);

  return {
    updatedAt: new Date(updatedMs).toISOString(),
    nextUpdateAt: new Date(nextUpdateAt).toISOString(),
    source: SOURCE_LABEL,
    isMock: false,
    quotes,
    history,
    purchasePrices: current.metals,
  };
}

export const goldSohnProvider: MarketDataProvider = {
  getSnapshot: createGoldSohnSnapshot,
};

// ---------------------------------------------------------------------------
// Europe/Berlin time helpers
// ---------------------------------------------------------------------------

const berlinDateFormat = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" });
const berlinOffsetFormat = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Berlin", timeZoneName: "longOffset" });

/** UTC timestamp → "YYYY-MM-DD" in Berlin. */
function berlinDate(ms: number): string {
  return berlinDateFormat.format(ms);
}

/** Berlin's UTC offset in ms at the given instant (+1 h in winter, +2 h in summer). */
function berlinOffsetMs(ms: number): number {
  const name = berlinOffsetFormat.formatToParts(ms).find((p) => p.type === "timeZoneName")?.value ?? "";
  const m = name.match(/GMT([+-])(\d{2}):(\d{2})/);
  return m ? (m[1] === "-" ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) * 60_000 : 0;
}

/** "2026-10-07" + "11:09:20" (Berlin local time) → ISO string in UTC. */
function berlinToIso(date: string, time: string): string | null {
  const asUtc = Date.parse(`${date}T${time.length === 5 ? `${time}:00` : time}Z`);
  if (Number.isNaN(asUtc)) return null;
  return new Date(asUtc - berlinOffsetMs(asUtc - berlinOffsetMs(asUtc))).toISOString();
}
