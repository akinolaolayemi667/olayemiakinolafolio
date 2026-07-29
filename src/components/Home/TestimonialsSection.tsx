"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  m,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FadeIn } from "@components/ui/Motion";
import { testimonials, testimonialsSection } from "@data/testimonials";
import { TTestimonial } from "@type/Content";
import { PendingSlot } from "@components/Projects/PendingSlot";
import { easeOutPremium, motionDuration } from "@lib/motion";

function initialsFor(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M14.5 34c-3.6 0-6.5-1.2-8.7-3.5C3.6 28.2 2.5 25 2.5 21.2c0-4.3 1.3-8.2 4-11.6C9.1 6.1 12.6 3.7 17 2.5l1.6 3.8c-3.2 1-5.7 2.7-7.5 5.1-1.7 2.3-2.6 4.7-2.6 7.1 0 .9.1 1.6.3 2.2.9-.5 2-.8 3.3-.8 2.3 0 4.2.8 5.6 2.3 1.4 1.5 2.1 3.4 2.1 5.6 0 2.3-.8 4.2-2.3 5.7-1.5 1.5-3.4 2.3-5.7 2.3zm21 0c-3.6 0-6.5-1.2-8.7-3.5-2.2-2.3-3.3-5.5-3.3-9.3 0-4.3 1.3-8.2 4-11.6 2.6-3.5 6.1-5.9 10.5-7.1l1.6 3.8c-3.2 1-5.7 2.7-7.5 5.1-1.7 2.3-2.6 4.7-2.6 7.1 0 .9.1 1.6.3 2.2.9-.5 2-.8 3.3-.8 2.3 0 4.2.8 5.6 2.3 1.4 1.5 2.1 3.4 2.1 5.6 0 2.3-.8 4.2-2.3 5.7-1.5 1.5-3.4 2.3-5.7 2.3z" />
    </svg>
  );
}

function TestimonialAvatar({ item }: { item: TTestimonial }) {
  if (item.avatarSrc) {
    return (
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-accent/30 shadow-[0_0_20px_rgba(20,184,166,0.15)] sm:h-16 sm:w-16">
        <Image
          src={item.avatarSrc}
          alt={item.avatarAlt ?? item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </span>
    );
  }

  return (
    <span
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-sm font-semibold tracking-wide text-accent shadow-[0_0_20px_rgba(20,184,166,0.15)] sm:h-16 sm:w-16 sm:text-base"
      aria-hidden
    >
      {initialsFor(item.name)}
    </span>
  );
}

function TestimonialCard({ item }: { item: TTestimonial }) {
  return (
    <blockquote className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] p-6 shadow-[var(--hv-shadow-lg)] backdrop-blur-[var(--hv-glass-blur)] sm:p-8 md:p-10 lg:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(20,184,166,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(34,211,238,0.06), transparent 50%)",
        }}
      />

      <QuoteMark className="relative text-accent/25" />

      <p className="relative mt-5 text-balance text-lg font-medium leading-relaxed tracking-tight text-[color:var(--hv-fg)] sm:mt-6 sm:text-xl md:text-2xl md:leading-[1.45] lg:text-[1.65rem]">
        “{item.quote}”
      </p>

      <footer className="relative mt-8 flex items-center gap-4 border-t border-[color:var(--hv-border)] pt-6 sm:mt-10 md:mt-12">
        <TestimonialAvatar item={item} />
        <div className="min-w-0">
          <cite className="block truncate text-base font-semibold not-italic tracking-tight text-[color:var(--hv-fg)] sm:text-lg">
            {item.name}
          </cite>
          <p className="mt-1 truncate text-sm text-[color:var(--hv-fg-muted)]">
            {item.role}
            {item.company ? ` · ${item.company}` : ""}
          </p>
        </div>
        {item.isPlaceholder ? null : (
          <span className="ml-auto hidden shrink-0 rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:inline-flex">
            {testimonialsSection.placeholderBadge}
          </span>
        )}
      </footer>
    </blockquote>
  );
}

/** Premium testimonial slider — glass cards, avatars, Framer transitions. */
export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = Boolean(useReducedMotion());
  const count = testimonials.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (count <= 1 || paused || reduce) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(id);
  }, [count, paused, reduce]);

  if (!count) {
    return (
      <section
        id="testimonials"
        className="hv-section-band cv-auto"
        aria-labelledby="testimonials-heading"
      >
        <Container>
          <FadeIn>
            <SectionHeading
              titleId="testimonials-heading"
              eyebrow={testimonialsSection.eyebrow}
              title={testimonialsSection.title}
              description={testimonialsSection.description}
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="mt-10 md:mt-12">
              <PendingSlot
                title="Verified quotes forthcoming"
                body="Client and collaborator feedback appears here only when approved for publication — no placeholder testimonials."
              />
            </div>
          </FadeIn>
        </Container>
      </section>
    );
  }

  const active = testimonials[index];

  const slideVariants = {
    enter: (dir: number) =>
      reduce
        ? { opacity: 0 }
        : { x: dir >= 0 ? 48 : -48, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: (dir: number) =>
      reduce
        ? { opacity: 0 }
        : { x: dir >= 0 ? -48 : 48, opacity: 0 },
  };

  return (
    <section
      id="testimonials"
      className="cv-auto hv-section-band relative overflow-hidden border-y border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/20"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_55%_80%_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)]"
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            titleId="testimonials-heading"
            eyebrow={testimonialsSection.eyebrow}
            title={testimonialsSection.title}
            description={testimonialsSection.description}
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative mx-auto mt-12 max-w-4xl md:mt-16">
            <div className="relative min-h-[18rem] sm:min-h-[20rem]" aria-live="polite">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <m.div
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: reduce ? 0.01 : motionDuration.base,
                    ease: easeOutPremium,
                  }}
                  className="w-full"
                >
                  <TestimonialCard item={active} />
                </m.div>
              </AnimatePresence>
            </div>

            {count > 1 ? (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-8">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-secondary)] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M15 18 9 12l6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-secondary)] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-label={`Show testimonial ${i + 1}`}
                      aria-selected={i === index}
                      onClick={() => goTo(i, i > index ? 1 : -1)}
                      className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                        i === index
                          ? "w-8 bg-accent shadow-[0_0_16px_rgba(20,184,166,0.45)]"
                          : "w-2.5 bg-[color:var(--hv-border-strong)] hover:bg-accent/50"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs font-medium tabular-nums text-[color:var(--hv-fg-muted)] sm:text-sm">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </p>
              </div>
            ) : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
