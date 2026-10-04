"use client";

import { AnimatePresence, m, type PanInfo } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { REVIEW_SUMMARY, REVIEWS } from "@/data/reviews";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("tracking-[3px] text-[#C99A1E]", className)} aria-hidden="true">
      ★★★★★
    </span>
  );
}

/** Reviews: featured quote carousel (no autoplay, swipe on touch) + rating box + short quotes. */
export function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = REVIEWS.length;
  const review = REVIEWS[index];
  const others = REVIEWS.filter((_, i) => i !== index).slice(0, 2);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + total) % total);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
  };

  return (
    <section id="bewertungen" aria-labelledby="bewertungen-title" className="section-y bg-cream">
      <div className="container-site">
        <Reveal stagger={0.06} className="flex flex-col gap-3.5 md:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
          <div data-reveal className="flex flex-col gap-3.5 md:gap-4">
            <Eyebrow number="07" label="Kundenstimmen" />
            <SectionTitle id="bewertungen-title">
              Stimmen unserer <Accent>Kunden.</Accent>
            </SectionTitle>
          </div>
          <div data-reveal className="hidden items-center justify-center gap-2.5 md:flex lg:justify-start">
            <CarouselControls index={index} total={total} onPrev={() => go(-1)} onNext={() => go(1)} />
          </div>
        </Reveal>

        <div
          className="mt-6 grid grid-cols-1 gap-7 md:mt-10 lg:mt-11 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20"
          role="region"
          aria-roledescription="Karussell"
          aria-label="Kundenbewertungen"
        >
          <Reveal y={20} className="order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <m.figure
                  key={review.id}
                  custom={direction}
                  initial={{ opacity: 0, x: 24 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 * direction }}
                  transition={{ duration: 0.45, ease: EASE.inOut }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={onDragEnd}
                  className="m-0 flex cursor-grab touch-pan-y flex-col gap-4 border-l border-gold pl-5 active:cursor-grabbing md:gap-5 md:pl-[30px] lg:pl-9"
                  aria-roledescription="Bewertung"
                  aria-label={`${index + 1} von ${total}`}
                >
                  <Stars className="text-[14px] tracking-[4px] md:text-[15px]" />
                  <blockquote className="m-0 font-display text-[26px] leading-[1.3] italic md:text-[34px] lg:text-[36px] lg:leading-[1.28] lg:tracking-[-0.01em]">
                    „{review.quote}“
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-3 md:gap-3.5">
                    <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E8D6A8] bg-white text-[12px] font-semibold text-gold-ink md:text-[13px]">
                      {review.initials}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[14.5px] font-semibold md:text-[15px]">{review.name}</span>
                      <span className="text-[12.5px] text-soft md:text-[13px]">{review.meta}</span>
                    </span>
                    <span className="rounded-full bg-up-bg px-2.5 py-1 text-[11px] font-semibold text-up md:text-[11.5px]">
                      {review.isPlaceholder ? "Platzhalter – echte Bewertung einfügen" : "Verifizierte Bewertung"}
                    </span>
                  </figcaption>
                </m.figure>
              </AnimatePresence>
            </div>
            <div className="mt-5 flex items-center justify-between md:hidden">
              <CarouselControls index={index} total={total} onPrev={() => go(-1)} onNext={() => go(1)} />
            </div>
            <p className="sr-only" aria-live="polite">
              Bewertung {index + 1} von {total}
            </p>
          </Reveal>

          <Reveal stagger={0.1} y={20} className="order-1 flex flex-col gap-[22px] lg:order-2">
            <div data-reveal className="flex items-center gap-4 rounded-[20px] border border-line bg-white p-[18px] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-card md:gap-5 md:p-[22px]">
              <span className="font-display text-[44px] leading-none md:text-[54px]">{REVIEW_SUMMARY.rating}</span>
              <span className="flex flex-col gap-1">
                <Stars className="text-[14px] md:text-[15px]" />
                <span className="text-[12.5px] text-muted md:text-[13px]">
                  {REVIEW_SUMMARY.count} Bewertungen auf {REVIEW_SUMMARY.platform}
                </span>
                <a href={REVIEW_SUMMARY.url} className="text-[12.5px] font-semibold text-gold-ink md:text-[13px]">
                  Alle Bewertungen ansehen →
                </a>
              </span>
            </div>
            <ul className="m-0 hidden list-none flex-col p-0 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:gap-0">
              {others.map((r, i) => (
                <li
                  key={r.id}
                  data-reveal
                  className={cn(
                    "flex flex-col gap-2 border-t border-[#EADFC8] pt-[18px] transition-transform duration-200 hover:-translate-y-0.5",
                    i > 0 && "lg:mt-[18px]",
                  )}
                >
                  <span className="text-[16px] leading-[1.55] md:text-[16.5px]">„{r.quote}“</span>
                  <span className="text-[13px] text-soft">{r.name} · {r.meta}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CarouselControls({ index, total, onPrev, onNext }: { index: number; total: number; onPrev: () => void; onNext: () => void }) {
  return (
    <>
      <span className="pr-1.5 font-mono text-[12px] whitespace-nowrap text-subtle tabular-nums" aria-hidden="true">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.span key={index} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: 0.2 }} className="inline-block">
            {String(index + 1).padStart(2, "0")}
          </m.span>
        </AnimatePresence>{" "}
        / {String(total).padStart(2, "0")}
      </span>
      <span className="flex gap-2.5">
        <m.button
          type="button"
          onClick={onPrev}
          aria-label="Vorherige Bewertung"
          whileTap={{ scale: 0.96 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line-2 bg-white transition-colors hover:border-gold"
        >
          <Icon name="arrow-left" size={16} strokeWidth={1.8} />
        </m.button>
        <m.button
          type="button"
          onClick={onNext}
          aria-label="Nächste Bewertung"
          whileTap={{ scale: 0.96 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold transition-colors hover:bg-gold-hover"
        >
          <Icon name="arrow-right" size={16} strokeWidth={1.8} />
        </m.button>
      </span>
    </>
  );
}
