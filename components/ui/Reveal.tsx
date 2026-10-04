"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { BREAKPOINT_LG, DISTANCE, DURATION, GSAP_EASE, MQ, STAGGER } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Animate direct `[data-reveal]` descendants with a stagger instead of the wrapper. */
  stagger?: number;
  delay?: number;
  /** Vertical offset in px (defaults to the reveal token). */
  y?: number;
  /** ScrollTrigger start position. */
  start?: string;
}

/**
 * Standard scroll reveal (opacity + small y offset), plays once.
 * Uses GSAP ScrollTrigger; disabled under prefers-reduced-motion.
 * Content is server-rendered and fully visible without JavaScript.
 */
export function Reveal({ children, as: Tag = "div", className, id, stagger, delay = 0, y, start = "top 85%" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motionOk, () => {
        const items = stagger ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]")) : [el];
        if (items.length === 0) return;
        const offset = y ?? (window.innerWidth >= BREAKPOINT_LG ? DISTANCE.revealDesktop : DISTANCE.revealMobile);
        const step = stagger ? Math.min(stagger, STAGGER.maxCascade / Math.max(items.length, 1)) : 0;
        gsap.from(items, {
          opacity: 0,
          y: offset,
          duration: DURATION.slow,
          ease: GSAP_EASE.out,
          delay,
          stagger: step,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start, once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
