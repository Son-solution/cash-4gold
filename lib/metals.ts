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

/**
 * Purchase price for 1 g of pure metal.
 * With published purchase prices: derived from the highest listed purity of this metal.
 * Otherwise: market price × payout factor.
 */
export function getFinePurchasePrice(snapshot: MarketSnapshot, metal: MetalDefinition): number {
  const table = snapshot.purchasePrices?.[metal.id];
  const reference = table && metal.purities.find((p) => table[p.id]);
  if (table && reference) return table[reference.id].price / (reference.fineness / 1000);
  return getQuote(snapshot, metal).pricePerGram * metal.payoutFactor;
}

/** Purchase price for 1 g of material with the given purity (published price if available). */
export function getPurchasePricePerGram(
  snapshot: MarketSnapshot,
  metal: MetalDefinition,
  purity: Purity,
): number {
  const published = snapshot.purchasePrices?.[metal.id]?.[purity.id];
  if (published) return published.price;
  return getFinePurchasePrice(snapshot, metal) * (purity.fineness / 1000);
}

/** Absolute daily change of a price, derived from the percent change. */
export function getAbsoluteChange(price: number, changePercent: number): number {
  return price - price / (1 + changePercent / 100);
}
