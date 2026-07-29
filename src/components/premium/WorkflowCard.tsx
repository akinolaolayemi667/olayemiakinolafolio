import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  /** Display label for the step (e.g. "01" or "Step 1"). */
  step: string;
  title: string;
  description: string;
  icon?: ReactNode;
  interactive?: boolean;
};

/** Process / workflow stage card. */
export function WorkflowCard({
  step,
  title,
  description,
  icon,
  interactive = true,
  className = "",
}: Props) {
  return (
    <GlassCard
      className={cx("w-full", className)}
      interactive={interactive}
      wash
      padding="lg"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-accent transition-transform duration-300 group-hover/card:scale-105 motion-reduce:transform-none">
            {icon ?? (
              <span className="text-xs font-semibold tracking-wider">{step}</span>
            )}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:mt-1">
            {step}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold tracking-tight text-[color:var(--hv-fg)] md:text-2xl">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-base">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
