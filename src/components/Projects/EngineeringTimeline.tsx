"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { TEngineeringTimelinePhase } from "@type/Project";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { projectsSection } from "@data/projects";
import {
  staggerContainerVariants,
  staggerItemVariants,
  motionDuration,
  easeOutPremium,
} from "@lib/motion";

type Props = {
  phases: TEngineeringTimelinePhase[];
  className?: string;
};

/** Enterprise-style vertical engineering timeline with scroll fill + staggered cards. */
export function EngineeringTimeline({ phases, className = "" }: Props) {
  const reduce = Boolean(useReducedMotion());
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el || reduce) return;

    function onScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.72;
      const end = view * 0.28;
      const progress = (start - rect.top) / (rect.height + start - end);
      setFill(Math.min(Math.max(progress, 0), 1) * 100);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  if (!phases.length) return null;

  return (
    <CaseStudySection
      id="engineering-timeline"
      title={projectsSection.sectionLabels.engineeringTimeline}
      className={className}
    >
      <LazyMotion features={domAnimation} strict>
        <m.ol
          ref={listRef}
          className="relative flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px 0px", amount: 0.08 }}
          variants={staggerContainerVariants(reduce, 0.06, 0.05)}
        >
          <div
            aria-hidden
            className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-white/10 sm:left-[1.35rem] md:left-[1.5rem]"
          />
          <div
            aria-hidden
            className="absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-gradient-to-b from-accent via-accent/65 to-accent/15 motion-reduce:hidden sm:left-[1.35rem] md:left-[1.5rem]"
            style={{ transform: `scaleY(${reduce ? 1 : fill / 100})` }}
          />

          {phases.map((phase, index) => (
            <m.li
              key={phase.id}
              className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 md:gap-6 md:pb-10"
              variants={staggerItemVariants(reduce, 16)}
              transition={{
                duration: reduce ? 0.01 : motionDuration.base,
                ease: easeOutPremium,
              }}
            >
              <div className="relative z-10 flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-[color:var(--hv-bg)] text-[11px] font-semibold tracking-wider text-accent shadow-[0_0_20px_rgba(20,184,166,0.22)] sm:h-10 sm:w-10 sm:text-xs md:h-11 md:w-11">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="feature-card gradient-border relative min-w-0 flex-1 overflow-hidden rounded-2xl px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:px-5 sm:py-5 md:px-6 md:py-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(20,184,166,0.1), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/85">
                    Phase {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-xl">
                    {phase.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                    {phase.description}
                  </p>
                </div>
              </div>
            </m.li>
          ))}
        </m.ol>
      </LazyMotion>
    </CaseStudySection>
  );
}
