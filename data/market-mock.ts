import type { SpotKey } from "@/types/metal";

/**
 * Mock market parameters used ONLY by the mock provider (lib/market/mock-provider.ts).
 * Values are illustrative demo figures in EUR per gram of pure metal — not real quotes.
 */
export const MOCK_MARKET: Record<SpotKey, { base: number; trend: number; volatility: number; seed: number }> = {
  XAU: { base: 124.8, trend: 0.035, volatility: 0.012, seed: 1 },
  XAG: { base: 1.42, trend: 0.05, volatility: 0.02, seed: 3 },
  XPT: { base: 41.2, trend: -0.02, volatility: 0.015, seed: 5 },
  XPD: { base: 35.6, trend: 0.01, volatility: 0.018, seed: 7 },
};

export const MOCK_SOURCE_LABEL = "Demo-Kurse (Mock)";
