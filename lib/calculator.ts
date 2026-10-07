import { getFinePurchasePrice, getMetal, getPurchasePricePerGram, getPurity } from "@/lib/metals";
import type { MarketSnapshot, MetalId } from "@/types/metal";

export interface CalculatorInput {
  metal: MetalId;
  purity: string;
  /** Weight of one piece in grams. */
  weight: number;
  /** Number of identical pieces (≥ 1). */
  pieces: number;
}

export interface CalculatorResult {
  metalName: string;
  purityId: string;
  purityLabel: string;
  fineness: number;
  /** Purchase price per gram of the entered material (EUR). */
  pricePerGram: number;
  /** Purchase price per gram of pure metal (EUR). */
  finePricePerGram: number;
  /** weight × pieces (g). */
  totalWeight: number;
  /** Pure metal content (g). */
  fineWeight: number;
  /** Estimated purchase value (EUR). */
  total: number;
  isEmpty: boolean;
}

export const MAX_WEIGHT_GRAMS = 100_000;
export const MAX_PIECES = 999;

/** Parses German or English decimal input ("12,5" / "12.5"). Returns NaN for invalid input. */
export function parseWeight(raw: string): number {
  const normalized = raw.trim().replace(/\s/g, "").replace(",", ".");
  if (normalized === "") return 0;
  if (!/^\d*\.?\d*$/.test(normalized)) return Number.NaN;
  const value = Number.parseFloat(normalized);
  return Number.isFinite(value) ? value : Number.NaN;
}

export function sanitizeInput(input: CalculatorInput): CalculatorInput {
  const weight = Number.isFinite(input.weight) ? Math.min(Math.max(input.weight, 0), MAX_WEIGHT_GRAMS) : 0;
  const pieces = Math.min(Math.max(Math.round(input.pieces || 1), 1), MAX_PIECES);
  return { ...input, weight, pieces };
}

/**
 * Estimated purchase value:
 *   purchase price per gram of this purity × weight × pieces
 * (the published price if the source lists this purity, else market price × payout factor × purity factor)
 */
export function calculateEstimate(input: CalculatorInput, snapshot: MarketSnapshot): CalculatorResult {
  const safe = sanitizeInput(input);
  const metal = getMetal(safe.metal);
  const purity = getPurity(metal, safe.purity);
  const finePricePerGram = getFinePurchasePrice(snapshot, metal);
  const purityFactor = purity.fineness / 1000;
  const pricePerGram = getPurchasePricePerGram(snapshot, metal, purity);
  const totalWeight = safe.weight * safe.pieces;
  const fineWeight = totalWeight * purityFactor;
  const total = roundCents(pricePerGram * totalWeight);

  return {
    metalName: metal.name,
    purityId: purity.id,
    purityLabel: purity.label,
    fineness: purity.fineness,
    pricePerGram,
    finePricePerGram,
    totalWeight,
    fineWeight,
    total,
    isEmpty: totalWeight <= 0,
  };
}

function roundCents(value: number): number {
  return Math.round(value * 100) / 100;
}
