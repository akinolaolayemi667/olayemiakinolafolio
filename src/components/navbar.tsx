"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type JSX,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "framer-motion";
import { navlinks } from "@data/nav";
import { profile } from "@data/profile";
import { hero } from "@data/hero";
import { siteChrome } from "@data/site-chrome";
import { getSocial, isPublishableSocialUrl } from "@data/socials";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { CommandPaletteTrigger } from "@components/chrome/CommandPalette";
import { ThemeToggle } from "@components/chrome/ThemeToggle";
import { BrandMark } from "@components/brand/BrandMark";

const focusRing =
  "rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const HOME_SECTIONS = [
  { id: "technology-ecosystem", href: "/#technology-ecosystem" },
  { id: "work", href: "/#work" },
  { id: "services", href: "/#services" },
  { id: "process", href: "/#process" },
  { id: "faq", href: "/#faq" },
  { id: "contact", href: "/#contact" },
] as const;

function resolveHref(href: string, pathname: string | null) {
  const path = pathname ?? "/";
  if (href.startsWith("/#")) {
    return path === "/" ? href.slice(1) : href;
  }
  if (href.startsWith("#")) {
    return path === "/" ? href : `/${href}`;
  }
  return href;
}

function isNavItemCurrent(href: string, pathname: string | null) {
  const path = pathname ?? "/";
  if (href.startsWith("/#") || href.startsWith("#")) {
    return path === "/";
  }
  return path === href || path.startsWith(`${href}/`);
}

function hrefToSectionId(href: string) {
  const hash = href.includes("#") ? href.split("#")[1] : null;
  return hash ?? null;
}

