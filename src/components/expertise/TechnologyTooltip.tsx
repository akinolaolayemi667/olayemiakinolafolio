"use client";

import { ReactNode } from "react";
import { m, AnimatePresence } from "framer-motion";
import { easeOutPremium, motionDuration } from "@lib/motion";

type Props = {
  label: string;
  visible: boolean;
  children: ReactNode;
  reduceMotion: boolean;
};

/**
 * Lightweight hover/focus tooltip for orbit nodes.
 */
export function TechnologyTooltip({
  label,
  visible,
  children,
  reduceMotion,
}: Props) {
  return (
    <span className="relative inline-flex">
      {children}
      <AnimatePresence>
        {visible ? (
          <m.span
            role="tooltip"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : { duration: motionDuration.fast, ease: easeOutPremium }
            }
            className="pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-20 max-w-[min(12rem,70vw)] -translate-x-1/2 truncate rounded-lg border border-white/10 bg-ink/95 px-2.5 py-1 text-center text-[11px] font-medium text-white shadow-lg shadow-black/40"
          >
            {label}
          </m.span>
        ) : null}
      </AnimatePresence>
    </span>
  );
}
