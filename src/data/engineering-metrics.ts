import { TSectionHeading } from "@type/Content";
import { projects, isCaseStudyNarrativeReady } from "@data/projects";
import { showcaseTechnologies } from "@data/technology-showcase";

/**
 * Engineering metrics — portfolio engineering counts only.
 * Set `value` to override any auto-derived figure.
 * Leave `value: null` to use the source (or show an em dash when source is "manual").
 * Do not invent business KPIs (revenue, clients won, conversion rates, etc.).
 */

export type TEngineeringMetricSource =
  | "manual"
  | "projects-completed"
  | "technologies"
  | "case-studies"
  | "automation-workflows"
  | "repositories"
  | "components"
  | "pages-built";

export type TEngineeringMetric = {
  id: string;
  label: string;
  /**
   * Editable override.
   * - number → always displayed
   * - null → derive from `source` when possible; otherwise "—"
   */
  value: number | null;
  /** Optional display suffix (e.g. "+") */
  suffix?: string;
  source: TEngineeringMetricSource;
  /** Short note for editors / UI footnote */
  hint?: string;
};

export const engineeringMetricsSection: TSectionHeading = {
  eyebrow: "Engineering metrics",
  title: "Delivery signals from the portfolio",
  description:
    "Engineering counts derived from published case studies and the HOLASVISION stack — editable in data, never padded with business KPIs.",
};

/**
 * Edit values here. Prefer null + source for live portfolio sync;
 * set a number when you want a fixed override.
 */
export const engineeringMetrics: TEngineeringMetric[] = [
  {
    id: "projects-completed",
    label: "Projects Completed",
    value: null,
    source: "projects-completed",
    hint: "Shipped or in-production case studies in @data/projects.",
  },
  {
    id: "technologies",
    label: "Technologies",
    value: null,
    source: "technologies",
    hint: "Unique technologies across showcase + project stacks.",
  },
  {
    id: "case-studies",
    label: "Case Studies",
    value: null,
    source: "case-studies",
    hint: "Projects with published narrative content.",
  },
  {
    id: "automation-workflows",
    label: "Automation Workflows",
    value: null,
    source: "automation-workflows",
    hint: "Workflow automation case studies / diagrams.",
  },
  {
    id: "repositories",
    label: "Repositories",
    value: null,
    source: "repositories",
    hint: "Projects with a documented repository (public or private).",
  },
  {
    id: "components",
    label: "Components",
    // Editable — update when the component library count is confirmed.
    value: null,
    source: "manual",
    hint: "Set manually (e.g. count of src/components modules). Leave null to hide a number.",
  },
  {
    id: "pages-built",
    label: "Pages Built",
    // Editable — do not invent totals across client products.
    value: null,
    source: "manual",
    hint: "Set manually when page counts across shipped products are confirmed.",
  },
];

function uniqueTechCount(): number {
  const set = new Set<string>();
  for (const tech of showcaseTechnologies) {
    set.add(tech.name.toLowerCase());
  }
  for (const project of projects) {
    for (const item of project.technologyStack) {
      set.add(item.toLowerCase());
    }
  }
  return set.size;
}

function deriveMetricValue(source: TEngineeringMetricSource): number | null {
  switch (source) {
    case "projects-completed":
      return projects.filter(
        (p) =>
          p.projectStatus === "shipped" || p.projectStatus === "in-production"
      ).length;
    case "technologies":
      return uniqueTechCount();
    case "case-studies":
      return projects.filter((p) => isCaseStudyNarrativeReady(p)).length;
    case "automation-workflows":
      return projects.filter(
        (p) =>
          Boolean(p.workflowDiagram) ||
          p.category === "Workflow Automation" ||
          p.categories.includes("Workflow Automation")
      ).length;
    case "repositories":
      return projects.filter(
        (p) =>
          Boolean(p.repository.url) ||
          p.repository.visibility === "public" ||
          p.repository.visibility === "private" ||
          p.repository.visibility === "nda"
      ).length;
    case "components":
    case "pages-built":
    case "manual":
      return null;
    default:
      return null;
  }
}

export type TResolvedEngineeringMetric = {
  id: string;
  label: string;
  /** Display string — number with optional suffix, or "—" */
  display: string;
  numeric: number | null;
  hint?: string;
  isOverride: boolean;
};

/** Resolve metrics for UI — overrides win; otherwise derive; else em dash. */
export function getResolvedEngineeringMetrics(): TResolvedEngineeringMetric[] {
  return engineeringMetrics.map((metric) => {
    const isOverride = metric.value != null;
    const numeric = isOverride
      ? metric.value
      : deriveMetricValue(metric.source);
    const display =
      numeric == null ? "—" : `${numeric}${metric.suffix ?? ""}`;

    return {
      id: metric.id,
      label: metric.label,
      display,
      numeric,
      hint: metric.hint,
      isOverride,
    };
  });
}
