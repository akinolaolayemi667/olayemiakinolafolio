import Link from "next/link";
import { TPortfolioProject } from "@type/Project";
import { projectsSection } from "@data/projects";

type Props = {
  project: TPortfolioProject;
  className?: string;
};

/** Compact live demo + public repo links for project cards. */
export function ProjectActionLinks({ project, className = "" }: Props) {
  const showRepo =
    project.repository.visibility === "public" && Boolean(project.repository.url);
  const demo = project.liveDemo;

  if (!demo && !showRepo) return null;

  const linkClass =
    "inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-ink/50 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:text-sm";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {demo ? (
        <Link
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <ExternalIcon />
          {demo.label ?? projectsSection.sectionLabels.liveDemo}
        </Link>
      ) : null}
      {showRepo && project.repository.url ? (
        <Link
          href={project.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <GitHubIcon />
          {project.repository.label}
        </Link>
      ) : null}
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 11 9l10-10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}
