import { TPortfolioProject } from "@type/Project";
import {
  getAdjacentProjects,
  getRelatedProjects,
} from "@data/projects";
import { Container } from "@components/ui/Container";
import { ProjectHero } from "@components/Projects/ProjectHero";
import { CaseStudySections } from "@components/Projects/CaseStudySections";
import { CaseStudyMotion } from "@components/Projects/CaseStudyMotion";
import { ProjectCTA } from "@components/Projects/ProjectCTA";
import { ProjectNavigation } from "@components/Projects/ProjectNavigation";
import { RelatedProjects } from "@components/Projects/RelatedProjects";
import { FadeIn } from "@components/ui/Motion";

type Props = {
  project: TPortfolioProject;
};

/**
 * Full case study detail — premium shell shared by all projects.
 * Presentation upgrade only; project content is unchanged.
 */
export default function CaseStudyView({ project }: Props) {
  const { previous, next } = getAdjacentProjects(project.slug);
  const related = getRelatedProjects(project, 2);
  const wideLayout = Boolean(
    project.workflowDiagram ||
      project.featureCards?.length ||
      project.engineeringTimeline?.length ||
      project.engineeringHighlights?.length ||
      project.roadmap?.length ||
      project.gallery.length > 1
  );

  return (
    <CaseStudyMotion>
      <div className="hv-page-shell relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[48vh] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,184,166,0.12),transparent_70%)]"
        />

        <a
          href="#case-study-main"
          className="absolute left-4 top-4 z-50 -translate-y-[200%] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Skip to case study content
        </a>

        <ProjectHero project={project} />

        <main
          id="case-study-main"
          className="relative py-14 sm:py-20 md:py-24 lg:py-28"
        >
          <Container>
            <div
              className={`mx-auto flex w-full flex-col ${
                wideLayout ? "max-w-5xl" : "max-w-3xl"
              }`}
            >
              <CaseStudySections project={project} />

              <FadeIn className="mt-20 md:mt-24" y={18}>
                <ProjectCTA />
              </FadeIn>

              <FadeIn className="mt-14 md:mt-16" y={16}>
                <ProjectNavigation
                  project={project}
                  previous={previous}
                  next={next}
                />
              </FadeIn>

              <RelatedProjects projects={related} />
            </div>
          </Container>
        </main>
      </div>
    </CaseStudyMotion>
  );
}
