"use client";

import { m } from "framer-motion";
import { SPRING_UI } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Shared sliding highlight: render it inside the currently selected item
 * with the same `layoutId`; Framer animates it between items.
 */
export function SelectIndicator({ layoutId, className }: { layoutId: string; className?: string }) {
  return (
    <m.span
      layoutId={layoutId}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      transition={SPRING_UI}
    />
  );
}
