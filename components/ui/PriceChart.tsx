"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, useMemo, useRef, useState } from "react";
import { EASE } from "@/lib/motion";
import { buildLinePath, formatEUR } from "@/lib/utils";

interface PriceChartProps {
  values: number[];
  labels: string[];
  /** Changes whenever the series identity changes (metal/period) → line redraws. */
  seriesKey: string;
  height?: number;
  className?: string;
  ariaLabel: string;
}

const VIEW_W = 480;

/**
 * Area line chart with a one-time draw-in, crossfade on series change and a
 * pointer crosshair (desktop hover / mobile horizontal drag).
 */
export function PriceChart({ values, labels, seriesKey, height = 140, className, ariaLabel }: PriceChartProps) {
  const labelKey = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const { line, area, end } = useMemo(() => buildLinePath(values, VIEW_W, height, 12), [values, height]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = values.length > 1 ? VIEW_W / (values.length - 1) : 0;

  const onPointer = (clientX: number) => {
    const svg = svgRef.current;
    if (!svg || values.length < 2) return;
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * VIEW_W;
    setHover(Math.max(0, Math.min(values.length - 1, Math.round(x / step))));
  };

  const hoverX = hover !== null ? hover * step : 0;
  const hoverY = hover !== null ? 12 + (height - 24) * (1 - (values[hover] - min) / range) : 0;

  return (
    <div className={className}>
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_W} ${height}`}
          preserveAspectRatio="none"
          className="block h-auto w-full touch-pan-y"
          style={{ aspectRatio: `${VIEW_W} / ${height}` }}
          role="img"
          aria-label={ariaLabel}
          onPointerMove={(e) => onPointer(e.clientX)}
          onPointerDown={(e) => onPointer(e.clientX)}
          onPointerLeave={() => setHover(null)}
        >
          <path d={`M0 ${height * 0.25}H${VIEW_W}M0 ${height * 0.5}H${VIEW_W}M0 ${height * 0.75}H${VIEW_W}`} stroke="#EEE6D6" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
          <AnimatePresence mode="popLayout" initial={false}>
            <m.g key={seriesKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE.inOut }}>
              <m.path
                d={area}
                fill="rgba(212,163,42,0.13)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
              <m.path
                d={line}
                fill="none"
                stroke="#C99A1E"
                strokeWidth={2.2}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE.inOut }}
              />
              <circle cx={end.x} cy={end.y} r={9} fill="rgba(212,163,42,0.2)" />
              <circle cx={end.x} cy={end.y} r={4.5} fill="#D4A32A" stroke="#fff" strokeWidth={2} />
            </m.g>
          </AnimatePresence>
          {hover !== null && (
            <g aria-hidden="true">
              <line x1={hoverX} x2={hoverX} y1={0} y2={height} stroke="#D4A32A" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
              <circle cx={hoverX} cy={hoverY} r={4} fill="#fff" stroke="#D4A32A" strokeWidth={2} />
            </g>
          )}
        </svg>
        {hover !== null && (
          <div
            className="pointer-events-none absolute -top-2 rounded-lg border border-line bg-white px-2.5 py-1 text-[12px] font-semibold shadow-card"
            style={{ left: `${(hoverX / VIEW_W) * 100}%`, transform: `translate(${hover > values.length / 2 ? "-105%" : "5%"}, -100%)` }}
          >
            {formatEUR(values[hover])}
          </div>
        )}
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[10px] text-faint" aria-hidden="true">
        {labels.map((l, i) => (
          <span key={`${labelKey}-${i}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}
