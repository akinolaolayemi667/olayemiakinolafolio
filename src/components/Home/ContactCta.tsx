"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { AvailabilityBadge } from "@components/ui/AvailabilityBadge";
import { ContactForm } from "@components/ui/ContactForm";
import { SectionFade } from "@components/ui/Motion";
import { EngagementStrip } from "@components/brand/EngagementStrip";
import { contact } from "@data/contact";
import { profile } from "@data/profile";
import { getSocial, isPublishableSocialUrl } from "@data/socials";

type Channel = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  download?: string;
  icon: ReactNode;
};

function whatsappFromTel(telUrl: string): string | null {
  const digits = telUrl.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}`;
}

function ChannelIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function buildChannels(): Channel[] {
  const email = getSocial("email");
  const github = getSocial("github");
  const linkedin = getSocial("linkedin");
  const phone = getSocial("phone");
  const channels: Channel[] = [];

  if (isPublishableSocialUrl(email.url)) {
    channels.push({
      id: "email",
      label: "Email",
      href: email.url,
      icon: (
        <ChannelIcon>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 7 9-7" />
        </ChannelIcon>
      ),
    });
  }

  if (isPublishableSocialUrl(github.url)) {
    channels.push({
      id: "github",
      label: "GitHub",
      href: github.url,
      external: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      ),
    });
  }

  if (isPublishableSocialUrl(linkedin.url)) {
    channels.push({
      id: "linkedin",
      label: "LinkedIn",
      href: linkedin.url,
      external: true,
      icon: (
        <ChannelIcon>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </ChannelIcon>
      ),
    });
  }

  if (profile.resumePath.trim()) {
    channels.push({
      id: "resume",
      label: "Resume",
      href: profile.resumePath,
      download: profile.resumeDownloadName || undefined,
      icon: (
        <ChannelIcon>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
          <path d="M14 3v6h6M8 13h8M8 17h5" />
        </ChannelIcon>
      ),
    });
  }

  if (isPublishableSocialUrl(phone.url)) {
    const wa = whatsappFromTel(phone.url);
    if (wa) {
      channels.push({
        id: "whatsapp",
        label: "WhatsApp",
        href: wa,
        external: true,
        icon: (
          <ChannelIcon>
            <path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.4 8.5 8.5 0 0 1-12 2.5L3 20l1.7-4.6A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8.5 10.5c.4 1.6 2 3.2 3.6 3.6M14 9.5c.6.3 1.1.8 1.4 1.4" />
          </ChannelIcon>
        ),
      });
    }
  }

  return channels;
}

/** Large premium contact CTA — gradient glow, channel buttons, form. */
export default function ContactCta() {
  const reduce = Boolean(useReducedMotion());
  const channels = buildChannels();

  return (
    <section
      id="contact"
      className="hv-section-band cv-auto relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Full-bleed gradient atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(20,184,166,0.16), transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(34,211,238,0.1), transparent 50%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(20,184,166,0.08), transparent 45%)",
        }}
      />
      <m.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px] motion-reduce:opacity-40"
        animate={
          reduce
            ? undefined
            : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <Container className="relative">
        <SectionFade>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] shadow-[var(--hv-shadow-lg)] backdrop-blur-[var(--hv-glass-blur)] md:rounded-[2rem]">
            {/* Animated glow ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-80 md:rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(120deg, rgba(20,184,166,0.55), rgba(34,211,238,0.2), rgba(20,184,166,0.45), rgba(56,189,248,0.25))",
                backgroundSize: "220% 220%",
                animation: reduce
                  ? undefined
                  : "featuredBorderShift 10s ease-in-out infinite",
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "1px",
              }}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 0% 0%, rgba(20,184,166,0.2), transparent 55%), radial-gradient(ellipse 50% 55% at 100% 100%, rgba(0,229,255,0.12), transparent 50%)",
              }}
            />
            <div
              aria-hidden
              className="hero-aurora hero-aurora-a pointer-events-none absolute opacity-45"
            />

            <div className="relative grid gap-12 p-6 sm:p-8 md:gap-14 md:p-12 lg:grid-cols-2 lg:gap-16 lg:p-14 xl:p-16">
              {/* Large CTA column */}
              <div className="flex flex-col justify-center gap-6 md:gap-8">
                <AvailabilityBadge className="w-fit" />

                <p className="hv-eyebrow !text-accent">{contact.eyebrow}</p>

                <h2
                  id="contact-heading"
                  className="hv-heading-xl text-balance !text-[clamp(1.75rem,4vw,3rem)]"
                >
                  {contact.title}
                </h2>

                <p className="max-w-xl text-base leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-lg md:leading-relaxed lg:text-xl">
                  {contact.description}
                </p>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                  <PrimaryButton href={contact.primaryCtaHref} glow>
                    {contact.primaryCtaLabel}
                  </PrimaryButton>
                  <p className="text-sm text-[color:var(--hv-fg-muted)]">
                    {contact.primaryCtaHint}
                  </p>
                </div>

                <EngagementStrip className="pt-2" compact />

                {/* Channel buttons */}
                {channels.length > 0 ? (
                  <nav aria-label="Contact channels" className="pt-2">
                    <ul className="flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
                      {channels.map((channel) => (
                        <li key={channel.id}>
                          <Link
                            href={channel.href}
                            {...(channel.external
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                            {...(channel.download
                              ? { download: channel.download }
                              : {})}
                            className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] px-4 py-2.5 text-sm font-semibold text-[color:var(--hv-fg-secondary)] backdrop-blur-sm transition-[color,border-color,box-shadow,transform] duration-hv hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent hover:shadow-hv-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transform-none"
                          >
                            <span className="text-accent transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                              {channel.icon}
                            </span>
                            {channel.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}
              </div>

              {/* Form */}
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl opacity-60 motion-reduce:opacity-30"
                />
                <div className="relative rounded-2xl border border-[color:var(--hv-border)] bg-[color:var(--hv-bg)]/40 p-1 backdrop-blur-sm sm:p-1.5">
                  <ContactForm variant="home" />
                </div>
              </div>
            </div>
          </div>
        </SectionFade>
      </Container>
    </section>
  );
}
