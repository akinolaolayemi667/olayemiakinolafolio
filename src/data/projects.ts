import {
  PROJECT_CATEGORIES,
  ProjectCategory,
  TPortfolioProject,
  TProjectsSectionCopy,
} from "@type/Project";

/**
 * Case study showcase copy + portfolio data.
 * Only publish confirmed facts. Incomplete fields stay empty for elegant TODOs in UI.
 */
export const projectsSection: TProjectsSectionCopy = {
  eyebrow: "Selected work",
  title: "Software solutions built for real operations",
  description:
    "Real projects from the HOLASVISION practice. Case studies stay visible while screenshots and outcomes are added — nothing here is invented for the portfolio.",
  viewCaseStudyLabel: "View case study",
  viewAllLabel: "View all case studies",
  viewAllHint: "Explore the full portfolio by category.",
  filterAllLabel: "All",
  archiveEyebrow: "Portfolio",
  archiveTitle: "Case studies & software solutions",
  archiveDescription:
    "Named engagements and products. Where detail is still being documented, you will see clear placeholders — not fabricated metrics or screenshots.",
  emptyFilterTitle: "No case studies in this category yet",
  emptyFilterBody: "Try another filter or view the full portfolio.",
  screenshotPlaceholderLabel: "Screenshot forthcoming",
  relatedTitle: "Related case studies",
  representativeBadge: "Representative",
  outcomesDisclaimer:
    "Outcomes below are qualitative estimates — not audited client metrics.",
  statusLabels: {
    shipped: "Shipped",
    "in-production": "In production",
    ongoing: "Ongoing",
    archived: "Archived",
  },
  sectionLabels: {
    executiveSummary: "Executive summary",
    businessProblem: "Business problem",
    projectGoals: "Project goals",
    solution: "Solution",
    systemArchitecture: "System architecture",
    workflowDiagram: "Workflow diagram",
    engineeringTimeline: "Engineering timeline",
    myRole: "My role",
    technologyStack: "Technology stack",
    keyFeatures: "Key features",
    engineeringHighlights: "Engineering highlights",
    engineeringChallenges: "Engineering challenges",
    lessonsLearned: "Lessons learned",
    roadmap: "Product roadmap",
    resultsImpact: "Results & business impact",
    gallery: "Screenshots & gallery",
    liveDemo: "Live demo",
    repository: "Repository",
  },
  cta: {
    title: "Interested in building a similar solution?",
    description: "Let's discuss your product, automation, or platform goals.",
    buttonLabel: "Let's discuss your project",
    href: "/connect",
  },
  heroLabels: {
    backToProjects: "Back to Projects",
    viewWorkflow: "View Workflow",
  },
};

/** Shared empty-state copy for incomplete case-study slots (UI only). */
export const projectPendingCopy = {
  mediaTitle: "Product screenshots forthcoming",
  mediaBody:
    "Real interface captures will appear here once approved for publication.",
  outcomesTitle: "Business outcomes forthcoming",
  outcomesBody:
    "Verified results and impact notes will be published here — this section stays empty until then.",
  narrativeTitle: "Case study narrative forthcoming",
  narrativeBody:
    "Problem, solution, and architecture details will be added when they can be stated accurately.",
};

/**
 * Real portfolio projects only.
 * Do not invent stacks, metrics, galleries, or client outcomes.
 */
