import Link from "next/link";
import { TProjectRepository } from "@type/Project";

type Props = {
  repository: TProjectRepository;
  className?: string;
};

/**
 * Always-visible repository treatment — public link or private/NDA status.
 */
export function RepositoryBadge({ repository, className = "" }: Props) {
  const base =
    "inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

  if (repository.visibility === "public" && repository.url) {
    return (
      <Link
        href={repository.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-accent/30 bg-accent/[0.08] text-accent hover:bg-accent/[0.14] ${className}`}
      >
        {repository.label}
      </Link>
    );
  }

  return (
    <span
      className={`${base} cursor-default border-white/12 bg-white/[0.03] text-white/80 ${className}`}
      title={repository.label}
      role="status"
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-accent/80"
      />
      {repository.label}
    </span>
  );
}
