"use client";

import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useCalculator } from "@/components/providers/CalculatorProvider";
import { useMarket } from "@/components/providers/MarketProvider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SECTION_INTRO_ALIGN, SectionTitle } from "@/components/ui/SectionHeading";
import { SelectIndicator } from "@/components/ui/SelectIndicator";
import { DEFAULT_SERVICE_ID, SERVICES } from "@/data/services";
import { getMetal, getPurchasePricePerGram, getPurity } from "@/lib/metals";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types/common";

function Visual({ service }: { service: ServiceCategory }) {
  const v = service.visual;
  if (v.kind === "photo") {
    return (
      <m.div
        key={service.id}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE.inOut }}
      >
        <Image
          src={v.src}
          alt={v.alt}
          fill
          sizes="(min-width: 1200px) 540px, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/preview:scale-[1.03]"
          style={{ objectPosition: v.position }}
        />
      </m.div>
    );
  }
  return (
    <m.div
      key={service.id}
      className="absolute inset-x-0 top-0 flex h-[250px] items-center justify-center md:top-0 md:right-0 md:left-[400px] md:h-full lg:left-0 lg:h-[440px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE.out }}
    >
      {v.kind === "object" ? (
        <Image
          src={v.src}
          alt={v.alt}
          width={v.width}
          height={v.height}
          sizes="300px"
          className="relative max-h-[190px] w-auto max-w-[200px] rounded-[14px] shadow-[0_24px_50px_rgba(100,75,25,0.22)] md:max-h-[260px] md:max-w-[260px] lg:max-h-[300px] lg:max-w-[300px] lg:rounded-[18px]"
        />
      ) : (
        <div className="relative flex h-[170px] w-[170px] flex-col justify-between rounded-[22px] border border-[#E2D2AC] bg-white p-3.5 shadow-[0_24px_50px_rgba(100,75,25,0.14)] md:h-[210px] md:w-[210px] md:p-[18px] lg:h-[250px] lg:w-[250px] lg:rounded-[28px] lg:p-[22px]">
          <span className="flex justify-between font-mono text-[11px] text-subtle md:text-[13px]">
            <span>{v.atomicNumber}</span>
            <span>{v.atomicMass}</span>
          </span>
          <span className="text-center font-display text-[80px] leading-[0.9] text-gold-deep md:text-[100px] lg:text-[120px]">{v.symbol}</span>
          <span className="text-center text-[12px] text-muted md:text-[14px]">{v.elementName}</span>
        </div>
      )}
    </m.div>
  );
}

