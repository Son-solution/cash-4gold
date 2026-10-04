/**
 * Shared motion tokens (see the Cash-4Gold Interaction & Motion Spec).
 * Durations are in seconds (GSAP + Framer Motion both use seconds).
 */
export const DURATION = {
  instant: 0.12,
  fast: 0.2,
  base: 0.32,
  slow: 0.6,
  hero: 0.9,
  count: 0.7,
  result: 0.9,
} as const;

/** Cubic-bezier easings for Framer Motion / CSS. */
export const EASE = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
} as const;

/** GSAP equivalents of the easings above. */
export const GSAP_EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  exit: "power2.in",
  linear: "none",
} as const;

/** Critically damped spring for sliding indicators — never overshoots. */
export const SPRING_UI = { type: "spring", stiffness: 380, damping: 40, mass: 0.8 } as const;

export const DISTANCE = {
  revealMobile: 16,
  revealDesktop: 24,
  item: 12,
} as const;

export const STAGGER = {
  items: 0.06,
  heroLines: 0.08,
  rows: 0.03,
  maxCascade: 0.4,
} as const;

/** Desktop breakpoint in px — must match --breakpoint-lg in app/globals.css. */
export const BREAKPOINT_LG = 1200;

/** Media queries shared by gsap.matchMedia() contexts. */
export const MQ = {
  reduce: "(prefers-reduced-motion: reduce)",
  motionOk: "(prefers-reduced-motion: no-preference)",
  desktop: `(min-width: ${BREAKPOINT_LG}px)`,
  desktopMotion: `(min-width: ${BREAKPOINT_LG}px) and (prefers-reduced-motion: no-preference)`,
  belowDesktopMotion: `(max-width: ${BREAKPOINT_LG - 1}px) and (prefers-reduced-motion: no-preference)`,
} as const;

/** Standard Framer transitions. */
export const TRANSITION = {
  fast: { duration: DURATION.fast, ease: EASE.out },
  base: { duration: DURATION.base, ease: EASE.inOut },
  swap: { duration: 0.24, ease: EASE.inOut },
  exit: { duration: DURATION.base * 0.6, ease: EASE.exit },
} as const;

/** Tap/hover presets (no bounce, max scale 1.03). */
export const PRESS = { scale: 0.98 } as const;
export const PRESS_SMALL = { scale: 0.97 } as const;
