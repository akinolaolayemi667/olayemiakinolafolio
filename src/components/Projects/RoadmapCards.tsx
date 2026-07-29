"use client";

import { TRoadmapItem } from "@type/Project";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { StatusChip } from "@components/ui/StatusChip";
import { projectsSection } from "@data/projects";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  items: TRoadmapItem[];
  className?: string;
};

const statusLabel: Record<TRoadmapItem["status"], string> = {
  planned: "Planned",
  explored: "Explored",
};

/** Enterprise SaaS-style product roadmap — future expansions, not shipped features. */
export function RoadmapCards({ items, className = "" }: Props) {
  if (!items.length) return null;

  return (
    <CaseStudySection
      id="roadmap"
      title={projectsSection.sectionLabels.roadmap}
      className={className}
    >
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:mb-8 md:text-[15px]">
        Expansion opportunities beyond the shipped ManyChat workflow. Items
        below are planned or explored — not implemented in this engagement.
      </p>

      <Stagger
        as="ul"
        className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        stagger={0.05}
      >
        {items.map((item, index) => (
          <StaggerItem key={item.id} y={16}>
            <article className="feature-card group gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl border-dashed p-5 opacity-95 transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-100 motion-reduce:transform-none sm:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.12), transparent 60%)",
                }}
              />

              <div className="relative flex flex-1 flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-[11px] font-semibold tracking-wider text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <StatusChip
                    label={statusLabel[item.status]}
                    tone={item.status === "planned" ? "accent" : "neutral"}
                  />
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-[color:var(--hv-fg)]">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)]">
                  {item.description}
                </p>

                <div
                  aria-hidden
                  className="mt-5 h-px w-full bg-gradient-to-r from-accent/40 via-white/10 to-transparent"
                />
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--hv-fg-muted)]">
                  Not shipped
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </CaseStudySection>
  );
}
