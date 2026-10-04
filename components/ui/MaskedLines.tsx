"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { DURATION, GSAP_EASE, MQ, STAGGER } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MaskedLinesProps {
  lines: ReactNode[];
  as?: "h1" | "h2" | "p";
  className?: string;
  id?: string;
  /** "scroll" = reveal when entering the viewport; "none" = parent timeline controls it via [data-line]. */
  trigger?: "scroll" | "none";
  duration?: number;
}

/**
 * Headline whose lines slide up inside overflow masks (full opacity, so text
 * is never faded). Used for the hero, trust and contact headlines.
 */
export function MaskedLines({ lines, as: Tag = "h2", className, id, trigger = "scroll", duration = 0.7 }: MaskedLinesProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (trigger !== "scroll" || !ref.current) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motionOk, () => {
        gsap.from(ref.current!.querySelectorAll("[data-line]"), {
          yPercent: 105,
          duration: duration || DURATION.hero,
          ease: GSAP_EASE.out,
          stagger: STAGGER.items,
          clearProps: "transform",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <span data-line className={cn("block will-change-transform")}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
