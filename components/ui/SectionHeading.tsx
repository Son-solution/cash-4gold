import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section headings are centred on phones/tablets and left-aligned on desktop (lg).
 * Section intro paragraphs use SECTION_INTRO_ALIGN for the same behaviour.
 */
export const SECTION_INTRO_ALIGN = "mx-auto text-center lg:mx-0 lg:text-left";

/** "02 ─── LIVE-KURSE" chapter label used above every section headline. */
export function Eyebrow({ number, label, className }: { number: string; label: string; className?: string }) {
  return (
    <p
      className={cn(
        "m-0 flex items-center justify-center gap-3 font-mono text-[10.5px] tracking-[0.2em] text-gold-ink uppercase md:gap-3.5 md:text-[11.5px] md:tracking-[0.24em] lg:justify-start",
        className,
      )}
    >
      <span className="text-ink">{number}</span>
      <span aria-hidden="true" className="h-px w-7 bg-gold md:w-8" />
      {label}
    </p>
  );
}

/** Section title: serif display type with an optional gold italic accent passed as children. */
export function SectionTitle({ children, id, className, as: Tag = "h2" }: { children: ReactNode; id?: string; className?: string; as?: "h2" | "h3" }) {
  return (
    <Tag
      id={id}
      className={cn(
        "m-0 text-center font-display text-[34px] leading-[1.06] font-normal tracking-[-0.02em] text-balance md:text-[46px] lg:text-left lg:text-[54px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Gold italic accent inside a title. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-gold-deep italic">{children}</em>;
}
