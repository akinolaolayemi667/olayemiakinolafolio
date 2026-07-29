"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { FadeIn, SectionFade, Stagger, StaggerItem } from "@components/ui/Motion";
import {
  engineeringTimelineSection,
  getEngineeringTimelineEntries,
  timelineKindLabels,
  type TEngineeringTimelineEntry,
  type TTimelineIcon,
  type TTimelineKind,
} from "@data/engineering-timeline";

type FilterKey = "all" | TTimelineKind;

function TimelineIcon({ icon }: { icon: TTimelineIcon }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "studio":
      return (
        <svg {...common}>
          <path d="M4 20h16M6 20V9l6-4 6 4v11" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "plan":
      return (
        <svg {...common}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="m12 3-8 4.5v9L12 21l8-4.5v-9L12 3Z" />
          <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <path d="M16 18 22 12 16 6" />
          <path d="M8 6 2 12l6 6" />
          <path d="m14.5 4-5 16" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      );
    case "automate":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.25" />
          <circle cx="18" cy="12" r="2.25" />
          <circle cx="6" cy="18" r="2.25" />
          <path d="M8.4 7.4 15.2 11M8.4 16.6 15.2 13" />
        </svg>
      );
    case "grow":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V5" />
          <path d="M17 16v-4" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M12 22a9 9 0 1 0-9-9c0 2.4 1.2 4.2 2.5 5.5L5 22l3.5-1.2c1 .4 2.1.7 3.5.7Z" />
        </svg>
      );
    case "test":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6l-4 8a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 18 17l-4-8V3" />
        </svg>
      );
    default:
      return null;
  }
}

const kindTone: Record<TTimelineKind, string> = {
  milestone: "border-accent/40 bg-accent/15 text-accent",
  journey: "border-cyan-400/35 bg-cyan-400/10 text-cyan-200",
  growth:
    "border-[color:var(--hv-border-strong)] bg-white/[0.05] text-[color:var(--hv-fg-secondary)]",
};

function TimelineCard({ entry }: { entry: TEngineeringTimelineEntry }) {
  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${kindTone[entry.kind]}`}
        >
          {timelineKindLabels[entry.kind]}
        </span>
        <span className="text-xs text-[color:var(--hv-fg-muted)] md:hidden">
          {entry.label}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)] md:text-xl md:leading-snug">
        {entry.title}
      </h3>
      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px] md:leading-relaxed">
        {entry.description}
      </p>

      {entry.href ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-0.5">
          {entry.href.startsWith("/projects/")
            ? "View case study"
            : entry.href === "/about"
              ? "About the practice"
              : "Continue"}
          <span aria-hidden>→</span>
        </span>
      ) : null}
    </>
  );

  const className =
    "feature-card group relative block overflow-hidden rounded-2xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] p-5 shadow-[var(--hv-shadow-md)] backdrop-blur-[var(--hv-glass-blur)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--hv-shadow-glow)] motion-reduce:transform-none sm:p-6 md:p-7";

  if (entry.href) {
    return (
      <Link href={entry.href} className={className}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.12), transparent 55%)",
          }}
        />
        <div className="relative">{body}</div>
      </Link>
    );
  }

  return (
    <article className={className}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.1), transparent 55%)",
        }}
      />
      <div className="relative">{body}</div>
    </article>
  );
}

/** Premium engineering timeline — milestones, journey, growth with scroll fill. */
export default function EngineeringTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fill, setFill] = useState(0);
  const [filter, setFilter] = useState<FilterKey>("all");
  const reduce = Boolean(useReducedMotion());

  const allEntries = useMemo(() => getEngineeringTimelineEntries(), []);
  const entries = useMemo(() => {
    if (filter === "all") return allEntries;
    return allEntries.filter((e) => e.kind === filter);
  }, [allEntries, filter]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) {
      setFill(100);
      return;
    }

    function onScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight * 0.35;
      const scrolled = Math.min(
        Math.max(-rect.top + window.innerHeight * 0.25, 0),
        total
      );
      setFill(total > 0 ? (scrolled / total) * 100 : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce, entries.length]);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "milestone", label: "Milestones" },
    { key: "journey", label: "Journey" },
    { key: "growth", label: "Growth" },
  ];

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="hv-section-band cv-auto relative overflow-hidden border-y border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/25"
      aria-labelledby="timeline-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_55%_80%_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)]"
      />

      <Container className="relative">
        <SectionFade>
          <SectionHeading
            titleId="timeline-heading"
            eyebrow={engineeringTimelineSection.eyebrow}
            title={engineeringTimelineSection.title}
            description={engineeringTimelineSection.description}
          />
        </SectionFade>

        <FadeIn delay={0.05}>
          <div
            className="mt-8 flex flex-wrap gap-2 md:mt-10"
            role="group"
            aria-label="Filter timeline entries"
          >
            {filters.map((item) => {
              const pressed = filter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setFilter(item.key)}
                  className={`min-h-10 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-11 sm:px-4 ${
                    pressed
                      ? "border-accent/45 bg-accent/15 text-[color:var(--hv-fg)]"
                      : "border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <Stagger as="ol" className="relative mt-12 space-y-0 md:mt-16" stagger={0.06}>
          <div
            aria-hidden
            className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-[color:var(--hv-border)] md:left-1/2 md:-translate-x-px"
          />
          <div
            aria-hidden
            className="absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-accent/20 motion-reduce:hidden md:left-1/2 md:-translate-x-px"
            style={{ transform: `scaleY(${fill / 100})` }}
          />

          {entries.map((entry, index) => {
            const onRight = index % 2 === 1;
            return (
              <StaggerItem
                key={entry.id}
                className="relative pb-10 last:pb-0 md:pb-14"
                y={18}
              >
                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:gap-6 lg:gap-10">
                  {/* Desktop left */}
                  <div className="hidden md:order-1 md:block">
                    {onRight ? (
                      <div className="pr-2 pt-2 text-right">
                        <p className="text-sm font-semibold tracking-tight text-accent">
                          {entry.label}
                        </p>
                      </div>
                    ) : (
                      <TimelineCard entry={entry} />
                    )}
                  </div>

                  {/* Spine node */}
                  <div className="relative z-10 flex items-start md:order-2 md:justify-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-[color:var(--hv-bg)] text-accent shadow-[0_0_22px_rgba(20,184,166,0.28)] md:h-11 md:w-11">
                      <TimelineIcon icon={entry.icon} />
                    </span>
                  </div>

                  {/* Desktop right + mobile card */}
                  <div className="min-w-0 md:order-3">
                    <div className="md:hidden">
                      <TimelineCard entry={entry} />
                    </div>
                    <div className="hidden md:block">
                      {onRight ? (
                        <TimelineCard entry={entry} />
                      ) : (
                        <div className="pl-2 pt-2">
                          <p className="text-sm font-semibold tracking-tight text-accent">
                            {entry.label}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {entries.length === 0 ? (
          <p className="mt-10 text-sm text-[color:var(--hv-fg-muted)]">
            No entries in this filter yet.
          </p>
        ) : null}

        {engineeringTimelineSection.ctaLabel &&
        engineeringTimelineSection.ctaHref ? (
          <FadeIn delay={0.06}>
            <div className="mt-12 md:mt-14">
              <PrimaryButton href={engineeringTimelineSection.ctaHref} glow>
                {engineeringTimelineSection.ctaLabel}
              </PrimaryButton>
            </div>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
