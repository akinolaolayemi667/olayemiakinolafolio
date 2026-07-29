import { projectsSection } from "@data/projects";
import {
  CaseStudyBulletList,
  CaseStudySection,
} from "@components/Projects/CaseStudySection";

type Props = {
  challenges: string[];
};

/** Engineering challenges list. */
export function EngineeringChallenges({ challenges }: Props) {
  if (!challenges.length) return null;

  return (
    <CaseStudySection
      id="challenges"
      title={projectsSection.sectionLabels.engineeringChallenges}
      surface
    >
      <CaseStudyBulletList items={challenges} />
    </CaseStudySection>
  );
}
