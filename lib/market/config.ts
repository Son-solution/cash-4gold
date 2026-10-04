/** Refresh interval of live prices in the browser (default: 5 minutes). */
const DEFAULT_REFRESH_MS = 5 * 60 * 1000;
const envRefresh = Number(process.env.NEXT_PUBLIC_PRICE_REFRESH_MS);

/** Minimum 30 s; falls back to 5 minutes if the variable is empty or invalid. */
export const PRICE_REFRESH_MS = Number.isFinite(envRefresh) && envRefresh >= 30_000 ? envRefresh : DEFAULT_REFRESH_MS;

/** After this age the UI marks prices as stale (default: 2 × refresh interval). */
export const PRICE_STALE_AFTER_MS = PRICE_REFRESH_MS * 2;

/** Client endpoint that returns a MarketSnapshot (see app/api/prices/route.ts). */
export const PRICES_ENDPOINT = "/api/prices";
