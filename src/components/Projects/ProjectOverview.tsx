import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";

type Props = {
  summary: string;
};

/** Executive summary — accent pull-quote on glass surface. */
export function ProjectOverview({ summary }: Props) {
  return (
    <CaseStudySection
      id="summary"
      title={projectsSection.sectionLabels.executiveSummary}
      surface
    >
      <blockquote className="relative border-l-2 border-accent/60 pl-5 md:pl-7">
        <p className="text-base leading-relaxed text-[color:var(--hv-fg)] md:text-lg md:leading-[1.75] lg:text-xl lg:leading-[1.7]">
          {summary}
        </p>
      </blockquote>
    </CaseStudySection>
  );
}
