"use client";

import { useReducedMotion } from "framer-motion";

/**
 * True when the visitor prefers reduced motion (OS setting).
 * Use it for animation parameters (durations, whether to tween) —
 * never to change rendered markup, so server and client HTML match.
 */
export function useReducedMotionSafe(): boolean {
  return Boolean(useReducedMotion());
}
