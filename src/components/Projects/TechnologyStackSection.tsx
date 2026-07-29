"use client";

import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  items: string[];
};

/** Technology stack section — premium chip grid. */
export function TechnologyStackSection({ items }: Props) {
  if (!items.length) return null;

  return (
    <CaseStudySection
      id="stack"
      title={projectsSection.sectionLabels.technologyStack}
    >
      <Stagger
        as="ul"
        className="flex list-none flex-wrap gap-2.5 p-0 sm:gap-3"
        stagger={0.03}
      >
        {items.map((tech) => (
          <StaggerItem key={tech} as="li">
            <span className="inline-flex rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] px-3.5 py-2 text-sm font-medium text-[color:var(--hv-fg-secondary)] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-[color:var(--hv-fg)]">
              {tech}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </CaseStudySection>
  );
}
