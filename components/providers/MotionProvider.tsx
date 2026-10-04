"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { TRANSITION } from "@/lib/motion";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Framer Motion setup: features are loaded lazily and the OS
 * "reduce motion" setting is respected globally.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={TRANSITION.base}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
