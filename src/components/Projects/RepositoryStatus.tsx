import { TProjectRepository } from "@type/Project";
import { projectsSection } from "@data/projects";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { RepositoryBadge } from "@components/Projects/RepositoryBadge";
import { PrimaryButton } from "@components/ui/PrimaryButton";

type Props = {
  repository: TProjectRepository;
  liveDemo?: { url: string; label?: string } | null;
};

/**
 * Repository status (public link or private/NDA notice) + optional live demo.
 */
export function RepositoryStatus({ repository, liveDemo = null }: Props) {
  const labels = projectsSection.sectionLabels;
  const showPublicRepo =
    repository.visibility === "public" && Boolean(repository.url);

  return (
    <div className="flex flex-col gap-12 md:gap-14">
      {liveDemo || showPublicRepo ? (
        <CaseStudySection
          id={liveDemo ? "demo" : "repository"}
          title={liveDemo ? labels.liveDemo : labels.repository}
        >
          <div className="flex flex-wrap gap-3">
            {liveDemo ? (
              <PrimaryButton href={liveDemo.url}>
                {liveDemo.label ?? labels.liveDemo}
              </PrimaryButton>
            ) : null}
            {showPublicRepo && repository.url ? (
              <PrimaryButton
                href={repository.url}
                variant={liveDemo ? "secondary" : "primary"}
              >
                {repository.label}
              </PrimaryButton>
            ) : null}
          </div>
        </CaseStudySection>
      ) : null}

      {!showPublicRepo ? (
        <CaseStudySection id="repository" title={labels.repository}>
          <RepositoryBadge repository={repository} />
        </CaseStudySection>
      ) : null}
    </div>
  );
}
