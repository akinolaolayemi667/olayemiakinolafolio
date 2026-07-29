import { TSocialLink } from "@type/Content";

/**
 * Social / contact URLs.
 * Only publish profile URLs with a real path (not platform roots).
 */
export const socialLinks: TSocialLink[] = [
  {
    id: "github",
    url: "https://github.com/akinolaolayemi667",
    label: "GitHub",
  },
  {
    id: "linkedin",
    url: "",
    label: "LinkedIn",
  },
  {
    id: "twitter",
    url: "",
    label: "Twitter",
  },
  {
    id: "email",
    url: "mailto:akinolaolayemi667@gmail.com",
    label: "Email",
  },
  {
    id: "phone",
    // E.164 for reliable mobile dialing (Nigeria)
    url: "tel:+2347042299786",
    label: "Phone",
  },
  {
    id: "instagram",
    url: "",
    label: "Instagram",
  },
];

/** True when a social URL is safe to render publicly. */
export function isPublishableSocialUrl(url: string): boolean {
  if (!url.trim()) return false;
  if (url.startsWith("mailto:") || url.startsWith("tel:")) return true;
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "");
    return path.length > 0;
  } catch {
    return false;
  }
}

export const getSocial = (id: TSocialLink["id"]): TSocialLink => {
  const link = socialLinks.find((item) => item.id === id);
  if (!link) {
    throw new Error(`Missing social link: ${id}`);
  }
  return link;
};

/** Published socials only (for footer / connect UI). */
export const publishedSocialLinks = socialLinks.filter((link) =>
  isPublishableSocialUrl(link.url)
);
