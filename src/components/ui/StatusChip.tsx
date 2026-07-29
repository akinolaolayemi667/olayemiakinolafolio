type Tone = "accent" | "neutral" | "brand";

type Props = {
  label: string;
  tone?: Tone;
  className?: string;
};

const toneClass: Record<Tone, string> = {
  accent:
    "border-[color:var(--hv-border-accent)] bg-[color:var(--hv-accent-dim)] text-accent",
  neutral:
    "border-[color:var(--hv-border)] bg-ink/60 text-[color:var(--hv-fg-muted)]",
  brand:
    "border-[color:var(--hv-border-strong)] bg-ink/70 text-[color:var(--hv-fg)]",
};

/**
 * Compact status chip — design-system radii + tones.
 */
export function StatusChip({
  label,
  tone = "neutral",
  className = "",
}: Props) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-hv-md border px-2.5 py-1 text-[length:var(--hv-text-xs)] font-medium tracking-wide backdrop-blur-md ${toneClass[tone]} ${className}`}
    >
      {label}
    </span>
  );
}
