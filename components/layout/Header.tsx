"use client";

import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useMarket } from "@/components/providers/MarketProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SelectIndicator } from "@/components/ui/SelectIndicator";
import { METALS } from "@/data/metals";
import { COMPANY, MAIN_NAV } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getPurchasePricePerGram } from "@/lib/metals";
import { MQ, TRANSITION } from "@/lib/motion";
import { cn, formatDecimal } from "@/lib/utils";

const SECTION_IDS = MAIN_NAV.map((n) => n.sectionId).filter((id): id is string => Boolean(id));

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { snapshot } = useMarket();
  const gold = snapshot.quotes.XAU;
  const goldMetal = METALS[0];
  const goldPurchase = getPurchasePricePerGram(snapshot, goldMetal, goldMetal.purities[0]);

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        start: 80,
        end: "max",
        onToggle: (self) => setCompact(self.isActive),
      });
      const mm = gsap.matchMedia();
      mm.add(MQ.motionOk, () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
        );
      });
      return () => {
        trigger.kill();
        mm.revert();
      };
    },
    { scope: ref },
  );

  return (
    <>
      <header
        ref={ref}
        data-compact={compact || undefined}
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out-soft",
          compact
            ? "border-transparent bg-white/96 shadow-[0_8px_24px_rgba(60,45,15,0.08)] backdrop-blur-[16px]"
            : "border-line bg-white/88 backdrop-blur-[12px]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between gap-4 pr-3 pl-4 transition-[height] duration-300 ease-out-soft md:pr-6 md:pl-8 xl:px-12 min-[1400px]:px-16",
            compact ? "h-16 md:h-[68px] xl:h-[72px]" : "h-16 md:h-[76px] xl:h-[88px]",
          )}
        >
          <a href="#top" aria-label="Cash 4 Gold – zur Startseite" className="flex shrink-0 items-center gap-2.5 md:gap-3.5">
            <Image
              src="/logo/cash-4gold-logo.png"
              alt=""
              width={1200}
              height={783}
              preload
              className={cn("w-auto transition-[height] duration-300 ease-out-soft", compact ? "h-[30px] xl:h-[34px]" : "h-8 md:h-[38px] xl:h-[42px]")}
              sizes="80px"
            />
            {/* wordmark hidden on very narrow phones (< 380px) so the header fits in one row */}
            <span className="flex flex-col gap-0.5 max-[379px]:hidden">
              <span className="font-display text-[17px] leading-none md:text-[18px] xl:text-[19px]">Cash 4 Gold</span>
              <span
                className={cn(
                  "hidden font-mono text-[9.5px] tracking-[0.22em] text-subtle transition-[opacity,max-height] duration-300 md:block",
                  compact ? "max-h-0 opacity-0" : "max-h-4 opacity-100",
                )}
              >
                EDELMETALL-ANKAUF
              </span>
            </span>
          </a>

          <nav aria-label="Hauptnavigation" className="hidden xl:block">
            <ul className="m-0 flex list-none items-center gap-1 p-0 min-[1400px]:gap-2">
              {MAIN_NAV.map((item) => {
                const isActive = item.sectionId === active;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "group relative flex h-11 items-center px-2 text-[14px] whitespace-nowrap transition-colors duration-200 min-[1400px]:px-2.5",
                        isActive ? "font-medium text-ink" : "text-body hover:text-ink",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute right-2.5 bottom-1.5 left-2.5 h-[2px] origin-center scale-x-0 rounded-full bg-gold/60 transition-transform duration-200 ease-out-soft group-hover:scale-x-100"
                      />
                      {isActive && <SelectIndicator layoutId="nav-active" className="top-auto right-2.5 bottom-1.5 left-2.5 h-[2px] rounded-full bg-gold" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 md:gap-3.5">
            <AnimatePresence initial={false}>
              {compact && (
                <m.span
                  key="chip"
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={TRANSITION.fast}
                  className="hidden items-center gap-2 text-[12.5px] whitespace-nowrap 2xl:flex"
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] text-subtle">AU 999</span>
                  <span className="font-semibold tabular-nums">{formatDecimal(goldPurchase)} €/g</span>
                  <span className={gold.changePercent >= 0 ? "text-up" : "text-down"} aria-hidden="true">
                    {gold.changePercent >= 0 ? "▲" : "▼"}
                  </span>
                </m.span>
              )}
            </AnimatePresence>
            <a
              href={COMPANY.phoneHref}
              className={cn(
                "hidden items-center gap-2.5 text-[14px] whitespace-nowrap transition-opacity duration-200 md:flex xl:hidden 2xl:flex",
                compact && "2xl:hidden",
              )}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-2 text-gold-ink">
                <Icon name="phone" size={15} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="hidden text-[11px] text-subtle xl:block">{COMPANY.hoursShort}</span>
                <span className="font-medium">{COMPANY.phoneShort}</span>
              </span>
            </a>
            <Button href="#rechner" size="sm" className="!h-10 !px-3.5 !text-[13px] md:!h-[46px] md:!px-5 md:!text-[14px]" arrow={false}>
              <span className="md:hidden">Wert berechnen</span>
              <span className="hidden md:inline">Jetzt Wert berechnen</span>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full md:border md:border-line-2 xl:hidden"
            >
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className="absolute top-0 left-0 h-[1.7px] w-5 rounded-full bg-ink" />
                <span className="absolute bottom-0 left-0 h-[1.7px] w-5 rounded-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
        <span data-progress aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold" />
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeSection={active} />
    </>
  );
}
