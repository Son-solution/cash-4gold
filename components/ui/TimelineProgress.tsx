"use client";

import { m } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { DURATION, EASE, MQ } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types/common";

/**
 * Process timeline. Desktop (≥ 1200 px): horizontal line; tablet/mobile:
 * vertical line. A gold progress line is scrubbed by GSAP ScrollTrigger;
 * each step activates (Framer Motion) once the line reaches it.
 */
export function TimelineProgress({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      const count = steps.length;

      const bind = (lineSelector: string, axis: "x" | "y", start: string, end: string) => {
        const line = root.querySelector<HTMLElement>(lineSelector);
        if (!line) return;
        gsap.set(line, axis === "x" ? { scaleX: 0 } : { scaleY: 0 });
        ScrollTrigger.create({
          trigger: root,
          start,
          end,
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set(line, axis === "x" ? { scaleX: p } : { scaleY: p });
            const reached = Math.min(count - 1, Math.floor(p * (count - 1) + 0.02));
            setActive((prev) => (reached > prev ? reached : prev));
          },
        });
      };

      mm.add(MQ.desktopMotion, () => {
        bind("[data-line-x]", "x", "top 75%", "bottom 45%");
      });
      mm.add(MQ.belowDesktopMotion, () => {
        bind("[data-line-y]", "y", "top 70%", "bottom 60%");
      });
      mm.add(MQ.reduce, () => {
        gsap.set(root.querySelectorAll("[data-line-x], [data-line-y]"), { scaleX: 1, scaleY: 1 });
        setActive(count - 1);
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [steps.length] },
  );

  return (
    <div ref={ref} className="relative">
      {/* horizontal track (desktop) */}
      <span aria-hidden="true" className="absolute top-[35px] right-9 left-9 hidden h-px bg-line-gold lg:block" />
      <span aria-hidden="true" data-line-x className="absolute top-[34px] right-9 left-9 hidden h-[3px] origin-left rounded-full bg-gold lg:block" />
      {/* vertical track (tablet / mobile) */}
      <span aria-hidden="true" className="absolute top-8 bottom-16 left-[27px] w-px bg-line-gold md:left-[31px] lg:hidden" />
      <span aria-hidden="true" data-line-y className="absolute top-8 bottom-16 left-[26px] w-[3px] origin-top rounded-full bg-gold md:left-[30px] lg:hidden" />

      <ol className="relative m-0 grid list-none grid-cols-1 gap-7 p-0 lg:grid-cols-5 lg:gap-7">
        {steps.map((step, i) => {
          const on = i <= active;
          return (
            <li key={step.id} className="grid grid-cols-[56px_minmax(0,1fr)] gap-[18px] md:grid-cols-[64px_minmax(0,1fr)] md:gap-[22px] lg:flex lg:flex-col lg:gap-3">
              <m.span
                className="relative flex h-14 w-14 items-center justify-center rounded-full border md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]"
                animate={{
                  backgroundColor: on ? "#D4A32A" : "#FFFFFF",
                  borderColor: "#D4A32A",
                  boxShadow: on
                    ? "0 0 0 7px #FBF8F2, 0 14px 30px rgba(212,163,42,0.35)"
                    : "0 0 0 7px #FBF8F2, 0 0 0 rgba(212,163,42,0)",
                }}
                transition={{ duration: DURATION.base, ease: EASE.out }}
              >
                <Icon name={step.icon} size={24} strokeWidth={1.5} className={cn("transition-colors duration-300", on ? "text-ink" : "text-gold-ink")} />
              </m.span>
              <m.div
                className="flex flex-col gap-1.5 pt-1 lg:pt-2.5"
                animate={{ opacity: on ? 1 : 0.6 }}
                transition={{ duration: DURATION.base, ease: EASE.out }}
              >
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-gold-ink">SCHRITT {String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 font-display text-[24px] font-normal md:text-[27px] lg:text-[26px]">{step.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.6] text-body md:text-[15px]">{step.text}</p>
              </m.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
