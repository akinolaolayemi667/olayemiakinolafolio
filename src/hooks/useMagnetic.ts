"use client";

import { useCallback, useRef, type MouseEvent } from "react";

/** Subtle pointer-follow transform for premium CTAs (desktop only). */
export function useMagnetic(strength = 0.22) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || window.matchMedia("(pointer: coarse)").matches) return;

      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }, []);

  return { ref, onMove, onLeave };
}
