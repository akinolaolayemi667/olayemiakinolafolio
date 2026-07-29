import Link from "next/link";

type Props = {
  label: string;
  href: string;
  hint?: string;
  className?: string;
};

/**
 * Soft narrative CTA linking one homepage section into the next.
 */
export function SectionBridge({
  label,
  href,
  hint,
  className = "",
}: Props) {
  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      {hint ? <p className="hv-body max-w-xl !text-sm">{hint}</p> : null}
      <Link
        href={href}
        className="hv-btn hv-btn-secondary group hv-focus-ring min-h-11"
      >
        <span>{label}</span>
        <span
          aria-hidden
          className="text-[color:var(--hv-fg-subtle)] transition-transform duration-hv group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none"
        >
          →
        </span>
      </Link>
    </div>
  );
}
