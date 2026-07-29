import Link from "next/link";
import { Container } from "@components/ui/Container";
import { seo } from "@data/seo";
import { profile } from "@data/profile";

/**
 * Answer-engine friendly summary — labeled blocks for citation.
 * Company voice on Home; detailed first-person narrative on /about.
 */
export default function AnswerEngineSummary() {
  return (
    <section
      id="aeo"
      aria-labelledby="aeo-summary-heading"
      className="hv-section-sm scroll-mt-24 border-b border-[color:var(--hv-border)]"
    >
      <Container>
        <article className="mx-auto max-w-3xl">
          <h2 id="aeo-summary-heading" className="hv-eyebrow">
            About {profile.name} & {profile.brand}
          </h2>
          <p className="hv-body-lg mt-4">{seo.answerSummary}</p>

          <dl className="mt-6 grid gap-4 text-sm md:text-base">
            <div>
              <dt className="font-semibold text-[color:var(--hv-fg)]">Offers</dt>
              <dd className="mt-1 leading-relaxed text-[color:var(--hv-fg-muted)]">
                Full Stack Development, AI Automation, AI Agents, Workflow
                Automation, SaaS Development, API Integrations, Chrome
                Extensions, and CRM Automation.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[color:var(--hv-fg)]">
                Ideal clients
              </dt>
              <dd className="mt-1 leading-relaxed text-[color:var(--hv-fg-muted)]">
                Startups, agencies, and operators who need production software
                and intelligent automation without assembling a large team.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[color:var(--hv-fg)]">
                Delivery
              </dt>
              <dd className="mt-1 leading-relaxed text-[color:var(--hv-fg-muted)]">
                Production applications, automation systems, cloud deployment,
                and clear handoff — remotely worldwide from Nigeria.
              </dd>
            </div>
          </dl>

          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link
              href="/about"
              className="hv-link font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Full profile
            </Link>
            <Link
              href="/projects"
              className="hv-link font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Projects
            </Link>
            <Link
              href="/connect"
              className="hv-link font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Start a project
            </Link>
          </p>
        </article>
      </Container>
    </section>
  );
}
