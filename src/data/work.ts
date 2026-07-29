import { TWorkCopy } from "@type/Content";
import { profile } from "./profile";

/**
 * Work / Professional Journey page landing copy.
 */
export const workCopy: TWorkCopy = {
  eyebrow: "Professional journey",
  intro: `${profile.brand} is the studio and freelance engineering practice of ${profile.name} — full stack development, AI automation, and AI agents for clients worldwide.`,
  title: "Studio practice &",
  titleAccent: "engineering delivery",
  emptyTitle: "Journey details coming soon",
  emptyBody:
    "Named roles will be listed here once cleared for public disclosure. Explore case studies and services for delivery proof in the meantime.",
  emptyCtaLabel: "View case studies",
  emptyCtaHref: "/projects",
};
