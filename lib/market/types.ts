import type { MarketSnapshot } from "@/types/metal";

/**
 * Contract every market data source must fulfil.
 * Implement this interface for your real price API (see lib/market/provider.ts).
 */
export interface MarketDataProvider {
  getSnapshot(): Promise<MarketSnapshot>;
}
