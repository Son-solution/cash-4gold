"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { parseWeight } from "@/lib/calculator";
import { getMetal, getPurity } from "@/lib/metals";
import { formatWeightInput } from "@/lib/utils";
import type { OfferDraft } from "@/types/common";
import type { MetalId } from "@/types/metal";

interface CalculatorState {
  metal: MetalId;
  purity: string;
  /** Raw text of the weight field (German decimal comma allowed). */
  weightRaw: string;
  pieces: number;
}

interface CalculatorContextValue extends CalculatorState {
  weight: number;
  weightInvalid: boolean;
  setMetal: (metal: MetalId) => void;
  setPurity: (purity: string) => void;
  setWeightRaw: (raw: string) => void;
  setWeight: (grams: number) => void;
  setPieces: (pieces: number) => void;
  /** Preselects metal + purity (from price table or services) and scrolls to the calculator. */
  selectAndScroll: (metal: MetalId, purity?: string) => void;
  /** Data handed to the contact form, with a token so the form can flash prefilled fields. */
  offerDraft: (OfferDraft & { token: number }) | null;
  requestOffer: () => void;
}

const CalculatorContext = createContext<CalculatorContextValue | null>(null);

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const headerOffset = window.innerWidth >= 1024 ? 80 : 72;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CalculatorState>({ metal: "gold", purity: "585", weightRaw: "25", pieces: 1 });
  const [offerDraft, setOfferDraft] = useState<(OfferDraft & { token: number }) | null>(null);

  const parsed = parseWeight(state.weightRaw);
  const weightInvalid = Number.isNaN(parsed) || parsed < 0;
  const weight = weightInvalid ? 0 : parsed;

  const setMetal = useCallback((metal: MetalId) => {
    setState((s) => {
      const def = getMetal(metal);
      const keep = def.purities.some((p) => p.id === s.purity);
      return { ...s, metal, purity: keep ? s.purity : def.purities[0].id };
    });
  }, []);

  const setPurity = useCallback((purity: string) => setState((s) => ({ ...s, purity })), []);
  const setWeightRaw = useCallback((weightRaw: string) => setState((s) => ({ ...s, weightRaw })), []);
  const setWeight = useCallback(
    (grams: number) => setState((s) => ({ ...s, weightRaw: formatWeightInput(Math.max(0, Math.round(grams * 100) / 100)) })),
    [],
  );
  const setPieces = useCallback((pieces: number) => setState((s) => ({ ...s, pieces: Math.min(Math.max(pieces, 1), 999) })), []);

  const selectAndScroll = useCallback((metal: MetalId, purity?: string) => {
    const def = getMetal(metal);
    setState((s) => ({ ...s, metal, purity: getPurity(def, purity).id }));
    scrollToId("rechner");
  }, []);

  const requestOffer = useCallback(() => {
    setOfferDraft({ metal: state.metal, purity: state.purity, weight, pieces: state.pieces, token: Date.now() });
    scrollToId("kontakt");
  }, [state.metal, state.purity, state.pieces, weight]);

  const value = useMemo<CalculatorContextValue>(
    () => ({
      ...state,
      weight,
      weightInvalid,
      setMetal,
      setPurity,
      setWeightRaw,
      setWeight,
      setPieces,
      selectAndScroll,
      offerDraft,
      requestOffer,
    }),
    [state, weight, weightInvalid, setMetal, setPurity, setWeightRaw, setWeight, setPieces, selectAndScroll, offerDraft, requestOffer],
  );

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}

export function useCalculator(): CalculatorContextValue {
  const ctx = useContext(CalculatorContext);
  if (!ctx) throw new Error("useCalculator must be used inside <CalculatorProvider>");
  return ctx;
}
