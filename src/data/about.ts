import { TAboutBio, TSectionCopy } from "@type/Content";
import { profile } from "./profile";

/**
 * About page biography — founder narrative for HOLASVISION.
 */
export const aboutBio: TAboutBio = {
  heading: `About ${profile.name}`,
  typeSequence: [
    "Full Stack Developer",
    1500,
    "AI Automation Expert",
    1000,
    "AI Agent Developer",
    1000,
  ],
  paragraphs: [
    `Hi, I'm ${profile.name}, Founder of ${profile.brand}.`,
    `${profile.brand} is my professional studio and freelance engineering practice — focused on full stack development, AI automation, and AI agents that support real business operations.`,
    "I build with React, Next.js, and TypeScript; automate workflows with n8n and Zapier; and design AI systems with OpenAI, Gemini, and LangChain. Delivery also covers API integrations, Supabase-backed platforms, Dockerized services, and VPS deployment.",
    "Every engagement is scoped for clarity, maintainability, and handoff — so teams can own the systems after launch.",
    "Whether you need a product built end to end, automation across your tools, or production infrastructure that stays reliable, HOLASVISION is set up to partner with startups, agencies, and operators remotely worldwide.",
  ],
};

/**
 * Shared About / Work / Projects page section titles and UI labels.
 */
export const sectionCopy: TSectionCopy = {
  experienceTitle: "Experience",
  educationTitle: "Education",
  certificationsTitle: "Certifications",
  skillsTitle: "Skills",
  projectsPageTitle: "Projects",
  experienceEmpty:
    "Professional journey details will appear here when published.",
  educationEmpty:
    "Education details will be listed here when ready for public disclosure.",
  certificationsEmpty:
    "Certifications will appear here as credentials are added.",
  presentLabel: "Present",
  showCertificateLabel: "Show Certificate",
  liveSiteLabel: "Live Site",
  viewSourceLabel: "View Source",
  experienceImageAlt: "Developer working on a laptop",
  educationImageAlt: "Learning and education concept",
  certificationsImageAlt: "Graduation and certifications concept",
  projectImageAlt: "Project preview",
};
