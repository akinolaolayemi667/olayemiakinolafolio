import { projectsSection } from "@data/projects";
import {
  CaseStudyBulletList,
  CaseStudySection,
} from "@components/Projects/CaseStudySection";

type Props = {
  solution: string;
  responsibilities?: string[];
};

/** Solution narrative + optional role responsibilities. Skips empty solution copy. */
export function SolutionSection({ solution, responsibilities = [] }: Props) {
  const labels = projectsSection.sectionLabels;
  const hasSolution = Boolean(solution.trim());

  if (!hasSolution && responsibilities.length === 0) return null;

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {hasSolution ? (
        <CaseStudySection id="solution" title={labels.solution} surface>
          <p className="case-prose">{solution}</p>
        </CaseStudySection>
      ) : null}

      {responsibilities.length > 0 ? (
        <CaseStudySection id="role" title={labels.myRole} surface>
          <CaseStudyBulletList items={responsibilities} />
        </CaseStudySection>
      ) : null}
    </div>
  );
}