export const projects: TPortfolioProject[] = [
  {
    id: "nexora-ai",
    slug: "nexora-ai",
    title: "NEXORA AI",
    subtitle:
      "AI business operating system for CRM, pipeline, conversations, and workflow automation",
    category: "AI Automation",
    categories: ["AI Automation", "CRM", "SaaS", "Business Platforms"],
    industry: "Business operations software",
    clientType: "HOLASVISION product build",
    summary:
      "NEXORA AI is a workspace that brings CRM, leads, pipeline, conversations, workflow automation, analytics, integrations, team management, and billing into one AI-assisted operating system.",
    problem:
      "Operators juggle separate tools for leads, deals, inbox, automation, and reporting. Context gets lost, and follow-up depends on whoever remembers to check the next app.",
    goals: [
      "Put CRM, conversations, and automation in one workspace",
      "Give teams a pipeline and lead workflow they can actually run",
      "Surface AI-assisted insights without a separate analytics stack",
    ],
    solution:
      "A React and TypeScript application with dedicated CRM, inbox, automation canvas, analytics, billing, and auth surfaces — deployed as a live product at nexoraai-inky.vercel.app.",
    architecture:
      "React 19 and TypeScript on Vite, styled with Tailwind CSS v4 and Framer Motion. React Router splits workspace areas. UI modules cover CRM leads and pipeline, an AI conversation layer, a visual automation flow canvas, analytics charts, billing modals, and an auth provider.",
    responsibilities: [
      "Product structure across CRM, inbox, automation, analytics, and billing",
      "Interface system with shared design tokens and motion",
      "Lead, deal, and conversation workflows in the CRM surface",
      "Production build and Vercel deployment",
    ],
    features: [
      "Lead management with filters, bulk actions, and profile tabs",
      "Deal pipeline with cards and a deal drawer",
      "AI conversation UI with insight cards",
      "Visual workflow canvas, node palette, and execution drawer",
      "Analytics funnel and lead-source views",
      "Billing and authentication surfaces",
    ],
    technologyStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Vercel",
    ],
    engineeringChallenges: [
      "Keeping CRM, inbox, automation, and billing coherent as one product instead of disconnected screens",
      "Modeling lead and deal flows without a heavy backend in the public product surface",
    ],
    results: [],
    businessImpact: [
      "Shows a full AI operating workspace buyers can open and click through",
      "Demonstrates CRM, automation, and analytics in one product story",
    ],
    gallery: [],
    liveDemo: {
      url: "https://nexoraai-inky.vercel.app",
      label: "Live product",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/nexoraai",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "in-production",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "NEXORA AI Case Study — AI Business Operating System",
      description:
        "How HOLASVISION built NEXORA AI: CRM, pipeline, conversations, workflow automation, and analytics in one React workspace.",
      keywords: [
        "NEXORA AI",
        "CRM",
        "AI automation",
        "workflow",
        "React",
        "HOLASVISION",
      ],
    },
  },
  {
    id: "aiflow",
    slug: "aiflow",
    title: "AIFlow",
    subtitle: "Marketing site for AI and CRM automation services",
    category: "AI Automation",
    categories: ["AI Automation", "CRM", "Workflow Automation"],
    industry: "Automation services",
    clientType: "HOLASVISION product build",
    summary:
      "AIFlow is a conversion-focused site for AI and CRM automation — hero, services, industries, process, workflow, and case-study sections designed to explain the offer and move visitors toward a conversation.",
    problem:
      "Automation services are hard to sell from a generic portfolio. Prospects need a clear offer, the industries served, and a simple path from problem to engagement.",
    goals: [
      "Explain AI and CRM automation in plain business language",
      "Show process and workflow without a dense product demo",
      "Give the practice a dedicated services surface with a live URL",
    ],
    solution:
      "A Vite and React marketing site with animated sections for hero, services, industries, process, workflow, and case studies, deployed at aiflow-taupe.vercel.app.",
    architecture:
      "React and TypeScript on Vite with Tailwind CSS v4 and Framer Motion. Layout primitives (navbar, mobile menu, sections) wrap page sections. Motion helpers cover fade, reveal, and stagger. The homepage is composed from those sections rather than a single long file.",
    responsibilities: [
      "Offer narrative for AI and CRM automation",
      "Section system for services, industries, process, and workflow",
      "Responsive navigation and production deploy",
    ],
    features: [
      "Hero with a supporting visual",
      "Services, industries, and process sections",
      "Workflow explanation block",
      "Case-study section on the same page",
      "Mobile navigation",
    ],
    technologyStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    engineeringChallenges: [
      "Keeping a services site specific enough to convert without inventing client metrics",
      "Balancing motion with a page that still reads clearly on mobile",
    ],
    results: [],
    businessImpact: [
      "Gives AI and CRM automation its own public offer page",
      "Lets a prospect understand services, industries, and process before they book",
    ],
    gallery: [],
    liveDemo: {
      url: "https://aiflow-taupe.vercel.app",
      label: "Live site",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/aiflow",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "AIFlow Case Study — AI & CRM Automation",
      description:
        "AIFlow is a HOLASVISION site for AI and CRM automation services, built with React, TypeScript, and Tailwind.",
      keywords: ["AIFlow", "CRM automation", "AI", "React", "HOLASVISION"],
    },
  },
  {
    id: "nova-estate",
    slug: "nova-estate",
    title: "NOVA Estates",
    subtitle: "Premium real estate discovery with search, listings, and saved properties",
    category: "Business Platforms",
    categories: ["Business Platforms", "Full Stack"],
    industry: "Real estate",
    clientType: "HOLASVISION product build",
    summary:
      "NOVA Estates is a premium property experience: search, featured listings, locations, property detail, galleries, and a saved-properties flow for buyers browsing high-end inventory.",
    problem:
      "Luxury listings get buried in generic property templates. Buyers need fast search, clear specs, and a way to keep properties they care about.",
    goals: [
      "Present premium listings with a distinct visual system",
      "Support search, categories, and location browsing",
      "Let visitors save properties without a heavy account wall",
    ],
    solution:
      "A React and TypeScript property site with hero search, listing cards, galleries, location views, a process timeline, and a favorites panel — live at nova-estate-lilac.vercel.app.",
    architecture:
      "Vite, React, TypeScript, and Tailwind CSS v4 with Framer Motion. Property components cover cards, galleries, price, specs, and status. Search has its own form and panel. Favorites and location modules sit beside the marketing sections.",
    responsibilities: [
      "Property discovery UX from hero search through listing detail",
      "Favorites flow and location presentation",
      "Motion and layout system for a premium real-estate tone",
    ],
    features: [
      "Hero property search",
      "Featured properties and category tiles",
      "Property gallery, price, and specs",
      "Location cards and map treatment",
      "Saved properties / favorites panel",
      "Process timeline for how a search proceeds",
    ],
    technologyStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    engineeringChallenges: [
      "Making search, listings, and saved state feel like one product on a static front end",
      "Keeping a premium layout readable across property cards and detail views",
    ],
    results: [],
    businessImpact: [
      "Shows a complete real-estate browsing experience prospects can open",
      "Demonstrates search, listings, locations, and saved properties together",
    ],
    gallery: [],
    liveDemo: {
      url: "https://nova-estate-lilac.vercel.app",
      label: "Live site",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/nova-estate",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "NOVA Estates Case Study — Premium Real Estate",
      description:
        "NOVA Estates is a premium real-estate site by HOLASVISION with search, listings, locations, and saved properties.",
      keywords: [
        "NOVA Estates",
        "real estate",
        "property search",
        "React",
        "HOLASVISION",
      ],
    },
  },
  {
    id: "aurelia-house",
    slug: "aurelia-house",
    title: "Aurelia House",
    subtitle: "Boutique luxury retreat site with rooms, dining, spa, and booking",
    category: "Business Platforms",
    categories: ["Business Platforms"],
    industry: "Hospitality",
    clientType: "HOLASVISION product build",
    summary:
      "Aurelia House is a boutique retreat website covering rooms, dining, spa, experiences, offers, destination, and a booking panel — built to feel like a stay, not a template landing page.",
    problem:
      "Hospitality brands lose bookings when the site reads like a brochure. Guests need rooms, experiences, and a clear way to start a stay.",
    goals: [
      "Present rooms, dining, spa, and experiences as one retreat",
      "Support an on-site booking flow",
      "Keep the visual system quiet and premium",
    ],
    solution:
      "A React site with dedicated home sections and hotel modules for rooms, dining, experiences, offers, destination, and booking — live at aureliahouse.vercel.app.",
    architecture:
      "Vite, React, TypeScript, Tailwind CSS, and Framer Motion. A booking provider and panel hold stay intent. Room, dining, experience, and offer components are split from the homepage sections so each part of the retreat can stand alone.",
    responsibilities: [
      "Retreat narrative across rooms, dining, spa, and experiences",
      "Booking panel and provider",
      "Layout, navigation, and motion for a luxury hospitality tone",
    ],
    features: [
      "Hero, rooms, dining, spa, and experiences on the homepage",
      "Offers and destination content",
      "Room details and stay inclusions",
      "Dining services and menu preview",
      "Experience filters",
      "Booking panel with shared booking state",
    ],
    technologyStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    engineeringChallenges: [
      "Structuring many hospitality modules without a single oversized page",
      "Keeping booking state available across room and offer views",
    ],
    results: [],
    businessImpact: [
      "Gives a hospitality brand a bookable public presence",
      "Shows rooms, dining, spa, and experiences as one guest journey",
    ],
    gallery: [],
    liveDemo: {
      url: "https://aureliahouse.vercel.app",
      label: "Live site",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/aureliahouse",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "Aurelia House Case Study — Boutique Luxury Retreat",
      description:
        "Aurelia House is a boutique retreat site by HOLASVISION with rooms, dining, spa, experiences, and booking.",
      keywords: [
        "Aurelia House",
        "hospitality",
        "booking",
        "luxury retreat",
        "React",
        "HOLASVISION",
      ],
    },
  },
  {
    id: "empress-essentials",
    slug: "empress-essentials",
    title: "Empress Essentials",
    subtitle: "Fashion storefront with collections, product detail, bag, and checkout",
    category: "E-commerce",
    categories: ["E-commerce"],
    industry: "Fashion retail",
    clientType: "HOLASVISION product build",
    summary:
      "Empress Essentials is a curated fashion store: collections, lookbook, product galleries, size selection, search, a bag drawer, and checkout — built for a modern womenswear brand.",
    problem:
      "Fashion brands need more than a catalog grid. Shoppers expect lookbooks, quick product views, a bag, and a checkout path that matches the brand.",
    goals: [
      "Present collections and new arrivals with a fashion-first layout",
      "Support product detail, sizes, and a bag",
      "Carry shoppers through to an order summary",
    ],
    solution:
      "A React storefront with shop filters, product cards and galleries, a bag drawer, search overlay, and checkout summary — live at empress-essentials.vercel.app.",
    architecture:
      "Vite, React, TypeScript, and Tailwind CSS with Framer Motion. Commerce UI is split across product, shop, checkout, and layout modules, including a bag drawer and search overlay in the site shell.",
    responsibilities: [
      "Storefront structure from homepage collections through product detail",
      "Bag, search, and checkout summary flows",
      "Brand layout for a fashion catalog",
    ],
    features: [
      "Featured collections, new arrivals, and lookbook",
      "Shop filters and category navigation",
      "Product gallery, price, badges, and size selector",
      "Quick view modal",
      "Bag drawer and checkout order summary",
      "Search overlay and newsletter block",
    ],
    technologyStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    engineeringChallenges: [
      "Keeping catalog, bag, and checkout consistent without a backend in the public repo",
      "Making lookbook and product grids feel editorial rather than generic",
    ],
    results: [],
    businessImpact: [
      "Shows a complete fashion shopping path from collection to checkout",
      "Demonstrates product detail, bag, and search in one brand system",
    ],
    gallery: [],
    liveDemo: {
      url: "https://empress-essentials.vercel.app",
      label: "Live store",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/empress-essentials",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "Empress Essentials Case Study — Fashion Storefront",
      description:
        "Empress Essentials is a curated fashion store by HOLASVISION with collections, product detail, bag, and checkout.",
      keywords: [
        "Empress Essentials",
        "fashion",
        "e-commerce",
        "React",
        "HOLASVISION",
      ],
    },
  },
  {
    id: "henry-landrews-jr",
    slug: "henry-landrews-jr",
    title: "Henry L. Andrews, Jr. Executive Portfolio",
    subtitle:
      "Board-ready executive site for leadership, impact, and recruiter review",
    category: "Full Stack",
    categories: ["Full Stack", "Business Platforms"],
    industry: "Executive personal brand",
    clientType: "Private client engagement",
    summary:
      "A production executive portfolio for Henry L. Andrews, Jr. — founding Managing Director and CFO of Verus Research and retired U.S. Air Force Colonel. The site organizes command, corporate leadership, board service, and civic work for recruiters, directors, and partners.",
    problem:
      "Decades of command and enterprise leadership needed a credible digital presence for board and speaking conversations — not a generic resume page.",
    goals: [
      "Make a long career scannable for recruiters and directors",
      "Support deeper reading and print-ready review",
      "Keep the public case study honest about engineering scope versus client career metrics",
    ],
    solution:
      "A Next.js App Router site with typed content modules, achievement sections, an impact view, accessibility controls, and a print-oriented layout — deployed on Vercel.",
    architecture:
      "Next.js with React and TypeScript. Content lives in typed modules. Tailwind CSS and Radix primitives handle UI. Framer Motion covers entrance motion. next-themes drives color mode. Metadata, Open Graph, and structured data are generated from shared helpers. Contact uses a client-side mailto flow.",
    responsibilities: [
      "Information architecture for a long executive narrative",
      "Achievement, impact, and supporting routes",
      "Accessibility, SEO, theming, and print-oriented CSS",
      "Production deployment",
    ],
    features: [
      "Executive achievement sections with sticky navigation",
      "Impact and board-service routes",
      "Dark and light themes",
      "Command palette and accessibility controls",
      "Print-oriented layout for offline review",
      "SEO metadata and structured data",
    ],
    technologyStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Vercel",
    ],
    engineeringChallenges: [
      "Structuring a long career so both scanners and deep readers can use it",
      "Separating client career content from engineering claims in this case study",
    ],
    results: [],
    businessImpact: [
      "Gives the client a recruiter-ready executive brand on a live Vercel site",
      "Supports on-screen review and a print-oriented packet from the same content",
    ],
    gallery: [
      {
        src: "/images/projects/henry-landrews-jr-home.png",
        alt: "Henry L. Andrews, Jr. executive portfolio home — board-ready hero, credentials, and portrait",
      },
    ],
    liveDemo: {
      url: "https://henrylandrewsjr.vercel.app",
      label: "Live site",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/henrylandrewsjr",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "Henry L. Andrews, Jr. Executive Portfolio Case Study",
      description:
        "How HOLASVISION built a board-ready Next.js executive portfolio for Henry L. Andrews, Jr.",
      keywords: [
        "Henry Andrews",
        "executive portfolio",
        "Next.js",
        "HOLASVISION",
      ],
    },
  },
];

