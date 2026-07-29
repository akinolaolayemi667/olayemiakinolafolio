import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { BusinessImpact } from "@components/Projects/BusinessImpact";

type Props = {
  results: string[];
  businessImpact: string[];
  outcomesAreEstimates?: boolean;
};

/** Results + business impact band — metrics / value presentation. */
export function ResultsSection({
  results,
  businessImpact,
  outcomesAreEstimates = false,
}: Props) {
  if (!results.length && !businessImpact.length) return null;

  return (
    <CaseStudySection
      id="impact"
      title={projectsSection.sectionLabels.resultsImpact}
    >
      <BusinessImpact
        results={results}
        businessImpact={businessImpact}
        showEstimatesDisclaimer={outcomesAreEstimates}
        estimatesDisclaimer={projectsSection.outcomesDisclaimer}
      />
    </CaseStudySection>
  );
}
