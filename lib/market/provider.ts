import "server-only";
import type { MarketSnapshot } from "@/types/metal";
import { metalsDevProvider } from "./metals-dev-provider";
import { mockProvider } from "./mock-provider";

/**
 * Live prices come from metals.dev when METALS_DEV_API_KEY is set (see .env.example);
 * otherwise the demo prices of the mock provider are shown (marked as demo in the UI).
 */
const hasLiveSource = Boolean(process.env.METALS_DEV_API_KEY);

/** Last successful live snapshot, served if the API is temporarily unavailable. */
let lastGood: MarketSnapshot | null = null;

export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  if (!hasLiveSource) return mockProvider.getSnapshot();

  try {
    lastGood = await metalsDevProvider.getSnapshot();
    return lastGood;
  } catch (error) {
    console.error("[market] live prices unavailable:", error);
    if (lastGood) return lastGood;
    // Never present demo figures as real prices: the UI labels isMock snapshots as demo values.
    return mockProvider.getSnapshot();
  }
}
