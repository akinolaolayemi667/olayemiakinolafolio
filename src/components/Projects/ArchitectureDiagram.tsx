import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";

type Props = {
  architecture: string;
  className?: string;
};

/**
 * Architecture overview.
 * Text-first diagram slot — extend with SVG/diagram asset via gallery later.
 */
export function ArchitectureDiagram({ architecture, className = "" }: Props) {
  return (
    <CaseStudySection
      id="architecture"
      title={projectsSection.sectionLabels.systemArchitecture}
      className={className}
    >
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-5 md:px-6">
        <p className="text-sm leading-relaxed text-white/80 md:text-[15px]">
          {architecture}
        </p>
      </div>
    </CaseStudySection>
  );
}
