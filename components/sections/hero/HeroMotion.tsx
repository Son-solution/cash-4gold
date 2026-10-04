"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { BREAKPOINT_LG, GSAP_EASE, MQ, STAGGER } from "@/lib/motion";

/**
 * Hero choreography (GSAP): entrance timeline on load, desktop parallax and
 * a slow float for the small UI cards. Server-rendered children are only
 * targeted through data attributes.
 */
export function HeroMotion({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const section = root.closest("section") ?? root;
      const q = gsap.utils.selector(section);
      const mm = gsap.matchMedia();

      mm.add(MQ.motionOk, () => {
        const isMobile = window.innerWidth < BREAKPOINT_LG;
        const k = isMobile ? 0.8 : 1; // compress timing on mobile (finishes ≈ 1.0 s)
        const tl = gsap.timeline({ defaults: { ease: GSAP_EASE.out } });

        tl.fromTo(q("[data-hero-panel]"), { scaleX: 0.96, transformOrigin: "right center" }, { scaleX: 1, duration: 0.9 * k }, 0)
          .fromTo(q("[data-hero-circles]"), { opacity: 0 }, { opacity: 1, duration: 0.9 * k }, 0)
          .fromTo(q("[data-hero-line]"), { y: 0, yPercent: 105 }, { y: 0, yPercent: 0, duration: 0.9 * k, stagger: STAGGER.heroLines }, 0)
          .fromTo(q("[data-hero-image]"), { clipPath: "inset(10% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1 * k }, 0.1 * k)
          .fromTo(q("[data-hero-image-inner]"), { scale: 1.06 }, { scale: 1, duration: 1.1 * k }, 0.1 * k)
          .fromTo(q('[data-hero-fade="badge"]'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, 0.35 * k)
          .fromTo(q('[data-hero-fade="text"]'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.45 * k)
          .fromTo(q('[data-hero-fade="cta"]'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.6 * k)
          .fromTo(q('[data-hero-fade="meta"]'), { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: STAGGER.items }, 0.7 * k)
          .fromTo(q('[data-hero-fade="ring"]'), { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }, { opacity: 0.55, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: GSAP_EASE.inOut }, 0.65 * k)
          .fromTo(q('[data-hero-fade="coin"]'), { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.8 * k)
          .fromTo(q('[data-hero-fade="card"]'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.9 * k)
          .fromTo(q('[data-hero-fade="ribbon"]'), { opacity: 0 }, { opacity: 1, duration: 0.7 }, 1.0 * k)
          .set(q("[data-hero-fade], [data-hero-line]"), { animation: "none" });
      });

      // Desktop-only parallax + floating cards (skipped on low-power devices).
      mm.add(MQ.desktopMotion, () => {
        const lowPower = typeof navigator !== "undefined" && (navigator.hardwareConcurrency ?? 8) <= 4;
        if (lowPower) return;
        const st = { trigger: section, start: "top top", end: "bottom top", scrub: 0.6 };
        gsap.to(q('[data-parallax="image"]'), { yPercent: -6, ease: "none", scrollTrigger: st });
        gsap.to(q('[data-parallax="coin"]'), { y: -24, ease: "none", scrollTrigger: st });
        gsap.to(q('[data-parallax="card"]'), { y: -40, ease: "none", scrollTrigger: st });

        q("[data-float]").forEach((el, i) => {
          const tween = gsap.to(el, { y: i % 2 === 0 ? -4 : 4, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 1.5, paused: true });
          gsap.timeline({ scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", onToggle: (self) => (self.isActive ? tween.play() : tween.pause()) } });
          el.addEventListener("pointerenter", () => tween.pause());
          el.addEventListener("pointerleave", () => tween.play());
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
