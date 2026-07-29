"use client";

import Link from "next/link";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FadeIn, SectionFade, Stagger, StaggerItem } from "@components/ui/Motion";
import { FeatureCard, TechBadge } from "@components/premium";
import { productExamples, services, servicesSection } from "@data/services";
import { SectionBridge } from "@components/ui/SectionBridge";
import { TServiceItem } from "@type/Content";

function ServiceIcon({ icon }: { icon: TServiceItem["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "fullstack":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h10" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <circle cx="12" cy="12" r="4" />
          <path d="m6.5 6.5 2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8.5 7.5 15 11M8.5 16.5 15 13" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
          <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01" />
          <rect x="4" y="4" width="6" height="6" rx="1.5" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" />
          <rect x="14" y="14" width="6" height="6" rx="1.5" />
          <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
        </svg>
      );
    case "supabase":
      return (
        <svg {...common}>
          <path d="M12 3 6 14h5l-1 7 8-12h-5l1-6Z" />
        </svg>
      );
    case "performance":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
        </svg>
      );
    case "seo":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "a11y":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M6 9h12M12 9v11M8 20l4-6 4 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section
      id="services"
      className="hv-section-band cv-auto relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(20,184,166,0.08),transparent_70%)]"
      />

      <Container className="relative">
        <SectionFade>
          <SectionHeading
            titleId="services-heading"
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            description={servicesSection.description}
          />
        </SectionFade>

        <FadeIn delay={0.05}>
          <ul
            className="mt-8 flex flex-wrap gap-2 md:mt-10"
            aria-label="Product examples"
          >
            {productExamples.map((product) => (
              <li
                key={product}
                className="rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] px-3 py-1.5 text-xs text-[color:var(--hv-fg-muted)] backdrop-blur-sm sm:text-sm"
              >
                {product}
              </li>
            ))}
          </ul>
        </FadeIn>

        <Stagger
          className="mt-10 grid list-none gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          stagger={0.05}
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full" y={16}>
              <FeatureCard
                id={`service-${service.id}`}
                className="h-full"
                title={service.title}
                description={service.description}
                icon={<ServiceIcon icon={service.icon} />}
                meta={
                  service.technologies.length > 0 ? (
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`${service.title} technologies`}
                    >
                      {service.technologies.map((tech) => (
                        <li key={tech}>
                          <TechBadge label={tech} />
                        </li>
                      ))}
                    </ul>
                  ) : null
                }
                footer={
                  <Link
                    href={service.ctaHref}
                    className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-[color:var(--hv-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {service.ctaLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/card:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                }
              />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.08}>
          <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#technology-ecosystem"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore the technology stack →
            </Link>
            <SectionBridge
              label={servicesSection.ctaLabel ?? "Discuss your build"}
              href={servicesSection.ctaHref ?? "#contact"}
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
