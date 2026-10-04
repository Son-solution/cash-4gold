"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { PRICE_REFRESH_MS, PRICE_STALE_AFTER_MS, PRICES_ENDPOINT } from "@/lib/market/config";
import type { MarketSnapshot, MarketStatus } from "@/types/metal";

interface MarketContextValue {
  snapshot: MarketSnapshot;
  /** Snapshot before the most recent update (for direction flashes). */
  previous: MarketSnapshot | null;
  status: MarketStatus;
  refresh: () => Promise<void>;
}

const MarketContext = createContext<MarketContextValue | null>(null);
/** Separate context so the 1-second countdown only re-renders the countdown UI. */
const CountdownContext = createContext<number>(PRICE_REFRESH_MS);

function isSnapshot(value: unknown): value is MarketSnapshot {
  return (
    typeof value === "object" &&
    value !== null &&
    "quotes" in value &&
    "updatedAt" in value &&
    "history" in value
  );
}

/**
 * Holds the current market snapshot for all client components.
 * The server renders with `initial`; the browser refreshes from
 * PRICES_ENDPOINT on the configured interval.
 */
export function MarketProvider({ initial, children }: { initial: MarketSnapshot; children: ReactNode }) {
  const [snapshot, setSnapshot] = useState(initial);
  const [previous, setPrevious] = useState<MarketSnapshot | null>(null);
  const [status, setStatus] = useState<MarketStatus>("live");
  const [msUntilRefresh, setMsUntilRefresh] = useState(PRICE_REFRESH_MS);
  const snapshotRef = useRef(initial);
  const inFlight = useRef(false);
  const lastAttempt = useRef(0);

  const refresh = useCallback(async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    lastAttempt.current = Date.now();
    setStatus("updating");
    try {
      const res = await fetch(PRICES_ENDPOINT, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const next: unknown = await res.json();
      if (!isSnapshot(next)) throw new Error("Invalid market snapshot");
      if (next.updatedAt !== snapshotRef.current.updatedAt) {
        setPrevious(snapshotRef.current);
        snapshotRef.current = next;
        setSnapshot(next);
      }
      setStatus("live");
    } catch {
      const age = Date.now() - new Date(snapshotRef.current.updatedAt).getTime();
      setStatus(age > PRICE_STALE_AFTER_MS ? "error" : "stale");
    } finally {
      inFlight.current = false;
    }
  }, []);

  // Refresh right after mount if the server-rendered snapshot is already outdated.
  useEffect(() => {
    const age = Date.now() - new Date(snapshotRef.current.updatedAt).getTime();
    if (age > PRICE_REFRESH_MS) void refresh();
  }, [refresh]);

  // Countdown + scheduled refresh.
  useEffect(() => {
    const tick = () => {
      const next = new Date(snapshotRef.current.nextUpdateAt).getTime();
      const remaining = next - Date.now();
      if (remaining <= 0) {
        setMsUntilRefresh(0);
        // Retry at most every 30 s while the source does not deliver a newer snapshot.
        if (Date.now() - lastAttempt.current > 30_000) void refresh();
      } else {
        setMsUntilRefresh(Math.min(remaining, PRICE_REFRESH_MS));
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [refresh]);

  const value = useMemo(
    () => ({ snapshot, previous, status, refresh }),
    [snapshot, previous, status, refresh],
  );

  return (
    <MarketContext.Provider value={value}>
      <CountdownContext.Provider value={msUntilRefresh}>{children}</CountdownContext.Provider>
    </MarketContext.Provider>
  );
}

export function useMarket(): MarketContextValue {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used inside <MarketProvider>");
  return ctx;
}

/** Milliseconds until the next scheduled price refresh (ticks every second). */
export function useRefreshCountdown(): number {
  return useContext(CountdownContext);
}
