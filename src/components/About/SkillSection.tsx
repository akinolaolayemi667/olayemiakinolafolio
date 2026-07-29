"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import {
  engineeringSkillCategories,
  engineeringSkills,
  getProjectsUsingSkill,
  skillFilterLabels,
} from "@data/skills";
import { sectionCopy } from "@data/about";
import { profile } from "@data/profile";
import {
  TEngineeringSkill,
  TEngineeringSkillCategoryId,
  TSkillLevel,
} from "@type/Content";
import { TechLogo } from "@components/expertise/techLogos";
import { FadeIn } from "@components/ui/Motion";
import { MotionProvider } from "@components/ui/MotionProvider";
import { SectionHeading } from "@components/ui/SectionHeading";

type FilterKey = "all" | TEngineeringSkillCategoryId;

const levelTone: Record<TSkillLevel, string> = {
  Core: "border-accent/40 bg-accent/15 text-accent",
  Active: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  Supporting:
    "border-[color:var(--hv-border)] bg-white/[0.04] text-[color:var(--hv-fg-muted)]",
};

function SkillGlyph({ skill }: { skill: TEngineeringSkill }) {
  if (skill.icon) {
    return (
      <Image
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        src={skill.icon}
        alt=""
        loading="lazy"
        decoding="async"
        sizes="40px"
      />
    );
  }

  if (skill.logoId) {
    return (
      <TechLogo id={skill.logoId} className="h-9 w-9" title={skill.name} />
    );
  }

  const monogram = skill.name
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

function EngineeringSkillCard({
  skill,
  index,
  reduceMotion,
}: {
  skill: TEngineeringSkill;
  index: number;
  reduceMotion: boolean;
}) {
  const related = getProjectsUsingSkill(skill);

  return (
    <m.li
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
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
      <article className="engineering-skill-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] p-5 backdrop-blur-[var(--hv-glass-blur)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 motion-reduce:transform-none sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(20,184,166,0.45), 0 0 36px rgba(20,184,166,0.18)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex items-start justify-between gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none">
            <SkillGlyph skill={skill} />
          </span>
          <span
            className={`rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${levelTone[skill.level]}`}
          >
            {skill.level}
          </span>
        </div>

        <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)]">
          {skill.name}
        </h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)]">
          {skill.description}
        </p>

        <div className="relative mt-5 border-t border-[color:var(--hv-border)] pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--hv-fg-muted)]">
            Projects
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
              Used in studio delivery — not yet tagged on a published case study.
            </p>
          )}
        </div>
      </article>
    </m.li>
  );
}

/** Interactive engineering skill cards — filterable by practice category. */
const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const reduceMotion = Boolean(useReducedMotion());

  const skillsToDisplay = useMemo(() => {
    if (activeCategory === "all") return engineeringSkills;
    return engineeringSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: skillFilterLabels.all },
    ...engineeringSkillCategories.map((c) => ({
      key: c.id as FilterKey,
      label: c.label,
    })),
  ];

  return (
    <MotionProvider>
      <section aria-labelledby="skills-heading">
        <FadeIn>
          <SectionHeading
            eyebrow="Engineering stack"
            title={sectionCopy.skillsTitle}
            description={`Interactive view of the technologies behind ${profile.brand} full stack, AI automation, and production delivery.`}
            titleId="skills-heading"
            align="center"
          />
        </FadeIn>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12"
          role="group"
          aria-label="Filter skills by category"
        >
          {filters.map((filter) => {
            const pressed = activeCategory === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                aria-pressed={pressed}
                className={`relative min-h-10 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hv-bg)] sm:min-h-11 sm:px-4 ${
                  pressed
                    ? "border-accent/45 bg-accent/15 text-[color:var(--hv-fg)] shadow-[0_0_24px_rgba(20,184,166,0.12)]"
                    : "border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
                }`}
                onClick={() => setActiveCategory(filter.key)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <ul
          className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5"
          aria-live="polite"
        >
          {skillsToDisplay.map((skill, index) => (
            <EngineeringSkillCard
              key={skill.id}
              skill={skill}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>
      </section>
    </MotionProvider>
  );
};

export default SkillSection;
