import { TSectionHeading, TServiceItem } from "@type/Content";

/**
 * Services offered (Home) — premium engineering offerings.
 */
export const servicesSection: TSectionHeading = {
  eyebrow: "Services",
  title: "Engineering services built for real product delivery",
  description:
    "From full stack applications to AI-assisted workflows, integrations, and production quality — scoped for clarity, maintainability, and handoff.",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
};

/** Compact product examples shown as chips under the Services heading. */
export const productExamples: string[] = [
  "SaaS products",
  "AI-powered applications",
  "Chrome extensions",
  "Workflow automation",
  "AI agents",
  "API platforms",
];

export const services: TServiceItem[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    icon: "fullstack",
    description:
      "MVPs and production applications with React, Next.js, and TypeScript — clean architecture, modern UX, and a path your team can own after launch.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    ctaLabel: "Discuss a build",
    ctaHref: "#contact",
    problem:
      "You need a coherent product — not disconnected frontends and backends.",
    outcomes: ["MVP to production", "Auth & dashboards", "API-first builds"],
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Engineering",
    icon: "ai",
    description:
      "AI agents and automation that work inside real operations — OpenAI, Gemini, and LangChain with production guardrails and human-in-the-loop controls.",
    technologies: ["OpenAI", "Gemini", "LangChain", "AI Agents"],
    ctaLabel: "Explore AI delivery",
    ctaHref: "#contact",
    problem:
      "Teams lose time to repetitive work that models and software should already handle.",
    outcomes: ["Tool-calling agents", "Ops automation", "Human-in-the-loop"],
  },
  {
    id: "workflows",
    title: "Workflow Automation",
    icon: "workflow",
    description:
      "Reliable n8n, Zapier, and ManyChat systems that remove manual handoffs — designed so your team can maintain them after handoff.",
    technologies: ["n8n", "Zapier", "ManyChat"],
    ctaLabel: "Automate a workflow",
    ctaHref: "#contact",
    problem:
      "Manual handoffs between tools create delays, errors, and invisible process debt.",
    outcomes: ["n8n systems", "Zapier flows", "DM automation"],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: "design",
    description:
      "Product interfaces and conversion-focused experiences — accessible layouts, design-system-friendly Tailwind UI, and clear interaction hierarchy.",
    technologies: ["Tailwind CSS", "Radix UI", "Framer Motion"],
    ctaLabel: "Improve the interface",
    ctaHref: "#contact",
    problem:
      "Users bounce when the interface is unclear, inconsistent, or hard to use on mobile.",
    outcomes: ["Responsive layouts", "Design systems", "Conversion UX"],
  },
  {
    id: "apis",
    title: "API Integration",
    icon: "api",
    description:
      "Stable integrations across CRMs, payments, messaging, and internal APIs — auth, sync, webhooks, and error handling built for production.",
    technologies: ["REST", "Webhooks", "Node.js", "TypeScript"],
    ctaLabel: "Connect your systems",
    ctaHref: "#contact",
    problem:
      "Critical systems don’t share data, so decisions stay fragmented.",
    outcomes: ["REST & webhooks", "Auth & sync", "Error handling"],
  },
  {
    id: "supabase",
    title: "Supabase Development",
    icon: "supabase",
    description:
      "Auth, Postgres data, and row-level security for production applications — dual-mode guest and authenticated patterns when the product needs them.",
    technologies: ["Supabase", "Postgres", "Auth", "RLS"],
    ctaLabel: "Build on Supabase",
    ctaHref: "#contact",
    problem:
      "You need a production data and auth layer without standing up a custom backend from scratch.",
    outcomes: ["Auth & sessions", "Secure data models", "RLS policies"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    icon: "performance",
    description:
      "Faster loads and smoother interaction — Core Web Vitals, static delivery, lazy motion, and route-level data strategies that protect LCP and CLS.",
    technologies: ["Next.js", "Core Web Vitals", "Static export"],
    ctaLabel: "Speed up the product",
    ctaHref: "#contact",
    problem:
      "Slow pages and layout shift erode trust before users reach the value.",
    outcomes: ["LCP/CLS care", "Lazy loading", "Build discipline"],
  },
  {
    id: "seo",
    title: "SEO",
    icon: "seo",
    description:
      "Technical SEO foundations — metadata, Open Graph, sitemap, robots, and structured data generated from typed content modules.",
    technologies: ["Metadata", "JSON-LD", "Sitemap", "Open Graph"],
    ctaLabel: "Strengthen discoverability",
    ctaHref: "#contact",
    problem:
      "Strong products stay invisible when metadata and crawl paths are incomplete.",
    outcomes: ["Schema markup", "Sitemap & robots", "Share cards"],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    icon: "a11y",
    description:
      "Inclusive interfaces with semantic markup, keyboard focus, reduced-motion support, and accessible primitives teams can extend.",
    technologies: ["WCAG practices", "Radix UI", "Focus management"],
    ctaLabel: "Improve accessibility",
    ctaHref: "#contact",
    problem:
      "Products exclude users when focus, contrast, and semantics are treated as optional.",
    outcomes: ["Keyboard paths", "Semantic HTML", "Motion safety"],
  },
];
