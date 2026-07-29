"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { TPortfolioProject } from "@type/Project";
import { projectPendingCopy, projectsSection } from "@data/projects";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { ProjectBadge, TechBadge } from "@components/premium";
import { MediaFrame } from "@components/brand/MediaFrame";
import { FadeIn } from "@components/ui/Motion";

type Props = {
  project: TPortfolioProject;
  index?: number;
};

/**
 * Home flagship preview — glass card with large thumbnail, badges, chips, and CTAs.
 * Case study routes remain `/projects/[slug]`.
 */
export function CaseStudyPreview({ project, index = 0 }: Props) {
  const reduce = Boolean(useReducedMotion());
  const hero = project.gallery[0];
  const href = `/projects/${project.slug}`;
  const statusLabel = project.projectStatus
    ? projectsSection.statusLabels[project.projectStatus]
    : null;

  const showRepo =
    project.repository.visibility === "public" &&
    Boolean(project.repository.url);
  const demo = project.liveDemo;
  const imageLeft = index % 2 === 0;

  return (
    <FadeIn y={22} delay={Math.min(index * 0.07, 0.21)}>
      <m.article
        className="featured-project-card group relative overflow-hidden rounded-[1.75rem]"
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        {/* Animated gradient border shell */}
        <div
          aria-hidden
          className="featured-project-border pointer-events-none absolute inset-0 rounded-[1.75rem]"
        />

        <div className="relative m-px overflow-hidden rounded-[calc(1.75rem-1px)] border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] shadow-[var(--hv-shadow-lg)] backdrop-blur-[var(--hv-glass-blur)]">
          {/* Gradient accent wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(20,184,166,0.12),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(34,211,238,0.08),transparent_50%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div
            className={`relative grid lg:grid-cols-2 ${
              imageLeft ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            {/* Large thumbnail */}
            <div className="relative flex min-h-[17rem] items-center bg-[color:var(--hv-bg)]/40 p-4 sm:min-h-[20rem] sm:p-5 lg:min-h-[24rem] lg:p-6 xl:min-h-[26rem]">
              {hero ? (
                <MediaFrame
                  className="w-full"
                  pathLabel={`/projects/${project.slug}`}
                  glow={false}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={hero.src}
                      alt={hero.alt}
                      fill
                      className="hv-image-zoom object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                      priority={index === 0}
                    />
                    {hero.isPlaceholder ? (
                      <span className="absolute bottom-3 left-3 rounded-md border border-[color:var(--hv-border)] bg-[color:var(--hv-ink)]/80 px-2.5 py-1 text-[11px] font-medium text-[color:var(--hv-fg-muted)] backdrop-blur-md">
                        {projectsSection.screenshotPlaceholderLabel}
                      </span>
                    ) : null}
                  </div>
                </MediaFrame>
              ) : (
                <div className="flex w-full flex-1 items-center justify-center rounded-2xl border border-dashed border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/40 py-16">
                  <div className="relative z-10 max-w-xs px-5 text-center">
                    <p className="hv-eyebrow">Forthcoming</p>
                    <p className="mt-2 text-sm text-[color:var(--hv-fg-secondary)]">
                      {projectPendingCopy.mediaTitle}
                    </p>
                  </div>
                </div>
              )}

              {/* Floating badge strip on media (mobile) */}
              <div className="absolute left-6 top-6 flex flex-wrap gap-2 lg:hidden">
                {statusLabel ? (
                  <ProjectBadge label={statusLabel} tone="brand" leading="dot" />
                ) : null}
                <ProjectBadge label={project.category} tone="accent" />
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center gap-5 p-6 sm:gap-6 sm:p-8 md:p-10 lg:p-11">
              <div className="hidden flex-wrap items-center gap-2 lg:flex">
                {statusLabel ? (
                  <ProjectBadge label={statusLabel} tone="brand" leading="dot" />
                ) : null}
                <ProjectBadge label={project.category} tone="accent" />
                {project.isRepresentative ? (
                  <ProjectBadge
                    label={projectsSection.representativeBadge}
                    tone="neutral"
                  />
                ) : null}
                {project.year != null ? (
                  <ProjectBadge label={String(project.year)} tone="muted" />
                ) : null}
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--hv-fg)] md:text-3xl lg:text-[2rem] lg:leading-tight">
                  <Link
                    href={href}
                    className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hv-bg)]"
                  >
                    {project.title}
                  </Link>
                </h3>
                {project.subtitle ? (
                  <p className="mt-2 text-sm text-[color:var(--hv-fg-muted)] md:text-base">
                    {project.subtitle}
                  </p>
                ) : null}
              </div>

              <p className="text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px] md:leading-relaxed">
                {project.summary}
              </p>

              {project.technologyStack.length > 0 ? (
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={projectsSection.sectionLabels.technologyStack}
                >
                  {project.technologyStack.slice(0, 7).map((tech) => (
                    <li key={tech}>
                      <TechBadge label={tech} size="md" />
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Actions: Case Study · Live demo · GitHub */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                <PrimaryButton href={href} glow>
                  {projectsSection.viewCaseStudyLabel}
                </PrimaryButton>

                {demo ? (
                  <PrimaryButton
                    href={demo.url}
                    variant="secondary"
                    ariaLabel={demo.label ?? projectsSection.sectionLabels.liveDemo}
                  >
                    <ExternalIcon />
                    {demo.label ?? projectsSection.sectionLabels.liveDemo}
                  </PrimaryButton>
                ) : (
                  <span
                    className="hv-btn hv-btn-secondary pointer-events-none inline-flex items-center gap-1.5 opacity-50"
                    aria-disabled="true"
                    title={projectPendingCopy.mediaTitle}
                  >
                    <ExternalIcon />
                    {projectsSection.sectionLabels.liveDemo}
                  </span>
                )}

                {showRepo && project.repository.url ? (
                  <PrimaryButton
                    href={project.repository.url}
                    variant="ghost"
                    ariaLabel={project.repository.label}
                  >
                    <GitHubIcon />
                    GitHub
                  </PrimaryButton>
                ) : (
                  <span
                    className="hv-btn hv-btn-ghost pointer-events-none inline-flex items-center gap-1.5 opacity-50"
                    aria-disabled="true"
                    title={project.repository.label}
                  >
                    <GitHubIcon />
                    {project.repository.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </m.article>
    </FadeIn>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 11 9l10-10" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}
