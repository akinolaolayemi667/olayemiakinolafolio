"use client";

import { m, AnimatePresence } from "framer-motion";
import {
  expertiseHubCategories,
  expertiseHubSection,
} from "@data/expertise-hub";
import { TExpertiseHubCategory } from "@type/Content";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { easeOutPremium, motionDuration } from "@lib/motion";

type Props = {
  category: TExpertiseHubCategory;
  activeTechLabel: string | null;
  reduceMotion: boolean;
  onSelectCategory: (id: string) => void;
};

/**
 * Glass expertise panel — business-focused content + CTA.
 */
export function ExpertisePanel({
  category,
  activeTechLabel,
  reduceMotion,
  onSelectCategory,
}: Props) {
  const copy = expertiseHubSection;

  return (
    <div className="flex h-full flex-col gap-5">
      <div
        className="relative flex flex-wrap gap-2"
        role="tablist"
        aria-label="Ecosystem domains"
      >
        {expertiseHubCategories.map((item) => {
          const selected = item.id === category.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onSelectCategory(item.id)}
              className={`relative min-h-11 rounded-xl border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:text-sm ${
                selected
                  ? "border-accent/45 bg-accent/15 text-[color:var(--hv-fg)]"
                  : "border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] text-[color:var(--hv-fg-muted)] hover:border-accent/30 hover:text-[color:var(--hv-fg)]"
              }`}
            >
              {item.title}
              {selected && !reduceMotion ? (
                <span
                  aria-hidden
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent motion-safe:animate-[fadeUp_0.25s_ease-out]"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <m.article
          key={`${category.id}-${activeTechLabel ?? "domain"}`}
          role="tabpanel"
          aria-label={category.title}
          initial={
            reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.985 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }
          }
          transition={
            reduceMotion
              ? { duration: 0.01 }
              : { duration: motionDuration.base, ease: easeOutPremium }
          }
          className="relative overflow-hidden rounded-2xl border border-[color:var(--hv-border-strong)] bg-[color:var(--hv-glass-bg-strong)] p-5 shadow-[var(--hv-shadow-lg)] backdrop-blur-[var(--hv-glass-blur)] sm:p-6 md:p-7"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 75% 55% at 0% 0%, color-mix(in srgb, ${category.accentColor} 18%, transparent), transparent 55%), linear-gradient(180deg, color-mix(in srgb, var(--hv-fg) 3%, transparent), transparent 40%)`,
            }}
          />

          <div className="relative flex flex-col gap-6">
            <header className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {category.title}
                </p>
                {activeTechLabel ? (
                  <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                    {activeTechLabel}
                  </span>
                ) : null}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-2xl">
                {category.title}
              </h3>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {copy.whatIBuildLabel}
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[0.95rem]">
                {category.whatIBuild}
              </p>

              {!reduceMotion ? (
                <m.div
                  className="h-1 overflow-hidden rounded-full bg-[color:var(--hv-border)]"
                  aria-hidden
                >
                  <m.div
                    className="h-full rounded-full"
                    initial={{ width: "10%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.75, ease: easeOutPremium }}
                    style={{ backgroundColor: category.accentColor }}
                  />
                </m.div>
              ) : (
                <div
                  className="h-1 rounded-full"
                  style={{ backgroundColor: category.accentColor }}
                  aria-hidden
                />
              )}
            </header>

            <section aria-labelledby={`value-${category.id}`}>
              <h4
                id={`value-${category.id}`}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
              >
                {copy.businessValueLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                {category.businessValue}
              </p>
            </section>

            <section aria-labelledby={`capabilities-${category.id}`}>
              <h4
                id={`capabilities-${category.id}`}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
              >
                {copy.capabilitiesLabel}
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {category.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: category.accentColor }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={`tools-${category.id}`}>
              <h4
                id={`tools-${category.id}`}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
              >
                {copy.toolsLabel}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.technologies.map((tool) => {
                  const highlighted =
                    activeTechLabel?.toLowerCase() === tool.toLowerCase();
                  return (
                    <li
                      key={tool}
                      className={`rounded-lg border px-2.5 py-1.5 text-xs sm:text-sm ${
                        highlighted
                          ? "border-accent/50 bg-accent/15 text-[color:var(--hv-fg)]"
                          : "border-[color:var(--hv-border)] bg-[color:var(--hv-surface)] text-[color:var(--hv-fg-secondary)]"
                      }`}
                    >
                      {tool}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section aria-labelledby={`outcomes-${category.id}`}>
              <h4
                id={`outcomes-${category.id}`}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
              >
                {copy.outcomesLabel}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {category.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-xl border border-accent/20 bg-accent/[0.08] px-3 py-2.5 text-sm text-[color:var(--hv-fg-secondary)]"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-[color:var(--hv-border)] pt-5">
              <PrimaryButton href={copy.ctaHref} className="w-full sm:w-auto">
                {copy.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </m.article>
      </AnimatePresence>
    </div>
  );
}
