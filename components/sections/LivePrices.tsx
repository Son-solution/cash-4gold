"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { useCalculator } from "@/components/providers/CalculatorProvider";
import { useMarket } from "@/components/providers/MarketProvider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { PriceChart } from "@/components/ui/PriceChart";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { SelectIndicator } from "@/components/ui/SelectIndicator";
import { METALS } from "@/data/metals";
import { getAbsoluteChange, getPurchasePricePerGram } from "@/lib/metals";
import { EASE, STAGGER } from "@/lib/motion";
import { buildLinePath, cn, formatChange, formatDecimal, formatSignedEUR } from "@/lib/utils";
import type { ChartPeriod, MetalId } from "@/types/metal";
import { PriceStatus } from "./prices/PriceStatus";

const PERIODS: ChartPeriod[] = ["1T", "1W", "1M", "1J", "5J"];

/** Live precious-metal prices: metal selector, headline price, chart and purity table. */
export function LivePrices() {
  const { snapshot, previous, status } = useMarket();
  const { selectAndScroll } = useCalculator();
  const [metalId, setMetalId] = useState<MetalId>("gold");
  const [period, setPeriod] = useState<ChartPeriod>("1M");
  const dimmed = status === "error";

  const metal = METALS.find((m) => m.id === metalId) ?? METALS[0];
  const quote = snapshot.quotes[metal.spotKey];
  const reference = metal.purities[0];
  const mainPrice = getPurchasePricePerGram(snapshot, metal, reference);
  const prevPrice = previous ? getPurchasePricePerGram(previous, metal, reference) : null;
  const direction = prevPrice === null || prevPrice === mainPrice ? 0 : mainPrice > prevPrice ? 1 : -1;
  const history = snapshot.history[metal.spotKey][period];
  const payout = metal.payoutFactor;
  const factor = payout * (reference.fineness / 1000);
  const chartValues = history.values.map((v) => v * factor);

  return (
    <section id="preise" aria-labelledby="preise-title" className="section-y border-t border-line bg-white">
      <div className="container-site">
        <Reveal stagger={0.06} className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div data-reveal className="flex flex-col gap-3.5 md:gap-4">
            <Eyebrow number="02" label="Live-Kurse" />
            <SectionTitle id="preise-title">
              Aktuelle <Accent>Ankaufspreise.</Accent>
            </SectionTitle>
          </div>
          <div data-reveal>
            <PriceStatus />
          </div>
        </Reveal>

        <Reveal
          y={16}
          className="mt-6 md:mt-9 lg:mt-11 lg:grid lg:h-[640px] lg:grid-cols-[300px_minmax(0,1fr)] lg:overflow-hidden lg:rounded-[28px] lg:border lg:border-line-2 lg:bg-white lg:shadow-[0_40px_90px_rgba(60,45,15,0.08)]"
        >
          {/* metal selector */}
          <div
            role="tablist"
            aria-label="Edelmetall wählen"
            className="flex flex-col gap-2 md:grid md:grid-cols-5 md:gap-2.5 lg:flex lg:flex-col lg:gap-2 lg:border-r lg:border-line lg:bg-cream lg:p-3.5"
          >
            <span className="hidden px-3 pt-2.5 pb-1.5 font-mono text-[10px] tracking-[0.2em] text-subtle lg:block">METALL WÄHLEN</span>
            {METALS.map((mt) => {
              const selected = mt.id === metalId;
              const price = getPurchasePricePerGram(snapshot, mt, mt.purities[0]);
              const change = snapshot.quotes[mt.spotKey].changePercent;
              const spark = buildLinePath(snapshot.history[mt.spotKey]["1T"].values, 64, 26, 3).line;
              return (
                <button
                  key={mt.id}
                  type="button"
                  role="tab"
                  id={`tab-${mt.id}`}
                  aria-selected={selected}
                  aria-controls="preise-panel"
                  onClick={() => setMetalId(mt.id)}
                  className={cn(
                    "group relative isolate h-[66px] rounded-2xl border text-left transition-colors duration-200 md:h-[110px] lg:h-[106px] lg:rounded-[18px]",
                    selected ? "border-transparent" : "border-line bg-cream hover:bg-white lg:border-transparent lg:bg-transparent lg:hover:border-line-2 lg:hover:bg-white",
                  )}
                >
                  {selected && (
                    <SelectIndicator
                      layoutId="metal-active"
                      className="-z-10 rounded-2xl border-[1.5px] border-gold bg-white shadow-[0_14px_30px_rgba(60,45,15,0.12)] lg:rounded-[18px]"
                    />
                  )}
                  <span className="grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5 px-4 md:flex md:flex-col md:items-start md:justify-between md:px-3.5 md:py-3.5 lg:px-4">
                    <span className="flex flex-col gap-1 md:w-full md:flex-row md:items-center md:justify-between">
                      <span className="flex items-center gap-2 text-[15px] font-semibold md:text-[13.5px] lg:text-[14.5px]">
                        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: mt.swatch }} />
                        {mt.name}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-subtle md:hidden lg:inline">
                        {mt.id === "zahngold" ? "HOCHG." : mt.purities[0].id}
                      </span>
                    </span>
                    <span className="flex flex-col items-end gap-1 md:w-full md:items-start lg:flex-row lg:items-end lg:justify-between">
                      <span className="flex flex-col items-end gap-1 md:items-start">
                        <span className="flex items-baseline gap-1">
                          <span className="text-[19px] font-semibold tracking-[-0.01em] tabular-nums lg:text-[22px]">{formatDecimal(price)} €</span>
                          <span className="text-[11px] font-semibold text-gold-ink md:text-[12px]">/g</span>
                        </span>
                        <span className={cn("text-[11.5px] font-semibold", change >= 0 ? "text-up" : "text-down")}>{formatChange(change)}</span>
                      </span>
                      <svg width="64" height="26" viewBox="0 0 64 26" fill="none" aria-hidden="true" className="hidden lg:block">
                        <path d={spark} stroke={change >= 0 ? "#C99A1E" : "#B4493A"} strokeWidth={1.5} strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div
            id="preise-panel"
            role="tabpanel"
            aria-labelledby={`tab-${metalId}`}
            className={cn(
              "mt-4 flex flex-col overflow-hidden rounded-3xl border border-line-2 bg-white shadow-soft transition-opacity duration-200 lg:mt-0 lg:rounded-none lg:border-0 lg:shadow-none",
              dimmed && "opacity-70",
            )}
          >
            <div className="grid grid-cols-1 gap-5 border-b border-line px-5 pt-5 pb-4 md:grid-cols-[290px_minmax(0,1fr)] md:px-7 md:pt-6 lg:grid-cols-[330px_minmax(0,1fr)] lg:px-[34px] lg:pt-7">
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[10px] tracking-[0.18em] text-subtle uppercase md:text-[10.5px]">
                  Ankaufspreis · {metal.referenceLabel}
                </span>
                <span className="relative inline-flex h-[52px] items-center md:h-[58px] lg:h-[66px]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <m.span
                      key={metalId}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1, transition: { duration: 0.2, ease: EASE.out } }}
                      exit={{ y: -8, opacity: 0, transition: { duration: 0.16 } }}
                      className="relative font-display text-[50px] leading-none tracking-[-0.02em] tabular-nums md:text-[56px] lg:text-[64px]"
                    >
                      <AnimatedNumber value={mainPrice} format="decimal" /> €
                    </m.span>
                  </AnimatePresence>
                  {direction !== 0 && (
                    <m.span
                      key={snapshot.updatedAt}
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-x-2 inset-y-0 rounded-lg"
                      style={{ background: direction > 0 ? "rgba(47,125,85,0.08)" : "rgba(180,73,58,0.08)" }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.9 }}
                    />
                  )}
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gold-border bg-gold-tint px-3 py-1 text-[12px] font-semibold text-gold-dark md:text-[13px]">pro Gramm</span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[12px] font-semibold md:text-[13px]",
                      quote.changePercent >= 0 ? "bg-up/10 text-up" : "bg-down/10 text-down",
                    )}
                  >
                    {formatChange(quote.changePercent)}
                  </span>
                  <span className="text-[12px] text-soft md:text-[13px]">{formatSignedEUR(getAbsoluteChange(mainPrice, quote.changePercent))} heute</span>
                </span>
                <span className="mt-auto pt-1 text-[12px] text-subtle md:text-[12.5px]">
                  Börsenkurs {formatDecimal(quote.pricePerGram)} €/g
                  {quote.dayHigh !== undefined && quote.dayLow !== undefined && (
                    <> · Tageshoch {formatDecimal(quote.dayHigh)} · Tagestief {formatDecimal(quote.dayLow)}</>
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div role="tablist" aria-label="Zeitraum" className="flex gap-0.5 self-start text-[12px] md:self-end">
                  {PERIODS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      role="tab"
                      aria-selected={p === period}
                      onClick={() => setPeriod(p)}
                      className={cn(
                        "relative isolate h-9 min-w-11 rounded-full px-3 transition-colors",
                        p === period ? "font-semibold text-ink" : "text-subtle hover:text-ink",
                      )}
                    >
                      {p === period && <SelectIndicator layoutId="period-active" className="-z-10 rounded-full bg-champagne" />}
                      {p}
                    </button>
                  ))}
                </div>
                <PriceChart
                  values={chartValues}
                  labels={history.labels}
                  seriesKey={`${metalId}-${period}`}
                  height={140}
                  ariaLabel={`Kursverlauf ${metal.name}, Zeitraum ${period}`}
                />
              </div>
            </div>

            <div className="hidden h-10 shrink-0 grid-cols-[80px_minmax(0,1fr)_140px_110px_118px] items-center border-b border-[#F1EBDF] bg-paper px-7 font-mono text-[10px] tracking-[0.16em] text-subtle md:grid lg:px-[34px]">
              <span>FEINHEIT</span>
              <span>BEZEICHNUNG</span>
              <span className="text-right">ANKAUF €/G</span>
              <span className="text-right">€ / 10 G</span>
              <span />
            </div>
            <div className="flex justify-between border-b border-[#F1EBDF] bg-paper px-5 py-3 font-mono text-[10px] tracking-[0.16em] text-subtle md:hidden">
              <span>FEINHEIT</span>
              <span>ANKAUF €/G</span>
            </div>

            <m.ul layout className="m-0 list-none p-0">
              <AnimatePresence mode="popLayout" initial={false}>
                {metal.purities.map((p, i) => {
                  const perGram = getPurchasePricePerGram(snapshot, metal, p);
                  return (
                    <m.li
                      key={`${metalId}-${p.id}`}
                      layout="position"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.24, delay: i * STAGGER.rows } }}
                      exit={{ opacity: 0, transition: { duration: 0.12 } }}
                    >
                      <button
                        type="button"
                        onClick={() => selectAndScroll(metalId, p.id)}
                        aria-label={`${metal.name} ${p.id} (${p.label}): ${formatDecimal(perGram)} Euro pro Gramm – im Wertrechner verwenden`}
                        className="group grid h-[60px] w-full grid-cols-[minmax(0,1fr)_auto_28px] items-center gap-2.5 border-b border-[#F5F0E8] pr-3.5 pl-5 text-left transition-colors hover:bg-paper md:h-[52px] md:grid-cols-[80px_minmax(0,1fr)_140px_110px_118px] md:gap-0 md:px-7 lg:h-9 lg:px-[34px]"
                      >
                        <span className="flex flex-col md:contents">
                          <span className="flex items-center gap-2 font-display text-[20px] md:text-[21px] lg:text-[20px]">
                            <span aria-hidden="true" className="hidden h-[5px] w-[5px] rounded-full bg-gold lg:block" />
                            {p.id}
                          </span>
                          <span className="text-[12px] text-soft md:text-[13.5px] md:text-muted">{p.label}</span>
                        </span>
                        <span className="text-right text-[17px] font-semibold tabular-nums md:text-[16.5px]">
                          <AnimatedNumber value={perGram} format="decimal" /> €<span className="text-[11px] text-gold-ink"> /g</span>
                        </span>
                        <span className="hidden text-right text-[13.5px] text-soft tabular-nums md:block">{formatDecimal(perGram * 10)} €</span>
                        <span className="flex justify-end">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line-2 text-[13px] text-gold-ink transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:hidden">
                            →
                          </span>
                          <span className="hidden h-9 items-center gap-1 rounded-full border border-line-2 bg-white px-3.5 text-[12px] font-semibold text-gold-ink transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:inline-flex lg:h-[30px]">
                            Berechnen <span className="transition-transform group-hover:translate-x-[3px]">→</span>
                          </span>
                        </span>
                      </button>
                    </m.li>
                  );
                })}
              </AnimatePresence>
            </m.ul>
            <div className="mt-auto flex flex-col gap-1 border-t border-[#F1EBDF] bg-paper px-5 py-3 text-[11.5px] text-soft md:flex-row md:justify-between md:px-7 md:text-[12px] lg:px-[34px]">
              <span>Ankaufspreise inkl. aller Gebühren · verbindlich ist das Angebot nach fachgerechter Prüfung</span>
              {snapshot.isMock && <span className="text-subtle">Demo-Werte · API-ready</span>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
