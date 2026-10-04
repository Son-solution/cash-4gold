"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCalculator } from "@/components/providers/CalculatorProvider";
import { useMarket } from "@/components/providers/MarketProvider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SECTION_INTRO_ALIGN, SectionTitle } from "@/components/ui/SectionHeading";
import { SelectIndicator } from "@/components/ui/SelectIndicator";
import { METALS } from "@/data/metals";
import { useRepeatPress } from "@/hooks/useRepeatPress";
import { calculateEstimate } from "@/lib/calculator";
import { getMetal } from "@/lib/metals";
import { EASE, PRESS_SMALL, STAGGER, TRANSITION } from "@/lib/motion";
import { cn, formatEUR } from "@/lib/utils";
import { CalculatorResultPanel } from "./calculator/CalculatorResult";

const QUICK_WEIGHTS = [5, 10, 25, 50, 100];
const SLIDER_MAX = 200;

function StepLabel({ n, children, htmlFor, hint }: { n: number; children: React.ReactNode; htmlFor?: string; hint?: string }) {
  const Tag = htmlFor ? "label" : "span";
  return (
    <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
      <Tag {...(htmlFor ? { htmlFor } : {})} className="flex items-center gap-2.5 text-[15px] font-semibold md:text-[14px] lg:text-[14px]">
        <span aria-hidden="true" className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-ink font-mono text-[11px] text-white md:h-6 md:w-6">
          {n}
        </span>
        {children}
      </Tag>
      {hint && <span className="text-[12.5px] text-subtle md:text-[12px]">{hint}</span>}
    </span>
  );
}

