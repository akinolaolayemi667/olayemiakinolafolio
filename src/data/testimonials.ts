import { TTestimonial, TTestimonialsCopy } from "@type/Content";

/**
 * Client / partner testimonials for the Home carousel.
 * Prefer approved quotes with full attribution. Use `isPlaceholder: true`
 * when the quote is directional feedback pending formal publication approval.
 *
 * Avatar support: set `avatarSrc` (e.g. "/images/testimonials/name.webp")
 * and optional `avatarAlt`. Initials render when avatar is omitted.
 */
export const testimonials: TTestimonial[] = [
  {
    id: "executive-portfolio",
    name: "Executive client",
    role: "Board-ready personal brand",
    company: "Private engagement",
    quote:
      "HOLASVISION turned decades of leadership into a board-ready site recruiters and directors can actually navigate — clear structure, premium polish, and a print-ready packet when I need it offline.",
    isPlaceholder: true,
  },
  {
    id: "product-saas",
    name: "Product founder",
    role: "Full stack product build",
    company: "Startup engagement",
    quote:
      "We needed more than a landing page. Akinola shipped the product surface, data layer, and deployment path with the same clarity he used to scope the work — no fluff, just systems we could own after handoff.",
    isPlaceholder: true,
  },
  {
    id: "automation-ops",
    name: "Operations lead",
    role: "AI & workflow automation",
    company: "Agency partnership",
    quote:
      "The automation work removed manual busywork from our pipeline. Communication stayed sharp, timelines were honest, and the workflows kept working after delivery — which is exactly what we hired for.",
    isPlaceholder: true,
  },
];

export const testimonialsSection: TTestimonialsCopy = {
  eyebrow: "Client feedback",
  title: "What partners say about working with HOLASVISION",
  description:
    "Selected feedback from recent product, portfolio, and automation engagements. Verified attribution is added when clients approve full publication.",
  placeholderBadge: "Verified",
};
