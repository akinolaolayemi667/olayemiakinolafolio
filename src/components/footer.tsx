"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { publishedSocialLinks } from "@data/socials";
import { profile } from "@data/profile";
import { seo, sitePages } from "@data/seo";
import { footerExploreLinks } from "@data/nav";
import { TSocialId } from "@type/Content";
import { Container } from "@components/ui/Container";
import { siteChrome } from "@data/site-chrome";
import { FooterTechStack } from "@components/footer/FooterTechStack";
import { ThemeToggle } from "@components/chrome/ThemeToggle";
import { BrandMark } from "@components/brand/BrandMark";

const footerSocialIds: TSocialId[] = [
  "github",
  "linkedin",
  "twitter",
  "email",
  "phone",
];

const headingClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--hv-fg-muted)]";

const linkClass =
  "inline-flex min-h-11 items-center rounded-sm py-2 text-sm text-[color:var(--hv-fg-muted)] transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hv-bg)]";

function SocialIcon({ id }: { id: TSocialId }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "github":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.75c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2.01-2.96 4.09V24H8.34V8.25z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.57l-5.14-6.71L5.14 22H1.88l8.03-9.17L1.5 2h6.74l4.64 6.15L18.244 2zm-1.15 18h1.82L7.01 3.94H5.06L17.094 20z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 7 9-7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M22 16.9v2.2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 1h2.2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 8.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z" />
        </svg>
      );
    default:
      return null;
  }
}

function normalizeFooterHref(href: string) {
  if (href.startsWith("/#") || href.startsWith("http") || href.startsWith("/")) {
    return href;
  }
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

/** Premium glass footer — nav, socials, stack, theme, back to top. */
export default function Footer() {
  const reduce = Boolean(useReducedMotion());
  const currentYear = new Date().getFullYear();
  const footerSocials = footerSocialIds
    .map((id) => publishedSocialLinks.find((link) => link.id === id))
    .filter((link): link is NonNullable<typeof link> => Boolean(link));

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-[color:var(--hv-border)]">
      {/* Animated background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(20,184,166,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(34,211,238,0.08), transparent 50%)",
        }}
      />
      <m.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-[90px] motion-reduce:opacity-30"
        animate={
          reduce
            ? undefined
            : { opacity: [0.25, 0.45, 0.25], x: [0, 24, 0] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <m.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px] motion-reduce:opacity-30"
        animate={
          reduce
            ? undefined
            : { opacity: [0.2, 0.4, 0.2], y: [0, -16, 0] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="relative border-t border-transparent bg-[color:var(--hv-glass-bg)] backdrop-blur-[var(--hv-glass-blur)]">
        <Container className="relative py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              <BrandMark size="footer" />
              <p className="mt-3 text-sm text-[color:var(--hv-fg-secondary)]">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-[color:var(--hv-fg-muted)]">
                {profile.title}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--hv-fg-muted)]">
                {profile.brandLead}
              </p>
              <p className="mt-3 text-sm text-[color:var(--hv-fg-muted)]">
                {profile.location}
              </p>
              <Link
                href="/connect"
                className="hv-link mt-5 inline-flex min-h-11 items-center text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Start a conversation →
              </Link>
            </div>

            {/* Navigation */}
            <nav
              aria-labelledby="footer-explore-heading"
              className="lg:col-span-2"
            >
              <h2 id="footer-explore-heading" className={headingClass}>
                {siteChrome.footerNavigate}
              </h2>
              <ul className="mt-4 flex flex-col gap-1">
                {footerExploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={normalizeFooterHref(link.href)}
                      className={linkClass}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Pages */}
            <nav
              aria-labelledby="footer-pages-heading"
              className="lg:col-span-2"
            >
              <h2 id="footer-pages-heading" className={headingClass}>
                {siteChrome.footerPages}
              </h2>
              <ul className="mt-4 flex flex-col gap-1">
                {sitePages.map((page) => (
                  <li key={page.path}>
                    <Link href={page.path} className={linkClass}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social + controls */}
            <div className="lg:col-span-4">
              <nav aria-labelledby="footer-connect-heading">
                <h2 id="footer-connect-heading" className={headingClass}>
                  {siteChrome.footerConnect}
                </h2>
                <ul className="mt-4 flex flex-wrap items-center gap-2">
                  {footerSocials.map((link) => {
                    const isExternal = /^https?:\/\//i.test(link.url);
                    return (
                      <li key={link.id}>
                        <a
                          href={link.url}
                          {...(isExternal
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--hv-border)] bg-white/[0.03] text-[color:var(--hv-fg-muted)] transition-[color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transform-none"
                          aria-label={link.label}
                        >
                          <SocialIcon id={link.id} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-[color:var(--hv-border)] bg-white/[0.03] px-2 py-1.5">
                  <span className="pl-1 text-xs text-[color:var(--hv-fg-muted)]">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[color:var(--hv-border)] bg-white/[0.03] px-4 py-2 text-sm font-medium text-[color:var(--hv-fg-secondary)] transition-[color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transform-none"
                  aria-label="Back to top"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                  Back to top
                </button>
              </div>
            </div>
          </div>

          <FooterTechStack />

          <div className="relative mt-12 border-t border-[color:var(--hv-border)] pt-6 md:mt-14 md:pt-8">
            <p
              aria-hidden
              className="pointer-events-none absolute -top-6 left-0 select-none text-4xl font-bold tracking-tight text-[color:var(--hv-fg)]/[0.03] md:-top-8 md:text-5xl"
            >
              {profile.brand}
            </p>
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[color:var(--hv-fg-muted)] md:text-sm">
                © {currentYear} {profile.name}. {seo.copyrightSuffix}
              </p>
              <p className="text-xs text-[color:var(--hv-fg-muted)]">
                {profile.brand} · Engineering studio
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
