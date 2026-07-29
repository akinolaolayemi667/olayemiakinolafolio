"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ProjectCategory,
  PROJECT_CATEGORIES,
  TPortfolioProject,
} from "@type/Project";
import { projectsSection } from "@data/projects";
import { ProjectFilters } from "@components/Projects/ProjectFilters";
import { ProjectCard } from "@components/Projects/ProjectCard";

function parseCategory(
  raw: string | null,
  available: ProjectCategory[]
): ProjectCategory | "All" {
  if (!raw || raw === "All") return "All";
  return available.includes(raw as ProjectCategory)
    ? (raw as ProjectCategory)
    : "All";
}

function filterList(
  projects: TPortfolioProject[],
  category: ProjectCategory | "All"
) {
  if (category === "All") return projects;
  return projects.filter(
    (project) =>
      project.category === category || project.categories.includes(category)
  );
}

type Props = {
  /** Serialized project list from the RSC shell (avoids re-bundling helpers). */
  projects: TPortfolioProject[];
};

/** Client island: URL-synced filters + project grid only. */
export function PortfolioBrowser({ projects }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const availableCategories = useMemo(() => {
    const used = new Set<ProjectCategory>();
    for (const project of projects) {
      used.add(project.category);
      for (const tag of project.categories) used.add(tag);
    }
    return PROJECT_CATEGORIES.filter((category) => used.has(category));
  }, [projects]);

  const active = parseCategory(
    searchParams.get("category"),
    availableCategories
  );

  const filtered = useMemo(
    () => filterList(projects, active),
    [projects, active]
  );

  const onChange = useCallback(
    (category: ProjectCategory | "All") => {
      const params = new URLSearchParams(searchParams.toString());
      if (category === "All") {
        params.delete("category");
      } else {
        params.set("category", category);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  return (
    <>
      <ProjectFilters
        className="mt-10"
        active={active}
        onChange={onChange}
        categories={availableCategories}
      />

      <div className="mt-12 md:mt-16" aria-live="polite">
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
            <p className="text-base text-white/85">
              {projectsSection.emptyFilterTitle}
            </p>
            <p className="mt-3 text-sm text-muted">
              {projectsSection.emptyFilterBody}
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {filtered.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
