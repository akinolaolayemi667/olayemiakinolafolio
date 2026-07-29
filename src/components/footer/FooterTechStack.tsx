import Link from "next/link";
import {
  showcaseCategories,
  showcaseTechnologies,
} from "@data/technology-showcase";

/** Footer technology stack — links into the homepage showcase filters. */
export function FooterTechStack() {
  const featured = showcaseTechnologies.filter((tech) =>
    ["react", "nextjs", "typescript", "supabase", "openai", "n8n", "docker", "tailwind"].includes(
      tech.id
    )
  );

  const chips =
    featured.length > 0
      ? featured
      : showcaseTechnologies.slice(0, 8);

  return (
    <div className="mt-12 border-t border-[color:var(--hv-border)] pt-8 md:mt-14 md:pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--hv-fg-muted)]">
            Technology stack
          </p>
          <p className="mt-1 text-sm text-[color:var(--hv-fg-muted)]">
            Core tools from the HOLASVISION delivery stack.
          </p>
        </div>
        <Link
          href="/#technology-ecosystem"
          className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          View full showcase →
        </Link>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
        {chips.map((tech) => {
          const category = showcaseCategories.find((c) => c.id === tech.category);
          return (
            <li key={tech.id}>
              <Link
                href={`/#technology-ecosystem`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--hv-border)] bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-[color:var(--hv-fg-muted)] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                title={category ? `${tech.name} · ${category.label}` : tech.name}
              >
                {tech.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
