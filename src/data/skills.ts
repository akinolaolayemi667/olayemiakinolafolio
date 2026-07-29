import {
  TAboutSkills,
  TEngineeringSkill,
  TEngineeringSkillCategoryId,
  TSkillFilterLabels,
  TSkillIconItem,
} from "@type/Content";
import { projects } from "@data/projects";

/**
 * Interactive engineering skills — organized for the About skills section.
 * Descriptions and levels reflect published HOLASVISION practice emphasis.
 * Project links are resolved from real case-study technology stacks.
 */
export const skillFilterLabels: TSkillFilterLabels = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  cloud: "Cloud",
  automation: "Automation",
  ai: "AI",
  tools: "Tools",
  devops: "DevOps",
};

export const engineeringSkillCategories: {
  id: TEngineeringSkillCategoryId;
  label: string;
}[] = [
  { id: "frontend", label: skillFilterLabels.frontend },
  { id: "backend", label: skillFilterLabels.backend },
  { id: "databases", label: skillFilterLabels.databases },
  { id: "cloud", label: skillFilterLabels.cloud },
  { id: "automation", label: skillFilterLabels.automation },
  { id: "ai", label: skillFilterLabels.ai },
  { id: "tools", label: skillFilterLabels.tools },
  { id: "devops", label: skillFilterLabels.devops },
];

function skill(
  partial: Omit<TEngineeringSkill, "icon"> & { icon?: string }
): TEngineeringSkill {
  return {
    icon: "",
    ...partial,
  };
}

export const engineeringSkills: TEngineeringSkill[] = [
  // Frontend
  skill({
    id: "react",
    name: "React",
    category: "frontend",
    level: "Core",
    logoId: "react",
    icon: "/images/skills/react.svg",
    matchKeys: ["React", "Lucide React"],
    description:
      "Component-driven product UI for SaaS, dashboards, and conversion-focused experiences.",
  }),
  skill({
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: "Core",
    logoId: "nextjs",
    icon: "/images/skills/nextjs.svg",
    matchKeys: ["Next.js"],
    description:
      "App Router sites and portfolios with typed content, SEO foundations, and static or hybrid delivery.",
  }),
  skill({
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: "Core",
    logoId: "typescript",
    icon: "/images/skills/ts.svg",
    matchKeys: ["TypeScript"],
    description:
      "Typed product architecture across routes, content modules, and shared UI systems.",
  }),
  skill({
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: "Active",
    logoId: "tailwind",
    matchKeys: ["Tailwind CSS"],
    description:
      "Design-system-friendly styling for responsive layouts and premium marketing surfaces.",
  }),

  // Backend
  skill({
    id: "api-integrations",
    name: "API Integrations",
    category: "backend",
    level: "Active",
    matchKeys: ["API Integrations"],
    description:
      "Connecting product, CRM, and operations tooling through durable integration paths.",
  }),
  skill({
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: "Active",
    logoId: "nodejs",
    matchKeys: ["Node.js"],
    description:
      "Services and platform glue for APIs, auth-aware backends, and production runtimes.",
  }),
  skill({
    id: "full-stack",
    name: "Full Stack Development",
    category: "backend",
    level: "Core",
    matchKeys: ["Full Stack Development"],
    description:
      "End-to-end delivery from interface to data and deployment for products teams can own.",
  }),

  // Databases
  skill({
    id: "supabase",
    name: "Supabase",
    category: "databases",
    level: "Active",
    logoId: "supabase",
    matchKeys: ["Supabase"],
    description:
      "Auth, Postgres data, and row-level security for production application backends.",
  }),

  // Cloud
  skill({
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    level: "Active",
    logoId: "vercel",
    matchKeys: ["Vercel"],
    description:
      "Frontend and serverless delivery for Next.js and modern web applications.",
  }),
  skill({
    id: "netlify",
    name: "Netlify",
    category: "cloud",
    level: "Supporting",
    matchKeys: ["Netlify"],
    description:
      "Static hosting and edge delivery for portfolio and marketing surfaces.",
  }),

  // Automation
  skill({
    id: "n8n",
    name: "n8n",
    category: "automation",
    level: "Active",
    matchKeys: ["n8n"],
    description:
      "Self-hosted and cloud workflow automation across business tools and APIs.",
  }),
  skill({
    id: "zapier",
    name: "Zapier",
    category: "automation",
    level: "Active",
    matchKeys: ["Zapier"],
    description:
      "Fast integration workflows for operators who need reliable cross-app automation.",
  }),
  skill({
    id: "manychat",
    name: "ManyChat",
    category: "automation",
    level: "Active",
    matchKeys: ["ManyChat"],
    description:
      "Conversation and DM automation for lead capture, consent flows, and freebie delivery.",
  }),

  // AI
  skill({
    id: "ai-automation",
    name: "AI Automation",
    category: "ai",
    level: "Core",
    matchKeys: ["AI Automation"],
    description:
      "Intelligent workflows that remove repetitive operational work inside real business processes.",
  }),
  skill({
    id: "ai-agents",
    name: "AI Agents",
    category: "ai",
    level: "Core",
    matchKeys: ["AI Agents"],
    description:
      "Agent systems with tool calling and human-in-the-loop controls for practical operations.",
  }),
  skill({
    id: "openai",
    name: "OpenAI",
    category: "ai",
    level: "Active",
    matchKeys: ["OpenAI"],
    description:
      "LLM integrations for assistants, generation, and automation inside product workflows.",
  }),
  skill({
    id: "gemini",
    name: "Gemini",
    category: "ai",
    level: "Active",
    matchKeys: ["Gemini"],
    description:
      "Google model integrations for multimodal and text workflows when the stack calls for it.",
  }),
  skill({
    id: "langchain",
    name: "LangChain",
    category: "ai",
    level: "Active",
    matchKeys: ["LangChain"],
    description:
      "Composable agent and chain orchestration for structured AI delivery paths.",
  }),

  // Tools
  skill({
    id: "tanstack-start",
    name: "TanStack Start",
    category: "tools",
    level: "Supporting",
    matchKeys: ["TanStack Start", "TanStack Router"],
    description:
      "File-based routing and SSR loaders for data-heavy product surfaces.",
  }),
  skill({
    id: "vite",
    name: "Vite",
    category: "tools",
    level: "Supporting",
    matchKeys: ["Vite"],
    description:
      "Fast frontend tooling for modern React and TanStack application builds.",
  }),
  skill({
    id: "framer-motion",
    name: "Framer Motion",
    category: "tools",
    level: "Supporting",
    matchKeys: ["Framer Motion"],
    description:
      "Motion systems for entrance, scroll reveal, and interactive product polish.",
  }),
  skill({
    id: "radix",
    name: "Radix UI",
    category: "tools",
    level: "Supporting",
    matchKeys: ["Radix UI"],
    description:
      "Accessible primitives underpinning consistent product and portfolio UI.",
  }),

  // DevOps
  skill({
    id: "docker",
    name: "Docker",
    category: "devops",
    level: "Active",
    matchKeys: ["Docker"],
    description:
      "Containerized services for predictable local and production environments.",
  }),
  skill({
    id: "vps",
    name: "VPS Deployment",
    category: "devops",
    level: "Active",
    matchKeys: ["VPS Deployment"],
    description:
      "VPS-based deployment and operations for services that need dedicated hosting.",
  }),
];

