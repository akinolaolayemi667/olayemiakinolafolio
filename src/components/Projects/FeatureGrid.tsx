"use client";

import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  features: string[];
};

/** Key features as a responsive premium grid (string list fallback). */
export function FeatureGrid({ features }: Props) {
  if (!features.length) return null;

  return (
    <CaseStudySection
      id="features"
      title={projectsSection.sectionLabels.keyFeatures}
    >
      <Stagger
        as="ul"
        className="grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4"
        stagger={0.04}
      >
        {features.map((feature, index) => (
          <StaggerItem key={feature}>
            <article className="feature-card gradient-border group relative h-full overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.1), transparent 60%)",
                }}
              />
              <div className="relative flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-[10px] font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                  {feature}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </CaseStudySection>
  );
}
