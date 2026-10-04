"use client";

import { useMarket } from "@/components/providers/MarketProvider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LiveDot } from "@/components/ui/LiveDot";
import { METALS, TICKER_KEYS } from "@/data/metals";
import { getPurchasePricePerGram } from "@/lib/metals";
import { cn, formatChange, formatTime } from "@/lib/utils";
import type { SpotKey } from "@/types/metal";

const METAL_BY_KEY: Record<SpotKey, (typeof METALS)[number]> = {
  XAU: METALS.find((m) => m.id === "gold")!,
  XAG: METALS.find((m) => m.id === "silber")!,
  XPT: METALS.find((m) => m.id === "platin")!,
  XPD: METALS.find((m) => m.id === "palladium")!,
};

/** Live price ribbon at the bottom of the hero (purchase price per gram, 999). */
export function TickerRibbon() {
  const { snapshot, status } = useMarket();

  return (
    <div data-hero-fade="ribbon" className="relative border-y border-line bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-4 md:grid md:grid-cols-[90px_repeat(4,minmax(0,1fr))] md:items-center md:gap-3 md:px-10 lg:flex lg:h-[60px] lg:flex-row lg:gap-6 lg:py-0 lg:pr-16 lg:pl-[max(40px,calc((100vw-1200px)/2))]">
        <div className="flex items-center justify-between md:contents">
          <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] md:text-[11px]">
            <LiveDot status={status} size={7} />
            LIVE<span className="md:hidden"> · {formatTime(snapshot.updatedAt).toUpperCase()}</span>
          </span>
          <a href="#preise" className="text-[13px] font-semibold text-gold-ink md:hidden">
            Alle Preise →
          </a>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0 md:contents lg:flex lg:gap-6">
          {TICKER_KEYS.map(({ key, label }) => {
            const metal = METAL_BY_KEY[key];
            const price = getPurchasePricePerGram(snapshot, metal, metal.purities[0]);
            const change = snapshot.quotes[key].changePercent;
            return (
              <li
                key={key}
                className="flex flex-col gap-0.5 whitespace-nowrap md:border-l md:border-line md:pl-3 lg:flex-row lg:items-baseline lg:gap-2 lg:pl-6"
              >
                <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase md:text-[10.5px]">{label}</span>
                <span className="flex items-baseline gap-1.5 md:flex-col md:gap-0.5 lg:flex-row lg:gap-2">
                  <span className="text-[15.5px] font-semibold tabular-nums md:text-[15px]">
                    <AnimatedNumber value={price} format="decimal" /> €/g
                  </span>
                  <span className={cn("text-[11.5px] font-semibold md:text-[12px]", change >= 0 ? "text-up" : "text-down")}>{formatChange(change)}</span>
                </span>
              </li>
            );
          })}
        </ul>
        <span className="hidden text-[12.5px] whitespace-nowrap text-subtle xl:ml-auto xl:block">Aktualisiert {formatTime(snapshot.updatedAt)}</span>
        <a href="#preise" className="hidden text-[13px] font-semibold whitespace-nowrap text-gold-ink lg:ml-auto lg:block xl:ml-0">
          Alle Preise →
        </a>
      </div>
    </div>
  );
}
