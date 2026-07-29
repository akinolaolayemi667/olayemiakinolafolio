"use client";

import { expertiseHubCategories } from "@data/expertise-hub";
import { profile } from "@data/profile";
import { FadeIn, Stagger, StaggerItem } from "@components/ui/Motion";
import { MotionProvider } from "@components/ui/MotionProvider";
import { SectionHeading } from "@components/ui/SectionHeading";

/**
 * Career highlights — animated cards from published expertise categories.
 * No invented metrics; titles and copy come from existing data.
 */
export default function CareerHighlights() {
  if (expertiseHubCategories.length === 0) return null;

  return (
    <MotionProvider>
      <section aria-labelledby="career-highlights-heading">
        <FadeIn>
          <SectionHeading
            eyebrow="Career highlights"
            title="Where engineering meets business outcomes"
            description={profile.brandLead}
            titleId="career-highlights-heading"
          />
        </FadeIn>

        <Stagger
          className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5"
          stagger={0.08}
        >
          {expertiseHubCategories.map((category, index) => (
            <StaggerItem key={category.id} y={18}>
              <article className="feature-card group gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ backgroundColor: category.accentColor }}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--hv-border)] bg-white/[0.04] text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: category.accentColor }}
                    aria-hidden
                  />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-xl">
                  {category.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                  {category.whatIBuild}
                </p>
                {category.technologies.length > 0 ? (
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {category.technologies.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-[color:var(--hv-border)] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[color:var(--hv-fg-muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.12} className="mt-8 md:mt-10">
          <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base">
            {profile.brandSupport}
          </p>
        </FadeIn>
      </section>
    </MotionProvider>
  );
}
