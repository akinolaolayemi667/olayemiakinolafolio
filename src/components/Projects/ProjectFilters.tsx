"use client";

import { ProjectCategory } from "@type/Project";
import { projectsSection } from "@data/projects";

type Props = {
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
  /** Only categories that currently have case studies. */
  categories: ProjectCategory[];
  className?: string;
};

/** Category filter chips for the portfolio index. */
export function ProjectFilters({
  active,
  onChange,
  categories,
  className = "",
}: Props) {
  const options: Array<ProjectCategory | "All"> = ["All", ...categories];

  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="group"
      aria-label="Filter case studies by category"
    >
      {options.map((category) => {
        const isActive = active === category;
        const label =
          category === "All" ? projectsSection.filterAllLabel : category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`inline-flex min-h-10 items-center rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
              isActive
                ? "border-accent/40 bg-accent/[0.12] text-accent"
                : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/20 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
