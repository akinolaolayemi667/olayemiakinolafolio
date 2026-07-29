import {
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

/** Premium ease — short, decisive, not bouncy. */
export const easeOutPremium = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  fast: 0.18,
  base: 0.36,
  slow: 0.48,
  page: 0.28,
} as const;

/** Shared viewport for scroll reveals — once + generous margin for perf. */
export const defaultViewport = {
  once: true,
  margin: "-64px 0px",
  amount: 0.12 as const,
};

export type MotionViewport = {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
};

export type MotionConfig = {
  reduce: boolean;
  transition: Transition;
  viewport: MotionViewport;
  hoverTransition: Transition;
};

/**
 * Shared motion config that respects `prefers-reduced-motion`.
 */
export function useMotionConfig(): MotionConfig {
  const reduce = Boolean(useReducedMotion());

  return {
    reduce,
    transition: reduce
      ? { duration: 0.01 }
      : { duration: motionDuration.base, ease: easeOutPremium },
    viewport: defaultViewport,
    hoverTransition: reduce
      ? { duration: 0.01 }
      : { duration: motionDuration.fast, ease: easeOutPremium },
  };
}

export function fadeUpVariants(reduce: boolean, offset = 14): Variants {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: { opacity: 0, y: offset },
    visible: { opacity: 1, y: 0 },
  };
}

export function fadeInVariants(): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
}

export function sectionFadeVariants(reduce: boolean): Variants {
  if (reduce) return fadeInVariants();
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
}

export function pageTransitionVariants(reduce: boolean): Variants {
  if (reduce) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };
}

export function staggerContainerVariants(
  reduce: boolean,
  stagger = 0.06,
  delayChildren = 0.05
): Variants {
  if (reduce) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0, delayChildren: 0 },
      },
    };
  }

  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function staggerItemVariants(reduce: boolean, offset = 12): Variants {
  return fadeUpVariants(reduce, offset);
}

export function scaleInVariants(reduce: boolean): Variants {
  if (reduce) {
    return fadeInVariants();
  }

  return {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };
}

export function hoverLift(reduce: boolean, y = -3) {
  if (reduce) return undefined;
  return { y, transition: { duration: motionDuration.fast, ease: easeOutPremium } };
}
