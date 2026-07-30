import {
  TExpertiseHubCategory,
  TExpertiseHubSection,
  TExpertiseOrbitNode,
} from "@type/Content";

/**
 * Technology Ecosystem — concentric orbit + business-focused panels.
 * Orbit nodes are data-driven; add/remove entries to reconfigure the ring.
 */
export const expertiseHubSection: TExpertiseHubSection = {
  eyebrow: "Engineering Expertise",
  title: "Architecture map for full stack platforms, AI agents, and SaaS delivery",
  description:
    "Select a node to inspect how HOLASVISION composes interface, intelligence, and platform layers into production-ready system architecture.",
  centerLabel: "React",
  whatIBuildLabel: "Architecture scope",
  businessValueLabel: "Operational impact",
  capabilitiesLabel: "Capabilities",
  toolsLabel: "Implementation stack",
  outcomesLabel: "System outcomes",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
};

export const expertiseHubCategories: TExpertiseHubCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    whatIBuild:
      "Modern web applications, SaaS interfaces, dashboards, and conversion-focused product experiences with React, Next.js, TypeScript, and Tailwind CSS.",
    businessValue:
      "Faster time-to-market, clearer UX, and interfaces your customers actually enjoy using — without sacrificing performance or maintainability.",
    capabilities: [
      "React & Next.js applications",
      "TypeScript product architecture",
      "Tailwind design systems",
      "Auth-aware dashboards",
      "Core Web Vitals optimization",
      "Accessible, responsive layouts",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Lovable"],
    outcomes: [
      "Production-ready SaaS frontends",
      "Higher engagement and conversion",
      "Cleaner handoff to your team",
      "Scalable UI foundations",
    ],
    accentColor: "#00E5FF",
  },
  {
    id: "ai",
    title: "AI & Automation",
    whatIBuild:
      "Intelligent workflows, AI agents, and automation systems that connect your tools and remove repetitive operational work.",
    businessValue:
      "Lower operational cost, faster cycle times, and AI that works inside real business processes — not isolated demos.",
    capabilities: [
      "Workflow automation",
      "AI agents & assistants",
      "CRM and ops automation",
      "LLM integrations",
      "Prompt & tool-calling design",
      "Human-in-the-loop controls",
    ],
    technologies: ["OpenAI", "Gemini", "LangChain", "n8n", "Zapier", "Lovable"],
    outcomes: [
      "Automated lead qualification",
      "CRM synchronization",
      "AI-assisted support",
      "Internal process automation",
      "Intelligent reporting",
    ],
    accentColor: "#2DD4BF",
  },
  {
    id: "platform",
    title: "Backend, Cloud & DevOps",
    whatIBuild:
      "APIs, data platforms, and production infrastructure with Supabase, Node.js, and Vercel that keep your product reliable as usage grows.",
    businessValue:
      "Stable releases, secure data foundations, and cloud setups your team can operate confidently after handoff.",
    capabilities: [
      "API integrations",
      "Supabase data & auth",
      "Node.js services",
      "Vercel deployments",
      "CI-friendly release paths",
    ],
    technologies: ["Supabase", "Node.js", "Vercel"],
    outcomes: [
      "Predictable production launches",
      "Reliable API platforms",
      "Secure data models",
      "Faster, safer releases",
    ],
    accentColor: "#0D9488",
  },
];

/**
 * Outer-orbit technologies — evenly spaced around the ring.
 * `icon` is a TechLogoId from `@components/expertise/techLogos`.
 */
export const expertiseOrbitNodes: TExpertiseOrbitNode[] = [
  { id: "react", label: "React", icon: "react", categoryId: "frontend", ring: 1 },
  { id: "nextjs", label: "Next.js", icon: "nextjs", categoryId: "frontend", ring: 1 },
  {
    id: "typescript",
    label: "TypeScript",
    icon: "typescript",
    categoryId: "frontend",
    ring: 1,
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    icon: "tailwind",
    categoryId: "frontend",
    ring: 1,
  },
  {
    id: "supabase",
    label: "Supabase",
    icon: "supabase",
    categoryId: "platform",
    ring: 1,
  },
  { id: "nodejs", label: "Node.js", icon: "nodejs", categoryId: "platform", ring: 1 },
  { id: "vercel", label: "Vercel", icon: "vercel", categoryId: "platform", ring: 1 },
  { id: "lovable", label: "Lovable", icon: "lovable", categoryId: "frontend", ring: 1 },
];

export function getExpertiseCategory(
  id: string
): TExpertiseHubCategory | undefined {
  return expertiseHubCategories.find((category) => category.id === id);
}
