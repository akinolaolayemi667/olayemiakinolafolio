import { TEngineeringIntelligenceSection } from "@type/Content";
import { profile } from "./profile";

/**
 * Engineering Intelligence — founder/company introduction (Home).
 * Calibrated for product-company tone, not resume or sci-fi HUD.
 */
export const engineeringIntelligenceSection: TEngineeringIntelligenceSection = {
  eyebrow: "About",
  title: "Full stack and AI automation expertise",
  description:
    "HOLASVISION combines full stack engineering with AI automation — so product interfaces, infrastructure, agents, and workflows work as one system.",
  initLine: "Preparing engineering profile…",
  statusAnalyzing: "Loading",
  statusReady: "Ready",
  conclusion:
    "Next, explore the technology stack behind HOLASVISION delivery.",
  ctaLabel: "Explore the technology stack",
  ctaHref: "#technology-ecosystem",
  badges: [
    { id: "verified", label: "Verified expertise", tone: "accent" },
    { id: "remote", label: "Remote worldwide", tone: "neutral" },
    { id: "available", label: "Available for projects", tone: "accent" },
    { id: "brand", label: profile.brand, tone: "brand" },
  ],
  initSteps: [
    { id: "identity", label: "Identity confirmed" },
    { id: "technical", label: "Technical profile loaded" },
    { id: "expertise", label: "Expertise mapped" },
    { id: "ready", label: "Ready" },
  ],
  modules: [
    {
      id: "summary",
      label: "Overview",
      body: `${profile.brand} is the professional studio and freelance engineering practice of ${profile.name}, Founder — focused on full stack development, AI automation, and AI agents.`,
    },
    {
      id: "focus",
      label: "What we deliver",
      body: "Web products, AI-powered workflows, and production platforms — engineered for clarity, reliability, and handoff.",
      items: [
        "Full stack development",
        "AI automation & AI agents",
        "n8n & Zapier workflows",
        "OpenAI, Gemini & LangChain",
        "Supabase, Docker & VPS deployment",
        "API integrations",
      ],
    },
    {
      id: "approach",
      label: "How we work",
      body: "Clear scope, disciplined engineering, and systems your team can own after handoff — not demos that collapse in production.",
    },
    {
      id: "value",
      label: "Why teams hire us",
      body: profile.valueProposition,
    },
  ],
};

/** Hard-coded architecture layers for the founder visual — maps to expertise domains. */
export const expertiseArchitectureLayers = [
  {
    id: "interface",
    title: "Interface & Product Layer",
    short: "UI",
    description:
      "React and Next.js surfaces with TypeScript contracts, Tailwind systems, and performance-aware UX.",
    accentColor: "#22D3EE",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "intelligence",
    title: "Intelligence & Automation Layer",
    short: "AI",
    description:
      "AI agents, LLM integrations, and workflow automation that connect tools and remove manual ops.",
    accentColor: "#2DD4BF",
    technologies: ["OpenAI", "LangChain", "n8n", "Zapier"],
  },
  {
    id: "platform",
    title: "Platform & Delivery Layer",
    short: "Ops",
    description:
      "APIs, Supabase data/auth, Node services, and Vercel deployment paths built for production handoff.",
    accentColor: "#14B8A6",
    technologies: ["Supabase", "Node.js", "Vercel", "Docker"],
  },
] as const;

/** Honest expertise metrics — counts from published stack/domains, not invented KPIs. */
export const expertiseMetrics = [
  {
    label: "Architecture domains",
    value: "3",
    hint: "Frontend, AI automation, and platform delivery",
  },
  {
    label: "Core technologies",
    value: "8+",
    hint: "Mapped in the interactive technology orbit",
  },
  {
    label: "Delivery scope",
    value: "Remote",
    hint: profile.location,
  },
  {
    label: "Engagement status",
    value: "Open",
    hint: profile.availability.split(".")[0],
  },
] as const;

/** Architecture principles shown in the intelligence panel. */
export const expertisePrinciples = [
  "Domain-first boundaries with typed contracts between layers",
  "Event-ready flows for automation, observability, and retries",
  "Progressive enhancement from MVP to production architecture",
  "Security-aware defaults across auth, data, and delivery paths",
] as const;

/** Delivery flow steps for ArchitectureCard sequence. */
export const expertiseDeliveryFlow = [
  {
    step: 1,
    title: "Discover & architect",
    description:
      "Map business goals to system boundaries, data flows, and the minimum production-ready stack.",
  },
  {
    step: 2,
    title: "Build & integrate",
    description:
      "Ship interfaces, APIs, and automation with clear ownership between frontend, AI, and platform layers.",
  },
  {
    step: 3,
    title: "Deploy & hand off",
    description:
      "Release to Vercel, Supabase, or client infrastructure with documentation your team can operate.",
  },
] as const;
