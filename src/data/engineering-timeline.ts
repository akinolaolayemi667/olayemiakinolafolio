import { TSectionHeading } from "@type/Content";
import { profile } from "@data/profile";
import { processSteps } from "@data/process";
import { getFeaturedProjects } from "@data/projects";
import { experiences } from "@data/experience";

/**
 * Premium engineering timeline — milestones, journey, and growth.
 * Built only from published projects, process, and studio experience data.
 */

export type TTimelineKind = "milestone" | "journey" | "growth";

export type TTimelineIcon =
  | "studio"
  | "plan"
  | "design"
  | "build"
  | "ship"
  | "automate"
  | "grow"
  | "support"
  | "test";

export type TEngineeringTimelineEntry = {
  id: string;
  kind: TTimelineKind;
  title: string;
  description: string;
  /** Period, step index, or status label shown beside the card. */
  label: string;
  icon: TTimelineIcon;
  href?: string;
};

export const engineeringTimelineSection: TSectionHeading = {
  eyebrow: "Engineering timeline",
  title: "Milestones, journey, and professional growth",
  description:
    "A living view of the HOLASVISION practice — how engagements are delivered, which products shipped, and how the studio continues to grow.",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
};

export const timelineKindLabels: Record<TTimelineKind, string> = {
  milestone: "Project milestone",
  journey: "Engineering journey",
  growth: "Professional growth",
};

const journeyIconByTitle: Record<string, TTimelineIcon> = {
  Discover: "plan",
  Research: "plan",
  Architecture: "design",
  Design: "design",
  Development: "build",
  Testing: "test",
  Optimization: "grow",
  Deployment: "ship",
  Maintenance: "support",
  // Legacy titles (if present elsewhere)
  Discovery: "plan",
  Planning: "plan",
  Support: "support",
};

function projectIcon(slug: string): TTimelineIcon {
  if (slug.includes("automation") || slug.includes("instagram")) return "automate";
  if (slug.includes("portfolio") || slug.includes("henry")) return "ship";
  return "build";
}

/**
 * Compose timeline entries from existing content sources.
 * Order: growth foundation → delivery journey → featured project milestones → ongoing growth.
 */
export function getEngineeringTimelineEntries(): TEngineeringTimelineEntry[] {
  const entries: TEngineeringTimelineEntry[] = [];
  const practice = experiences[0];
  const featured = getFeaturedProjects();

  if (practice) {
    entries.push({
      id: "growth-studio",
      kind: "growth",
      title: `${practice.name} studio practice`,
      description: practice.responsibilities[0] ?? profile.brandLead,
      label: practice.timelineLabel ?? practice.startDate,
      icon: "studio",
      href: "/about",
    });
  }

  for (const step of processSteps) {
    entries.push({
      id: `journey-${step.step}`,
      kind: "journey",
      title: step.title,
      description: step.description,
      label: `Step ${step.step}`,
      icon: journeyIconByTitle[step.title] ?? "plan",
    });
  }

  for (const project of featured) {
    entries.push({
      id: `milestone-${project.slug}`,
      kind: "milestone",
      title: project.title,
      description: project.subtitle || project.summary,
      label: project.year != null ? String(project.year) : "Shipped",
      icon: projectIcon(project.slug),
      href: `/projects/${project.slug}`,
    });
  }

  entries.push({
    id: "growth-remote",
    kind: "growth",
    title: "Remote worldwide delivery",
    description: profile.availability,
    label: profile.location,
    icon: "grow",
    href: "#contact",
  });

  return entries;
}
