"use client";

import { TEngineeringHighlight } from "@type/Project";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { HighlightCard } from "@components/premium/HighlightCard";
import { projectsSection } from "@data/projects";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  highlights: TEngineeringHighlight[];
  className?: string;
};

/** Premium engineering highlights grid — capability cards with glow hover. */
export function EngineeringHighlights({ highlights, className = "" }: Props) {
  if (!highlights.length) return null;

  return (
    <CaseStudySection
      id="engineering-highlights"
      title={projectsSection.sectionLabels.engineeringHighlights}
      className={className}
    >
      <Stagger
        as="ul"
        className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        stagger={0.05}
      >
        {highlights.map((item, index) => (
          <StaggerItem key={item.id} y={16}>
            <HighlightCard
              index={index + 1}
              title={item.title}
              description={item.description}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </CaseStudySection>
  );
}
