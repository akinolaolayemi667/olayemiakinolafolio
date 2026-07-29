import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  title: string;
  description?: string;
  /** Period, status, or side meta line. */
  meta?: string;
  /** Timeline marker label (e.g. year or step). */
  marker?: string;
  /** Align content for alternating layouts. */
  align?: "start" | "end";
  /** Optional icon or custom marker node. */
  markerNode?: ReactNode;
  children?: ReactNode;
  interactive?: boolean;
};

/**
 * Engineering / career timeline entry card.
 */
export function TimelineCard({
  title,
  description,
  meta,
  marker,
  align = "start",
  markerNode,
  children,
  interactive = true,
  className = "",
}: Props) {
  return (
    <div
      className={cx(
        "relative flex gap-4 md:gap-5",
        align === "end" && "md:flex-row-reverse",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[10px] font-semibold uppercase tracking-wider text-accent shadow-[0_0_16px_rgba(20,184,166,0.22)]">
          {markerNode ?? (marker ? marker.slice(0, 4) : "•")}
        </span>
        <span
          aria-hidden
          className="mt-1 min-h-[1.25rem] w-px flex-1 bg-gradient-to-b from-accent/45 to-accent/5"
        />
      </div>

      <GlassCard
        className="min-w-0 flex-1"
        interactive={interactive}
        wash
        padding="md"
      >
        {meta ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            {meta}
          </p>
        ) : null}
        <h3
          className={cx(
            "hv-heading-md !text-lg md:!text-xl",
            meta ? "mt-2" : ""
          )}
        >
          {title}
        </h3>
        {description ? (
          <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px]">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-4">{children}</div> : null}
      </GlassCard>
    </div>
  );
}
