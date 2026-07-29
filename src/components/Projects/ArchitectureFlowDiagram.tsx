"use client";

import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { GlassCard } from "@components/premium/GlassCard";
import { projectsSection } from "@data/projects";
import { Stagger, StaggerItem } from "@components/ui/Motion";
import { cx } from "@components/premium/types";

type Props = {
  architecture: string;
  className?: string;
};

function parseFlowSteps(text: string): string[] {
  const arrowSplit = text.split(/\s*(?:→|->|—>)\s*/);
  if (arrowSplit.length > 1) {
    return arrowSplit.map((s) => s.trim()).filter(Boolean);
  }

  const sentenceSplit = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 12);

  if (sentenceSplit.length >= 2 && sentenceSplit.length <= 8) {
    return sentenceSplit;
  }

  return [text.trim()].filter(Boolean);
}

/** Visual flow diagram from architecture narrative text — presentation only. */
export function ArchitectureFlowDiagram({
  architecture,
  className = "",
}: Props) {
  const steps = parseFlowSteps(architecture);

  return (
    <CaseStudySection
      id="architecture"
      title={projectsSection.sectionLabels.systemArchitecture}
      className={className}
    >
      {steps.length > 1 ? (
        <div className="relative">
          {/* Desktop flow rail */}
          <div
            aria-hidden
            className="mb-6 hidden items-center gap-2 lg:flex"
          >
            {steps.map((_, index) => (
              <div key={index} className="flex min-w-0 flex-1 items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[11px] font-semibold text-accent shadow-[0_0_16px_rgba(20,184,166,0.2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 ? (
                  <span className="h-px min-w-[1.5rem] flex-1 bg-gradient-to-r from-accent/55 via-cyan-400/30 to-accent/20" />
                ) : null}
              </div>
            ))}
          </div>

          <Stagger
            as="ol"
            className="relative grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            stagger={0.05}
          >
            {steps.map((step, index) => (
              <StaggerItem
                key={`${index}-${step.slice(0, 24)}`}
                as="li"
                className="h-full"
              >
                <GlassCard
                  className="flex h-full flex-col"
                  gradientBorder
                  wash
                  interactive
                  padding="md"
                >
                  <span
                    className={cx(
                      "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent lg:hidden"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    Stage {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
                    {step}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ) : (
        <GlassCard gradientBorder wash padding="lg">
          <p className="text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-base">
            {architecture}
          </p>
        </GlassCard>
      )}
    </CaseStudySection>
  );
}
