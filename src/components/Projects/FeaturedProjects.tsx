"use client";

import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { SectionBridge } from "@components/ui/SectionBridge";
import { CaseStudyPreview } from "@components/Projects/CaseStudyPreview";
import { SectionFade, ScrollParallax } from "@components/ui/Motion";
import { MotionProvider } from "@components/ui/MotionProvider";
import { getFeaturedProjects, projectsSection } from "@data/projects";

/** Home flagship case study showcase (featured projects only). */
export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <MotionProvider>
      <section
        id="work"
        className="hv-section-band cv-auto relative overflow-hidden"
        aria-labelledby="work-heading"
      >
        <ScrollParallax
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          offset={28}
        >
          <div
            aria-hidden
            className="h-full w-full bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(20,184,166,0.1),transparent_70%)]"
          />
        </ScrollParallax>
        <Container className="relative">
          <SectionFade>
            <SectionHeading
              titleId="work-heading"
              eyebrow={projectsSection.eyebrow}
              title={projectsSection.title}
              description={projectsSection.description}
            />
          </SectionFade>

          {featured.length === 0 ? (
            <p className="mt-12 text-sm text-[color:var(--hv-fg-muted)]">
              Flagship case studies will appear here when marked featured and
              ready.
            </p>
          ) : (
            <ul className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 lg:gap-20">
              {featured.map((project, index) => (
                <li key={project.id}>
                  <CaseStudyPreview project={project} index={index} />
                </li>
              ))}
            </ul>
          )}

          <SectionBridge
            className="mt-14 md:mt-16"
            hint={projectsSection.viewAllHint}
            label={projectsSection.viewAllLabel}
            href="/projects"
          />
        </Container>
      </section>
    </MotionProvider>
  );
}
