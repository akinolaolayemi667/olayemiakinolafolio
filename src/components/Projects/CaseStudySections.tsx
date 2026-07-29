import { TPortfolioProject } from "@type/Project";
import {
  isCaseStudyNarrativeReady,
  projectPendingCopy,
  projectsSection,
} from "@data/projects";
import { ProjectOverview } from "@components/Projects/ProjectOverview";
import { BusinessProblem } from "@components/Projects/BusinessProblem";
import { SolutionSection } from "@components/Projects/SolutionSection";
import { ArchitectureFlowDiagram } from "@components/Projects/ArchitectureFlowDiagram";
import { WorkflowDiagram } from "@components/Projects/WorkflowDiagram";
import { EngineeringTimeline } from "@components/Projects/EngineeringTimeline";
import { SupplementaryTabs } from "@components/Projects/SupplementaryTabs";
import { GalleryLightbox } from "@components/Projects/GalleryLightbox";
import { TechnologyStackSection } from "@components/Projects/TechnologyStackSection";
import { FeatureGrid } from "@components/Projects/FeatureGrid";
import { FeatureCards } from "@components/Projects/FeatureCards";
import { EngineeringHighlights } from "@components/Projects/EngineeringHighlights";
import { EngineeringChallenges } from "@components/Projects/EngineeringChallenges";
import { LessonsLearned } from "@components/Projects/LessonsLearned";
import { RoadmapCards } from "@components/Projects/RoadmapCards";
import { ResultsSection } from "@components/Projects/ResultsSection";
import { ProjectGallery } from "@components/Projects/ProjectGallery";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { RepositoryStatus } from "@components/Projects/RepositoryStatus";
import { PendingSlot } from "@components/Projects/PendingSlot";

type Props = {
  project: TPortfolioProject;
};

/**
 * Composes modular, data-driven case study sections in storytelling order.
 * Empty narrative/outcome/gallery fields show forthcoming slots — never invented content.
 */
export function CaseStudySections({ project }: Props) {
  const hasNarrative = isCaseStudyNarrativeReady(project);

  const hasOutcomes =
    project.results.length > 0 || project.businessImpact.length > 0;

  const lessonsSection = project.supplementarySections?.find(
    (section) => section.id === "lessons-learned"
  );
  const remainingSupplementary =
    project.supplementarySections?.filter((section) => {
      if (section.id === "lessons-learned") return false;
      if (project.roadmap?.length && section.id === "future-improvements") {
        return false;
      }
      return true;
    }) ?? [];

  return (
    <div className="flex flex-col">
      <div className="case-study-band mx-auto flex w-full max-w-3xl flex-col gap-14 md:gap-16">
        <ProjectOverview summary={project.summary} />

        {project.problem.trim() || project.goals.length > 0 ? (
          <BusinessProblem problem={project.problem} goals={project.goals} />
        ) : null}

        {project.solution.trim() || project.responsibilities.length > 0 ? (
          <SolutionSection
            solution={project.solution}
            responsibilities={project.responsibilities}
          />
        ) : null}
      </div>

      {project.workflowDiagram ? (
        <div className="case-study-band">
          <WorkflowDiagram diagram={project.workflowDiagram} />
        </div>
      ) : project.architecture.trim() ? (
        <div className="case-study-band">
          <ArchitectureFlowDiagram architecture={project.architecture} />
        </div>
      ) : null}

      {project.engineeringTimeline?.length ? (
        <div className="case-study-band">
          <EngineeringTimeline phases={project.engineeringTimeline} />
        </div>
      ) : null}

      {project.technologyStack.length > 0 ? (
        <div className="case-study-band mx-auto w-full max-w-3xl">
          <TechnologyStackSection items={project.technologyStack} />
        </div>
      ) : null}

      {project.featureCards?.length || project.features.length ? (
        <div className="case-study-band">
          {project.featureCards?.length ? (
            <FeatureCards cards={project.featureCards} />
          ) : (
            <FeatureGrid features={project.features} />
          )}
        </div>
      ) : null}

      {project.engineeringHighlights?.length ? (
        <div className="case-study-band">
          <EngineeringHighlights highlights={project.engineeringHighlights} />
        </div>
      ) : null}

      {project.engineeringChallenges.length > 0 ? (
        <div className="case-study-band mx-auto w-full max-w-3xl">
          <EngineeringChallenges challenges={project.engineeringChallenges} />
        </div>
      ) : null}

      {lessonsSection?.items.length ? (
        <div className="case-study-band mx-auto w-full max-w-3xl">
          <LessonsLearned lessons={lessonsSection.items} />
        </div>
      ) : null}

      {project.roadmap?.length ? (
        <div className="case-study-band">
          <RoadmapCards items={project.roadmap} />
        </div>
      ) : null}

      {remainingSupplementary.length ? (
        <div className="case-study-band mx-auto w-full max-w-3xl">
          <SupplementaryTabs sections={remainingSupplementary} />
        </div>
      ) : null}

      {!hasNarrative ? (
        <div className="case-study-band mx-auto w-full max-w-3xl">
          <PendingSlot
            title={projectPendingCopy.narrativeTitle}
            body={projectPendingCopy.narrativeBody}
          />
        </div>
      ) : null}

      <div className="case-study-band mx-auto flex w-full max-w-3xl flex-col gap-14 md:gap-16">
        {hasOutcomes ? (
          <ResultsSection
            results={project.results}
            businessImpact={project.businessImpact}
            outcomesAreEstimates={project.outcomesAreEstimates}
          />
        ) : (
          <CaseStudySection
            id="impact"
            title={projectsSection.sectionLabels.resultsImpact}
          >
            <PendingSlot
              title={projectPendingCopy.outcomesTitle}
              body={projectPendingCopy.outcomesBody}
            />
          </CaseStudySection>
        )}
      </div>

      <div className="case-study-band w-full">
        <CaseStudySection
          id="gallery"
          title={projectsSection.sectionLabels.gallery}
        >
          {project.gallery.length > 0 ? (
            <GalleryLightbox items={project.gallery}>
              <ProjectGallery items={project.gallery} />
            </GalleryLightbox>
          ) : (
            <PendingSlot
              title={projectPendingCopy.mediaTitle}
              body={projectPendingCopy.mediaBody}
            />
          )}
        </CaseStudySection>
      </div>

      <div className="case-study-band mx-auto flex w-full max-w-3xl flex-col gap-12 md:gap-14">
        <RepositoryStatus
          repository={project.repository}
          liveDemo={project.liveDemo}
        />

        {project.testimonial ? (
          <blockquote className="gradient-border case-surface">
            <p className="text-base leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-lg">
              “{project.testimonial.quote}”
            </p>
            <footer className="mt-4 text-sm text-[color:var(--hv-fg-muted)]">
              <cite className="not-italic text-[color:var(--hv-fg-secondary)]">
                {project.testimonial.name}
              </cite>
              {" — "}
              {project.testimonial.role}, {project.testimonial.company}
            </footer>
          </blockquote>
        ) : null}
      </div>
    </div>
  );
}
