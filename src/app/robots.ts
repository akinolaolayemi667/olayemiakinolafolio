import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteOrigin } from "@lib/seo";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

/**
 * robots.txt for crawlers (works with static export).
 * Thin case-study stubs are noindex via page metadata; they remain reachable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: getSiteOrigin(),
  };
}
