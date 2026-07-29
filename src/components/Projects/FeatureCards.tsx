"use client";

import { TFeatureCard } from "@type/Project";
import { CaseStudySection } from "@components/Projects/CaseStudySection";
import { FeatureCard } from "@components/premium/FeatureCard";
import { projectsSection } from "@data/projects";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  cards: TFeatureCard[];
  className?: string;
};

type IconKey = TFeatureCard["icon"];

function FeatureIcon({ name }: { name: IconKey }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "instagram-trigger":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
          <path d="M12 2v2.5" />
        </svg>
      );
    case "welcome-flow":
      return (
        <svg {...common}>
          <path d="M4 6.5 12 3l8 3.5v7c0 4.2-3.4 7.2-8 8.5-4.6-1.3-8-4.3-8-8.5v-7Z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
    case "consent":
      return (
        <svg {...common}>
          <path d="M9 12.5 11 14.5 15.5 10" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
    case "email-capture":
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
        </svg>
      );
    case "double-opt-in":
      return (
        <svg {...common}>
          <path d="M7 12.5 9.5 15 14 9.5" />
          <path d="M11 12.5 13.5 15 19 8.5" />
          <rect x="3" y="4" width="18" height="16" rx="3" />
        </svg>
      );
    case "lead-magnet":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      );
    case "subscriber-tag":
      return (
        <svg {...common}>
          <path d="M3.5 12.5V6.8A1.8 1.8 0 0 1 5.3 5h5.7l9.5 9.5-5.5 5.5L3.5 12.5Z" />
          <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "unsubscribe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8 8 8 8M16 8l-8 8" />
        </svg>
      );
    case "confirmation":
      return (
        <svg {...common}>
          <path d="M4 13.5 9 18.5 20 6.5" />
        </svg>
      );
    default:
      return null;
  }
}

/** Premium feature card grid — icon, title, description, glow hover. */
export function FeatureCards({ cards, className = "" }: Props) {
  if (!cards.length) return null;

  return (
    <CaseStudySection
      id="features"
      title={projectsSection.sectionLabels.keyFeatures}
      className={className}
    >
      <Stagger
        as="ul"
        className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        stagger={0.05}
      >
        {cards.map((card) => (
          <StaggerItem key={card.id}>
            <FeatureCard
              gradientBorder
              title={card.title}
              description={card.description}
              icon={<FeatureIcon name={card.icon} />}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </CaseStudySection>
  );
}