/** Projects that list this skill (or an alias) in their published technology stack. */
export function getProjectsUsingSkill(skill: TEngineeringSkill): {
  slug: string;
  title: string;
}[] {
  const keys = skill.matchKeys.map((k) => k.toLowerCase());
  const seen = new Set<string>();
  const matches: { slug: string; title: string }[] = [];

  for (const project of projects) {
    if (!project.technologyStack.length) continue;
    const stack = project.technologyStack.map((t) => t.toLowerCase());
    const hit = keys.some((key) =>
      stack.some(
        (tech) => tech === key || (key.length >= 4 && tech.includes(key))
      )
    );
    if (hit && !seen.has(project.slug)) {
      seen.add(project.slug);
      matches.push({ slug: project.slug, title: project.title });
    }
  }

  return matches;
}

function toIconItem(s: TEngineeringSkill): TSkillIconItem {
  return { name: s.name, icon: s.icon, image: s.icon };
}

/**
 * Legacy grouped shape for callers that still flatten skill counts.
 * Maps into the previous frontend / ai / automation / platform buckets.
 */
export const aboutSkills: TAboutSkills = {
  frontend: engineeringSkills
    .filter((s) => s.category === "frontend")
    .map(toIconItem),
  ai: engineeringSkills.filter((s) => s.category === "ai").map(toIconItem),
  automation: engineeringSkills
    .filter((s) => s.category === "automation")
    .map(toIconItem),
  platform: engineeringSkills
    .filter((s) =>
      ["backend", "databases", "cloud", "devops"].includes(s.category)
    )
    .map(toIconItem),
};
