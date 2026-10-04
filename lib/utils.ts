const LOCALE = "de-DE";
const TIME_ZONE = "Europe/Berlin";

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const eurFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const decimalFormatter = new Intl.NumberFormat(LOCALE, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const weightFormatter = new Intl.NumberFormat(LOCALE, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/** "1.234,56 €" */
export function formatEUR(value: number): string {
  return eurFormatter.format(value);
}

/** "1.234,56" (no currency sign, for layouts that set "€" separately). */
export function formatDecimal(value: number): string {
  return decimalFormatter.format(value);
}

/** "12,5 g" */
export function formatWeight(value: number): string {
  return `${weightFormatter.format(value)} g`;
}

/** Weight input value without unit, e.g. "12,5". */
export function formatWeightInput(value: number): string {
  return weightFormatter.format(value).replace(/\./g, "");
}

/** "▲ +0,84 %" / "▼ −0,36 %" */
export function formatChange(percent: number): string {
  const sign = percent >= 0 ? "+" : "−";
  return `${percent >= 0 ? "▲" : "▼"} ${sign}${decimalFormatter.format(Math.abs(percent))} %`;
}

/** "+1,00 €" / "−0,15 €" */
export function formatSignedEUR(value: number): string {
  const sign = value >= 0 ? "+" : "−";
  return `${sign}${eurFormatter.format(Math.abs(value))}`;
}

/** "14:32 Uhr" in German time. */
export function formatTime(iso: string, withSeconds = false): string {
  const time = new Intl.DateTimeFormat(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
    second: withSeconds ? "2-digit" : undefined,
    timeZone: TIME_ZONE,
  }).format(new Date(iso));
  return `${time} Uhr`;
}

/** "27.09.2026" in German time. */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(new Date(iso));
}

/** "04:52" */
export function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Builds an SVG path for a line chart. */
export function buildLinePath(values: number[], width: number, height: number, pad = 8) {
  if (values.length === 0) return { line: "", area: "", end: { x: 0, y: height / 2 } };
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = values.length > 1 ? width / (values.length - 1) : 0;
  const points = values.map((v, i) => ({
    x: i * step,
    y: pad + (height - pad * 2) * (1 - (v - min) / range),
  }));
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;
  return { line, area, end: points[points.length - 1] };
}
