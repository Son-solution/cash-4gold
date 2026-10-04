import "server-only";
import type { ChartPeriod, MarketSnapshot, PriceHistory, SpotKey, SpotQuote } from "@/types/metal";
import type { MarketDataProvider } from "./types";

/**
 * Live prices from metals.dev (https://metals.dev/docs).
 *
 * Request budget (all responses are cached server-side in the Next.js data cache,
 * so visitor traffic never triggers extra API calls):
 *  - /v1/latest (EUR per gram) ........ 1 request per METALS_DEV_CACHE_SECONDS (default 30 min ≈ 1,440 / month)
 *  - /v1/timeseries last 30 days ...... 1 request per day (≈ 30 / month) → 1W, 1M, change vs. previous close
 *  - /v1/timeseries monthly points .... historic data, fetched once and cached permanently → 1J, 5J
 */

const API_BASE = "https://api.metals.dev/v1";
const GRAMS_PER_TROY_OUNCE = 31.1034768;
const DAY_MS = 86_400_000;

const METAL_NAMES: Record<SpotKey, "gold" | "silver" | "platinum" | "palladium"> = {
  XAU: "gold",
  XAG: "silver",
  XPT: "platinum",
  XPD: "palladium",
};
const SPOT_KEYS = Object.keys(METAL_NAMES) as SpotKey[];

const DEFAULT_CACHE_SECONDS = 1800;
const envCache = Number(process.env.METALS_DEV_CACHE_SECONDS);
/** Minimum 60 s; falls back to 30 minutes if the variable is empty or invalid. */
export const LIVE_CACHE_SECONDS = Number.isFinite(envCache) && envCache >= 60 ? envCache : DEFAULT_CACHE_SECONDS;

interface LatestResponse {
  status: string;
  currency: string;
  unit: string;
  metals: Record<string, number>;
  timestamps: { metal: string; currency: string };
}

interface TimeseriesResponse {
  status: string;
  rates: Record<string, { date: string; metals: Record<string, number>; currencies: Record<string, number> }>;
}

/** One daily data point in EUR per gram. */
interface DailyPoint {
  date: string;
  prices: Record<SpotKey, number>;
}

