"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** NProgress-style bar during client route transitions. */
export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(12);

    const step1 = window.setTimeout(() => setProgress(45), 80);
    const step2 = window.setTimeout(() => setProgress(72), 180);
    const step3 = window.setTimeout(() => setProgress(100), 320);
    const hide = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 520);

    return () => {
      window.clearTimeout(step1);
      window.clearTimeout(step2);
      window.clearTimeout(step3);
      window.clearTimeout(hide);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5"
    >
      <div
        className="h-full bg-accent shadow-[0_0_12px_rgba(20,184,166,0.6)] transition-[width] duration-200 ease-out motion-reduce:transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
