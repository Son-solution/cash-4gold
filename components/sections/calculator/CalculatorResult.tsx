"use client";

import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LiveDot } from "@/components/ui/LiveDot";
import { useMarket } from "@/components/providers/MarketProvider";
import type { CalculatorResult as Result } from "@/lib/calculator";
import { DURATION, EASE } from "@/lib/motion";
import { cn, formatEUR, formatTime } from "@/lib/utils";

interface Props {
  result: Result;
  pieces: number;
  onRequestOffer: () => void;
  /** Tablet lays the value and the breakdown side by side. */
  className?: string;
}

/** "Geschätzter Ankaufspreis" panel: counting total, breakdown and CTA. */
export function CalculatorResultPanel({ result, pieces, onRequestOffer, className }: Props) {
  const { snapshot, status } = useMarket();
  const prevTotal = useRef(result.total);
  const [rise, setRise] = useState(0);
  const [announced, setAnnounced] = useState(`Geschätzter Ankaufspreis: ${formatEUR(result.total)}`);

  // Screen readers get the final value once input settles (not every animation frame).
  useEffect(() => {
    const id = window.setTimeout(() => setAnnounced(`Geschätzter Ankaufspreis: ${formatEUR(result.total)}`), 700);
    return () => window.clearTimeout(id);
  }, [result.total]);

  // Gold glow when the value rises (no colour when it falls).
  useEffect(() => {
    if (result.total > prevTotal.current) setRise((r) => r + 1);
    prevTotal.current = result.total;
  }, [result.total]);

  return (
    <div className={cn("relative overflow-hidden rounded-[22px] bg-champagne-2 px-5 pt-6 pb-5 md:rounded-[24px] md:px-7 md:pt-7 md:pb-6 lg:flex lg:flex-col lg:px-8 lg:pt-[30px] lg:pb-7", className)}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-2xl border border-gold-ring md:inset-2.5" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full border border-gold-border" />

      <div className="relative md:grid md:grid-cols-[minmax(0,1fr)_300px] md:items-start md:gap-7 lg:block">
        <div className="flex flex-col">
          <span className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] text-gold-ink md:text-[10.5px] md:tracking-[0.22em]">IHRE BEWERTUNG</span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-up md:text-[11.5px]">
              <LiveDot status={status} size={6} />
              Kurs {formatTime(snapshot.updatedAt)}
            </span>
          </span>
          <span id="calc-result-label" className="mt-5 text-[14.5px] font-semibold md:mt-6 md:text-[15px]">
            Geschätzter Ankaufspreis
          </span>
          <div
            aria-hidden="true"
            className={cn(
              "relative mt-1 flex items-baseline gap-2 transition-opacity duration-200 md:gap-2.5",
              result.isEmpty && "opacity-40",
            )}
          >
            <span className="font-display text-[52px] leading-[1.02] tracking-[-0.03em] tabular-nums md:text-[60px] lg:text-[64px] xl:text-[68px]">
              <AnimatedNumber value={result.total} format="decimal" duration={DURATION.result} adaptive />
            </span>
            <span className="relative font-display text-[28px] text-gold-deep md:text-[32px] lg:text-[36px]">
              €
              <m.span
                key={rise}
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                initial={{ opacity: rise ? 1 : 0 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE.out }}
              />
            </span>
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {announced}
          </p>
          <span className="mt-2 text-[12px] text-soft md:text-[12.5px]">Unverbindliche Schätzung · finaler Preis nach Prüfung</span>
        </div>

        <dl className="relative m-0 mt-5 rounded-2xl border border-[#EFE3C8] bg-white px-4 py-1 md:mt-0 lg:mt-5 lg:px-[18px]">
          <div className="flex justify-between border-b border-[#F3EDE1] py-2.5 text-[13px] md:text-[13.5px]">
            <dt className="text-soft">Gesamtgewicht{pieces > 1 ? ` (${pieces} Stk.)` : ""}</dt>
            <dd className="m-0 font-semibold tabular-nums">
              <AnimatedNumber value={result.totalWeight} format="weight" />
            </dd>
          </div>
          <div className="flex justify-between border-b border-[#F3EDE1] py-2.5 text-[13px] md:text-[13.5px]">
            <dt className="text-soft">
              <b className="font-semibold text-gold-deep">×</b> Feingehalt {result.purityId}/1000
            </dt>
            <dd className="m-0 font-semibold tabular-nums">
              <AnimatedNumber value={result.fineWeight} format="weight" /> rein
            </dd>
          </div>
          <div className="flex justify-between py-2.5 text-[13px] md:text-[13.5px]">
            <dt className="text-soft">
              <b className="font-semibold text-gold-deep">×</b> Ankaufskurs je g rein
            </dt>
            <dd className="m-0 font-semibold tabular-nums">
              <AnimatedNumber value={result.finePricePerGram} format="eur" />
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative mt-5 lg:mt-auto lg:pt-6">
        <Button onClick={onRequestOffer} size="lg" arrow fullWidth className="!h-[60px] md:!h-[62px]">
          <span className="md:hidden">Angebot anfragen</span>
          <span className="hidden md:inline">Unverbindliches Angebot anfragen</span>
        </Button>
        <p className="mt-2.5 mb-0 text-center text-[11.5px] text-soft md:text-[12px]">Kostenloser, versicherter Versand · keine Verpflichtung</p>
      </div>
    </div>
  );
}
