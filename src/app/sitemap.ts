import type { MetadataRoute } from "next";
import { absoluteUrl } from "@lib/seo";
import { sitePages } from "@data/seo";
import {
  getAllPortfolioProjects,
  isCaseStudyNarrativeReady,
} from "@data/projects";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

/**
 * Static sitemap for App Router + `output: "export"`.
 * Incomplete case-study stubs are omitted until narrative content is published.
 * lastmod omitted — no verified per-page publish timestamps.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency:
      page.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      page.path === "/"
        ? 1
        : page.path === "/connect"
          ? 0.9
          : page.path === "/projects"
            ? 0.85
            : 0.7,
  }));

  const caseStudies = getAllPortfolioProjects()
    .filter(isCaseStudyNarrativeReady)
    .map((project) => {
      const images = project.gallery
        .filter((item) => !item.isPlaceholder && item.src.trim())
        .map((item) => absoluteUrl(item.src));

      return {
        url: absoluteUrl(`/projects/${project.slug}`),
        changeFrequency: "monthly" as const,
        priority: project.featured ? 0.8 : 0.65,
        ...(images.length ? { images } : {}),
      };
    });

  return [...pages, ...caseStudies];
}
