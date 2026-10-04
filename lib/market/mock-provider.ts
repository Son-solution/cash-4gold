import { MOCK_MARKET, MOCK_SOURCE_LABEL } from "@/data/market-mock";
import type { ChartPeriod, MarketSnapshot, PriceHistory, SpotKey, SpotQuote } from "@/types/metal";
import { PRICE_REFRESH_MS } from "./config";
import type { MarketDataProvider } from "./types";

const PERIODS: { id: ChartPeriod; points: number; spanDays: number }[] = [
  { id: "1T", points: 24, spanDays: 1 },
  { id: "1W", points: 28, spanDays: 7 },
  { id: "1M", points: 30, spanDays: 30 },
  { id: "1J", points: 52, spanDays: 365 },
  { id: "5J", points: 60, spanDays: 1825 },
];

/** Deterministic pseudo-random number (0–1) for a given integer seed. */
function seeded(n: number): number {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function round(value: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/**
 * Builds a deterministic snapshot for the current refresh bucket, so server
 * and client render the same numbers within one interval and values change
 * slightly on every refresh (to demonstrate the live-update UI).
 */
export function createMockSnapshot(now: Date = new Date()): MarketSnapshot {
  const bucket = Math.floor(now.getTime() / PRICE_REFRESH_MS);
  const updatedAt = new Date(bucket * PRICE_REFRESH_MS);
  const nextUpdateAt = new Date((bucket + 1) * PRICE_REFRESH_MS);

  const keys = Object.keys(MOCK_MARKET) as SpotKey[];
  const quotes = {} as Record<SpotKey, SpotQuote>;
  const history = {} as Record<SpotKey, Record<ChartPeriod, PriceHistory>>;

  for (const key of keys) {
    const cfg = MOCK_MARKET[key];
    const drift = (seeded(bucket + cfg.seed * 1000) - 0.5) * 0.004; // ±0.2 % per refresh
    const price = cfg.base * (1 + drift);
    const changePercent = round(0.84 * Math.sign(cfg.trend || 1) * (0.4 + seeded(bucket + cfg.seed) * 0.8) + drift * 100, 2);
    quotes[key] = {
      key,
      pricePerGram: round(price, 2),
      changePercent,
      dayHigh: round(price * 1.004, 2),
      dayLow: round(price * 0.994, 2),
    };

    history[key] = {} as Record<ChartPeriod, PriceHistory>;
    for (const period of PERIODS) {
      const scale = period.spanDays / 30;
      const values: number[] = [];
      for (let i = 0; i < period.points; i++) {
        const t = i / (period.points - 1);
        const wave =
          cfg.volatility * Math.sin(i / 3.2 + cfg.seed) + (cfg.volatility / 2) * Math.sin(i / 1.3 + cfg.seed * 2);
        values.push(round(price * (1 - cfg.trend * scale * (1 - t) + wave * Math.min(scale, 3)), 4));
      }
      values[values.length - 1] = round(price, 4);
      history[key][period.id] = { values, labels: buildLabels(updatedAt, period.spanDays) };
    }
  }

  return {
    updatedAt: updatedAt.toISOString(),
    nextUpdateAt: nextUpdateAt.toISOString(),
    source: MOCK_SOURCE_LABEL,
    isMock: true,
    quotes,
    history,
  };
}

function buildLabels(end: Date, spanDays: number): string[] {
  const fmt = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    ...(spanDays <= 1 ? { hour: "2-digit", minute: "2-digit" } : spanDays > 400 ? { year: "numeric" } : { day: "2-digit", month: "2-digit" }),
  });
  return [0, 1, 2, 3].map((i) => {
    const d = new Date(end.getTime() - ((3 - i) / 3) * spanDays * 86_400_000);
    return fmt.format(d);
  });
}

export const mockProvider: MarketDataProvider = {
  async getSnapshot() {
    return createMockSnapshot();
  },
};
