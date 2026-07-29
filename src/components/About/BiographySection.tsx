"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { aboutBio } from "@data/about";
import { profile } from "@data/profile";
import { getFeaturedProjects } from "@data/projects";
import { engineeringSkills } from "@data/skills";
import { expertiseHubCategories } from "@data/expertise-hub";
import { FadeIn, Stagger, StaggerItem } from "@components/ui/Motion";
import { MotionProvider } from "@components/ui/MotionProvider";
import { MagneticButton } from "@components/ui/MagneticButton";

/**
 * About storytelling intro — portrait, narrative, philosophy, and live stats.
 * Presentation upgrade only; copy comes from existing profile / about data.
 */
export default function BiographySection() {
  const reduce = Boolean(useReducedMotion());
  const featuredCount = getFeaturedProjects().length;
  const skillCount = engineeringSkills.length;
  const focusAreas = expertiseHubCategories.length;

  const stats = [
    { label: "Practice", value: profile.brand },
    { label: "Reach", value: "Remote worldwide" },
    {
      label: "Featured work",
      value: featuredCount > 0 ? String(featuredCount) : "—",
    },
    {
      label: "Core skills",
      value: skillCount > 0 ? String(skillCount) : "—",
    },
    {
      label: "Focus areas",
      value: focusAreas > 0 ? String(focusAreas) : "—",
    },
    {
      label: "Status",
      value: "Available",
    },
  ];

  const [greeting, ...story] = aboutBio.paragraphs;

  return (
    <MotionProvider>
      <section
        className="relative"
        aria-labelledby="about-bio-heading"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Narrative column */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <FadeIn>
              <p className="hv-eyebrow !text-accent">Founder story</p>
              <h1
                id="about-bio-heading"
                className="mt-4 hv-heading-xl text-balance"
              >
                {aboutBio.heading}
              </h1>
              <p className="mt-4 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-xl md:text-2xl">
                {profile.title}
              </p>
              <p className="mt-2 text-sm text-[color:var(--hv-fg-muted)] md:text-base">
                {profile.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-8 md:mt-10">
              <p className="text-lg font-medium leading-relaxed text-[color:var(--hv-fg)] md:text-xl">
                {greeting}
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="mt-6">
              <div className="space-y-5 text-base leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-lg md:leading-relaxed">
                {story.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            {/* Engineering philosophy */}
            <FadeIn delay={0.16} className="mt-10 md:mt-12">
              <article className="gradient-border case-surface relative overflow-hidden !p-6 sm:!p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                />
                <p className="hv-eyebrow !text-accent/90">Engineering philosophy</p>
                <p className="mt-4 text-base font-medium leading-relaxed text-[color:var(--hv-fg)] md:text-lg">
                  {profile.mission}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base">
                  {profile.vision}
                </p>
                <p className="mt-5 border-t border-[color:var(--hv-border)] pt-5 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                  {profile.valueProposition}
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8 md:mt-10">
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <MagneticButton href="/#work" glow>
                  Selected work
                </MagneticButton>
                <MagneticButton href="/connect" variant="secondary">
                  Start a project
                </MagneticButton>
                <Link
                  href="/work"
                  className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Experience timeline →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Portrait + stats */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <FadeIn scale className="flex flex-col items-center gap-8 lg:items-stretch lg:gap-10">
              <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
                <m.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-cyan-400/10 to-transparent opacity-80 blur-xl motion-reduce:opacity-40"
                  animate={
                    reduce
                      ? undefined
                      : {
                          opacity: [0.55, 0.85, 0.55],
                          scale: [1, 1.03, 1],
                        }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }
                />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--hv-border-strong)] bg-[color:var(--hv-glass-bg)] shadow-[var(--hv-shadow-lg)] backdrop-blur-sm">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={profile.avatarSrc}
                      alt={profile.avatarAlt}
                      fill
                      priority
                      decoding="async"
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 300px, 400px"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--hv-bg)]/80 via-transparent to-accent/5"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-lg font-semibold tracking-tight text-white">
                      {profile.brand}
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {profile.name}
                    </p>
                    <p className="mt-3 text-xs text-white/55">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-accent/35 bg-[color:var(--hv-bg)]/90 px-3.5 py-1.5 text-[length:var(--hv-text-xs)] font-medium text-accent shadow-lg backdrop-blur-md sm:text-sm">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none"
                    aria-hidden
                  />
                  Studio practice
                </div>
              </div>

              <Stagger
                className="mt-4 grid w-full grid-cols-2 gap-3 sm:gap-4"
                stagger={0.05}
              >
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <article className="feature-card gradient-border h-full rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--hv-fg-muted)]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-base">
                        {stat.value}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeIn>
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