export function getAllPortfolioProjects(): TPortfolioProject[] {
  return projects;
}

/** True when core narrative fields are published (not an empty stub). */
export function isCaseStudyNarrativeReady(project: TPortfolioProject): boolean {
  return (
    Boolean(project.problem.trim()) ||
    Boolean(project.solution.trim()) ||
    Boolean(project.architecture.trim()) ||
    project.goals.length > 0 ||
    project.responsibilities.length > 0 ||
    project.features.length > 0 ||
    project.technologyStack.length > 0 ||
    project.engineeringChallenges.length > 0
  );
}

/** Categories that currently have at least one case study. */
export function getActiveProjectCategories(): ProjectCategory[] {
  const used = new Set<ProjectCategory>();
  for (const project of projects) {
    used.add(project.category);
    for (const tag of project.categories) used.add(tag);
  }
  return PROJECT_CATEGORIES.filter((category) => used.has(category));
}

export function getFeaturedProjects(): TPortfolioProject[] {
  return projects.filter((project) => project.featured);
}

/** Primary hero CTA — live demo, workflow gallery, or public repository. */
export function getProjectHeroPrimaryCta(
  project: TPortfolioProject
): { label: string; href: string } | null {
  if (project.liveDemo) {
    return {
      label: project.liveDemo.label ?? projectsSection.sectionLabels.liveDemo,
      href: project.liveDemo.url,
    };
  }

  const isWorkflow =
    project.category === "Workflow Automation" ||
    project.categories.includes("Workflow Automation");

  if (isWorkflow && project.gallery.length > 0) {
    return {
      label: projectsSection.heroLabels.viewWorkflow,
      href: "#gallery",
    };
  }

  if (project.repository.visibility === "public" && project.repository.url) {
    return {
      label: project.repository.label,
      href: project.repository.url,
    };
  }

  if (project.gallery.length > 0) {
    return {
      label: projectsSection.heroLabels.viewWorkflow,
      href: "#gallery",
    };
  }

  return null;
}

