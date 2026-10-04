"use client";

import { useMemo } from "react";
import { useMarket } from "@/components/providers/MarketProvider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LiveDot } from "@/components/ui/LiveDot";
import { METALS } from "@/data/metals";
import { getPurchasePricePerGram } from "@/lib/metals";
import { buildLinePath, cn, formatChange, formatTime } from "@/lib/utils";

/** Floating live price card in the hero (Gold 999 purchase price). */
export function HeroPriceCard({ compact = false }: { compact?: boolean }) {
  const { snapshot, status } = useMarket();
  const gold = METALS[0];
  const price = getPurchasePricePerGram(snapshot, gold, gold.purities[0]);
  const change = snapshot.quotes.XAU.changePercent;
  const w = compact ? 148 : 222;
  const h = compact ? 28 : 40;
  const path = useMemo(() => buildLinePath(snapshot.history.XAU["1T"].values, w, h, 3), [snapshot, w, h]);

  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-[20px] border border-line bg-white/97 shadow-float backdrop-blur-[18px]",
        compact ? "p-3.5" : "p-5 pb-4 md:gap-2.5",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          {!compact && (
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-gold-border bg-gold-tint font-display text-[13px] text-gold-ink">
              Au
            </span>
          )}
          <span className="flex flex-col leading-tight">
            <span className="text-[12px] font-semibold md:text-[13.5px]">Gold 999</span>
            {!compact && <span className="text-[11px] text-subtle">Ankaufspreis</span>}
          </span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-up-bg px-2 py-1 text-[10px] font-semibold text-up">
          <LiveDot status={status} size={6} />
          LIVE
        </span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={cn("font-display leading-[1.05] tabular-nums", compact ? "text-[26px]" : "text-[34px] md:text-[40px]")}>
          <AnimatedNumber value={price} format="decimal" /> €
        </span>
        <span className="text-[12px] font-semibold text-gold-ink md:text-[14px]">/ g</span>
      </div>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true" className="max-w-full">
        {!compact && <path d={path.area} fill="rgba(212,163,42,0.14)" />}
        <path d={path.line} stroke="#C99A1E" strokeWidth={1.8} strokeLinejoin="round" />
      </svg>
      <div className={cn("flex items-center justify-between text-[11px] md:text-[12px]", !compact && "border-t border-[#F1EBDF] pt-2")}>
        <span className={cn("rounded-full px-2 py-0.5 font-semibold", change >= 0 ? "bg-up/10 text-up" : "bg-down/10 text-down")}>{formatChange(change)}</span>
        <span className="text-subtle">{compact ? formatTime(snapshot.updatedAt) : `Stand ${formatTime(snapshot.updatedAt)}`}</span>
      </div>
    </div>
  );
}
