"use client";

import Link from "next/link";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { profile } from "@data/profile";
import { sectionCopy } from "@data/about";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { TWorkExperience } from "@type/Company";
import {
  staggerContainerVariants,
  staggerItemVariants,
  motionDuration,
  easeOutPremium,
} from "@lib/motion";

type Props = {
  experiences: TWorkExperience[];
  /** When true, show a compact preview (first entries) for storytelling flow. */
  preview?: boolean;
  previewLimit?: number;
};

function periodLabel(item: {
  startDate: string;
  endDate?: string;
  timelineLabel?: string;
}) {
  if (item.timelineLabel) return item.timelineLabel;
  if (item.endDate) return `${item.startDate} – ${item.endDate}`;
  return `${item.startDate} – ${sectionCopy.presentLabel}`;
}

/** Client animated timeline — Framer stagger + scroll reveal. */
export function ExperienceTimeline({
  experiences,
  preview = false,
  previewLimit = 2,
}: Props) {
  const reduce = Boolean(useReducedMotion());
  const items =
    preview && experiences.length > previewLimit
      ? experiences.slice(0, previewLimit)
      : experiences;
  const hasMore = preview && experiences.length > items.length;

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative overflow-hidden"
        aria-labelledby="experience-heading"
      >
        <Container>
          <div className="grid gap-10 sm:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className="col-span-12 sm:col-span-4">
              <div className="flex h-full flex-col justify-center text-start">
                <SectionHeading
                  eyebrow="Professional journey"
                  title={
                    preview
                      ? "Experience timeline preview"
                      : sectionCopy.experienceTitle
                  }
                  description={profile.experienceLabel}
                  titleId="experience-heading"
                />
                <div className="mt-8 hidden sm:block">
                  <Image
                    width={300}
                    height={300}
                    alt={sectionCopy.experienceImageAlt}
                    src="/images/man-working-on-laptop.svg"
                    className="mix-blend-lighten drop-shadow-lg"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
              </div>
            </div>

            <div className="relative col-span-12 min-w-0 sm:col-span-8 sm:pl-2 lg:pl-4">
              {experiences.length === 0 ? (
                <p className="max-w-xl text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base">
                  {sectionCopy.experienceEmpty}
                </p>
              ) : (
                <m.ol
                  className="relative space-y-0 before:absolute before:inset-y-2 before:left-[0.95rem] before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-white/15 before:to-accent/20 sm:before:left-[1.1rem]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px 0px", amount: 0.1 }}
                  variants={staggerContainerVariants(reduce, 0.08, 0.05)}
                >
                  {items.map((item, index) => (
                    <m.li
                      key={`${item.name}-${index}`}
                      className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 md:pb-10"
                      variants={staggerItemVariants(reduce, 16)}
                      transition={{
                        duration: reduce ? 0.01 : motionDuration.base,
                        ease: easeOutPremium,
                      }}
                    >
                      <span className="relative z-10 mt-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-[color:var(--hv-bg)] text-[10px] font-semibold text-accent shadow-[0_0_16px_rgba(20,184,166,0.25)] sm:h-9 sm:w-9">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <article className="feature-card gradient-border min-w-0 flex-1 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:p-6 md:p-7">
                        <h3 className="text-xl font-semibold tracking-tight text-[color:var(--hv-fg)]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent md:text-base">
                          {item.position}
                        </p>
                        <time className="mt-1 block text-sm text-[color:var(--hv-fg-muted)]">
                          {periodLabel(item)}
                        </time>
                        <ul className="mt-4 space-y-2.5 text-sm text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                          {(preview
                            ? item.responsibilities.slice(0, 4)
                            : item.responsibilities
                          ).map((r) => (
                            <li key={r} className="flex gap-2.5">
                              <span
                                aria-hidden
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                              />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        {item.skills.length > 0 ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {(preview
                              ? item.skills.slice(0, 8)
                              : item.skills
                            ).map((skill) => (
                              <span
                                key={skill}
                                className="inline-block rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </article>
                    </m.li>
                  ))}
                </m.ol>
              )}
              <div className="mt-8 md:mt-10">
                <Link
                  href="/work"
                  className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {hasMore || preview
                    ? "View full experience timeline →"
                    : "Open experience page →"}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </LazyMotion>
  );
}
