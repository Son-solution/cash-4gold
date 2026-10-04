import { METALS } from "@/data/metals";
import type { MarketSnapshot, MetalDefinition, MetalId, Purity, SpotQuote } from "@/types/metal";

export function getMetal(id: MetalId): MetalDefinition {
  const metal = METALS.find((m) => m.id === id);
  if (!metal) throw new Error(`Unknown metal: ${id}`);
  return metal;
}

/** Returns the requested purity, or the metal's first (reference) purity. */
export function getPurity(metal: MetalDefinition, purityId: string | undefined): Purity {
  return metal.purities.find((p) => p.id === purityId) ?? metal.purities[0];
}

export function getQuote(snapshot: MarketSnapshot, metal: MetalDefinition): SpotQuote {
  return snapshot.quotes[metal.spotKey];
}

/** Purchase price for 1 g of pure metal (market price × payout factor). */
export function getFinePurchasePrice(snapshot: MarketSnapshot, metal: MetalDefinition): number {
  return getQuote(snapshot, metal).pricePerGram * metal.payoutFactor;
}

/** Purchase price for 1 g of material with the given purity. */
export function getPurchasePricePerGram(
  snapshot: MarketSnapshot,
  metal: MetalDefinition,
  purity: Purity,
): number {
  return getFinePurchasePrice(snapshot, metal) * (purity.fineness / 1000);
}

/** Absolute daily change of a price, derived from the percent change. */
export function getAbsoluteChange(price: number, changePercent: number): number {
  return price - price / (1 + changePercent / 100);
}
