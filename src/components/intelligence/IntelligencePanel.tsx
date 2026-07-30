"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { TypeSequence } from "@components/ui/TypeSequence";
import { StatusChip } from "@components/ui/StatusChip";
import { SectionBridge } from "@components/ui/SectionBridge";
import {
  ArchitectureCard,
  FeatureCard,
  MetricCard,
  TechBadge,
} from "@components/premium";
import { profile } from "@data/profile";
import {
  engineeringIntelligenceSection,
  expertiseDeliveryFlow,
  expertiseMetrics,
  expertisePrinciples,
} from "@data/engineering-intelligence";
import { easeOutPremium, motionDuration } from "@lib/motion";

type Props = {
  reduceMotion: boolean;
  active: boolean;
};

type Phase = "idle" | "typing" | "checklist" | "report";

/**
 * Premium architecture expertise panel — metrics, delivery flow, and capability modules.
 */
export function IntelligencePanel({ reduceMotion, active }: Props) {
  const copy = engineeringIntelligenceSection;
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "report" : "idle");
  const [completedSteps, setCompletedSteps] = useState(
    reduceMotion ? copy.initSteps.length : 0
  );

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setPhase("report");
      setCompletedSteps(copy.initSteps.length);
      return;
    }
    setPhase("typing");
  }, [active, reduceMotion, copy.initSteps.length]);

  useEffect(() => {
    if (phase !== "checklist" || reduceMotion) return;

    if (completedSteps >= copy.initSteps.length) {
      const t = window.setTimeout(() => setPhase("report"), 280);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setCompletedSteps((n) => n + 1);
    }, 420);

    return () => window.clearTimeout(t);
  }, [phase, completedSteps, copy.initSteps.length, reduceMotion]);

  const statusLabel =
    phase === "report" ? copy.statusReady : copy.statusAnalyzing;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--hv-border-strong)] bg-[color:var(--hv-glass-bg-strong)] p-5 shadow-[var(--hv-shadow-lg)] backdrop-blur-[var(--hv-glass-blur)] sm:p-7 md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_0%,var(--hv-accent-dim),transparent_55%)]"
      />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Architecture Command
            </p>
            <p className="mt-1 text-sm font-medium text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.brand}</p>
          </div>
          <StatusChip
            label={statusLabel}
            tone={phase === "report" ? "accent" : "neutral"}
          />
        </div>

        <AnimatePresence initial={false}>
          {phase !== "report" ? (
            <m.div
              key="boot"
              initial={{ opacity: 0, height: "auto" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.35, ease: easeOutPremium }}
              className="overflow-hidden rounded-xl border border-white/8 bg-ink/40 px-3.5 py-3"
              aria-live="polite"
            >
              {(phase === "typing" || phase === "checklist") && (
                <TypeSequence
                  text={copy.initLine}
                  active={phase === "typing"}
                  onComplete={() => {
                    if (!reduceMotion) setPhase("checklist");
                  }}
                />
              )}

              <ul className="mt-3 flex flex-col gap-2">
                {copy.initSteps.map((step, index) => {
                  const done = index < completedSteps;
                  return (
                    <li
                      key={step.id}
                      className={`flex items-center gap-2 text-xs sm:text-sm ${
                        done ? "text-white/80" : "text-white/30"
                      }`}
                    >
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full border text-[9px] ${
                          done
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-white/12 text-transparent"
                        }`}
                        aria-hidden
                      >
                        ✓
                      </span>
                      {step.label}
                    </li>
                  );
                })}
              </ul>
            </m.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {phase === "report" ? (
            <m.div
              key="report"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : motionDuration.base,
                ease: easeOutPremium,
              }}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  Full Stack Development & AI Automation
                </h3>
                <p className="mt-1.5 text-sm text-muted">{profile.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {expertiseMetrics.map((metric) => (
                  <MetricCard
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    hint={metric.hint}
                  />
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Delivery architecture flow
                </p>
                {expertiseDeliveryFlow.map((item, index) => (
                  <ArchitectureCard
                    key={item.step}
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    showConnector={index < expertiseDeliveryFlow.length - 1}
                  />
                ))}
              </div>

              <div className="grid gap-4">
                {copy.modules.map((module, index) => (
                  <FeatureCard
                    key={module.id}
                    id={module.id}
                    title={module.label}
                    description={module.body}
                    gradientBorder={index === 0}
                    meta={
                      module.items?.length ? (
                        <ul className="flex flex-wrap gap-2">
                          {module.items.map((item) => (
                            <li key={item}>
                              <TechBadge label={item} size="sm" />
                            </li>
                          ))}
                        </ul>
                      ) : undefined
                    }
                  />
                ))}
              </div>

              <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Architecture principles
                </p>
                <ul className="mt-3 grid gap-2 text-xs text-white/70 sm:grid-cols-2">
                  {expertisePrinciples.map((principle) => (
                    <li
                      key={principle}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                    >
                      {principle}
                    </li>
                  ))}
                </ul>
              </article>

              <SectionBridge
                className="pt-2"
                hint={copy.conclusion}
                label={copy.ctaLabel}
                href={copy.ctaHref}
              />
            </m.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
