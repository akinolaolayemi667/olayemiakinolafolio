import Link from "next/link";
import { TPortfolioProject } from "@type/Project";
import { projectsSection } from "@data/projects";

type Props = {
  project: TPortfolioProject;
  previous?: TPortfolioProject | null;
  next?: TPortfolioProject | null;
  className?: string;
};

/**
 * Prev / next + back-to-index navigation for case study pages.
 */
export function ProjectNavigation({
  project,
  previous = null,
  next = null,
  className = "",
}: Props) {
  const linkClass =
    "feature-card group flex min-h-11 flex-col rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:border-accent/40 hover:bg-accent/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-5";

  return (
    <nav
      aria-label="Case study navigation"
      className={`flex flex-col gap-4 md:gap-5 ${className}`}
    >
      <Link
        href="/projects"
        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        <span aria-hidden>←</span>
        {projectsSection.viewAllLabel}
      </Link>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className={linkClass}>
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
              Previous
            </span>
            <span className="mt-1.5 text-sm font-medium text-white transition-colors group-hover:text-accent">
              {previous.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" aria-hidden />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className={`${linkClass} sm:text-right`}
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
              Next
            </span>
            <span className="mt-1.5 text-sm font-medium text-white transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        ) : null}
      </div>

      <p className="sr-only">Current case study: {project.title}</p>
    </nav>
  );
}
