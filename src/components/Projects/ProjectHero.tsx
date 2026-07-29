import Link from "next/link";
import { TPortfolioProject } from "@type/Project";
import {
  getProjectHeroPrimaryCta,
  projectPendingCopy,
  projectsSection,
} from "@data/projects";
import { Container } from "@components/ui/Container";
import { StatusChip } from "@components/ui/StatusChip";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { TechnologyStack } from "@components/Projects/TechnologyStack";
import { ProjectHeroParallax } from "@components/Projects/ProjectHeroParallax";

type Props = {
  project: TPortfolioProject;
};

/** Full-bleed case study hero — premium banner, glass card, badges, and CTAs. */
export function ProjectHero({ project }: Props) {
  const hero = project.gallery[0];
  const statusLabel = project.projectStatus
    ? projectsSection.statusLabels[project.projectStatus]
    : null;
  const primaryCta = getProjectHeroPrimaryCta(project);

  return (
    <header className="relative overflow-hidden border-b border-[color:var(--hv-border)]">
      <div className="relative aspect-[21/9] min-h-[20rem] overflow-hidden sm:min-h-[24rem] md:min-h-[30rem] lg:min-h-[34rem]">
        {hero ? (
          <>
            <ProjectHeroParallax item={hero} />
            <div
              aria-hidden
              className="absolute inset-0 z-[1] bg-gradient-to-t from-[color:var(--hv-bg)] via-[color:var(--hv-bg)]/85 to-[color:var(--hv-bg)]/20"
            />
            <div
              aria-hidden
              className="hero-aurora hero-aurora-a pointer-events-none absolute z-[1] opacity-55"
            />
            <div
              aria-hidden
              className="hero-aurora hero-aurora-b pointer-events-none absolute z-[1] opacity-45"
            />
            {hero.isPlaceholder ? (
              <span className="absolute bottom-4 left-4 z-10 rounded-md border border-white/15 bg-[color:var(--hv-bg)]/80 px-2.5 py-1 text-[11px] font-medium text-white/75 backdrop-blur-md sm:bottom-6 sm:left-6">
                {projectsSection.screenshotPlaceholderLabel}
              </span>
            ) : null}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[color:var(--hv-surface)] via-[color:var(--hv-bg)] to-[color:var(--hv-bg)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse 50% 40% at 30% 40%, rgba(20,184,166,0.2), transparent 60%)",
              }}
            />
            <div className="relative z-10 max-w-md px-6 text-center">
              <p className="hv-eyebrow !text-accent/90">Forthcoming</p>
              <p className="mt-3 text-sm font-medium text-[color:var(--hv-fg-secondary)] md:text-base">
                {projectPendingCopy.mediaTitle}
              </p>
            </div>
          </div>
        )}
      </div>

      <Container className="relative -mt-36 pb-16 sm:-mt-40 md:-mt-48 md:pb-20 lg:-mt-52 lg:pb-24">
        <nav aria-label="Breadcrumb" className="reveal-up mb-8 md:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--hv-fg-muted)]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/projects"
                className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[color:var(--hv-fg-secondary)]" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        <div className="gradient-border case-surface card-premium reveal-up reveal-up-delay-1 relative overflow-hidden !rounded-[1.75rem] !p-6 shadow-[var(--hv-shadow-lg)] sm:!p-8 md:!p-10 lg:!p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 0% 0%, rgba(20,184,166,0.16), transparent 55%), radial-gradient(ellipse 50% 50% at 100% 100%, rgba(0,229,255,0.1), transparent 50%)",
            }}
          />

          <div className="relative">
            <div className="flex flex-wrap gap-2">
              {project.isRepresentative ? (
                <StatusChip
                  label={projectsSection.representativeBadge}
                  tone="neutral"
                />
              ) : null}
              {statusLabel ? (
                <StatusChip label={statusLabel} tone="brand" />
              ) : null}
              {project.platform ? (
                <StatusChip label={project.platform} tone="accent" />
              ) : null}
              <StatusChip label={project.category} tone="accent" />
              {project.year != null ? (
                <StatusChip label={String(project.year)} tone="neutral" />
              ) : null}
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-[length:var(--hv-text-display)] font-semibold tracking-[var(--hv-tracking-tight)] text-[color:var(--hv-fg)] leading-[var(--hv-leading-tight)] sm:mt-7 md:mt-8">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--hv-fg-secondary)] md:mt-5 md:text-lg lg:max-w-3xl lg:text-xl lg:leading-relaxed">
              {project.subtitle}
            </p>

            {project.technologyStack.length > 0 ? (
              <div className="reveal-up reveal-up-delay-2 mt-8 md:mt-10">
                <TechnologyStack items={project.technologyStack} />
              </div>
            ) : null}

            <div className="reveal-up reveal-up-delay-3 mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
              {primaryCta ? (
                <PrimaryButton href={primaryCta.href} glow>
                  {primaryCta.label}
                </PrimaryButton>
              ) : null}
              <PrimaryButton href="/projects" variant="secondary">
                {projectsSection.heroLabels.backToProjects}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
