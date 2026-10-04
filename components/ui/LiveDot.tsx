import { cn } from "@/lib/utils";
import type { MarketStatus } from "@/types/metal";

const COLORS: Record<MarketStatus, string> = {
  live: "bg-up-dot",
  updating: "bg-up-dot",
  stale: "bg-gold",
  error: "bg-faint",
};

/** Status dot with a calm 2 s pulse ring (CSS only; disabled under reduced motion). */
export function LiveDot({ status = "live", size = 8, className }: { status?: MarketStatus; size?: number; className?: string }) {
  const pulse = status === "live" || status === "updating";
  return (
    <span className={cn("relative inline-flex shrink-0", className)} style={{ width: size, height: size }} aria-hidden="true">
      {pulse && <span className={cn("absolute inset-0 rounded-full animate-live-pulse", COLORS[status])} />}
      <span className={cn("relative inline-block h-full w-full rounded-full", COLORS[status])} />
    </span>
  );
}