/** "Was wir ankaufen": category index + large preview panel. */
export function Services() {
  const [activeId, setActiveId] = useState(DEFAULT_SERVICE_ID);
  const { snapshot } = useMarket();
  const { selectAndScroll } = useCalculator();
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];
  const ref = active.priceRef;
  const refMetal = getMetal(ref.metal);
  const refPrice = getPurchasePricePerGram(snapshot, refMetal, getPurity(refMetal, ref.purity));
  const activeIndex = SERVICES.indexOf(active);

  return (
    <section id="ankauf" aria-labelledby="ankauf-title" className="section-y bg-white">
      <div className="container-site">
        <Reveal stagger={0.06} className="flex flex-col gap-3.5 md:gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="flex flex-col gap-3.5 md:gap-4">
            <Eyebrow number="04" label="Was wir ankaufen · 8 Kategorien" />
            <SectionTitle id="ankauf-title">
              Vom einzelnen Ring bis <Accent>zur Sammlung.</Accent>
            </SectionTitle>
          </div>
          <p data-reveal className={cn("m-0 max-w-[460px] text-[15px] leading-[1.6] text-muted md:text-[16px] lg:max-w-[380px]", SECTION_INTRO_ALIGN)}>
            Beschädigt, unvollständig oder aus einem Nachlass – bewertet wird jedes Stück nach Gewicht und Feingehalt.
          </p>
        </Reveal>

        <div className="mt-6 md:mt-8 lg:mt-12 lg:grid lg:h-[640px] lg:grid-cols-[540px_minmax(0,1fr)] lg:gap-14">
          {/* preview */}
          <Reveal y={16} className="group/preview relative h-[420px] overflow-hidden rounded-3xl bg-champagne md:h-[440px] md:rounded-[26px] lg:h-full lg:rounded-[28px]">
            <div aria-hidden="true" className="pointer-events-none absolute top-[125px] left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2D2AC] md:top-1/2 md:left-[calc(400px+(100%-400px)/2)] md:h-[300px] md:w-[300px] lg:top-[220px] lg:left-1/2 lg:h-[360px] lg:w-[360px]" />
            <AnimatePresence mode="popLayout" initial={false}>
              <Visual service={active} />
            </AnimatePresence>

            <div
              aria-live="polite"
              className="absolute right-3 bottom-3 left-3 flex flex-col gap-2 rounded-[18px] bg-white/96 p-[18px] shadow-[0_16px_40px_rgba(60,45,15,0.1)] backdrop-blur-[14px] md:top-5 md:right-auto md:bottom-5 md:left-5 md:w-[360px] md:gap-2.5 md:rounded-[20px] md:p-6 lg:top-auto lg:right-5 lg:w-auto lg:px-[26px]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: EASE.inOut }}
                  className="flex flex-col gap-2 md:gap-2.5"
                >
                  <span className="font-mono text-[10px] tracking-[0.18em] text-gold-ink uppercase md:text-[10.5px]">
                    {String(activeIndex + 1).padStart(2, "0")} · {active.group}
                  </span>
                  <h3 className="m-0 font-display text-[28px] leading-[1.05] font-normal md:text-[36px]">{active.name}</h3>
                  <p className="m-0 text-[13.5px] leading-[1.5] text-muted md:text-[14.5px] md:leading-[1.55]">{active.description}</p>
                </m.div>
              </AnimatePresence>
              <div className="mt-1 flex items-center justify-between gap-3 border-t border-line pt-3 md:mt-auto md:pt-3.5 lg:mt-1.5">
                <span className="flex flex-col">
                  <span className="text-[11px] text-subtle">{ref.label}</span>
                  <span className="text-[16px] font-semibold tabular-nums md:text-[18px]">
                    <AnimatedNumber value={refPrice} format="decimal" /> €/g
                  </span>
                </span>
                <Button onClick={() => selectAndScroll(ref.metal, ref.purity)} size="sm" arrow className="!px-4 md:!px-5">
                  Wert berechnen
                </Button>
              </div>
            </div>
          </Reveal>

          {/* index */}
          <Reveal stagger={0.05} y={12} className="mt-4 md:mt-5 lg:mt-0">
            <ul className="m-0 grid list-none grid-cols-1 border-t border-line p-0 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
              {SERVICES.map((s, i) => {
                const on = s.id === activeId;
                return (
                  <li key={s.id} data-reveal>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => setActiveId(s.id)}
                      className="group relative isolate grid h-[72px] w-full grid-cols-[30px_minmax(0,1fr)_46px_32px] items-center gap-2.5 border-b border-line px-3 text-left transition-colors duration-200 hover:bg-cream md:h-[76px] lg:h-[79px] lg:grid-cols-[44px_200px_minmax(0,1fr)_52px_40px] lg:gap-3 lg:px-[18px]"
                    >
                      {on && <SelectIndicator layoutId="svc-active" className="-z-10 rounded-2xl bg-champagne" />}
                      <span className={cn("font-mono text-[11px] lg:text-[12px]", on ? "text-gold-ink" : "text-faint")}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex flex-col gap-0.5 lg:contents">
                        <span className="font-display text-[21px] lg:text-[26px]">{s.name}</span>
                        <span className="text-[12px] text-soft lg:text-[14px] lg:text-muted">{s.short}</span>
                      </span>
                      <span className="relative h-[46px] w-[46px] overflow-hidden rounded-[10px] lg:h-[52px] lg:w-[52px] lg:rounded-xl">
                        {s.thumb ? (
                          <Image
                            src={s.thumb.src}
                            alt=""
                            fill
                            sizes="52px"
                            className="object-cover transition-transform duration-200 ease-out-soft group-hover:scale-[1.04]"
                            style={{ objectPosition: s.thumb.position ?? "50% 50%" }}
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center border border-[#E8D6A8] bg-gold-tint font-display text-[19px] text-gold-ink lg:text-[22px]">
                            {s.visual.kind === "element" ? s.visual.symbol : ""}
                          </span>
                        )}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200 lg:h-9 lg:w-9",
                          on ? "border-gold bg-gold" : "border-line-2 bg-white",
                        )}
                      >
                        <Icon name="arrow-up-right" size={13} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px" />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
