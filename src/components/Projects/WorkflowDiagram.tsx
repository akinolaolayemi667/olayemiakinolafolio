"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { TWorkflowBranch, TWorkflowDiagram, TWorkflowStep } from "@type/Project";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { projectsSection } from "@data/projects";
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  motionDuration,
  easeOutPremium,
} from "@lib/motion";

type Props = {
  diagram: TWorkflowDiagram;
  className?: string;
};

function FlowArrow() {
  return (
    <div className="flex flex-col items-center gap-0.5 py-1.5" aria-hidden>
      <span className="h-3 w-px bg-gradient-to-b from-accent/55 to-accent/20 sm:h-4" />
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        className="text-accent/70"
      >
        <path
          d="M1 1.5 7 8.5 13 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function WorkflowCard({
  step,
  index,
  tone = "primary",
}: {
  step: TWorkflowStep;
  index: number;
  tone?: "primary" | "branch";
}) {
  const accentRing =
    tone === "primary"
      ? "border-accent/35 bg-accent/10 text-accent shadow-[0_0_18px_rgba(20,184,166,0.18)]"
      : "border-white/20 bg-white/[0.06] text-white/70";

  return (
    <div className="feature-card gradient-border relative w-full overflow-hidden rounded-xl px-4 py-3.5 sm:px-5 sm:py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            tone === "primary"
              ? "radial-gradient(ellipse 80% 70% at 0% 0%, rgba(20,184,166,0.12), transparent 55%)"
              : "radial-gradient(ellipse 80% 70% at 0% 0%, rgba(255,255,255,0.06), transparent 55%)",
        }}
      />
      <div className="relative flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${accentRing}`}
        >
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold tracking-tight text-white sm:text-[15px]">
            {step.label}
          </p>
          {step.hint ? (
            <p className="mt-1 text-[11px] font-medium tracking-wide text-muted sm:text-xs">
              {step.hint}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function WorkflowColumn({
  title,
  steps,
  tone,
  reduce,
}: {
  title: string;
  steps: TWorkflowStep[];
  tone: "primary" | "branch";
  reduce: boolean;
}) {
  return (
    <div className="min-w-0 flex-1">
      <p
        className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${
          tone === "primary" ? "text-accent/90" : "text-white/50"
        }`}
      >
        {title}
      </p>
      <m.ol
        className="flex flex-col items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px", amount: 0.12 }}
        variants={staggerContainerVariants(reduce, 0.05, 0.04)}
      >
        {steps.map((step, index) => (
          <m.li
            key={step.id}
            className="flex flex-col items-center"
            variants={staggerItemVariants(reduce, 14)}
            transition={{
              duration: reduce ? 0.01 : motionDuration.base,
              ease: easeOutPremium,
            }}
          >
            <WorkflowCard step={step} index={index} tone={tone} />
            {index < steps.length - 1 ? <FlowArrow /> : null}
          </m.li>
        ))}
      </m.ol>
    </div>
  );
}

function BranchPanel({
  branch,
  reduce,
}: {
  branch: TWorkflowBranch;
  reduce: boolean;
}) {
  return (
    <m.aside
      className="relative min-w-0 flex-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px 0px", amount: 0.12 }}
      variants={fadeUpVariants(reduce, 16)}
      transition={{
        duration: reduce ? 0.01 : motionDuration.base,
        ease: easeOutPremium,
        delay: reduce ? 0 : 0.12,
      }}
    >
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 sm:p-5 md:p-6">
        <WorkflowColumn
          title={branch.title}
          steps={branch.steps}
          tone="branch"
          reduce={reduce}
        />
      </div>
    </m.aside>
  );
}

/** Premium vertical workflow diagram with scroll-animated step cards. */
export function WorkflowDiagram({ diagram, className = "" }: Props) {
  const reduce = Boolean(useReducedMotion());
  const branches = diagram.branches ?? [];

  return (
    <CaseStudySection
      id="architecture"
      title={projectsSection.sectionLabels.workflowDiagram}
      className={className}
    >
      <LazyMotion features={domAnimation} strict>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          <WorkflowColumn
            title="Lead capture path"
            steps={diagram.primary}
            tone="primary"
            reduce={reduce}
          />

          {branches.length > 0 ? (
            <div className="flex flex-col gap-6 lg:pt-0">
              {branches.map((branch) => (
                <BranchPanel key={branch.id} branch={branch} reduce={reduce} />
              ))}
            </div>
          ) : null}
        </div>
      </LazyMotion>
    </CaseStudySection>
  );
}
