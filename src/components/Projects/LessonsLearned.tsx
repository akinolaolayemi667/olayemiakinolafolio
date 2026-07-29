"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { projectsSection } from "@data/projects";
import {
  staggerContainerVariants,
  staggerItemVariants,
  motionDuration,
  easeOutPremium,
} from "@lib/motion";

type Props = {
  lessons: string[];
  className?: string;
};

/** Premium lessons-learned timeline — large quote cards with scroll fill. */
export function LessonsLearned({ lessons, className = "" }: Props) {
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

  if (!lessons.length) return null;

  return (
    <CaseStudySection
      id="lessons-learned"
      title={projectsSection.sectionLabels.lessonsLearned}
      className={className}
    >
      <LazyMotion features={domAnimation} strict>
        <m.ol
          ref={listRef}
          className="relative flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px 0px", amount: 0.08 }}
          variants={staggerContainerVariants(reduce, 0.07, 0.05)}
        >
          <div
            aria-hidden
            className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-white/10 sm:left-[1.35rem] md:left-[1.5rem]"
          />
          <div
            aria-hidden
            className="absolute bottom-4 left-[1.15rem] top-4 w-px origin-top bg-gradient-to-b from-accent via-accent/65 to-accent/15 motion-reduce:hidden sm:left-[1.35rem] md:left-[1.5rem]"
            style={{ transform: `scaleY(${reduce ? 1 : fill / 100})` }}
          />

          {lessons.map((lesson, index) => (
            <m.li
              key={`${index}-${lesson.slice(0, 32)}`}
              className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 md:gap-7 md:pb-11"
              variants={staggerItemVariants(reduce, 18)}
              transition={{
                duration: reduce ? 0.01 : motionDuration.base,
                ease: easeOutPremium,
              }}
            >
              <div className="relative z-10 flex flex-col items-center pt-1">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-[color:var(--hv-bg)] text-[11px] font-semibold tracking-wider text-accent shadow-[0_0_22px_rgba(20,184,166,0.25)] sm:h-10 sm:w-10 md:h-11 md:w-11 md:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="feature-card group gradient-border relative min-w-0 flex-1 overflow-hidden rounded-2xl px-5 py-6 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:px-7 sm:py-8 md:px-9 md:py-9">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(20,184,166,0.12), transparent 55%)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-1 left-4 select-none text-6xl leading-none text-accent/20 sm:left-6 sm:text-7xl md:text-8xl"
                >
                  “
                </span>
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/85">
                    Insight {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 max-w-3xl text-balance text-xl font-semibold leading-snug tracking-tight text-[color:var(--hv-fg)] sm:text-2xl md:mt-5 md:text-[1.75rem] md:leading-[1.25]">
                    {lesson}
                  </p>
                </div>
              </blockquote>
            </m.li>
          ))}
        </m.ol>
      </LazyMotion>
    </CaseStudySection>
  );
}
