import Image from "next/image";
import Link from "next/link";
import { TPortfolioProject } from "@type/Project";
import { projectPendingCopy, projectsSection } from "@data/projects";
import { StatusChip } from "@components/ui/StatusChip";
import { TechnologyStack } from "@components/Projects/TechnologyStack";
import { ProjectActionLinks } from "@components/Projects/ProjectActionLinks";
import { ProjectGalleryCarousel } from "@components/Projects/ProjectGalleryCarousel";
import { SurfaceCard } from "@components/ui/SurfaceCard";
import { TiltCard } from "@components/ui/TiltCard";

type Props = {
  project: TPortfolioProject;
};

/** Archive grid card linking to case study detail. */
export function ProjectCard({ project }: Props) {
  const hero = project.gallery[0];
  const href = `/projects/${project.slug}`;
  const statusLabel = project.projectStatus
    ? projectsSection.statusLabels[project.projectStatus]
    : null;

  return (
    <TiltCard className="h-full">
    <SurfaceCard className="!p-0 overflow-hidden h-full">
      <article className="flex h-full flex-col">
        <Link
          href={href}
          className="relative block aspect-[16/10] overflow-hidden bg-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
          aria-label={`${projectsSection.viewCaseStudyLabel}: ${project.title}`}
        >
          {hero ? (
            <>
              {project.gallery.length > 1 ? (
                <ProjectGalleryCarousel
                  items={project.gallery}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.03] motion-reduce:transform-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              )}
              {hero.isPlaceholder ? (
                <span className="absolute bottom-3 left-3 rounded-md border border-white/15 bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-white/75 backdrop-blur-md">
                  {projectsSection.screenshotPlaceholderLabel}
                </span>
              ) : null}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface/80 to-ink px-4 text-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/90">
                  Forthcoming
                </p>
                <p className="mt-1.5 text-xs text-white/70">
                  {projectPendingCopy.mediaTitle}
                </p>
              </div>
            </div>
          )}
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {project.isRepresentative ? (
              <StatusChip
                label={projectsSection.representativeBadge}
                tone="neutral"
              />
            ) : null}
            <StatusChip label={project.category} tone="accent" />
            {statusLabel ? <StatusChip label={statusLabel} /> : null}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-white">
            <Link
              href={href}
              className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {project.title}
            </Link>
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          {project.technologyStack.length > 0 ? (
            <TechnologyStack
              className="mt-auto pt-2"
              items={project.technologyStack.slice(0, 5)}
            />
          ) : null}

          <ProjectActionLinks project={project} className="pt-1" />
        </div>
      </article>
    </SurfaceCard>
    </TiltCard>
  );
}
