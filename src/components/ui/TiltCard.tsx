"use client";

import { ReactNode, useCallback, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/** Subtle 3D tilt on pointer hover — disabled on touch and reduced motion. */
export function TiltCard({ children, className = "", maxTilt = 3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateY(-2px)`;
    },
    [maxTilt]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none ${className}`}
    >
      {children}
    </div>
  );
}
