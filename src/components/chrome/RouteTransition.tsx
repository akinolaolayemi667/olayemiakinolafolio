"use client";

import { ReactNode } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import {
  easeOutPremium,
  motionDuration,
  pageTransitionVariants,
} from "@lib/motion";

/** Framer Motion page transition — opacity/y only, LazyMotion for bundle size. */
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = Boolean(useReducedMotion());
  const variants = pageTransitionVariants(reduce);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{
            duration: reduce ? 0.01 : motionDuration.page,
            ease: easeOutPremium,
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
