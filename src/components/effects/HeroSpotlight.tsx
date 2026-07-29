"use client";

import { useEffect, useRef } from "react";

/** Cursor-reactive cyan spotlight — desktop pointer only. */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduced.matches) return;

    let frame = 0;
    let targetX = 50;
    let targetY = 30;

    function onMove(event: PointerEvent) {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        if (!el) return;
        el.style.background = `radial-gradient(ellipse 45% 35% at ${targetX}% ${targetY}%, rgba(20,184,166,0.14), transparent 65%)`;
        frame = 0;
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] opacity-80 motion-reduce:hidden"
      style={{
        background:
          "radial-gradient(ellipse 45% 35% at 50% 30%, rgba(20,184,166,0.12), transparent 65%)",
      }}
    />
  );
}
