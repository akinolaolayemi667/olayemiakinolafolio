import { TSectionHeading } from "@type/Content";
import { projects } from "@data/projects";

/**
 * Homepage technology showcase — categorized delivery stack.
 * Project links resolve from published case-study technology stacks only.
 */

export type TShowcaseCategoryId =
  | "frontend"
  | "backend"
  | "cloud"
  | "database"
  | "automation"
  | "ai"
  | "deployment"
  | "design";

export type TShowcaseTechnology = {
  id: string;
  name: string;
  category: TShowcaseCategoryId;
  description: string;
  /** Local SVG path when available. */
  icon?: string;
  /** Brand logo id from `@components/expertise/techLogos`. */
  logoId?: string;
  matchKeys: string[];
};

export const technologyShowcaseSection: TSectionHeading = {
  eyebrow: "Technology showcase",
  title: "The stack behind HOLASVISION delivery",
  description:
    "Technologies used across full stack products, AI automation, data platforms, and production launches — linked to the case studies that use them.",
};

export const showcaseCategories: {
  id: TShowcaseCategoryId;
  label: string;
}[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "cloud", label: "Cloud" },
  { id: "database", label: "Database" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI" },
  { id: "deployment", label: "Deployment" },
  { id: "design", label: "Design" },
];

export const showcaseTechnologies: TShowcaseTechnology[] = [
  // Frontend
  {
    id: "react",
    name: "React",
    category: "frontend",
    logoId: "react",
    icon: "/images/skills/react.svg",
    matchKeys: ["React", "Lucide React"],
    description:
      "Component-driven UI for SaaS products, dashboards, and conversion-focused experiences.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    logoId: "nextjs",
    icon: "/images/skills/nextjs.svg",
    matchKeys: ["Next.js"],
    description:
      "App Router applications with typed content, SEO foundations, and static or hybrid delivery.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    logoId: "typescript",
    icon: "/images/skills/ts.svg",
    matchKeys: ["TypeScript"],
    description:
      "Typed architecture across routes, content modules, integrations, and shared UI systems.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    logoId: "tailwind",
    matchKeys: ["Tailwind CSS"],
    description:
      "Utility-first styling for responsive layouts and design-system-friendly product surfaces.",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    logoId: "nodejs",
    matchKeys: ["Node.js"],
    description:
      "Runtime for APIs, services, and platform glue behind production web applications.",
  },
  {
    id: "api-integrations",
    name: "API Integrations",
    category: "backend",
    matchKeys: ["API Integrations", "REST", "Webhooks"],
    description:
      "Durable connections across CRMs, payments, messaging, and internal systems.",
  },
  {
    id: "tanstack-start",
    name: "TanStack Start",
    category: "backend",
    matchKeys: ["TanStack Start", "TanStack Router"],
    description:
      "File-based routing and server loaders for data-heavy product experiences.",
  },

  // Cloud
  {
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    logoId: "vercel",
    matchKeys: ["Vercel"],
    description:
      "Frontend and serverless delivery for Next.js and modern application launches.",
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "cloud",
    matchKeys: ["Netlify"],
    description:
      "Static hosting and edge delivery for portfolio and marketing surfaces.",
  },

  // Database
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    logoId: "supabase",
    matchKeys: ["Supabase"],
    description:
      "Postgres, auth, and row-level security for production application backends.",
  },

  // Automation
  {
    id: "n8n",
    name: "n8n",
    category: "automation",
    matchKeys: ["n8n"],
    description:
      "Workflow automation across business tools and APIs with maintainable handoff.",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    matchKeys: ["Zapier"],
    description:
      "Fast cross-app automation for operators who need reliable process glue.",
  },
  {
    id: "manychat",
    name: "ManyChat",
    category: "automation",
    matchKeys: ["ManyChat"],
    description:
      "Conversation and DM automation for lead capture, consent, and freebie delivery.",
  },

  // AI
  {
    id: "openai",
    name: "OpenAI",
    category: "ai",
    matchKeys: ["OpenAI"],
    description:
      "LLM integrations for assistants, generation, and automation inside product workflows.",
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "ai",
    matchKeys: ["Gemini"],
    description:
      "Google model integrations for text and multimodal workflows when the stack calls for it.",
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "ai",
    matchKeys: ["LangChain"],
    description:
      "Composable agent and chain orchestration for structured AI delivery paths.",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    category: "ai",
    matchKeys: ["AI Agents"],
    description:
      "Agents that take action in real systems with tool calling and human-in-the-loop controls.",
  },

  // Deployment
  {
    id: "docker",
    name: "Docker",
    category: "deployment",
    matchKeys: ["Docker"],
    description:
      "Containerized services for predictable local and production environments.",
  },
  {
    id: "vps",
    name: "VPS Deployment",
    category: "deployment",
    matchKeys: ["VPS Deployment"],
    description:
      "Dedicated hosting and operations for services that need VPS-based delivery.",
  },
  {
    id: "vite",
    name: "Vite",
    category: "deployment",
    matchKeys: ["Vite"],
    description:
      "Fast frontend tooling and build pipelines for modern React applications.",
  },

  // Design
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "design",
    matchKeys: ["Framer Motion"],
    description:
      "Motion systems for entrance, scroll reveal, and interactive product polish.",
  },
  {
    id: "radix",
    name: "Radix UI",
    category: "design",
    matchKeys: ["Radix UI"],
    description:
      "Accessible primitives for consistent, keyboard-friendly product interfaces.",
  },
];

/** Projects that list this technology (or an alias) in their published stack. */
export function getProjectsUsingTechnology(tech: TShowcaseTechnology): {
  slug: string;
  title: string;
}[] {
  const keys = tech.matchKeys.map((k) => k.toLowerCase());
  const seen = new Set<string>();
  const matches: { slug: string; title: string }[] = [];

  for (const project of projects) {
    if (!project.technologyStack.length) continue;
    const stack = project.technologyStack.map((t) => t.toLowerCase());
    const hit = keys.some((key) =>
      stack.some(
        (item) => item === key || (key.length >= 4 && item.includes(key))
      )
    );
    if (hit && !seen.has(project.slug)) {
      seen.add(project.slug);
      matches.push({ slug: project.slug, title: project.title });
    }
  }

  return matches;
}
