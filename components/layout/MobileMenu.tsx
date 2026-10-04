"use client";

import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { useMarket } from "@/components/providers/MarketProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LiveDot } from "@/components/ui/LiveDot";
import { METALS } from "@/data/metals";
import { COMPANY, MAIN_NAV } from "@/data/site";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { DURATION, EASE, STAGGER } from "@/lib/motion";
import { getPurchasePricePerGram } from "@/lib/metals";
import { cn, formatChange, formatDecimal } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
}

/** Full-screen menu for tablet and mobile: calm fade, staggered serif links, focus trap. */
export function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { snapshot, status } = useMarket();
  useBodyScrollLock(open);
  const close = useCallback(() => onClose(), [onClose]);
  useFocusTrap(panelRef, open, close);

  const gold = METALS[0];
  const goldPrice = getPurchasePricePerGram(snapshot, gold, gold.purities[0]);
  const change = snapshot.quotes.XAU.changePercent;

  return (
    <AnimatePresence>
      {open && (
        <m.div
          key="menu"
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Hauptmenü"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.24, ease: EASE.out } }}
          exit={{ opacity: 0, transition: { duration: 0.18, ease: EASE.exit } }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-36 -bottom-32 h-[360px] w-[360px] rounded-full border border-[#EDE2C8]" />
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line pr-3 pl-4 md:h-[76px] md:pr-6 md:pl-8">
            <a href="#top" onClick={close} className="flex items-center gap-2.5">
              <Image src="/logo/cash-4gold-logo.png" alt="" width={1200} height={783} className="h-8 w-auto" sizes="60px" />
              <span className="font-display text-[17px]">Cash 4 Gold</span>
            </a>
            <button
              type="button"
              onClick={close}
              aria-label="Menü schließen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-2"
            >
              <m.span initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.24, ease: EASE.inOut }}>
                <Icon name="close" size={18} strokeWidth={1.8} />
              </m.span>
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-5 pb-7 md:px-8">
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out, delay: 0.08 } }}
              className="mt-3.5 flex items-center justify-between rounded-[14px] border border-line bg-cream px-3.5 py-3 text-[13px]"
            >
              <span className="flex items-center gap-2">
                <LiveDot status={status} size={7} />
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-soft">GOLD 999</span>
                <span className="font-semibold tabular-nums">{formatDecimal(goldPrice)} €/g</span>
              </span>
              <span className={cn("font-semibold", change >= 0 ? "text-up" : "text-down")}>{formatChange(change)}</span>
            </m.div>

            <nav aria-label="Hauptnavigation mobil" className="mt-2.5">
              <ul className="m-0 list-none p-0">
                {MAIN_NAV.map((item, i) => {
                  const isActive = item.sectionId === activeSection;
                  return (
                    <m.li
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out, delay: 0.12 + i * STAGGER.items } }}
                    >
                      <a
                        href={item.href}
                        onClick={close}
                        aria-current={isActive ? "true" : undefined}
                        className="flex h-[54px] items-center justify-between border-b border-line"
                      >
                        <span className="flex items-center gap-3 font-display text-[26px] md:text-[30px]">
                          {isActive && <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />}
                          {item.label}
                        </span>
                        <span aria-hidden="true" className={isActive ? "text-gold-ink" : "text-faint"}>
                          →
                        </span>
                      </a>
                    </m.li>
                  );
                })}
              </ul>
            </nav>

            <m.div
              className="mt-auto flex flex-col gap-2.5 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: DURATION.base, delay: 0.12 + MAIN_NAV.length * STAGGER.items + 0.12 } }}
            >
              <Button href="#rechner" onClick={close} size="lg" fullWidth arrow>
                Jetzt Wert berechnen
              </Button>
              <Button href={COMPANY.phoneHref} variant="outline" size="md" fullWidth icon="phone">
                {COMPANY.phoneShort} anrufen
              </Button>
              <span className="flex justify-between pt-1 text-[12.5px] text-soft">
                <a href={COMPANY.emailHref} className="underline-offset-4 hover:underline">
                  {COMPANY.email}
                </a>
                <span>{COMPANY.hoursShort}</span>
              </span>
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
