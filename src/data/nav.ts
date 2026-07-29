import { TNavLink } from "@type/Content";

/**
 * Primary nav — pages for crawl equity + Home anchors for the product story.
 * Work = selected case studies on Home; Experience lives in footer → /work.
 */
export const navlinks: TNavLink[] = [
  { title: "About", href: "/about" },
  { title: "Stack", href: "/#technology-ecosystem" },
  { title: "Case studies", href: "/#work" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/connect" },
];

/** Footer Explore — Home section deep links only. */
export const footerExploreLinks: TNavLink[] = [
  { title: "Stack", href: "/#technology-ecosystem" },
  { title: "Case studies", href: "/#work" },
  { title: "Services", href: "/#services" },
  { title: "Process", href: "/#process" },
  { title: "FAQ", href: "/#faq" },
];
