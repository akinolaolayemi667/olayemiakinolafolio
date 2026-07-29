import type { Metadata } from "next";
import { pageSeo, seo } from "@data/seo";
import { profile } from "@data/profile";

/** Normalize site origin without a trailing slash. */
export function getSiteOrigin(): string {
  return seo.siteUrl.replace(/\/$/, "");
}

/** Absolute URL for a path (`/` → origin + `/`). */
export function absoluteUrl(path = "/"): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") return `${origin}/`;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

function mimeForImagePath(imagePath: string): string {
  if (imagePath.endsWith(".jpg") || imagePath.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  if (imagePath.endsWith(".webp")) return "image/webp";
  if (imagePath.endsWith(".svg")) return "image/svg+xml";
  if (imagePath.endsWith(".gif")) return "image/gif";
  return "image/png";
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
  /** Optional OG/Twitter image path (defaults to site OG). */
  image?: string;
  /** Alt text for the social image — required for accessibility when overriding image. */
  imageAlt?: string;
  /** Article-only fields — only pass verified values (do not invent dates). */
  article?: {
    section?: string;
    tags?: string[];
    authors?: string[];
    /** ISO-8601 date only when a real publish date is known. */
    publishedTime?: string;
    modifiedTime?: string;
  };
};

/**
 * Shared Metadata builder — titles, canonical, OG, Twitter, robots.
 * Does not invent social handles, dates, or image alts.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords,
  type = "website",
  noIndex = false,
  image,
  imageAlt,
  article,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imagePath = image || seo.ogImage;
  const imageUrl = absoluteUrl(imagePath);
  const resolvedAlt = imageAlt?.trim() || seo.ogImageAlt;
  const displayTitle = absoluteTitle ? title : `${title} | ${profile.brand}`;

  const ogImage = {
    url: imageUrl,
    width: image ? undefined : seo.ogImageWidth,
    height: image ? undefined : seo.ogImageHeight,
    alt: resolvedAlt,
    type: mimeForImagePath(imagePath),
  };

  const twitterHandle = seo.twitterHandle?.trim();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    authors: [{ name: profile.name, url: absoluteUrl("/about") }],
    creator: seo.creator,
    publisher: seo.publisher,
    applicationName: seo.applicationName,
    category: "technology",
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
      },
    },
    openGraph: {
      title: displayTitle,
      description,
      url,
      siteName: seo.siteName,
      locale: seo.locale,
      type:
        type === "profile"
          ? "profile"
          : type === "article"
            ? "article"
            : "website",
      ...(type === "profile"
        ? {
            firstName: profile.firstName,
            lastName: profile.lastName,
          }
        : {}),
      ...(type === "article" && article
        ? {
            ...(article.publishedTime
              ? { publishedTime: article.publishedTime }
              : {}),
            ...(article.modifiedTime
              ? { modifiedTime: article.modifiedTime }
              : {}),
            ...(article.authors?.length
              ? { authors: article.authors }
              : { authors: [profile.name] }),
            ...(article.section ? { section: article.section } : {}),
            ...(article.tags?.length ? { tags: article.tags } : {}),
          }
        : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      ...(twitterHandle
        ? { creator: twitterHandle, site: twitterHandle }
        : {}),
      images: [{ url: imageUrl, alt: resolvedAlt }],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function metadataForPage(
  key: keyof typeof pageSeo,
  options?: { type?: BuildMetadataInput["type"] }
): Metadata {
  const page = pageSeo[key];
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    absoluteTitle: Boolean(page.absoluteTitle),
    keywords: page.keywords,
    type: options?.type,
  });
}