function IconMenu({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const iconBtn =
  "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] text-[color:var(--hv-fg-muted)] transition-colors hover:border-accent/35 hover:text-[color:var(--hv-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const Navbar = (): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = Boolean(useReducedMotion());
  const ctaHref = resolveHref(hero.primaryHref, pathname);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const onHome = (pathname ?? "/") === "/";

  const github = getSocial("github");
  const showGitHub = isPublishableSocialUrl(github.url);
  const showResume = Boolean(profile.resumePath.trim());
  const contactHref = resolveHref("/connect", pathname);

  const closeMenu = useCallback(() => {
    setShowMobileNav(false);
    queueMicrotask(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActiveSection(null);
      return;
    }

    const elements = HOME_SECTIONS.map((section) =>
      document.getElementById(section.id)
    ).filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  useEffect(() => {
    if (!showMobileNav) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    queueMicrotask(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showMobileNav, closeMenu]);

  return (
    <LazyMotion features={domAnimation} strict>
      <header className="sticky top-0 z-[var(--hv-z-nav)] px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <m.nav
          aria-label="Primary"
          initial={false}
          animate={{
            paddingTop: scrolled ? 8 : 12,
            paddingBottom: scrolled ? 8 : 12,
          }}
          transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto flex max-w-container items-center justify-between gap-3 rounded-2xl border px-3 transition-[border-color,box-shadow,background-color] duration-hv sm:px-4 md:px-5 ${
            scrolled
              ? "border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg-strong)] shadow-[var(--hv-shadow-md)] backdrop-blur-xl"
              : "border-transparent bg-transparent shadow-none backdrop-blur-0"
          }`}
          style={
            scrolled
              ? {
                  WebkitBackdropFilter: "blur(var(--hv-glass-blur))",
                  backdropFilter: "blur(var(--hv-glass-blur))",
                }
              : undefined
          }
        >
          <BrandMark size={scrolled ? "nav-scrolled" : "nav"} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {navlinks.map((item) => {
              const current = isNavItemCurrent(item.href, pathname);
              const sectionId = hrefToSectionId(item.href);
              const isHash = item.href.includes("#");
              const sectionActive = Boolean(
                onHome && sectionId && activeSection === sectionId
              );
              const pageActive = Boolean(!isHash && current);
              const highlight = pageActive || sectionActive;

              return (
                <li key={item.href}>
                  <Link
                    href={resolveHref(item.href, pathname)}
                    aria-current={highlight ? "page" : undefined}
                    className={`nav-link relative flex items-center px-2.5 py-2 text-[13px] font-medium tracking-tight transition-colors hover:text-accent lg:px-3 ${focusRing} ${
                      highlight
                        ? "text-[color:var(--hv-fg)]"
                        : "text-[color:var(--hv-fg-muted)]"
                    } ${sectionActive ? "nav-link-active" : ""}`}
                  >
                    {item.title}
                    {highlight ? (
                      <m.span
                        layoutId="nav-active-pill"
                        className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <CommandPaletteTrigger className="!hidden lg:!inline-flex" />

            {showGitHub ? (
              <Link
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex ${iconBtn}`}
                aria-label={github.label}
                title={github.label}
              >
                <GitHubIcon />
              </Link>
            ) : null}

            {showResume ? (
              <Link
                href={profile.resumePath}
                className={`hidden sm:inline-flex ${iconBtn}`}
                aria-label="Download resume"
                title="Resume"
              >
                <ResumeIcon />
              </Link>
            ) : null}

            <Link
              href={contactHref}
              className={`hidden sm:inline-flex ${iconBtn}`}
              aria-label="Contact"
              title="Contact"
            >
              <ContactIcon />
            </Link>

            <ThemeToggle />

            <div className="hidden md:block">
              <PrimaryButton href={ctaHref} glow className="!min-h-9 !px-4 !py-2 !text-xs">
                {hero.primaryCta}
              </PrimaryButton>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className={`${iconBtn} md:hidden`}
              aria-label={
                showMobileNav ? siteChrome.closeMenu : siteChrome.openMenu
              }
              aria-expanded={showMobileNav}
              aria-controls={menuId}
              onClick={() => setShowMobileNav((open) => !open)}
            >
              <IconMenu open={showMobileNav} />
            </button>
          </div>
        </m.nav>

        {/* Mobile slide-over */}
        <AnimatePresence>
          {showMobileNav ? (
            <>
              <m.button
                type="button"
                aria-label={siteChrome.closeMenu}
                className="fixed inset-0 z-[calc(var(--hv-z-nav)+1)] bg-[color:var(--hv-overlay)] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.2 }}
                onClick={closeMenu}
              />
              <m.div
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className="fixed inset-y-0 right-0 z-[calc(var(--hv-z-nav)+2)] flex w-[min(100%,20rem)] flex-col border-l border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg-strong)] p-5 shadow-[var(--hv-shadow-xl)] backdrop-blur-2xl md:hidden"
                initial={reduce ? false : { x: "100%" }}
                animate={{ x: 0 }}
                exit={reduce ? undefined : { x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 36,
                }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[color:var(--hv-fg)]">
                    Menu
                  </p>
                  <button
                    type="button"
                    className={iconBtn}
                    aria-label={siteChrome.closeMenu}
                    onClick={closeMenu}
                  >
                    <IconMenu open />
                  </button>
                </div>

                <ul className="flex flex-col gap-1">
                  {navlinks.map((item, index) => {
                    const current = isNavItemCurrent(item.href, pathname);
                    const sectionId = hrefToSectionId(item.href);
                    const isHash = item.href.includes("#");
                    const sectionActive = Boolean(
                      onHome && sectionId && activeSection === sectionId
                    );
                    const pageActive = Boolean(!isHash && current);
                    const highlight = pageActive || sectionActive;

                    return (
                      <m.li
                        key={item.href}
                        initial={reduce ? false : { opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: reduce ? 0 : 0.04 + index * 0.04,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          ref={index === 0 ? firstLinkRef : undefined}
                          href={resolveHref(item.href, pathname)}
                          onClick={closeMenu}
                          aria-current={highlight ? "page" : undefined}
                          className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors ${focusRing} ${
                            highlight
                              ? "bg-accent/10 text-accent"
                              : "text-[color:var(--hv-fg-muted)] hover:bg-white/[0.04] hover:text-[color:var(--hv-fg)]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </m.li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {showGitHub ? (
                    <Link
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={iconBtn}
                      aria-label={github.label}
                      onClick={closeMenu}
                    >
                      <GitHubIcon />
                    </Link>
                  ) : null}
                  {showResume ? (
                    <Link
                      href={profile.resumePath}
                      className={iconBtn}
                      aria-label="Download resume"
                      onClick={closeMenu}
                    >
                      <ResumeIcon />
                    </Link>
                  ) : null}
                  <Link
                    href={contactHref}
                    className={iconBtn}
                    aria-label="Contact"
                    onClick={closeMenu}
                  >
                    <ContactIcon />
                  </Link>
                  <CommandPaletteTrigger className="!inline-flex !h-9" />
                </div>

                <div className="mt-auto pt-8">
                  <PrimaryButton
                    href={ctaHref}
                    className="w-full"
                    glow
                    onClick={closeMenu}
                  >
                    {hero.primaryCta}
                  </PrimaryButton>
                </div>
              </m.div>
            </>
          ) : null}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
};

export default Navbar;