/** Metal value calculator (fully interactive; result counts smoothly). */
export function MetalCalculator() {
  const { snapshot } = useMarket();
  const calc = useCalculator();
  const metal = getMetal(calc.metal);
  const result = useMemo(
    () => calculateEstimate({ metal: calc.metal, purity: calc.purity, weight: calc.weight, pieces: calc.pieces }, snapshot),
    [calc.metal, calc.purity, calc.weight, calc.pieces, snapshot],
  );

  const minus = useRepeatPress(() => calc.setWeight(Math.max(0, Math.floor(calc.weight - 1))));
  const plus = useRepeatPress(() => calc.setWeight(Math.floor(calc.weight + 1)));
  const piecesMinus = useRepeatPress(() => calc.setPieces(calc.pieces - 1));
  const piecesPlus = useRepeatPress(() => calc.setPieces(calc.pieces + 1));

  // Mobile sticky summary: visible while the calculator is on screen but the result card is not.
  const sectionRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [inSection, setInSection] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    const res = resultRef.current;
    if (!section || !res) return;
    const so = new IntersectionObserver(([e]) => setInSection(e.isIntersecting), { threshold: 0.05 });
    const ro = new IntersectionObserver(([e]) => setResultVisible(e.isIntersecting), { threshold: 0.25 });
    so.observe(section);
    ro.observe(res);
    return () => {
      so.disconnect();
      ro.disconnect();
    };
  }, []);
  const showSticky = inSection && !resultVisible;

  return (
    <section ref={sectionRef} id="rechner" aria-labelledby="rechner-title" className="section-y bg-cream">
      <div className="container-site">
        <Reveal stagger={0.06} className="flex flex-col gap-3.5 md:gap-4">
          <div data-reveal>
            <Eyebrow number="03" label="Wertrechner" />
          </div>
          <div data-reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <SectionTitle id="rechner-title">
              Was ist Ihr Edelmetall <Accent>wert?</Accent>
            </SectionTitle>
            <p className={cn("m-0 max-w-[460px] text-[15px] leading-[1.6] text-muted md:text-[16px] lg:w-[380px] lg:shrink-0", SECTION_INTRO_ALIGN)}>
              Vier Angaben, sofortiges Ergebnis – auf Basis des aktuellen Kurses. Unverbindlich, ohne Registrierung.
            </p>
          </div>
        </Reveal>

        <Reveal
          y={16}
          className="mt-6 rounded-[28px] border border-line-2 bg-white px-4 pt-5 pb-4 shadow-[0_30px_60px_rgba(60,45,15,0.1)] md:mt-8 md:rounded-[30px] md:p-3 md:shadow-widget lg:mt-11 lg:grid lg:grid-cols-[minmax(0,1fr)_470px] lg:gap-2.5 lg:rounded-[32px] lg:p-2.5"
        >
          <form className="flex flex-col gap-[22px] md:px-5 md:pt-5 md:pb-[22px] lg:px-[30px] lg:pt-[26px]" onSubmit={(e) => e.preventDefault()} noValidate>
            {/* 1 · Metall */}
            <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
              <legend className="sr-only">Metall auswählen</legend>
              <StepLabel n={1} hint={`Ausgewählt: ${metal.name}`}>
                Metall wählen
              </StepLabel>
              <div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-2.5" role="group" aria-label="Metall">
                {METALS.map((mt) => {
                  const on = mt.id === calc.metal;
                  return (
                    <m.button
                      key={mt.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => calc.setMetal(mt.id)}
                      whileTap={PRESS_SMALL}
                      className={cn(
                        "group relative isolate flex h-[70px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] text-[13.5px] font-semibold transition-colors duration-200 md:h-[78px] md:text-[14px] lg:h-[76px]",
                        on ? "border-transparent" : "border-[#E8DFCF] bg-white hover:border-gold/50",
                      )}
                    >
                      {on && (
                        <SelectIndicator
                          layoutId="calc-metal"
                          className="-z-10 rounded-2xl border-[1.5px] border-gold bg-[#FFFDF6] shadow-[0_0_0_4px_rgba(212,163,42,0.14)]"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className="h-[18px] w-[18px] rounded-full transition-transform duration-200 group-hover:scale-[1.08] md:h-5 md:w-5"
                        style={{ background: mt.swatch, boxShadow: "inset 0 -3px 6px rgba(0,0,0,0.16), 0 0 0 3px #fff, 0 0 0 4px #EEE8DD" }}
                      />
                      {mt.name}
                      <AnimatePresence>
                        {on && (
                          <m.span
                            key="check"
                            aria-hidden="true"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={TRANSITION.fast}
                            className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold md:top-[7px] md:right-[7px]"
                          >
                            <Icon name="check" size={10} strokeWidth={2.6} />
                          </m.span>
                        )}
                      </AnimatePresence>
                    </m.button>
                  );
                })}
              </div>
            </fieldset>

            {/* 2 · Feinheit */}
            <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
              <legend className="sr-only">Feinheit oder Legierung auswählen</legend>
              <StepLabel n={2} hint="Stempel auf dem Stück, z. B. „585“">
                Feinheit / Legierung
              </StepLabel>
              <m.div layout className="grid grid-cols-4 gap-2 md:grid-cols-8" role="group" aria-label="Feinheit">
                <AnimatePresence mode="popLayout" initial={false}>
                  {metal.purities.map((p, i) => {
                    const on = p.id === calc.purity;
                    return (
                      <m.button
                        key={`${calc.metal}-${p.id}`}
                        type="button"
                        aria-pressed={on}
                        aria-label={`${p.id} – ${p.label}`}
                        onClick={() => calc.setPurity(p.id)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.24, delay: i * STAGGER.rows } }}
                        exit={{ opacity: 0, transition: { duration: 0.12 } }}
                        whileTap={PRESS_SMALL}
                        className={cn(
                          "relative isolate flex h-[58px] flex-col items-center justify-center gap-px rounded-[14px] border-[1.5px] transition-colors duration-150 md:h-[60px] lg:h-[58px]",
                          on ? "border-transparent" : "border-[#E8DFCF] bg-white hover:border-line-strong",
                        )}
                      >
                        {on && <SelectIndicator layoutId="calc-purity" className="-z-10 rounded-[14px] bg-gold shadow-[0_10px_22px_rgba(212,163,42,0.34)]" />}
                        <span className="text-[17px] font-semibold">{p.id}</span>
                        <span className={cn("text-[10.5px] transition-colors duration-150", on ? "text-[#3A2E0C]" : "text-subtle")}>{p.short}</span>
                      </m.button>
                    );
                  })}
                </AnimatePresence>
              </m.div>
            </fieldset>

            {/* 3 · Gewicht + 4 · Stückzahl */}
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-[minmax(0,1fr)_210px] md:gap-4 lg:grid-cols-[minmax(0,1fr)_190px]">
              <div className="flex flex-col gap-3">
                <StepLabel n={3} htmlFor="calc-weight">
                  Gewicht in Gramm
                </StepLabel>
                <div
                  className={cn(
                    "flex h-[68px] items-center gap-2 rounded-2xl border-[1.5px] bg-white pr-2 pl-[18px] transition-shadow duration-200 focus-within:shadow-[0_0_0_7px_rgba(212,163,42,0.14)] md:h-[70px] md:pr-2.5 md:pl-5",
                    calc.weightInvalid ? "border-down shadow-[0_0_0_5px_rgba(180,73,58,0.1)]" : "border-gold shadow-[0_0_0_5px_rgba(212,163,42,0.12)]",
                  )}
                >
                  <input
                    id="calc-weight"
                    type="text"
                    size={6}
                    inputMode="decimal"
                    autoComplete="off"
                    value={calc.weightRaw}
                    onChange={(e) => calc.setWeightRaw(e.target.value)}
                    aria-invalid={calc.weightInvalid}
                    aria-describedby={calc.weightInvalid ? "calc-weight-error" : undefined}
                    className="min-w-0 flex-1 border-0 bg-transparent font-display text-[34px] text-ink outline-none md:text-[36px]"
                  />
                  <span className="pr-1 text-[14px] font-semibold text-gold-ink">g</span>
                  <m.button type="button" aria-label="Gewicht um 1 g verringern" whileTap={{ scale: 0.94 }} {...minus} className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8DFCF] bg-cream text-[22px] transition-colors hover:bg-champagne md:h-11 md:w-11">
                    −
                  </m.button>
                  <m.button type="button" aria-label="Gewicht um 1 g erhöhen" whileTap={{ scale: 0.94 }} {...plus} className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8DFCF] bg-cream text-[22px] transition-colors hover:bg-champagne md:h-11 md:w-11">
                    +
                  </m.button>
                </div>
                <AnimatePresence initial={false}>
                  {calc.weightInvalid && (
                    <m.p
                      id="calc-weight-error"
                      key="err"
                      role="alert"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={TRANSITION.fast}
                      className="m-0 overflow-hidden text-[12.5px] text-down"
                    >
                      Bitte ein gültiges Gewicht in Gramm eingeben, z. B. 12,5.
                    </m.p>
                  )}
                </AnimatePresence>
                <div className="grid grid-cols-5 gap-1.5 md:gap-2">
                  {QUICK_WEIGHTS.map((g) => {
                    const on = calc.weight === g;
                    return (
                      <m.button
                        key={g}
                        type="button"
                        onClick={() => calc.setWeight(g)}
                        whileTap={PRESS_SMALL}
                        aria-pressed={on}
                        className={cn(
                          "h-11 rounded-xl border text-[13px] font-semibold transition-colors duration-200",
                          on ? "border-gold bg-gold-tint" : "border-[#E8DFCF] bg-white hover:border-gold",
                        )}
                      >
                        {g} g
                      </m.button>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="calc-weight-range" className="sr-only">
                    Gewicht per Schieberegler
                  </label>
                  <input
                    id="calc-weight-range"
                    type="range"
                    min={0}
                    max={SLIDER_MAX}
                    step={1}
                    value={Math.min(calc.weight, SLIDER_MAX)}
                    onChange={(e) => calc.setWeight(Number(e.target.value))}
                    className="c4g-range w-full"
                    style={{ ["--fill" as string]: `${(Math.min(calc.weight, SLIDER_MAX) / SLIDER_MAX) * 100}%` }}
                  />
                  <span className="flex justify-between text-[11px] text-subtle" aria-hidden="true">
                    <span>0 g</span>
                    <span>{SLIDER_MAX} g +</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <StepLabel n={4} htmlFor="calc-pieces">
                  Stückzahl <span className="font-normal text-subtle">(optional)</span>
                </StepLabel>
                <div className="flex h-[60px] items-center justify-between rounded-2xl border border-[#E8DFCF] bg-white px-2 md:h-[70px] md:px-2.5">
                  <m.button type="button" aria-label="Stückzahl verringern" whileTap={{ scale: 0.94 }} {...piecesMinus} disabled={calc.pieces <= 1} className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8DFCF] bg-cream text-[22px] transition-colors hover:bg-champagne disabled:opacity-40 md:h-11 md:w-11">
                    −
                  </m.button>
                  <input
                    id="calc-pieces"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={999}
                    value={calc.pieces}
                    onChange={(e) => calc.setPieces(Number(e.target.value) || 1)}
                    className="w-16 [appearance:textfield] border-0 bg-transparent text-center font-display text-[30px] outline-none md:text-[32px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <m.button type="button" aria-label="Stückzahl erhöhen" whileTap={{ scale: 0.94 }} {...piecesPlus} className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8DFCF] bg-cream text-[22px] transition-colors hover:bg-champagne md:h-11 md:w-11">
                    +
                  </m.button>
                </div>
                <span className="text-[12px] text-subtle">bei mehreren gleichen Stücken</span>
              </div>
            </div>

            {/* price per gram bar */}
            <div className="flex items-center justify-between gap-3 rounded-[14px] border border-[#F1EBDF] bg-cream px-4 py-3.5 lg:mt-auto">
              <span className="flex items-center gap-2.5 text-[13px] text-muted md:text-[13.5px]">
                <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-up-dot" />
                <span>
                  Ihr Ankaufspreis für{" "}
                  <AnimatePresence mode="popLayout" initial={false}>
                    <m.span
                      key={`${calc.metal}-${result.purityId}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: EASE.inOut }}
                      className="inline-block font-semibold text-ink"
                    >
                      {result.metalName} {result.purityId}
                    </m.span>
                  </AnimatePresence>
                </span>
              </span>
              <span className="flex shrink-0 items-baseline gap-1">
                <span className="text-[19px] font-semibold tabular-nums md:text-[21px] lg:text-[22px]">
                  <AnimatedNumber value={result.pricePerGram} format="decimal" />
                  {" €"}
                </span>
                <span className="text-[12px] font-semibold text-gold-ink md:text-[13px]">/ g</span>
              </span>
            </div>
          </form>

          <div ref={resultRef} className="mt-4 md:mt-2.5 lg:mt-0">
            <CalculatorResultPanel result={result} pieces={calc.pieces} onRequestOffer={calc.requestOffer} className="lg:h-full" />
          </div>
        </Reveal>
      </div>

      {/* mobile sticky summary */}
      <AnimatePresence>
        {showSticky && (
          <m.div
            key="sticky"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.24, ease: EASE.out }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/97 px-4 pt-3 pb-[max(14px,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(60,45,15,0.08)] backdrop-blur-[16px] md:hidden"
          >
            <button type="button" onClick={calc.requestOffer} className="flex h-[52px] w-full items-center justify-between rounded-full bg-gold px-5 font-semibold">
              <span className="tabular-nums">≈ {formatEUR(result.total)}</span>
              <span className="flex items-center gap-1.5 text-[14.5px]">
                Angebot anfragen <Icon name="arrow-right" size={17} />
              </span>
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
