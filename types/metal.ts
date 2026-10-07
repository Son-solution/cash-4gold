/** Metals that can be selected in the price board and the calculator. */
export type MetalId = "gold" | "zahngold" | "silber" | "platin" | "palladium";

/** Market reference instrument (price per gram of pure metal). */
export type SpotKey = "XAU" | "XAG" | "XPT" | "XPD";

export interface Purity {
  /** Stable id, used in URLs / state (e.g. "585"). */
  id: string;
  /** Pure-metal share in parts per thousand (585 = 58.5 %). */
  fineness: number;
  /** Long label, e.g. "14 Karat". */
  label: string;
  /** Short label for compact chips, e.g. "14 K". */
  short: string;
}

export interface MetalDefinition {
  id: MetalId;
  name: string;
  /** Chemical symbol shown on element cards. */
  symbol: string;
  /** Which market quote this metal is priced from. */
  spotKey: SpotKey;
  /**
   * Share of the market price paid out (0–1). Covers refining and handling.
   * Replace with your real payout ratios before going live.
   */
  payoutFactor: number;
  /** Swatch colour used in selectors. */
  swatch: string;
  /** Label of the reference purity, e.g. "Feingold 999". */
  referenceLabel: string;
  purities: Purity[];
}

export interface SpotQuote {
  key: SpotKey;
  /** Market price in EUR per gram of pure metal. */
  pricePerGram: number;
  /** Change since the previous close in percent. */
  changePercent: number;
  /** Optional: not every data source provides intraday high/low. */
  dayHigh?: number;
  dayLow?: number;
}

export type ChartPeriod = "1T" | "1W" | "1M" | "1J" | "5J";

export interface PriceHistory {
  /** Evenly spaced values, oldest first, EUR per gram. */
  values: number[];
  /** Axis labels (start … end). */
  labels: string[];
}

/** A buyer's published purchase price for one purity. */
export interface PurchasePrice {
  /** EUR per gram of material with this purity. */
  price: number;
  /** Change in percent as published by the source. */
  changePercent: number;
}

/** Purchase prices per metal and purity id (e.g. purchasePrices.gold["585"]). */
export type PurchasePriceTable = Partial<Record<MetalId, Record<string, PurchasePrice>>>;

export interface MarketSnapshot {
  /** ISO timestamp of the quotes. */
  updatedAt: string;
  /** ISO timestamp when the next refresh is expected. */
  nextUpdateAt: string;
  /** Human-readable source name shown in the UI. */
  source: string;
  /** True while the mock provider is used. */
  isMock: boolean;
  quotes: Record<SpotKey, SpotQuote>;
  history: Record<SpotKey, Record<ChartPeriod, PriceHistory>>;
  /**
   * Optional: ready-made purchase prices per purity (e.g. scraped from gold-sohn.de).
   * When present they are shown as-is instead of market price × payout factor × purity.
   */
  purchasePrices?: PurchasePriceTable;
}

export type MarketStatus = "live" | "updating" | "stale" | "error";
