type Props = {
  bullets: string[];
  label?: string;
};

/** Expandable teaser bullets on home case study previews. */
export function CaseStudyTeaser({
  bullets,
  label = "Project highlights",
}: Props) {
  const items = bullets.filter(Boolean).slice(0, 3);
  if (!items.length) return null;

  return (
    <details className="group rounded-xl border border-white/10 bg-ink/40">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-white/85 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          {label}
          <span
            aria-hidden
            className="text-accent transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>
      <ul className="space-y-2 border-t border-white/10 px-4 pb-4 pt-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}
