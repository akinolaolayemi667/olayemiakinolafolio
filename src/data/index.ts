/**
 * Central portfolio content exports.
 * Import from `@data` or specific files — never hardcode marketing copy in components.
 */

export { profile } from "./profile";
export { hero } from "./hero";
export {
  socialLinks,
  getSocial,
  publishedSocialLinks,
  isPublishableSocialUrl,
} from "./socials";
export { seo, pageSeo, sitePages } from "./seo";
export { navlinks } from "./nav";
export { siteChrome } from "./site-chrome";
export { contact } from "./contact";
export {
  projects,
  projectsSection,
  getFeaturedProjects,
  getAllPortfolioProjects,
  getProjectBySlug,
  getProjectSlugs,
  filterProjectsByCategory,
  getAdjacentProjects,
  getRelatedProjects,
  isCaseStudyNarrativeReady,
  getActiveProjectCategories,
  PROJECT_CATEGORIES,
} from "./projects";
export { services, servicesSection, productExamples } from "./services";
export { industries, industriesSection } from "./industries";
export {
  expertiseHubSection,
  expertiseHubCategories,
  expertiseOrbitNodes,
} from "./expertise-hub";
export { engineeringIntelligenceSection } from "./engineering-intelligence";
export { processSteps, processSection } from "./process";
export {
  engineeringTimelineSection,
  getEngineeringTimelineEntries,
  timelineKindLabels,
} from "./engineering-timeline";
export type {
  TEngineeringTimelineEntry,
  TTimelineKind,
  TTimelineIcon,
} from "./engineering-timeline";
export { techStack, techStackSection } from "./tech-stack";
export {
  technologyShowcaseSection,
  showcaseCategories,
  showcaseTechnologies,
  getProjectsUsingTechnology,
} from "./technology-showcase";
export type {
  TShowcaseCategoryId,
  TShowcaseTechnology,
} from "./technology-showcase";
export { faqItems, faqSection } from "./faq";
export {
  engineeringMetricsSection,
  engineeringMetrics,
  getResolvedEngineeringMetrics,
} from "./engineering-metrics";
export type {
  TEngineeringMetric,
  TEngineeringMetricSource,
  TResolvedEngineeringMetric,
} from "./engineering-metrics";
export { experiences } from "./experience";
export { educations } from "./education";
export { certificates } from "./certificates";
export { aboutBio, sectionCopy } from "./about";
export {
  aboutSkills,
  skillFilterLabels,
  engineeringSkills,
  engineeringSkillCategories,
  getProjectsUsingSkill,
} from "./skills";
export { workCopy } from "./work";
