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
