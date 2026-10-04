"use client";

import { animate, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { DURATION, EASE } from "@/lib/motion";
import { formatDecimal, formatEUR, formatWeight } from "@/lib/utils";

export type NumberFormat = "eur" | "decimal" | "weight";

const FORMATTERS: Record<NumberFormat, (v: number) => string> = {
  eur: formatEUR,
  decimal: formatDecimal,
  weight: formatWeight,
};

interface AnimatedNumberProps {
  value: number;
  format?: NumberFormat;
  /** Seconds. Defaults to the "count" token. */
  duration?: number;
  /** Shorter tween for small relative changes (< 5 %). */
  adaptive?: boolean;
  className?: string;
}

/**
 * Tweens between numeric values and writes the formatted text directly to
 * the DOM (no React re-render per frame). Retargets smoothly mid-tween.
 * Server-rendered with the final value, so there is no layout shift.
 */
export function AnimatedNumber({ value, format = "decimal", duration = DURATION.count, adaptive = false, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const reduce = useReducedMotionSafe();
  const formatter = FORMATTERS[format];

  useMotionValueEvent(motionValue, "change", (latest) => {
    if (ref.current) ref.current.textContent = formatter(latest);
  });

  useEffect(() => {
    const current = motionValue.get();
    if (current === value) return;
    if (reduce) {
      motionValue.jump(value);
      if (ref.current) ref.current.textContent = formatter(value);
      return;
    }
    const relative = current === 0 ? 1 : Math.abs(value - current) / Math.abs(current);
    const d = adaptive && relative < 0.05 ? 0.4 : duration;
    const controls = animate(motionValue, value, { duration: d, ease: EASE.out });
    return () => controls.stop();
  }, [value, reduce, duration, adaptive, motionValue, formatter]);

  return (
    <span ref={ref} className={className}>
      {formatter(value)}
    </span>
  );
}
