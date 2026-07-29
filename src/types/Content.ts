/** Shared content types for editable portfolio data. */

/** Reusable section chrome (eyebrow / title / description). */
export type TSectionHeading = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type TNavLink = {
  title: string;
  href: string;
};

export type TSocialId =
  | "github"
  | "linkedin"
  | "twitter"
  | "email"
  | "phone"
  | "instagram";

export type TSocialLink = {
  id: TSocialId;
  url: string;
  label: string;
};

export type TProfile = {
  /** Legal / personal name — Person schema, About, copyright. */
  name: string;
  /** Primary product brand — nav, footer chrome, SEO siteName. */
  brand: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  /** Initials in the navbar badge (legal name). */
  initials: string;
  title: string;
  tagline: string;
  location: string;
  /** Primary brand positioning paragraph (company voice). */
  brandLead: string;
  /** Supporting brand positioning paragraph. */
  brandSupport: string;
  /** First-person founder value proposition (hero / About). */
  valueProposition: string;
  mission: string;
  vision: string;
  experienceLabel: string;
  educationLabel: string;
  avatarSrc: string;
  avatarAlt: string;
  resumePath: string;
  resumeDownloadName: string;
  availability: string;
};

export type THeroContent = {
  headline: string;
  subheadline: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  socialProof: string;
  /** Short trust chips under the hero CTAs */
  trustPoints: string[];
};

export type TTrustedTech = {
  name: string;
};

export type TServiceItem = {
  id: string;
  title: string;
  description: string;
  /** Business problem this service solves (optional; used in schema when set). */
  problem?: string;
  /** Short outcome chips when present. */
  outcomes?: string[];
  /** Technologies typically used for this service. */
  technologies: string[];
  ctaLabel: string;
  ctaHref: string;
  /** Icon key rendered by the Services UI. */
  icon:
    | "fullstack"
    | "ai"
    | "workflow"
    | "design"
    | "api"
    | "supabase"
    | "performance"
    | "seo"
    | "a11y";
};

/** Engineering Intelligence Report — status badge around the portrait. */
export type TIntelligenceBadge = {
  id: string;
  label: string;
  tone?: "accent" | "neutral" | "brand";
};

/** Checklist item shown during report initialization. */
export type TIntelligenceInitStep = {
  id: string;
  label: string;
};

/** Revealed report module after init completes. */
export type TIntelligenceReportModule = {
  id: string;
  label: string;
  body: string;
  items?: string[];
};

export type TEngineeringIntelligenceSection = TSectionHeading & {
  initLine: string;
  statusAnalyzing: string;
  statusReady: string;
  conclusion: string;
  ctaLabel: string;
  ctaHref: string;
  badges: TIntelligenceBadge[];
  initSteps: TIntelligenceInitStep[];
  modules: TIntelligenceReportModule[];
};

export type TWhyMeItem = {
  title: string;
  description: string;
};

export type TExpertisePillar = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  toolsLabel: string;
  tools: string[];
};

/** Interactive Technology Ecosystem category (panel content). */
export type TExpertiseHubCategory = {
  id: string;
  title: string;
  /** What I Build */
  whatIBuild: string;
  /** Business Value */
  businessValue: string;
  capabilities: string[];
  technologies: string[];
  outcomes: string[];
  accentColor: string;
};

/** Orbit node linked to a hub category. */
export type TExpertiseOrbitNode = {
  id: string;
  label: string;
  /** Tech logo id from `@components/expertise/techLogos` (e.g. `react`, `supabase`). */
  icon: string;
  categoryId: string;
  /** 1 = frontend, 2 = AI, 3 = backend/cloud */
  ring: 1 | 2 | 3;
};

export type TExpertiseHubSection = TSectionHeading & {
  centerLabel: string;
  whatIBuildLabel: string;
  businessValueLabel: string;
  capabilitiesLabel: string;
  toolsLabel: string;
  outcomesLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

export type TProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  company?: string;
  /** Optional portrait — falls back to initials when unset. */
  avatarSrc?: string;
  avatarAlt?: string;
  isPlaceholder?: boolean;
};

export type TTechStackGroup = {
  category: string;
  items: string[];
};

export type TFaqItem = {
  question: string;
  answer: string;
};

export type TContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  formspreeEndpoint: string;
  /** Scroll/focus target until a real scheduler URL exists */
  primaryCtaHref: string;
  primaryCtaLabel: string;
  primaryCtaHint: string;
  emailPlaceholder: string;
  namePlaceholder: string;
  companyPlaceholder: string;
  messagePlaceholder: string;
  subjectPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successBody: string;
  errorBody: string;
  /** mailto: URL used by the secondary email CTA */
  emailCtaHref: string;
  emailCtaText: string;
  /** tel: URL for dial CTA */
  phoneCtaHref: string;
  phoneCtaText: string;
  /** Display number (local format) */
  phoneDisplay: string;
  /** /connect page chrome */
  pageTitle: string;
  pageHeading: string;
  formLabels: {
    name: string;
    company: string;
    email: string;
    subject: string;
    message: string;
  };
};

