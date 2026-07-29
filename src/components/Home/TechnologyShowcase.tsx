"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FadeIn, SectionFade } from "@components/ui/Motion";
import { SectionBridge } from "@components/ui/SectionBridge";
import { TechLogo } from "@components/expertise/techLogos";
import {
  getProjectsUsingTechnology,
  showcaseCategories,
  showcaseTechnologies,
  technologyShowcaseSection,
  type TShowcaseCategoryId,
  type TShowcaseTechnology,
} from "@data/technology-showcase";

type FilterKey = "all" | TShowcaseCategoryId;

function TechGlyph({ tech }: { tech: TShowcaseTechnology }) {
  if (tech.icon) {
    return (
      <Image
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        src={tech.icon}
        alt=""
        loading="lazy"
        decoding="async"
        sizes="40px"
      />
    );
  }

  if (tech.logoId) {
    return <TechLogo id={tech.logoId} className="h-9 w-9" title={tech.name} />;
  }

  const monogram = tech.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-bg)]/70 text-xs font-semibold tracking-wide text-accent"
      aria-hidden
    >
      {monogram}
    </span>
  );
}

function TechnologyCard({
  tech,
  index,
  reduceMotion,
}: {
  tech: TShowcaseTechnology;
  index: number;
  reduceMotion: boolean;
}) {
  const related = getProjectsUsingTechnology(tech);
  const categoryLabel =
    showcaseCategories.find((c) => c.id === tech.category)?.label ??
    tech.category;

  return (
    <m.li
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-28px 0px", amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.45,
              delay: Math.min(index * 0.04, 0.32),
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] p-5 shadow-[var(--hv-shadow-md)] backdrop-blur-[var(--hv-glass-blur)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--hv-shadow-glow)] motion-reduce:transform-none sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(20,184,166,0.14), transparent 55%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
            <TechGlyph tech={tech} />
          </span>
          <span className="rounded-md border border-[color:var(--hv-border)] bg-white/[0.03] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--hv-fg-muted)]">
            {categoryLabel}
          </span>
        </div>

        <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)]">
          {tech.name}
        </h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)]">
          {tech.description}
        </p>

        <div className="relative mt-5 border-t border-[color:var(--hv-border)] pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--hv-fg-muted)]">
            Projects used in
          </p>
          {related.length > 0 ? (
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {related.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex max-w-full truncate rounded-lg border border-[color:var(--hv-border)] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-[color:var(--hv-fg-muted)] transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--hv-fg-muted)]">
              Used in studio delivery — not yet tagged on a published case
              study.
            </p>
          )}
        </div>
      </article>
    </m.li>
  );
}

/** Categorized technology showcase — logos, descriptions, and project links. */
export default function TechnologyShowcase() {
  const [active, setActive] = useState<FilterKey>("all");
  const reduceMotion = Boolean(useReducedMotion());

  const items = useMemo(() => {
    if (active === "all") return showcaseTechnologies;
    return showcaseTechnologies.filter((t) => t.category === active);
  }, [active]);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    ...showcaseCategories.map((c) => ({
      key: c.id as FilterKey,
      label: c.label,
    })),
  ];

  return (
    <section
      id="technology-ecosystem"
      className="hv-section-band cv-auto relative overflow-hidden"
      aria-labelledby="technology-showcase-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)]"
      />

      <Container className="relative">
        <SectionFade>
          <SectionHeading
            titleId="technology-showcase-heading"
            eyebrow={technologyShowcaseSection.eyebrow}
            title={technologyShowcaseSection.title}
            description={technologyShowcaseSection.description}
          />
        </SectionFade>

        <FadeIn delay={0.05}>
          <div
            className="mt-8 flex flex-wrap gap-2 md:mt-10"
            role="group"
            aria-label="Filter technologies by category"
          >
            {filters.map((filter) => {
              const pressed = active === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActive(filter.key)}
                  className={`min-h-10 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-11 sm:px-4 ${
                    pressed
                      ? "border-accent/45 bg-accent/15 text-[color:var(--hv-fg)] shadow-[0_0_24px_rgba(20,184,166,0.12)]"
                      : "border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <ul
          className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5"
          aria-live="polite"
        >
          {items.map((tech, index) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>

        <FadeIn delay={0.08}>
          <div className="mt-12 md:mt-14">
            <SectionBridge
              label="Discuss your stack"
              href="#contact"
              hint="Tell us what you need to build or automate."
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
