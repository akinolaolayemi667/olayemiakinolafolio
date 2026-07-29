"use client";

import { TPortfolioProject } from "@type/Project";
import { projectsSection } from "@data/projects";
import { ProjectCard } from "@components/Projects/ProjectCard";
import { FadeIn } from "@components/ui/Motion";

type Props = {
  projects: TPortfolioProject[];
  title?: string;
  className?: string;
};

/** Related case studies grid — items from data helpers, not hardcoded. */
export function RelatedProjects({
  projects,
  title,
  className = "",
}: Props) {
  if (!projects.length) return null;

  const heading = title ?? projectsSection.relatedTitle;

  return (
    <FadeIn y={16}>
      <section
        className={`border-t border-white/5 pt-12 md:pt-16 ${className}`}
        aria-labelledby="related-projects-heading"
      >
        <h2
          id="related-projects-heading"
          className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {heading}
        </h2>

        <ul className="mt-6 grid list-none gap-5 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </FadeIn>
  );
}
