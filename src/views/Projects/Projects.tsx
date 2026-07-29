import { Suspense } from "react";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { PortfolioBrowser } from "@components/Projects/PortfolioBrowser";
import { ProjectCTA } from "@components/Projects/ProjectCTA";
import {
  getAllPortfolioProjects,
  projectsSection,
} from "@data/projects";

/** Portfolio index — RSC shell + tiny URL-filter client island. */
export default function ProjectsIndex() {
  const projects = getAllPortfolioProjects();

  return (
    <div className="hv-page-shell">
      <section
        className="hv-section-band border-b border-[color:var(--hv-border)]"
        aria-labelledby="projects-heading"
      >
        <Container>
          <SectionHeading
            titleId="projects-heading"
            eyebrow={projectsSection.archiveEyebrow}
            title={projectsSection.archiveTitle}
            description={projectsSection.archiveDescription}
          />
          <Suspense
            fallback={
              <div
                className="hv-skeleton mt-10 h-40 w-full"
                aria-hidden
              />
            }
          >
            <PortfolioBrowser projects={projects} />
          </Suspense>
        </Container>
      </section>

      <section className="hv-section-sm">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ProjectCTA />
          </div>
        </Container>
      </section>
    </div>
  );
}