export function getProjectBySlug(slug: string): TPortfolioProject | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function filterProjectsByCategory(
  category: ProjectCategory | "All"
): TPortfolioProject[] {
  if (category === "All") return projects;
  return projects.filter(
    (project) =>
      project.category === category || project.categories.includes(category)
  );
}

/** Adjacent narrative-ready projects for prev/next nav (skips empty stubs). */
export function getAdjacentProjects(slug: string): {
  previous: TPortfolioProject | null;
  next: TPortfolioProject | null;
} {
  const ready = projects.filter(isCaseStudyNarrativeReady);
  const index = ready.findIndex((project) => project.slug === slug);
  if (index < 0) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? ready[index - 1] : null,
    next: index < ready.length - 1 ? ready[index + 1] : null,
  };
}

/**
 * Related projects by shared category tags (excludes current).
 * Prefers narrative-ready case studies over empty stubs.
 */
export function getRelatedProjects(
  project: TPortfolioProject,
  limit = 2
): TPortfolioProject[] {
  const tags = new Set([project.category, ...project.categories]);
  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => {
      const overlap = [candidate.category, ...candidate.categories].filter(
        (tag) => tags.has(tag)
      ).length;
      const readyBoost = isCaseStudyNarrativeReady(candidate) ? 10 : 0;
      return { candidate, score: overlap + readyBoost };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

export { PROJECT_CATEGORIES };
