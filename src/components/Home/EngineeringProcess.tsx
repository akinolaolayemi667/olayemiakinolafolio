"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { FadeIn, SectionFade } from "@components/ui/Motion";
import { WorkflowCard } from "@components/premium/WorkflowCard";
import { processSteps, processSection } from "@data/process";

const stepIcons: Record<string, ReactNode> = {
  Discover: (
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" />
  ),
  Research: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  Architecture: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </>
  ),
  Design: <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3ZM12 12 4 7.5M12 12l8-4.5M12 12v9" />,
  Development: (
    <>
      <path d="M16 18 22 12 16 6" />
      <path d="M8 6 2 12l6 6" />
    </>
  ),
  Testing: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-4 8a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 18 17l-4-8V3" />
    </>
  ),
  Optimization: <path d="M13 2 4 14h7l-1 8 10-14h-7Z" />,
  Deployment: (
    <>
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 19h14" />
    </>
  ),
  Maintenance: (
    <>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6.4 6.4L3 18v3h3l5.3-5.3a4.5 4.5 0 0 0 6.4-6.4Z" />
      <path d="m15 9 1.5-1.5" />
    </>
  ),
};

function ProcessArrow({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative flex flex-col items-center py-1 md:py-1.5" aria-hidden>
      <m.div
        className="flex h-10 w-10 flex-col items-center justify-center text-accent md:h-12"
        initial={reduce ? false : { opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: reduce ? 0 : 0.35 }}
      >
        <span className="h-4 w-px bg-gradient-to-b from-accent/50 to-accent/20 md:h-5" />
        <m.svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          className="text-accent"
          animate={
            reduce
              ? undefined
              : { y: [0, 3, 0], opacity: [0.65, 1, 0.65] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <path
            d="M1 1.5 9 11.5 17 1.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </m.svg>
      </m.div>
    </div>
  );
}

/** Premium engineering process — animated workflow cards connected by arrows. */
export default function EngineeringProcess() {
  const reduce = Boolean(useReducedMotion());

  return (
    <section
      id="process"
      className="cv-auto hv-section-band relative overflow-hidden border-y border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/20"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_55%_80%_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)]"
      />

      <Container className="relative">
        <SectionFade>
          <SectionHeading
            titleId="process-heading"
            eyebrow={processSection.eyebrow}
            title={processSection.title}
            description={processSection.description}
            align="center"
          />
        </SectionFade>

        <ol className="mx-auto mt-12 flex max-w-2xl list-none flex-col items-stretch p-0 md:mt-16 lg:max-w-3xl">
          {processSteps.map((step, index) => (
            <li key={step.step} className="flex flex-col items-center">
              <m.div
                className="w-full"
                initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px 0px", amount: 0.35 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        duration: 0.5,
                        delay: 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
              >
                <WorkflowCard
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {stepIcons[step.title] ?? (
                        <circle cx="12" cy="12" r="4" />
                      )}
                    </svg>
                  }
                />
              </m.div>

              {index < processSteps.length - 1 ? (
                <ProcessArrow reduce={reduce} />
              ) : null}
            </li>
          ))}
        </ol>

        {processSection.ctaLabel && processSection.ctaHref ? (
          <FadeIn delay={0.08}>
            <div className="mt-12 flex justify-center md:mt-14">
              <PrimaryButton href={processSection.ctaHref} glow>
                {processSection.ctaLabel}
              </PrimaryButton>
            </div>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
