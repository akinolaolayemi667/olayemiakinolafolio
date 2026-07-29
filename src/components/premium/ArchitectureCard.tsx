import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  /** 1-based step index for marker. */
  step: number;
  title?: string;
  description: string;
  /** Show connector line below (for vertical flows). */
  showConnector?: boolean;
  children?: ReactNode;
};

/**
 * Architecture / system-flow step card with numbered marker.
 */
export function ArchitectureCard({
  step,
  title,
  description,
  showConnector = false,
  children,
  className = "",
}: Props) {
  return (
    <div className={cx("relative flex gap-4 md:gap-5", className)}>
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent shadow-[0_0_16px_rgba(20,184,166,0.22)]">
          {String(step).padStart(2, "0")}
        </span>
        {showConnector ? (
          <span
            aria-hidden
            className="mt-1 min-h-[1.5rem] w-px flex-1 bg-gradient-to-b from-accent/50 to-accent/10"
          />
        ) : null}
      </div>

      <GlassCard
        className="min-w-0 flex-1"
        gradientBorder
        wash
        interactive
        padding="md"
      >
        {title ? (
          <h3 className="text-base font-semibold tracking-tight text-[color:var(--hv-fg)] sm:text-lg">
            {title}
          </h3>
        ) : null}
        <p
          className={cx(
            "text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]",
            title && "mt-2"
          )}
        >
          {description}
        </p>
        {children ? <div className="mt-4">{children}</div> : null}
      </GlassCard>
    </div>
  );
}
