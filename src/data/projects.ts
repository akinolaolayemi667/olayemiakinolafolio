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
    id: "holasvision-portfolio",
    slug: "holasvision-portfolio",
    title: "HOLASVISION Portfolio",
    subtitle: "Brand site and case-study system for the HOLASVISION practice",
    category: "Full Stack",
    categories: ["Full Stack"],
    industry: "Professional services",
    clientType: "HOLASVISION (own product)",
    summary:
      "The public HOLASVISION portfolio: a static Next.js site that presents the practice, selected work, and contact paths. Built for performance, accessibility, and honest case-study publishing — including empty slots until real screenshots and outcomes are ready.",
    problem:
      "The practice needed a production-ready public surface that could ship case studies without inventing metrics, keep contact conversion clear, and stay fast on static hosting.",
    goals: [
      "Present HOLASVISION and founder positioning clearly",
      "Publish real projects with room for incomplete documentation",
      "Keep contact and SEO fundamentals production-ready",
    ],
    solution:
      "A Next.js App Router portfolio with data-driven case studies, static export for Netlify, shared contact form, and structured metadata. Incomplete galleries and outcomes render as explicit forthcoming slots instead of fabricated content.",
    architecture:
      "Next.js 15 App Router with React 19 and TypeScript. Tailwind CSS for UI. Static `output: \"export\"` deploy to Netlify. Case study content is sourced from typed data modules; JSON-LD and sitemap are generated at build time.",
    responsibilities: [
      "Product/UX structure for Home, About, Projects, and Connect",
      "Case study data model and presentation components",
      "Performance, accessibility, and SEO foundations",
      "Static hosting and security headers for Netlify",
    ],
    features: [
      "Selected-work showcase with filterable portfolio index",
      "Per-project case study pages with honest empty states",
      "Contact form via Formspree",
      "Sitemap, robots, manifest, and structured data",
    ],
    technologyStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Netlify",
    ],
    engineeringChallenges: [
      "Keeping case studies honest when screenshots and outcomes are not yet available",
      "Static-export constraints (no runtime image optimizer) while protecting LCP/CLS",
    ],
    results: [],
    businessImpact: [
      "Gives HOLASVISION a production public surface on static Netlify hosting",
      "Publishes real case studies with explicit forthcoming slots instead of fabricated metrics or screenshots",
      "Keeps contact conversion and SEO foundations ready — Formspree, sitemap, robots, and structured data",
    ],
    gallery: [],
    liveDemo: null,
    repository: {
      url: null,
      visibility: "private",
      label: "Private repository",
    },
    projectStatus: "in-production",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "HOLASVISION Portfolio Case Study",
      description:
        "How the HOLASVISION portfolio site is structured: Next.js, static Netlify hosting, and honest case-study publishing.",
      keywords: [
        "HOLASVISION",
        "portfolio",
        "Next.js",
        "TypeScript",
        "Netlify",
      ],
    },
  },
  {
    id: "aaosrc",
    slug: "aaosrc",
    title: "AAOsrc",
    subtitle: "Cinematic movie discovery and streaming web app powered by TMDB",
    category: "Full Stack",
    categories: ["Full Stack", "SaaS"],
    industry: "Media & entertainment",
    clientType: "HOLASVISION product build",
    summary:
      "AAOsrc is a full-stack movie browsing and streaming experience built with TanStack Start, React 19, and Supabase. Users explore trending, popular, and genre-based catalogs from TMDB, search titles, open rich detail pages with cast and trailers, watch via an embedded player, and curate a personal watchlist — synced to Supabase when signed in or stored locally as a guest.",
    problem:
      "The product needed a Netflix-style browsing surface that could ship quickly without standing up a custom movie database. Movie metadata had to come from TMDB, watchlist state had to persist per user when auth is available, and the UI had to degrade gracefully when Supabase credentials are not configured — all while keeping route loaders fast and the experience responsive on mobile.",
    goals: [
      "Deliver a cinematic home feed with hero spotlight and horizontal movie rows",
      "Integrate TMDB for discovery, search, and movie detail without exposing API keys in the browser",
      "Support authenticated watchlists in Supabase with row-level security",
      "Fall back to localStorage watchlists for guests or unconfigured environments",
      "Ship SSR-capable TanStack Start builds deployable to Vercel or Cloudflare Workers",
    ],
    solution:
      "A TanStack Start application with file-based routes, server loaders for TMDB fetches, and a dual-mode watchlist hook. The home route parallel-fetches trending, popular, top-rated, upcoming, and action catalogs; search uses Zod-validated URL params with debounced navigation; movie detail pages load appended videos, credits, and similar titles. Supabase Auth handles email/password sign-up and sign-in; the watchlist table enforces per-user RLS policies. When Supabase is unavailable, the same UI reads and writes `aaosrc:watchlist` in localStorage. A Vercel adapter (`api/ssr.js`) wraps the TanStack Start worker output for serverless SSR.",
    architecture:
      "Vite 7 + TanStack Start + TanStack Router with React 19 and TypeScript. `@lovable.dev/vite-tanstack-config` bundles TanStack Start, React plugin, Tailwind CSS 4, Cloudflare plugin, and path aliases. Routes live under `src/routes/*` with loaders and route-level `head()` metadata. TMDB access goes through `src/lib/tmdb.ts` against a public mirror (`tmdb.maybeparsa.top`) so no client API key is required. Supabase client (`@supabase/supabase-js`) powers auth and the `watchlist` table; generated types live in `src/integrations/supabase/types.ts`. Server auth middleware (`requireSupabaseAuth`) validates Bearer tokens for protected server functions. UI is built from shadcn/Radix primitives under `src/components/ui/*` plus cinematic components (hero banner, movie rows/cards, site header). Deploy targets: Vercel (`vercel.json` SSR rewrite to `api/ssr.js`) and Cloudflare Workers (`wrangler.jsonc`).",
    responsibilities: [
      "Full-stack product architecture with TanStack Start routing and loaders",
      "TMDB integration layer — home feed, search, detail, and batch fetch by ID",
      "Supabase auth context and watchlist persistence with guest localStorage fallback",
      "Database migration and row-level security policies for the watchlist table",
      "Cinematic UI — hero banner, scrollable rows, detail page, embedded player",
      "Deployment adapters for Vercel SSR and Cloudflare Workers",
    ],
    features: [
      "Home feed with hero spotlight and five curated movie rows (trending, popular, top rated, upcoming, action)",
      "Debounced movie search with URL-synced query params (TanStack Router + Zod)",
      "Movie detail pages — metadata, genres, cast grid, similar titles, YouTube trailer link",
      "Embedded watch player via SuperEmbed iframe on detail pages",
      "Watchlist add/remove from hero, cards, and detail pages",
      "Supabase email/password sign-up and sign-in on `/login`",
      "Guest watchlist stored in localStorage when signed out or Supabase unconfigured",
      "Authenticated watchlist synced to Supabase `watchlist` table",
      "Fixed site header with scroll-aware background, inline search, and auth controls",
      "Branded 404 and route-level error/retry states",
      "TMDB attribution footer",
    ],
    technologyStack: [
      "TanStack Start",
      "TanStack Router",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Radix UI",
      "Zod",
      "Lucide React",
    ],
    engineeringChallenges: [
      "Fetching six TMDB lists in parallel for the home loader without blocking first paint — `Promise.all` in `fetchHomeFeed` with route `staleTime: 60_000`",
      "Dual watchlist storage paths (Supabase vs localStorage) behind one hook API in `use-watchlist.ts`",
      "Browser-safe TMDB access without embedding API keys — public mirror endpoint in `tmdb.ts`",
      "Adapting TanStack Start Cloudflare worker output to Vercel serverless via `api/ssr.js`",
      "Per-route Open Graph images on movie detail using loader-backed backdrop paths",
    ],
    results: [],
    businessImpact: [
      "Ships a complete browse-search-watchlist movie product without maintaining a proprietary catalog",
      "Auth-aware watchlists let returning users keep their list across devices when Supabase is configured",
      "Guest mode with localStorage keeps the product usable before or without backend setup",
      "SSR deployment options (Vercel or Cloudflare) support SEO-friendly initial renders for catalog pages",
      "Modular route loaders make adding new TMDB-driven rows or genres a data-only change",
    ],
    gallery: [
      {
        src: "/images/projects/aaosrc-home.png",
        alt: "AAOsrc home screen — hero banner with featured title, site header, and Trending This Week movie row",
      },
      {
        src: "/images/projects/aaosrc-detail.png",
        alt: "AAOsrc title detail page — poster, metadata, synopsis, and Watch Now actions for The Odyssey",
      },
    ],
    liveDemo: {
      url: "https://aaosrc-aao.vercel.app/",
      label: "View live site",
    },
    repository: {
      url: "https://github.com/akinolaolayemi667/aaosrc",
      visibility: "public",
      label: "View on GitHub",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    supplementarySections: [
      {
        id: "accessibility",
        title: "Accessibility",
        items: [
          "aria-label attributes on watchlist toggles, scroll buttons, player controls, and mobile nav icons",
          "Semantic `<main>` layout with labeled nav links and form labels on login",
          "focus-visible ring styles on shadcn/Radix UI primitives",
          "Iframe player includes title attribute and close control with aria-label",
          "Lazy-loaded poster images on cards and cast to reduce initial bandwidth",
        ],
      },
      {
        id: "performance",
        title: "Performance",
        items: [
          "Route loaders fetch TMDB data server-side before render (home, search, movie detail)",
          "Home route `staleTime: 60_000` to avoid refetching catalog data on every navigation",
          "Parallel TMDB requests in `fetchHomeFeed` and `fetchMoviesByIds`",
          "Long-cache headers for `/assets/*` in `vercel.json` (immutable, one year)",
          "Lazy loading on movie poster and cast profile images",
        ],
      },
      {
        id: "seo",
        title: "SEO",
        items: [
          "Root route meta — title, description, Open Graph, and Twitter cards in `__root.tsx`",
          "Per-route `<title>` tags on search, watchlist, and login",
          "Dynamic movie detail metadata — title, description, og:image from TMDB backdrop",
          "HTML shell with `lang=\"en\"` and theme-color meta",
        ],
      },
      {
        id: "security",
        title: "Security",
        items: [
          "Supabase watchlist protected by row-level security — users can only read/write their own rows",
          "Server middleware `requireSupabaseAuth` validates Bearer JWT via `supabase.auth.getClaims`",
          "Watchlist migration uses `auth.users` foreign key with ON DELETE CASCADE",
          "TMDB mirror keeps API keys off the client (`.env.example` documents server-side TMDB key for Lovable)",
          "Embedded player iframe uses referrerPolicy=\"no-referrer\"",
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        items: [
          "Vercel — `vercel.json` rewrites all routes to `api/ssr.js` Node serverless function wrapping the TanStack Start worker build",
          "Cloudflare Workers — `wrangler.jsonc` targets `@tanstack/react-start/server-entry` with `nodejs_compat`",
          "Build output: `dist/client` (static assets) + `dist/server` (SSR worker)",
          "Supabase migration SQL for `watchlist` table and RLS policies under `supabase/migrations/`",
          "Production deployment at https://aaosrc-aao.vercel.app/",
          "Public GitHub repository: github.com/akinolaolayemi667/aaosrc",
          "Stateless SSR handlers — horizontal scale via Vercel functions or Cloudflare Workers",
          "TMDB catalog fetched on demand per route loader; Supabase handles auth and watchlist with indexed `user_id`",
        ],
      },
      {
        id: "lessons-learned",
        title: "Lessons learned",
        items: [
          "A single watchlist hook with storage branching is simpler than separate guest/authenticated components",
          "Public TMDB mirrors simplify local dev but production should evaluate reliability and terms of use",
          "TanStack Start's dual Cloudflare/Vercel targets require an explicit adapter layer for Vercel Node runtime",
          "Route-level `head()` from loader data is the cleanest way to ship per-movie Open Graph images",
          "Dark cinematic UI — red primary tokens, Bebas Neue display type, hero gradients, and hover-reveal rows — reads as streaming-native without a separate design system",
        ],
      },
      {
        id: "future-improvements",
        title: "Future improvements",
        items: [
          "Add custom domain mapping when the client is ready to move off the Vercel preview URL",
          "Wire Google OAuth UI — `signInWithGoogle` exists in auth context but is not exposed on the login page",
          "Add `@tanstack/react-query` caching layer (listed in dependencies but not yet used in source)",
          "Replace TMDB public mirror with a first-party server proxy when API key management is finalized",
          "Add watchlist screenshot to the portfolio gallery",
        ],
      },
    ],
    seo: {
      title: "AAOsrc Case Study — Movie Streaming Web App",
      description:
        "How AAOsrc was built with TanStack Start, React 19, TMDB, and Supabase — cinematic browsing, search, embedded playback, and auth-aware watchlists.",
      keywords: [
        "AAOsrc",
        "TanStack Start",
        "movie streaming app",
        "TMDB",
        "Supabase",
        "React",
        "HOLASVISION",
        "full stack development",
      ],
    },
  },
  {
    id: "dotman-shoes",
    slug: "dotman-shoes",
    title: "Dotman Shoes",
    subtitle: "Case study documentation in progress",
    category: "Full Stack",
    categories: ["Full Stack"],
    industry: "To be documented",
    clientType: "Private client engagement",
    summary:
      "Dotman Shoes is a real HOLASVISION engagement. Stack, product narrative, screenshots, and business outcomes will be published here only when they can be confirmed — not invented for the portfolio.",
    problem: "",
    goals: [],
    solution: "",
    architecture: "",
    responsibilities: [],
    features: [],
    technologyStack: [],
    engineeringChallenges: [],
    results: [],
    businessImpact: [],
    gallery: [
      {
        src: "/images/projects/dotman-shoes-home.png",
        alt: "Dotman Collection home — hero with bespoke footwear photography, brand headline, and Explore Collection CTA",
      },
    ],
    liveDemo: null,
    repository: {
      url: null,
      visibility: "private",
      label: "Private Client Repository",
    },
    projectStatus: null,
    year: null,
    featured: false,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "Dotman Shoes Case Study",
      description:
        "Dotman Shoes — a HOLASVISION portfolio engagement. Case study details and screenshots forthcoming.",
      keywords: ["Dotman Shoes", "HOLASVISION", "case study"],
    },
  },
  {
    id: "henry-landrews-jr",
    slug: "henry-landrews-jr",
    title: "Henry L. Andrews, Jr. Executive Portfolio",
    subtitle:
      "Board-ready executive brand site for a defense, aerospace, and governance leader",
    category: "Full Stack",
    categories: ["Full Stack", "Business Platforms"],
    industry: "Executive leadership & professional services",
    clientType: "Private client engagement",
    summary:
      "A production executive portfolio for Henry L. \"Hank\" Andrews, Jr. — founding Managing Director and CFO of Verus Research and retired U.S. Air Force Colonel. The site consolidates military command, corporate P&L leadership, board service, and civic stewardship into a premium Next.js experience with an achievement portfolio, impact dashboard, case-study library, and recruiter-ready print export.",
    problem:
      "The client needed a credible digital presence for board recruiters, directors, speaking inquiries, and strategic partners — not a generic resume page. Decades of command, enterprise financial leadership, and governance experience had to be structured for fast scanning, deep reading, and offline board packets without losing narrative integrity.",
    goals: [
      "Present board-ready executive positioning and career narrative clearly",
      "Ship multiple content surfaces — bio, timeline, case studies, impact dashboard, thought leadership",
      "Support print/PDF export for executive and board review workflows",
      "Meet accessibility, SEO, and performance standards for executive discovery",
      "Keep all narrative content data-driven and maintainable in typed modules",
    ],
    solution:
      "A Next.js App Router executive site with typed content modules as the single source of truth. The flagship Executive Achievement Portfolio presents thirteen navigable sections — positioning, case studies, business impact, philosophy, governance, financial and military leadership, honors, gallery, downloads, and contact — with sticky section navigation and print-optimized CSS. Supporting routes cover timeline, board service, impact dashboard, thought leadership, resume, and contact. Client-side enhancements include dark/light theming, a command palette (Ctrl+K), accessibility controls, and dynamically loaded motion features — without a backend or CMS.",
    architecture:
      "Next.js 16 App Router with React 19 and TypeScript. Content lives in `src/content/*` modules (executive profile, portfolio sections, navigation, case studies, metrics). UI uses Tailwind CSS 4, Radix UI primitives, class-variance-authority, and Framer Motion for entrance animations. `next-themes` drives dark/light mode; heavy client features (command palette, accessibility panel, loading screen, QR code) load via `next/dynamic`. Metadata, Open Graph, Twitter cards, Person JSON-LD, breadcrumb schema, sitemap, and robots are generated from shared helpers. Contact inquiries use a client-side mailto workflow — no server API or database. Security headers (nosniff, frame deny, referrer policy) are set in `next.config.ts`. Production is deployed on Vercel at henrylandrewsjr-rhfe.vercel.app.",
    responsibilities: [
      "End-to-end frontend architecture and UX for the executive portfolio system",
      "Content modeling across biography, achievement portfolio, case studies, and dashboard surfaces",
      "Executive Achievement Portfolio layout — section nav, print toolbar, and board-ready styling",
      "Accessibility implementation — skip link, controls, semantic landmarks, focus-visible patterns",
      "SEO and structured data — metadata builder, Person schema, sitemap, and robots",
      "Performance strategy — dynamic imports, font optimization, and reduced-motion support",
    ],
    features: [
      "Executive Achievement Portfolio with thirteen sectioned content blocks and sticky navigation",
      "Executive Impact Dashboard with KPI cards and radial gauge visualizations",
      "Case studies library with slug-based detail pages",
      "Thought leadership hub — speaking, publications, media, insights, and press kit",
      "Command palette site search with keyboard shortcut (Ctrl+K)",
      "Dark/light theme toggle via next-themes",
      "Accessibility panel — adjustable text size and high-contrast mode",
      "Print/PDF export for executive portfolio, resume, and press materials",
      "LinkedIn QR code on contact page",
      "Reading progress indicator and scroll-to-top control",
      "Gallery with category filtering",
      "Timeline, board service, military leadership, and philosophy pages",
      "Mailto-based executive inquiry contact form",
    ],
    technologyStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "next-themes",
      "Lucide React",
    ],
    engineeringChallenges: [
      "Structuring a large executive narrative across many routes without a CMS — solved with typed content modules and shared navigation config",
      "Delivering board-ready print fidelity alongside interactive motion UI — dedicated print CSS, `no-print` classes, and color-adjust rules",
      "Keeping premium visual polish performant — dynamic imports for command palette, accessibility controls, loading screen, and QR rendering",
      "Presenting career-impact metrics as client content while keeping the HOLASVISION case study honest about engineering scope",
    ],
    results: [],
    businessImpact: [
      "Gives the client a credible, recruiter-navigable executive brand surface on the deployed Vercel site",
      "Consolidates complex military, corporate, and governance narrative into one premium destination",
      "Print export supports offline board review without separate document assembly",
      "Structured metadata and JSON-LD improve discoverability for executive and board-related search",
      "Accessibility controls and semantic markup support inclusive executive audiences",
    ],
    gallery: [
      {
        src: "/images/projects/henry-landrews-jr-home.png",
        alt: "Henry L. Andrews, Jr. executive portfolio home — board-ready hero, credentials, and portrait",
      },
    ],
    liveDemo: {
      url: "https://henrylandrewsjr-rhfe.vercel.app/",
      label: "View live site",
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
    supplementarySections: [
      {
        id: "accessibility",
        title: "Accessibility",
        items: [
          "Skip link to main content on every page",
          "Floating accessibility panel with text-size slider (90–130%) and high-contrast mode",
          "Semantic landmarks, breadcrumb navigation, and aria labels on primary nav and command palette",
          "Global focus-visible ring styles on buttons, inputs, and interactive controls",
          "prefers-reduced-motion CSS overrides for animations and transitions",
        ],
      },
      {
        id: "performance",
        title: "Performance",
        items: [
          "next/dynamic code-splitting for command palette, accessibility controls, loading screen, and QR code",
          "Inter and Playfair Display loaded via next/font with display swap and preload",
          "compress: true in Next config; AVIF and WebP image formats configured",
          "Loading placeholders for dynamically imported flagship portfolio and thought-leadership pages",
        ],
      },
      {
        id: "seo",
        title: "SEO",
        items: [
          "Shared createMetadata helper — title templates, descriptions, canonical URLs, Open Graph, and Twitter cards",
          "Person JSON-LD schema on root layout; breadcrumb schema on key pages",
          "Generated sitemap covering primary routes, portfolio entries, and executive case studies",
          "robots.ts allowing crawl with sitemap reference",
        ],
      },
      {
        id: "security",
        title: "Security",
        items: [
          "poweredByHeader disabled",
          "X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Referrer-Policy on all routes",
          "Content-Security-Policy sandbox on optimized SVG image delivery",
          "External links use rel=\"noopener noreferrer\"",
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        items: [
          "Production site at https://henrylandrewsjr-rhfe.vercel.app/",
          "Standard Next.js build pipeline (npm run build) — App Router without static export",
          "Long-cache headers for /images/* assets via next.config headers()",
          "Public GitHub repository for source review",
        ],
      },
      {
        id: "lessons-learned",
        title: "Lessons learned",
        items: [
          "Typed content modules outperform scattered copy for multi-section executive sites",
          "Print CSS requires early investment — no-print classes, sticky toolbar exclusion, and color-adjust testing",
          "Dynamic imports are essential when combining Framer Motion, command palette, and accessibility tooling",
          "Executive sites benefit from separating career metrics (client content) from engineering case-study claims",
        ],
      },
      {
        id: "future-improvements",
        title: "Future improvements",
        items: [
          "Add inner-page portfolio screenshots when approved for publication",
          "Add analytics only after client approval and privacy review",
          "Optional headless CMS if the client team needs self-service content updates",
        ],
      },
    ],
    seo: {
      title: "Henry L. Andrews, Jr. Executive Portfolio Case Study",
      description:
        "How HOLASVISION built a board-ready Next.js executive portfolio for Henry L. Andrews, Jr. — achievement portfolio, impact dashboard, accessibility, SEO, and print export.",
      keywords: [
        "Henry Andrews executive portfolio",
        "executive brand website",
        "Next.js portfolio",
        "board-ready portfolio",
        "HOLASVISION",
        "full stack development",
      ],
    },
  },
  {
    id: "instagram-dm-automation",
    slug: "instagram-dm-automation",
    platform: "ManyChat",
    title: "Instagram Lead Generation & Freebie Delivery Automation",
    subtitle:
      "ManyChat Instagram DM workflow for consent-based lead capture, double opt-in, and freebie delivery",
    category: "Workflow Automation",
    categories: ["Workflow Automation", "AI Automation"],
    industry: "Marketing automation & lead generation",
    clientType: "Private client engagement",
    summary:
      "Designed and implemented an Instagram DM automation workflow using ManyChat featuring consent-based onboarding, email capture, double opt-in, automated freebie delivery, subscriber tagging, and unsubscribe handling through a structured conversational workflow.",
    problem:
      "Instagram DMs were a high-intent channel for lead magnets, but manual replies created inconsistent onboarding, delayed freebie delivery, and weak consent handling. The engagement needed a deterministic ManyChat conversation that welcomes users, discloses messaging and data processing context, captures affirmative opt-in, optionally prompts a follow, collects email with double opt-in confirmation, delivers a freebie link, and supports keyword-based unsubscribe with tag removal and flow stop — without inventing CRM or analytics integrations that were not part of the build.",
    goals: [
      "Trigger a guided Instagram DM sequence from inbound messages",
      "Surface welcome, messaging disclosure, and data-processing / USA-transfer notice before progression",
      "Capture explicit opt-in via button consent",
      "Offer an optional Instagram follow prompt without blocking the lead path",
      "Collect email and require double opt-in confirmation before freebie delivery",
      "Deliver the freebie as a Google Drive link in DM after confirmation",
      "Support unsubscribe keywords with confirmation, tag removal, and active-flow stop",
    ],
    solution:
      "A ManyChat automation on Instagram that starts from an Instagram DM trigger, sends a bot welcome with ManyChat messaging disclosure plus data-processing and USA-transfer notice, then captures consent through an affirmative button (“Yes, that's fine for me”). An optional follow prompt encourages the account follow. The flow then collects the user’s email, sends a double opt-in confirmation instruction, and on confirmation delivers the freebie via a Google Drive link in the DM thread. A parallel unsubscribe path listens for keywords STOP, ABMELDEN, and KEINE DMS — then removes tags, stops active flows, and sends a confirmation message.",
    architecture:
      "Instagram DM Trigger → Welcome & Notice (bot intro, ManyChat disclosure, data-processing notice, USA-transfer notice) → Opt-In (button consent) → Optional Follow prompt → Collect Email → Double Opt-In confirmation messaging → Freebie Delivery (Google Drive link in DM). Parallel unsubscribe branch: Unsubscribe Keywords (STOP / ABMELDEN / KEINE DMS) → Confirmation actions (remove tags, stop all active flows, send confirmation message). Platform orchestration is ManyChat-native — flows, conditions, tags, keywords, buttons, and email collection — with Meta Instagram messaging as the transport channel. No custom API, webhook, or CRM sync was verified in this workflow asset.",
    workflowDiagram: {
      primary: [
        { id: "instagram-dm", label: "Instagram DM" },
        { id: "trigger", label: "Trigger" },
        { id: "welcome", label: "Welcome" },
        { id: "consent", label: "Consent" },
        { id: "follow-prompt", label: "Follow Prompt" },
        { id: "collect-email", label: "Collect Email" },
        { id: "double-opt-in", label: "Double Opt-In" },
        { id: "freebie-delivery", label: "Freebie Delivery" },
        { id: "subscriber-tagged", label: "Subscriber Tagged" },
        { id: "broadcast-ready", label: "Broadcast Ready" },
      ],
      branches: [
        {
          id: "unsubscribe",
          title: "Unsubscribe path",
          steps: [
            {
              id: "unsubscribe-keywords",
              label: "Unsubscribe Keywords",
              hint: "STOP · ABMELDEN · KEINE DMS",
            },
            { id: "remove-tags", label: "Remove Tags" },
            { id: "confirmation", label: "Confirmation" },
          ],
        },
      ],
    },
    responsibilities: [
      "Automation engineering — ManyChat flow configuration, triggers, and action sequencing",
      "Workflow architecture — linear onboarding path plus parallel unsubscribe branch",
      "Conversation design — welcome, consent CTA, optional follow, email ask, confirmation, and delivery copy",
      "Compliance-oriented flow design — notice, opt-in, double opt-in, and keyword unsubscribe handling",
      "Subscriber state handling — tagging with tag removal and active-flow stop on unsubscribe",
    ],
    features: [
      "Instagram DM trigger to start the automation",
      "Welcome message with bot disclosure (ManyChat messaging)",
      "Data-processing notice and USA-transfer notice in the welcome path",
      "Explicit opt-in via affirmative button (“Yes, that's fine for me”)",
      "Optional Instagram follow prompt after consent",
      "In-flow email collection",
      "Double opt-in confirmation step before freebie delivery",
      "Automated freebie delivery as a Google Drive link in Instagram DM",
      "Unsubscribe keyword listeners: STOP, ABMELDEN, KEINE DMS",
      "Unsubscribe confirmation with tag removal and stop of all active flows",
    ],
    featureCards: [
      {
        id: "instagram-trigger",
        icon: "instagram-trigger",
        title: "Instagram Trigger",
        description:
          "Starts the automation when a user sends an Instagram DM into the ManyChat workflow.",
      },
      {
        id: "welcome-flow",
        icon: "welcome-flow",
        title: "Welcome Flow",
        description:
          "Sends the bot welcome with ManyChat messaging disclosure plus data-processing and USA-transfer notices.",
      },
      {
        id: "consent-collection",
        icon: "consent",
        title: "Consent Collection",
        description:
          "Captures explicit opt-in through an affirmative button before the lead path continues.",
      },
      {
        id: "email-capture",
        icon: "email-capture",
        title: "Email Capture",
        description:
          "Collects the subscriber email in-thread for freebie delivery and list growth.",
      },
      {
        id: "double-opt-in",
        icon: "double-opt-in",
        title: "Double Opt-In",
        description:
          "Requires confirmation in the next message before any freebie link is delivered.",
      },
      {
        id: "lead-magnet-delivery",
        icon: "lead-magnet",
        title: "Lead Magnet Delivery",
        description:
          "Delivers the freebie as a Google Drive link inside the Instagram DM after confirmation.",
      },
      {
        id: "subscriber-tagging",
        icon: "subscriber-tag",
        title: "Subscriber Tagging",
        description:
          "Tags confirmed subscribers so the list is ready for follow-up broadcasts.",
      },
      {
        id: "unsubscribe-handling",
        icon: "unsubscribe",
        title: "Unsubscribe Handling",
        description:
          "Listens for STOP, ABMELDEN, and KEINE DMS, then removes tags and stops active flows.",
      },
      {
        id: "confirmation-flow",
        icon: "confirmation",
        title: "Confirmation Flow",
        description:
          "Sends unsubscribe confirmation after tag removal and flow stop so the exit path is clear.",
      },
    ],
    technologyStack: [
      "ManyChat",
      "Instagram",
      "Automation",
      "Workflow Design",
      "Lead Generation",
    ],
    engineeringChallenges: [
      "Sequencing consent before email capture so freebie delivery never precedes affirmative opt-in and double opt-in",
      "Keeping the Instagram follow prompt optional so audience growth does not block lead capture",
      "Designing a parallel unsubscribe branch that removes tags and stops active flows without leaving the main onboarding path incomplete",
      "Supporting German and English unsubscribe intent (ABMELDEN, KEINE DMS, STOP) in one keyword listener set",
      "Delivering the lead magnet as an external Google Drive link inside the DM thread after confirmation gates",
    ],
    engineeringHighlights: [
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Deterministic ManyChat sequencing from Instagram DM trigger through freebie delivery and unsubscribe handling.",
      },
      {
        id: "conversation-design",
        title: "Conversation Design",
        description:
          "Welcome, notice, consent CTA, optional follow, email ask, and confirmation copy mapped as a guided DM path.",
      },
      {
        id: "lead-generation",
        title: "Lead Generation",
        description:
          "Consent-first freebie lead capture that collects email and delivers the magnet without manual operator replies.",
      },
      {
        id: "compliance",
        title: "Compliance",
        description:
          "Notices, button opt-in, double opt-in, and bilingual unsubscribe keywords before delivery and list retention.",
      },
      {
        id: "manychat",
        title: "ManyChat",
        description:
          "Native ManyChat orchestration — triggers, buttons, conditions, tags, keywords, and email collection.",
      },
      {
        id: "instagram-automation",
        title: "Instagram Automation",
        description:
          "Instagram DM as the transport channel for onboarding, confirmation, freebie delivery, and exit flows.",
      },
      {
        id: "reusable-flow",
        title: "Reusable Flow",
        description:
          "A structured conversation asset that can be reused for similar Instagram freebie and lead-magnet campaigns.",
      },
      {
        id: "tag-management",
        title: "Tag Management",
        description:
          "Subscriber tagging for broadcast readiness, with tag removal and active-flow stop on unsubscribe.",
      },
    ],
    engineeringTimeline: [
      {
        id: "business-problem",
        title: "Business Problem",
        description:
          "Mapped the manual Instagram DM lead-magnet gap — inconsistent onboarding, delayed freebie delivery, and weak consent handling — into a deterministic ManyChat conversation requirement.",
      },
      {
        id: "workflow-design",
        title: "Workflow Design",
        description:
          "Defined the linear lead-capture path and a parallel unsubscribe branch, including trigger conditions, tagging points, and stop-flow behavior.",
      },
      {
        id: "conversation-mapping",
        title: "Conversation Mapping",
        description:
          "Wrote welcome, disclosure, consent CTA, optional follow, email ask, double opt-in, and freebie delivery copy as sequenced ManyChat messages and button actions.",
      },
      {
        id: "email-capture",
        title: "Email Capture",
        description:
          "Configured in-DM email collection with a confirmation gate so freebie delivery only follows successful double opt-in.",
      },
      {
        id: "compliance",
        title: "Compliance",
        description:
          "Embedded data-processing and USA-transfer notices, affirmative button opt-in, double opt-in, and bilingual unsubscribe keywords (STOP, ABMELDEN, KEINE DMS).",
      },
      {
        id: "automation",
        title: "Automation",
        description:
          "Built the ManyChat flow — Instagram DM trigger, conditions, tags, keyword listeners, and Google Drive freebie delivery after confirmation.",
      },
      {
        id: "testing",
        title: "Testing",
        description:
          "Walked the full subscriber path and unsubscribe branch end-to-end to verify consent order, delivery gates, tag removal, and active-flow stop.",
      },
      {
        id: "deployment",
        title: "Deployment",
        description:
          "Published the live ManyChat Instagram automation for production lead capture with subscriber tagging and broadcast readiness.",
      },
    ],
    results: [],
    businessImpact: [
      "Replaces manual Instagram DM replies with a deterministic ManyChat conversation for freebie lead capture",
      "Creates a consistent consent-first onboarding path — notice, opt-in, email, double opt-in, then delivery",
      "Delivers the freebie instantly in-thread after confirmation, without operator handoff",
      "Keeps subscriber hygiene operational via keyword unsubscribe, tag removal, and active-flow stop",
      "Supports bilingual unsubscribe intent for German/English audiences through STOP, ABMELDEN, and KEINE DMS",
    ],
    gallery: [
      {
        src: "/images/projects/instagram-dm-automation.png",
        alt: "Instagram Lead Generation & Freebie Delivery Automation — ManyChat workflow overview with DM mockup, consent path, and unsubscribe keywords",
      },
    ],
    liveDemo: null,
    repository: {
      url: null,
      visibility: "private",
      label: "Private ManyChat Workflow",
    },
    projectStatus: "shipped",
    year: 2026,
    featured: true,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    supplementarySections: [
      {
        id: "user-journey",
        title: "User journey",
        items: [
          "User sends an Instagram DM and hits the Instagram DM Trigger",
          "Bot sends welcome with ManyChat disclosure plus data-processing and USA-transfer notice",
          "User confirms opt-in with the affirmative button",
          "Optional follow prompt is shown (non-blocking)",
          "User enters email for additional content",
          "Bot instructs double opt-in confirmation in the next message",
          "After confirmation, bot delivers the freebie Google Drive link in DM",
          "If user sends STOP, ABMELDEN, or KEINE DMS — tags are removed, active flows stop, and confirmation is sent",
        ],
      },
      {
        id: "compliance",
        title: "Compliance",
        items: [
          "Welcome path includes data-processing notice and USA-transfer notice",
          "Explicit button-based opt-in before progression",
          "Double opt-in confirmation required before freebie delivery",
          "Keyword unsubscribe with STOP, ABMELDEN, and KEINE DMS",
          "Unsubscribe path removes tags and stops all active flows",
          "Full legal GDPR program, DPA documents, and retention policy — Not verified beyond visible workflow notices",
        ],
      },
      {
        id: "workflow-logic",
        title: "Workflow logic",
        items: [
          "Primary trigger: Instagram DM",
          "Linear sequence: Welcome & Notice → Opt-In → Optional Follow → Collect Email → Double Opt-In → Freebie Delivery",
          "Opt-in captured via button action",
          "Email captured via text input in DM",
          "Unsubscribe keywords act as a parallel listener path",
          "Unsubscribe actions: remove tags, stop all active flows, send confirmation",
          "Subscriber tagging is used for state; exact tag names are not labeled on the workflow asset",
        ],
      },
      {
        id: "lessons-learned",
        title: "Lessons learned",
        items: [
          "Consent and notice should precede email capture in Instagram lead-magnet flows",
          "Double opt-in protects delivery integrity before sending external freebie links",
          "Optional follow prompts preserve conversion while still supporting audience growth",
          "Unsubscribe must be a first-class parallel branch — keyword listeners, tag removal, and flow stop together keep lists honest",
          "Bilingual unsubscribe keywords matter when the audience mixes German and English intent",
        ],
      },
      {
        id: "future-improvements",
        title: "Future improvements",
        items: [
          "CRM or ESP sync for confirmed emails (not implemented in this workflow)",
          "Webhook or Google Sheets logging for lead export (not verified)",
          "Funnel analytics and drop-off reporting (not verified)",
          "Post-delivery nurture sequence or booking CTA (not verified)",
          "Additional language templates beyond the verified German/English unsubscribe keywords",
        ],
      },
    ],
    roadmap: [
      {
        id: "crm-integration",
        title: "CRM Integration",
        description:
          "Sync confirmed emails to a CRM or ESP — not implemented in this workflow.",
        status: "planned",
      },
      {
        id: "google-sheets",
        title: "Google Sheets",
        description:
          "Log leads to Sheets for lightweight export and ops review — not verified in this build.",
        status: "planned",
      },
      {
        id: "webhook-automation",
        title: "Webhook Automation",
        description:
          "Push events to external systems via webhooks for custom downstream automation — not verified.",
        status: "planned",
      },
      {
        id: "analytics",
        title: "Analytics",
        description:
          "Funnel analytics and drop-off reporting across consent, email, and delivery steps — not verified.",
        status: "planned",
      },
      {
        id: "ai-replies",
        title: "AI Replies",
        description:
          "Explore AI-assisted DM replies for edge cases outside the deterministic ManyChat path — not part of this build.",
        status: "explored",
      },
      {
        id: "payments",
        title: "Payments",
        description:
          "Optional paid offer or checkout handoff after freebie delivery — not part of this workflow.",
        status: "explored",
      },
      {
        id: "calendly",
        title: "Calendly",
        description:
          "Post-delivery booking CTA for calls or demos — aligned with the verified nurture/booking opportunity, not implemented here.",
        status: "planned",
      },
      {
        id: "multi-language",
        title: "Multi-language",
        description:
          "Additional language templates beyond the verified German/English unsubscribe keywords.",
        status: "planned",
      },
    ],
    seo: {
      title: "Instagram DM Automation Case Study — ManyChat Lead Generation",
      description:
        "How HOLASVISION built a ManyChat Instagram DM workflow with consent notice, opt-in, email capture, double opt-in, freebie delivery, and keyword unsubscribe.",
      keywords: [
        "ManyChat Instagram automation",
        "Instagram DM lead generation",
        "double opt-in freebie delivery",
        "ManyChat workflow",
        "Instagram unsubscribe automation",
        "HOLASVISION",
        "workflow automation",
      ],
    },
  },
  {
    id: "client-hub-connect",
    slug: "client-hub-connect",
    title: "Client Hub Connect",
    subtitle: "Case study documentation in progress",
    category: "Full Stack",
    categories: ["Full Stack"],
    industry: "To be documented",
    clientType: "Private client engagement",
    summary:
      "Client Hub Connect is a real HOLASVISION engagement. The published narrative, stack, screenshots, and outcomes will be added here as soon as they can be stated accurately — without invented metrics.",
    problem: "",
    goals: [],
    solution: "",
    architecture: "",
    responsibilities: [],
    features: [],
    technologyStack: [],
    engineeringChallenges: [],
    results: [],
    businessImpact: [],
    gallery: [
      {
        src: "/images/projects/client-hub-connect-home.png",
        alt: "Client Hub Connect landing page — client portal hero, value proposition, and trial CTAs",
      },
    ],
    liveDemo: null,
    repository: {
      url: null,
      visibility: "private",
      label: "Private Client Repository",
    },
    projectStatus: null,
    year: null,
    featured: false,
    isRepresentative: false,
    outcomesAreEstimates: false,
    testimonial: null,
    seo: {
      title: "Client Hub Connect Case Study",
      description:
        "Client Hub Connect — a HOLASVISION portfolio engagement. Case study details and screenshots forthcoming.",
      keywords: ["Client Hub Connect", "HOLASVISION", "case study", "full stack"],
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
