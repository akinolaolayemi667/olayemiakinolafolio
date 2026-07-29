"use client";

import {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  type PointerEvent,
} from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  defaultViewport,
  easeOutPremium,
  fadeUpVariants,
  hoverLift,
  motionDuration,
  scaleInVariants,
  sectionFadeVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@lib/motion";

function useReduce() {
  return Boolean(useReducedMotion());
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: boolean;
};

/**
 * Subtle fade/slide reveal. Must render under `MotionProvider` (LazyMotion).
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 14,
  scale = false,
}: FadeInProps) {
  const reduce = useReduce();

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={scale ? scaleInVariants(reduce) : fadeUpVariants(reduce, y)}
      transition={{
        duration: reduce ? 0.01 : motionDuration.base,
        ease: easeOutPremium,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </m.div>
  );
}

/** Section-level fade — slightly larger travel for band transitions. */
export function SectionFade({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReduce();

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={sectionFadeVariants(reduce)}
      transition={{
        duration: reduce ? 0.01 : motionDuration.slow,
        ease: easeOutPremium,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: "ul" | "ol" | "div";
  "aria-label"?: string;
};

export function Stagger({
  children,
  className = "",
  stagger = 0.06,
  delayChildren = 0.04,
  as = "ul",
  "aria-label": ariaLabel,
}: StaggerProps) {
  const reduce = useReduce();
  const Component = as === "ol" ? m.ol : as === "div" ? m.div : m.ul;

  return (
    <Component
      className={className}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainerVariants(reduce, stagger, delayChildren)}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "li" | "div";
  y?: number;
};

export function StaggerItem({
  children,
  className = "",
  as = "li",
  y = 12,
}: StaggerItemProps) {
  const reduce = useReduce();
  const Component = as === "div" ? m.div : m.li;

  return (
    <Component
      className={className}
      variants={staggerItemVariants(reduce, y)}
      transition={{
        duration: reduce ? 0.01 : motionDuration.base,
        ease: easeOutPremium,
      }}
    >
      {children}
    </Component>
  );
}

type HeroItemProps = {
  children: ReactNode;
  className?: string;
};

export function HeroItem({ children, className = "" }: HeroItemProps) {
  const reduce = useReduce();

  return (
    <m.div
      className={className}
      variants={staggerItemVariants(reduce, 14)}
      transition={{
        duration: reduce ? 0.01 : motionDuration.base,
        ease: easeOutPremium,
      }}
    >
      {children}
    </m.div>
  );
}

type HeroStaggerProps = {
  children: ReactNode;
  className?: string;
};

export function HeroStagger({ children, className = "" }: HeroStaggerProps) {
  const reduce = useReduce();

  return (
    <m.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants(reduce, 0.09, 0.08)}
    >
      {children}
    </m.div>
  );
}

/** Card hover elevation — transform-only for compositor perf. */
export function HoverLift({
  children,
  className = "",
  y = -3,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReduce();

  return (
    <m.div className={className} whileHover={hoverLift(reduce, y)}>
      {children}
    </m.div>
  );
}

/**
 * Image zoom on hover — wrap media; child should fill the box.
 * Uses CSS group-hover for zero JS on the image layer.
 */
export function ZoomImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`group/zoom relative overflow-hidden ${className}`}>
      <div className="hv-image-zoom h-full w-full">{children}</div>
    </div>
  );
}

/** Light pointer parallax for decorative layers. */
export function ParallaxLayer({
  children,
  className = "",
  strength = 12,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReduce();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.35 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * strength);
    my.set(py * strength * 0.7);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className={`relative ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <m.div
        className="h-full w-full"
        style={reduce ? undefined : { x: sx, y: sy }}
      >
        {children}
      </m.div>
    </div>
  );
}

/** Gentle scroll parallax for decorative children. */
export function ScrollParallax({
  children,
  className = "",
  offset = 36,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const reduce = useReduce();
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const smooth = useSpring(y, { stiffness: 55, damping: 22 });

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
    const progress = Math.max(-1, Math.min(1, mid / window.innerHeight));
    y.set(progress * -offset);
  }, [offset, reduce, y]);

  useEffect(() => {
    if (reduce) return;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll, reduce]);

  return (
    <m.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { y: smooth }}
    >
      {children}
    </m.div>
  );
}
