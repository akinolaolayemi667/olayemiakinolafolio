import { TSectionHeading, TTechStackGroup } from "@type/Content";

/**
 * Categorized tech stack — HOLASVISION delivery emphasis first.
 */
export const techStackSection: TSectionHeading = {
  eyebrow: "Tools I ship with",
  title: "A production-ready tech stack",
  description:
    "Full stack, AI automation, and deployment tools used in HOLASVISION studio delivery.",
};

export const techStack: TTechStackGroup[] = [
  {
    category: "Full Stack",
    items: ["React", "Next.js", "TypeScript", "API Integrations"],
  },
  {
    category: "AI",
    items: [
      "AI Automation",
      "AI Agents",
      "OpenAI",
      "Gemini",
      "LangChain",
    ],
  },
  {
    category: "Automation",
    items: ["n8n", "Zapier"],
  },
  {
    category: "Platform & Deploy",
    items: ["Supabase", "Docker", "VPS Deployment"],
  },
];
