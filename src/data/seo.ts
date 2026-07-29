import { TPageSeo, TSeo } from "@type/Content";
import { profile } from "./profile";

/**
 * Site-wide SEO / Open Graph / AEO / GEO metadata.
 */
export const seo: TSeo = {
  title: `${profile.brand} — Full Stack Development & AI Automation`,
  description: `${profile.brand} builds full stack products, AI automation, AI agents, SaaS platforms, and workflow systems that help businesses operate faster and scale with confidence. Founded by ${profile.name}.`,
  siteUrl: "https://holasvision.netlify.app",
  siteName: profile.brand,
  locale: "en_US",
  applicationName: profile.brand,
  creator: profile.brand,
  publisher: profile.brand,
  twitterHandle: "",
  ogImage: "/images/og-default.jpg",
  ogImageAlt: `${profile.brand} — Full Stack Development and AI Automation`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  copyrightSuffix: "All rights reserved.",
  keywords: [
    "HOLASVISION",
    "Full Stack Development",
    "AI Automation",
    "AI Agents",
    "Workflow Automation",
    "SaaS Development",
    "API Integration",
    "Chrome Extensions",
    profile.name,
  ],
  knowsAbout: [
    "Full Stack Development",
    "AI Automation",
    "AI Agents",
    "Workflow Automation",
    "SaaS Development",
    "API Integrations",
    "Chrome Extensions",
    "Prompt Engineering",
    "Business Automation",
    "Cloud Deployment",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "Docker",
    "OpenAI",
    "Claude",
    "LangChain",
    "n8n",
    "Zapier",
    "Make.com",
    "Vercel",
    "AWS",
  ],
  answerSummary: `${profile.name} is the founder of ${profile.brand}, a full stack development and AI automation practice. HOLASVISION builds SaaS products, AI agents, workflow automation, API integrations, Chrome extensions, and production web platforms for startups, agencies, and operators — remotely worldwide.`,
  serviceArea: profile.location,
  // Omit until a real public rate card is published (do not invent $$ tiers).
  priceRange: "",
};

/**
 * Per-route titles/descriptions. Home uses absoluteTitle; others use layout template.
 */
export const pageSeo: Record<string, TPageSeo> = {
  home: {
    path: "/",
    title: seo.title,
    absoluteTitle: true,
    description: seo.description,
    keywords: seo.keywords,
  },
  about: {
    path: "/about",
    title: "Full Stack Developer & AI Automation Expert",
    description: `${profile.name} is a Full Stack Developer and AI Automation Expert, founder of ${profile.brand}. Learn about his approach to SaaS, AI agents, workflow automation, and production software.`,
    keywords: [
      profile.name,
      "HOLASVISION",
      "Full Stack Developer",
      "AI Automation Expert",
      "AI Agents",
    ],
  },
  work: {
    path: "/work",
    title: "Full Stack & AI Automation Experience",
    description: `Professional experience with ${profile.brand}: full stack engineering, AI automation, API integrations, and production delivery for product teams.`,
    keywords: [
      "Full Stack Experience",
      "AI Automation",
      "Software Engineering",
      "HOLASVISION",
    ],
  },
  projects: {
    path: "/projects",
    title: "Case Studies — Software Solutions & Platforms",
    description: `HOLASVISION case studies across SaaS, AI automation, CRM, Chrome extensions, and full stack platforms by ${profile.name}. Representative studies are labeled until named-client assets are published.`,
    keywords: [
      "Software Case Studies",
      "SaaS Case Study",
      "AI Automation Projects",
      "Full Stack Portfolio",
      "HOLASVISION",
    ],
  },
  connect: {
    path: "/connect",
    title: "Hire a Full Stack & AI Automation Partner",
    description: `Start a project with ${profile.brand}. Discuss full stack development, AI automation, AI agents, workflow automation, SaaS, API integrations, or Chrome extensions.`,
    keywords: [
      "Hire Full Stack Developer",
      "AI Automation Partner",
      "Contact HOLASVISION",
      "Start a Project",
    ],
  },
};

export const sitePages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Experience", path: "/work" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/connect" },
] as const;
