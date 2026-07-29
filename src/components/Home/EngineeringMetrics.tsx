"use client";

import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FadeIn, SectionFade, Stagger, StaggerItem } from "@components/ui/Motion";
import { MetricCard } from "@components/premium/MetricCard";
import {
  engineeringMetricsSection,
  getResolvedEngineeringMetrics,
} from "@data/engineering-metrics";

/** Engineering metrics band — editable counts, no fabricated business KPIs. */
export default function EngineeringMetrics() {
  const metrics = getResolvedEngineeringMetrics();

  return (
    <section
      id="metrics"
      className="hv-section-band cv-auto relative overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_55%_80%_at_50%_0%,rgba(20,184,166,0.07),transparent_70%)]"
      />

      <Container className="relative">
        <SectionFade>
          <SectionHeading
            titleId="metrics-heading"
            eyebrow={engineeringMetricsSection.eyebrow}
            title={engineeringMetricsSection.title}
            description={engineeringMetricsSection.description}
          />
        </SectionFade>

        <Stagger
          as="ul"
          className="mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:mt-14 lg:grid-cols-4 lg:gap-5"
          stagger={0.05}
        >
          {metrics.map((metric) => (
            <StaggerItem key={metric.id} y={14}>
              <MetricCard
                className="h-full"
                label={metric.label}
                value={metric.display}
                hint={metric.hint}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.08}>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[color:var(--hv-fg-muted)] md:mt-10 md:text-sm">
            Values are maintained in{" "}
            <code className="rounded border border-[color:var(--hv-border)] bg-white/[0.03] px-1.5 py-0.5 text-[11px]">
              src/data/engineering-metrics.ts
            </code>
            . Auto-derived counts update with the portfolio; set a number to
            override. Em dashes mean the value is not published yet.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
