"use client";

import { AnimatePresence, m } from "framer-motion";
import { useMarket, useRefreshCountdown } from "@/components/providers/MarketProvider";
import { LiveDot } from "@/components/ui/LiveDot";
import { PRICE_REFRESH_MS } from "@/lib/market/config";
import { cn, formatCountdown, formatTime } from "@/lib/utils";
import type { MarketStatus } from "@/types/metal";

const STATUS_LABEL: Record<MarketStatus, string> = {
  live: "LIVE",
  updating: "LIVE",
  stale: "VERZÖGERT",
  error: "OFFLINE",
};

/** Live indicator, timestamp (animated swap), countdown bar and source. */
export function PriceStatus({ className }: { className?: string }) {
  const { snapshot, status } = useMarket();
  const ms = useRefreshCountdown();
  const progress = 1 - ms / PRICE_REFRESH_MS;
  const ok = status === "live" || status === "updating";

  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl border border-line bg-cream px-4 py-3.5 md:mx-auto md:w-full md:max-w-[560px] md:items-center md:text-center lg:mx-0 lg:w-auto lg:max-w-none lg:items-end lg:border-0 lg:bg-transparent lg:p-0 lg:text-right",
        className,
      )}
    >
      <span className="flex items-center gap-2.5" aria-live="polite">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
            ok ? "bg-up-bg text-up" : status === "stale" ? "bg-gold-tint text-gold-dark" : "bg-line text-soft",
          )}
        >
          <LiveDot status={status} size={6} />
          {STATUS_LABEL[status]}
        </span>
        <span className="relative inline-flex h-5 items-center overflow-hidden text-[14px] font-semibold whitespace-nowrap md:text-[15px]">
          <span className="mr-1">Stand: heute,</span>
          <AnimatePresence mode="popLayout" initial={false}>
            <m.span
              key={snapshot.updatedAt}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="tabular-nums"
            >
              {formatTime(snapshot.updatedAt, true)}
            </m.span>
          </AnimatePresence>
        </span>
      </span>
      <span className="flex items-center justify-between gap-2.5 text-[12.5px] text-soft md:justify-center lg:justify-end">
        {status === "error" ? (
          <span>Kurse werden aktualisiert …</span>
        ) : (
          <span className="tabular-nums whitespace-nowrap">Nächste Aktualisierung in {formatCountdown(ms)}</span>
        )}
        <span aria-hidden="true" className="relative h-[3px] w-20 overflow-hidden rounded-full bg-[#F1EADC] md:w-[90px]">
          <span className="absolute inset-0 origin-left rounded-full bg-gold" style={{ transform: `scaleX(${Math.max(0.02, progress)})` }} />
        </span>
      </span>
      <span className="text-[12px] text-subtle">Preise in € pro Gramm · Quelle: {snapshot.source}</span>
    </div>
  );
}
