import { projectsSection } from "@data/projects";
import {
  CaseStudyBulletList,
  CaseStudySection,
} from "@components/Projects/CaseStudySection";

type Props = {
  problem: string;
  goals?: string[];
};

/** Business problem (+ optional goals). Skips empty problem copy. */
export function BusinessProblem({ problem, goals = [] }: Props) {
  const labels = projectsSection.sectionLabels;
  const hasProblem = Boolean(problem.trim());

  if (!hasProblem && goals.length === 0) return null;

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {hasProblem ? (
        <CaseStudySection id="problem" title={labels.businessProblem} surface>
          <p className="case-prose">{problem}</p>
        </CaseStudySection>
      ) : null}

      {goals.length > 0 ? (
        <CaseStudySection id="goals" title={labels.projectGoals} surface>
          <CaseStudyBulletList items={goals} />
        </CaseStudySection>
      ) : null}
    </div>
  );
}