export type TSeo = {
  title: string;
  description: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  applicationName: string;
  creator: string;
  publisher: string;
  twitterHandle: string;
  ogImage: string;
  ogImageAlt: string;
  ogImageWidth: number;
  ogImageHeight: number;
  copyrightSuffix: string;
  keywords: string[];
  /** Topics / entities for Person.knowsAbout (GEO/AEO) */
  knowsAbout: string[];
  /** Short answer-engine friendly bio */
  answerSummary: string;
  serviceArea: string;
  /** Optional Schema.org priceRange — leave empty when not published. */
  priceRange?: string;
};

export type TPageSeo = {
  path: string;
  /** Absolute document title for home, or segment title for template pages */
  title: string;
  description: string;
  /** When true, title is used absolute (home). Otherwise layout template appends brand. */
  absoluteTitle?: boolean;
  /** Optional page-specific keywords; omit to skip keywords meta on that page */
  keywords?: string[];
};

export type TSectionCopy = {
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  certificationsTitle: string;
  projectsPageTitle: string;
  experienceEmpty: string;
  educationEmpty: string;
  certificationsEmpty: string;
  experienceImageAlt: string;
  educationImageAlt: string;
  certificationsImageAlt: string;
  presentLabel: string;
  showCertificateLabel: string;
  projectImageAlt: string;
  liveSiteLabel: string;
  viewSourceLabel: string;
};

export type TSkillFilterLabels = {
  all: string;
  frontend: string;
  backend: string;
  databases: string;
  cloud: string;
  automation: string;
  ai: string;
  tools: string;
  devops: string;
};

export type TTestimonialsCopy = TSectionHeading & {
  placeholderBadge: string;
};

export type TSiteChrome = {
  footerNavigate: string;
  footerPages: string;
  footerConnect: string;
  openMenu: string;
  closeMenu: string;
};

/** Legacy types kept for About / other routes until those pages are redesigned. */
export type TConnectSocial = {
  name: string;
  icon: string;
  url: string;
  color: string;
};

export type TAboutBio = {
  heading: string;
  typeSequence: (string | number)[];
  paragraphs: string[];
};

export type TOriginStory = {
  recordLabel: string;
  typeSequence: (string | number)[];
  introBeforeYears: string;
  introRole: string;
  yearsHighlight: string;
  introAfterYears: string;
  missionTitle: string;
  missionHighlights: {
    before: string;
    highlight?: string;
    after: string;
    code?: string;
  }[];
  closingBeforeAi: string;
  aiHighlight: string;
  closingAfterAi: string;
};

export type TStat = {
  label: string;
  value: string;
  color: string;
};

export type TTerminalCommand = {
  cmd: string;
  output: string;
};

export type TTerminal = {
  hostname: string;
  commands: TTerminalCommand[];
};

export type TGitHubConfig = {
  username: string;
  skillIcons: string;
  sectionTitle: string;
  competenciesLabel: string;
};

export type TSkillIconItem = {
  name: string;
  /** Local SVG path; empty string uses a monogram fallback in UI. */
  icon: string;
  image: string;
};

/** Honest qualitative emphasis — not invented years or percentages. */
export type TSkillLevel = "Core" | "Active" | "Supporting";

export type TEngineeringSkillCategoryId =
  | "frontend"
  | "backend"
  | "databases"
  | "cloud"
  | "automation"
  | "ai"
  | "tools"
  | "devops";

export type TEngineeringSkill = {
  id: string;
  name: string;
  description: string;
  level: TSkillLevel;
  category: TEngineeringSkillCategoryId;
  /** Local SVG path; empty uses logoId or monogram. */
  icon: string;
  /** Optional orbit / brand logo id from expertise tech logos. */
  logoId?: string;
  /** Keys matched against project.technologyStack (case-insensitive). */
  matchKeys: string[];
};

/** @deprecated Prefer engineeringSkills — kept for count/compat helpers. */
export type TAboutSkills = {
  frontend: TSkillIconItem[];
  ai: TSkillIconItem[];
  automation: TSkillIconItem[];
  platform: TSkillIconItem[];
};

export type TArsenalSkill = {
  name: string;
  level: number;
  icon: string;
};

export type TArsenalCategory = {
  id: string;
  name: string;
  skills: TArsenalSkill[];
};

export type TPackage = {
  id: string;
  name: string;
  version: string;
  downloads: string;
  desc: string;
  url: string;
  type: string;
};

export type TFeaturedExperience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  tech: string[];
  stats: Record<string, string>;
};

export type TFeaturedProject = {
  id: string;
  title: string;
  codename: string;
  status: string;
  description: string;
  tech: string[];
  image: string;
  stats: Record<string, string>;
};

export type TClearanceCert = {
  title: string;
  issuer: string;
  id: string;
  level: string;
  date: string;
  icon: string;
};

export type TWorkCopy = {
  eyebrow: string;
  intro: string;
  title: string;
  titleAccent: string;
  emptyTitle: string;
  emptyBody: string;
  emptyCtaLabel: string;
  emptyCtaHref: string;
};
