/** Portfolio case-study categories used for filtering. */
export type ProjectCategory =
  | "AI Automation"
  | "Workflow Automation"
  | "Full Stack"
  | "SaaS"
  | "E-commerce"
  | "CRM"
  | "Business Platforms"
  | "Chrome Extensions"
  | "APIs"
  | "Internal Tools";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI Automation",
  "Workflow Automation",
  "Full Stack",
  "SaaS",
  "E-commerce",
  "CRM",
  "Business Platforms",
  "Chrome Extensions",
  "APIs",
  "Internal Tools",
];

export type RepositoryVisibility = "public" | "private" | "nda";

export type ProjectStatus =
  | "shipped"
  | "in-production"
  | "ongoing"
  | "archived";

export type TProjectGalleryItem = {
  src: string;
  alt: string;
  /** When true, shows an explicit screenshot-placeholder treatment */
  isPlaceholder?: boolean;
};

export type TProjectRepository = {
  url: string | null;
  visibility: RepositoryVisibility;
  /** Display label, e.g. Private Client Repository */
  label: string;
};

export type TProjectTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  isPlaceholder?: boolean;
};

export type TProjectSeo = {
  title: string;
  description: string;
  keywords: string[];
};

/** Optional extra case-study sections (accessibility, deployment, etc.). */
export type TProjectSupplementarySection = {
  id: string;
  title: string;
  items: string[];
};

/** Single node in a visual workflow diagram. */
export type TWorkflowStep = {
  id: string;
  label: string;
  /** Optional short note under the label (e.g. keyword list). */
  hint?: string;
};

/** Parallel branch rendered beside / below the primary path. */
export type TWorkflowBranch = {
  id: string;
  title: string;
  steps: TWorkflowStep[];
};

/** Structured workflow diagram — preferred over parsed architecture prose. */
export type TWorkflowDiagram = {
  primary: TWorkflowStep[];
  branches?: TWorkflowBranch[];
};

/** Phase in an engineering delivery timeline. */
export type TEngineeringTimelinePhase = {
  id: string;
  title: string;
  description: string;
};

/** Premium feature card for case study feature grids. */
export type TFeatureCard = {
  id: string;
  /** Icon key rendered by FeatureCards (inline SVG map). */
  icon:
    | "instagram-trigger"
    | "welcome-flow"
    | "consent"
    | "email-capture"
    | "double-opt-in"
    | "lead-magnet"
    | "subscriber-tag"
    | "unsubscribe"
    | "confirmation";
  title: string;
  description: string;
};

/** Engineering capability highlight for case study grids. */
export type TEngineeringHighlight = {
  id: string;
  title: string;
  description: string;
};

/** Roadmap item for post-ship expansion opportunities. */
export type TRoadmapItem = {
  id: string;
  title: string;
  description: string;
  /** Display status — keep honest (planned / explored, not shipped). */
  status: "planned" | "explored";
};

/**
 * Unified portfolio case study — software solution narrative, not a repo card.
 */
export type TPortfolioProject = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  industry: string;
  clientType: string;
  summary: string;
  problem: string;
  goals: string[];
  solution: string;
  architecture: string;
  responsibilities: string[];
  features: string[];
  technologyStack: string[];
  engineeringChallenges: string[];
  results: string[];
  businessImpact: string[];
  gallery: TProjectGalleryItem[];
  liveDemo: { url: string; label?: string } | null;
  repository: TProjectRepository;
  /** Null when status is not yet confirmed for publication. */
  projectStatus: ProjectStatus | null;
  /** Null when year is not yet confirmed for publication. */
  year: number | null;
  featured: boolean;
  /**
   * When true, case study is a representative/composite example —
   * not a named client disclosure. Must be labeled in UI.
   */
  isRepresentative: boolean;
  /** When true, results/impact are qualitative estimates — show disclaimer. */
  outcomesAreEstimates: boolean;
  testimonial: TProjectTestimonial | null;
  seo: TProjectSeo;
  /** Optional quality / ops sections beyond the core narrative blocks. */
  supplementarySections?: TProjectSupplementarySection[];
  /** Primary delivery platform — shown as a hero badge when set (e.g. ManyChat). */
  platform?: string;
  /** When set, case study shows a workflow diagram instead of the architecture flow parse. */
  workflowDiagram?: TWorkflowDiagram;
  /** Optional enterprise-style engineering delivery timeline. */
  engineeringTimeline?: TEngineeringTimelinePhase[];
  /** Premium feature cards — when set, replaces the plain feature string grid. */
  featureCards?: TFeatureCard[];
  /** Optional engineering capability highlights grid. */
  engineeringHighlights?: TEngineeringHighlight[];
  /** Future / expansion roadmap cards (not shipped features). */
  roadmap?: TRoadmapItem[];
};

/** Section chrome for Home + /projects index. */
export type TProjectsSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  viewCaseStudyLabel: string;
  viewAllLabel: string;
  viewAllHint: string;
  filterAllLabel: string;
  archiveEyebrow: string;
  archiveTitle: string;
  archiveDescription: string;
  emptyFilterTitle: string;
  emptyFilterBody: string;
  screenshotPlaceholderLabel: string;
  relatedTitle: string;
  representativeBadge: string;
  outcomesDisclaimer: string;
  statusLabels: Record<ProjectStatus, string>;
  sectionLabels: {
    executiveSummary: string;
    businessProblem: string;
    projectGoals: string;
    solution: string;
    systemArchitecture: string;
    workflowDiagram: string;
    engineeringTimeline: string;
    myRole: string;
    technologyStack: string;
    keyFeatures: string;
    engineeringHighlights: string;
    engineeringChallenges: string;
    lessonsLearned: string;
    roadmap: string;
    resultsImpact: string;
    gallery: string;
    liveDemo: string;
    repository: string;
  };
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  heroLabels: {
    backToProjects: string;
    viewWorkflow: string;
  };
};
