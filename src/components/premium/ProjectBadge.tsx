import { cx, type BadgeTone, type WithClassName } from "./types";

type Props = WithClassName & {
  label: string;
  tone?: BadgeTone;
  /** Optional leading glyph / dot. */
  leading?: "dot" | "none";
};

const toneClass: Record<BadgeTone, string> = {
  accent:
    "border-[color:var(--hv-border-accent)] bg-[color:var(--hv-accent-dim)] text-accent",
  brand:
    "border-[color:var(--hv-border-strong)] bg-ink/70 text-[color:var(--hv-fg)]",
  neutral:
    "border-[color:var(--hv-border)] bg-ink/60 text-[color:var(--hv-fg-muted)]",
  muted:
    "border-[color:var(--hv-border)] bg-white/[0.03] text-[color:var(--hv-fg-subtle)]",
};

/** Project status / category badge. */
export function ProjectBadge({
  label,
  tone = "accent",
  leading = "none",
  className = "",
}: Props) {
  return (
    <span
      className={cx(
        "inline-flex min-h-8 items-center gap-1.5 rounded-hv-md border px-2.5 py-1 text-[length:var(--hv-text-xs)] font-medium tracking-wide backdrop-blur-md",
        toneClass[tone],
        className
      )}
    >
      {leading === "dot" ? (
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80"
        />
      ) : null}
      {label}
    </span>
  );
}
