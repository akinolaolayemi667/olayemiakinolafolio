import { THeroContent } from "@type/Content";
import { profile } from "./profile";

/**
 * Homepage hero — company-grade, conversion-focused.
 */
export const hero: THeroContent = {
  headline: "Full stack engineering and AI automation that move the business",
  subheadline:
    "HOLASVISION designs and ships SaaS products, AI agents, workflow automation, API integrations, and Chrome extensions — from first interface to production.",
  primaryCta: "Start a project",
  primaryHref: "/connect",
  secondaryCta: "Explore expertise",
  secondaryHref: "#engineering-intelligence",
  socialProof: profile.brandLead,
  trustPoints: [
    "Full stack product engineering",
    "AI automation & agents",
    "Production-ready delivery",
  ],
};
