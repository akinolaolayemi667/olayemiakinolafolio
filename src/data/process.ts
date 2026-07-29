import { TSectionHeading, TProcessStep } from "@type/Content";

/**
 * Engineering Process — HOLASVISION delivery workflow (Home).
 */
export const processSection: TSectionHeading = {
  eyebrow: "Engineering process",
  title: "How engagements move from discovery to lasting systems",
  description:
    "A clear, repeatable workflow — research before code, architecture before scale, and maintenance after launch so your team can own what ships.",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
};

export const processSteps: TProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Clarify business goals, constraints, users, and the outcomes that define a successful engagement.",
  },
  {
    step: "02",
    title: "Research",
    description:
      "Map existing tools, data flows, risks, and opportunities so decisions rest on real context — not assumptions.",
  },
  {
    step: "03",
    title: "Architecture",
    description:
      "Define system boundaries, integrations, and a technical shape your team can follow and extend.",
  },
  {
    step: "04",
    title: "Design",
    description:
      "Structure product flows, interface hierarchy, and interaction patterns before heavy build work begins.",
  },
  {
    step: "05",
    title: "Development",
    description:
      "Build full stack software, AI automation, and integrations in focused iterations with clean handoff in mind.",
  },
  {
    step: "06",
    title: "Testing",
    description:
      "Validate reliability, security, accessibility, and the workflows users and operators depend on.",
  },
  {
    step: "07",
    title: "Optimization",
    description:
      "Tighten performance, Core Web Vitals, and operational efficiency before and after release.",
  },
  {
    step: "08",
    title: "Deployment",
    description:
      "Launch with a repeatable release path — monitoring, environments, and production ownership clarity.",
  },
  {
    step: "09",
    title: "Maintenance",
    description:
      "Improve, maintain, and extend the system as your product and operations grow after handoff.",
  },
];