async function callApi<T>(path: string, params: Record<string, string>, cache: RequestInit & { next?: { revalidate?: number | false } }): Promise<T> {
  const apiKey = process.env.METALS_DEV_API_KEY;
  if (!apiKey) throw new Error("METALS_DEV_API_KEY is not set");
  const url = `${API_BASE}${path}?${new URLSearchParams({ api_key: apiKey, ...params })}`;
  const res = await fetch(url, { ...cache, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`metals.dev ${path}: HTTP ${res.status}`);
  const body = (await res.json()) as T & { status?: string; error_message?: string };
  if (body.status !== "success") throw new Error(`metals.dev ${path}: ${body.error_message ?? body.status}`);
  return body;
}

function round(value: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Converts a timeseries day (USD per troy ounce + USD value of each currency) to EUR per gram. */
function toDailyPoint(day: TimeseriesResponse["rates"][string]): DailyPoint | null {
  const usdPerEur = day.currencies?.EUR;
  if (!usdPerEur) return null;
  const prices = {} as Record<SpotKey, number>;
  for (const key of SPOT_KEYS) {
    const usdPerOunce = day.metals?.[METAL_NAMES[key]];
    if (!usdPerOunce) return null;
    prices[key] = usdPerOunce / usdPerEur / GRAMS_PER_TROY_OUNCE;
  }
  return { date: day.date, prices };
}

async function getTimeseries(start: string, end: string, revalidate: number | false): Promise<DailyPoint[]> {
  const body = await callApi<TimeseriesResponse>(
    "/timeseries",
    { start_date: start, end_date: end },
    revalidate === false ? { cache: "force-cache" } : { next: { revalidate } },
  );
  return Object.values(body.rates)
    .map(toDailyPoint)
    .filter((p): p is DailyPoint => p !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Last 30 days of daily prices (the URL changes once per day, so this costs ~1 request per day). */
async function getLast30Days(today: Date): Promise<DailyPoint[]> {
  return getTimeseries(isoDate(new Date(today.getTime() - 30 * DAY_MS)), isoDate(new Date(today.getTime() - DAY_MS)), 86_400);
}

/**
 * One price per month for the last 12 months, one per quarter before that (oldest first).
 * Past months never change, so each point is fetched once (~28 requests) and cached permanently.
 */
async function getMonthlyPoints(today: Date, months: number): Promise<DailyPoint[]> {
  const requests: Promise<DailyPoint | null>[] = [];
  for (let i = months; i >= 1; i--) {
    if (i > 12 && i % 3 !== 0) continue;
    const start = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - i, 1));
    const end = new Date(start.getTime() + 4 * DAY_MS);
    requests.push(
      getTimeseries(isoDate(start), isoDate(end), false)
        .then((points) => points[0] ?? null)
        .catch(() => null),
    );
  }
  const points = await Promise.all(requests);
  return points.filter((p): p is DailyPoint => p !== null);
}

const labelFormat = {
  day: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit" }),
  month: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", month: "2-digit", year: "2-digit" }),
  year: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", year: "numeric" }),
  time: new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit" }),
};

/** Four evenly spaced axis labels for a series of dates. */
function axisLabels(dates: Date[], fmt: Intl.DateTimeFormat): string[] {
  if (dates.length === 0) return ["", "", "", ""];
  return [0, 1, 2, 3].map((i) => fmt.format(dates[Math.round((i / 3) * (dates.length - 1))]));
}

function buildHistory(points: DailyPoint[], key: SpotKey, current: number, now: Date, fmt: Intl.DateTimeFormat): PriceHistory {
  const values = [...points.map((p) => round(p.prices[key], 4)), round(current, 4)];
  const dates = [...points.map((p) => new Date(`${p.date}T12:00:00Z`)), now];
  return { values: atLeastTwo(values), labels: axisLabels(dates, fmt) };
}

/** Charts need two points; a flat line is shown when history is unavailable. */
function atLeastTwo(values: number[]): number[] {
  return values.length >= 2 ? values : [values[0], values[0]];
}

export async function createLiveSnapshot(): Promise<MarketSnapshot> {
  const now = new Date();

  const latest = await callApi<LatestResponse>("/latest", { currency: "EUR", unit: "g" }, { next: { revalidate: LIVE_CACHE_SECONDS } });
  if (latest.currency !== "EUR" || latest.unit !== "g") throw new Error("metals.dev returned an unexpected currency/unit");

  // History is optional: if it fails, prices still update and charts fall back to what is available.
  const [daily, monthly] = await Promise.all([getLast30Days(now).catch(() => []), getMonthlyPoints(now, 60).catch(() => [])]);
  const previousClose = daily.at(-1);

  const quotes = {} as Record<SpotKey, SpotQuote>;
  const history = {} as Record<SpotKey, Record<ChartPeriod, PriceHistory>>;

  for (const key of SPOT_KEYS) {
    const price = latest.metals[METAL_NAMES[key]];
    if (!price) throw new Error(`metals.dev: missing price for ${METAL_NAMES[key]}`);
    const prevClose = previousClose?.prices[key];

    quotes[key] = {
      key,
      pricePerGram: round(price, 2),
      changePercent: prevClose ? round(((price - prevClose) / prevClose) * 100, 2) : 0,
    };

    const prevPoint: DailyPoint[] = previousClose ? [previousClose] : [];
    const updatedAtDate = new Date(latest.timestamps.metal);
    history[key] = {
      // No intraday history on this plan: previous close → current price.
      "1T": {
        values: atLeastTwo([...prevPoint.map((p) => round(p.prices[key], 4)), round(price, 4)]),
        labels: ["Vortag", "", "", labelFormat.time.format(updatedAtDate)],
      },
      "1W": buildHistory(daily.slice(-7), key, price, now, labelFormat.day),
      "1M": buildHistory(daily, key, price, now, labelFormat.day),
      "1J": buildHistory(monthly.slice(-12), key, price, now, labelFormat.month),
      "5J": buildHistory(monthly, key, price, now, labelFormat.year),
    };
  }

  const updatedAt = new Date(latest.timestamps.metal);
  // Next refresh when the server cache expires (at least 60 s from now).
  const nextUpdateAt = new Date(Math.max(updatedAt.getTime() + LIVE_CACHE_SECONDS * 1000, now.getTime() + 60_000));

  return {
    updatedAt: updatedAt.toISOString(),
    nextUpdateAt: nextUpdateAt.toISOString(),
    source: "metals.dev",
    isMock: false,
    quotes,
    history,
  };
}

export const metalsDevProvider: MarketDataProvider = {
  getSnapshot: createLiveSnapshot,
};
