import { contact } from "@data/contact";
import { ContactForm } from "@components/ui/ContactForm";
import { Container } from "@components/ui/Container";
import { publishedSocialLinks } from "@data/socials";
import { EngagementStrip } from "@components/brand/EngagementStrip";
import Image from "next/image";

const socialIconSrc: Partial<Record<string, string>> = {
  github: "/images/github-icon.svg",
  linkedin: "/images/linkedin-icon.svg",
};

export default function ContactMePage() {
  const profileSocials = publishedSocialLinks.filter(
    (link) => link.id === "github" || link.id === "linkedin"
  );

  return (
    <div className="hv-page-shell">
      <Container>
        <section
          className="hv-section-sm relative overflow-hidden pt-[calc(var(--hv-section-y-sm)+1rem)]"
          aria-labelledby="connect-page-title"
        >
          <p className="hv-eyebrow text-center">Connect</p>
          <h1
            id="connect-page-title"
            className="hv-heading-xl mx-auto mt-3 max-w-3xl text-balance text-center"
          >
            {contact.pageTitle}
          </h1>
        </section>

        <section
          id="contact"
          className="hv-section-band relative pb-[var(--hv-section-y)] pt-0"
          aria-labelledby="connect-page-heading"
        >
          <div className="relative grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="z-10">
              <h2 id="connect-page-heading" className="hv-heading-lg">
                {contact.pageHeading}
              </h2>
              <p className="hv-body-lg mt-4 max-w-md">{contact.description}</p>

              {profileSocials.length > 0 ? (
                <ul className="mt-6 flex list-none flex-row gap-2 p-0">
                  {profileSocials.map((link) => {
                    const icon = socialIconSrc[link.id];
                    if (!icon) return null;
                    return (
                      <li key={link.id}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[color:var(--hv-border)] bg-[color:var(--hv-glass-bg)] transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                        >
                        <Image
                          width={28}
                          height={28}
                          src={icon}
                          alt=""
                          aria-hidden
                          className="hv-social-icon"
                        />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={contact.emailCtaHref}
                  className="hv-link inline-flex min-h-11 items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {contact.emailCtaText}
                </a>
                <a
                  href={contact.phoneCtaHref}
                  className="hv-link inline-flex min-h-11 items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {contact.phoneCtaText}
                </a>
              </div>
            </div>

            <div className="hv-glass p-1 sm:p-1.5">
              <ContactForm variant="connect" />
            </div>
          </div>

          <div className="mt-14 border-t border-[color:var(--hv-border)] pt-12 md:mt-16 md:pt-14">
            <EngagementStrip />
          </div>
        </section>
      </Container>
    </div>
  );
}
