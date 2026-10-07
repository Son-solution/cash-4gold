import "server-only";
import type { MarketSnapshot } from "@/types/metal";
import { goldSohnProvider, hasRedisConfig } from "./gold-sohn-provider";
import { metalsDevProvider } from "./metals-dev-provider";
import { mockProvider } from "./mock-provider";
import type { MarketDataProvider } from "./types";

/**
 * Price source, in order of preference (see .env.example):
 *  1. gold-sohn.de purchase prices from Upstash Redis (KV_REST_API_* / UPSTASH_REDIS_REST_*)
 *  2. metals.dev market prices (METALS_DEV_API_KEY)
 *  3. demo prices of the mock provider (marked as demo in the UI)
 */
const liveProvider: MarketDataProvider | null = hasRedisConfig
  ? goldSohnProvider
  : process.env.METALS_DEV_API_KEY
    ? metalsDevProvider
    : null;

/** Last successful live snapshot, served if the source is temporarily unavailable. */
let lastGood: MarketSnapshot | null = null;

export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  if (!liveProvider) return mockProvider.getSnapshot();

  try {
    lastGood = await liveProvider.getSnapshot();
    return lastGood;
  } catch (error) {
    console.error("[market] live prices unavailable:", error);
    if (lastGood) return lastGood;
    // Never present demo figures as real prices: the UI labels isMock snapshots as demo values.
    return mockProvider.getSnapshot();
  }
}
