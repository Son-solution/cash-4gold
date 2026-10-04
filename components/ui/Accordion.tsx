"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, type ReactNode } from "react";
import { EASE, TRANSITION } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: ReactNode;
  /** Small label on the right (desktop) / above the title (mobile). */
  meta?: string;
  number?: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  openId: string | null;
  onToggle: (id: string) => void;
  className?: string;
}

/**
 * Accessible single-open accordion (button + region, aria-expanded / aria-controls).
 * Height animates with Framer Motion; keyboard support comes from native buttons.
 */
export function Accordion({ items, openId, onToggle, className }: AccordionProps) {
  const baseId = useId();

  return (
    <m.ul layout className={cn("border-t border-ink", className)}>
      <AnimatePresence initial={false}>
        {items.map((item) => {
          const open = openId === item.id;
          const buttonId = `${baseId}-${item.id}-button`;
          const panelId = `${baseId}-${item.id}-panel`;
          return (
            <m.li
              key={item.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className={cn("border-b border-line transition-colors duration-300", open ? "bg-cream" : "bg-white")}
            >
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => onToggle(item.id)}
                  className="grid min-h-[68px] w-full grid-cols-[minmax(0,1fr)_36px] items-center gap-3 px-2.5 py-3 text-left md:grid-cols-[40px_minmax(0,1fr)_120px_36px] md:gap-3 md:px-3"
                >
                  {item.number && (
                    <span className={cn("hidden font-mono text-[11.5px] md:block", open ? "text-gold-ink" : "text-faint")}>{item.number}</span>
                  )}
                  <span className="flex flex-col gap-1">
                    {item.meta && (
                      <span className={cn("font-mono text-[10px] tracking-[0.14em] uppercase md:hidden", open ? "text-gold-ink" : "text-faint")}>
                        {item.number} · {item.meta}
                      </span>
                    )}
                    <span className={cn("text-[16px] leading-snug md:text-[17.5px]", open ? "font-semibold" : "font-medium")}>{item.title}</span>
                  </span>
                  {item.meta && (
                    <span className="hidden justify-self-end font-mono text-[10px] tracking-[0.14em] text-faint uppercase md:block">{item.meta}</span>
                  )}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200",
                      open ? "border-gold bg-gold" : "border-line-3 bg-white",
                    )}
                  >
                    <span className="absolute h-[1.5px] w-3.5 bg-ink" />
                    <m.span
                      className="absolute h-3.5 w-[1.5px] bg-ink"
                      animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
                      transition={{ duration: 0.24, ease: EASE.inOut }}
                    />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <m.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    key="panel"
                    initial={{ height: 0 }}
                    animate={{ height: "auto", transition: { duration: 0.32, ease: EASE.inOut } }}
                    exit={{ height: 0, transition: { duration: 0.24, ease: EASE.inOut } }}
                    className="overflow-hidden"
                  >
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { ...TRANSITION.fast, delay: 0.1 } }}
                      exit={{ opacity: 0, transition: { duration: 0.12 } }}
                      className="px-2.5 pb-5 text-[15px] leading-[1.65] text-body md:pr-[190px] md:pl-[68px]"
                    >
                      {item.content}
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.li>
          );
        })}
      </AnimatePresence>
    </m.ul>
  );
}
