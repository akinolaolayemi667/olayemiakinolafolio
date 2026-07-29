import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  label: string;
  /** Formatted display value (e.g. "12", "—", "3+"). */
  value: string;
  hint?: string;
  interactive?: boolean;
};

/** Engineering metric tile — label + large value + optional hint. */
export function MetricCard({
  label,
  value,
  hint,
  interactive = true,
  className = "",
}: Props) {
  return (
    <GlassCard
      className={cx("flex h-full flex-col", className)}
      interactive={interactive}
      wash
      padding="md"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--hv-fg-muted)] sm:text-xs">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-4xl md:mt-4 md:text-[2.5rem]">
        {value}
      </p>
      {hint ? (
        <p className="mt-3 text-[11px] leading-relaxed text-[color:var(--hv-fg-muted)] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 motion-reduce:opacity-70 sm:text-xs">
          {hint}
        </p>
      ) : null}
    </GlassCard>
  );
}
