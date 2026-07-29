import { TTestimonial, TTestimonialsCopy } from "@type/Content";

/**
 * Verified client testimonials for the Home carousel.
 * Section renders only when this array has entries — no placeholder quotes.
 *
 * Avatar support: set `avatarSrc` (e.g. "/images/testimonials/name.webp")
 * and optional `avatarAlt`. Initials render when avatar is omitted.
 */
export const testimonials: TTestimonial[] = [];

export const testimonialsSection: TTestimonialsCopy = {
  eyebrow: "Client feedback",
  title: "What partners say about working with HOLASVISION",
  description:
    "Verified quotes from clients and collaborators — added here only when approved for publication.",
  placeholderBadge: "Verified",
};
