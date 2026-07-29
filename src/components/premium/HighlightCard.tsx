import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  title: string;
  description: string;
  /** 1-based index for numbered badge. */
  index?: number;
  /** Custom badge node overrides index. */
  badge?: ReactNode;
  interactive?: boolean;
};

/** Engineering highlight / capability highlight card. */
export function HighlightCard({
  title,
  description,
  index,
  badge,
  interactive = true,
  className = "",
}: Props) {
  const label =
    badge ??
    (typeof index === "number" ? (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-[11px] font-semibold tracking-wider text-accent">
        {String(index).padStart(2, "0")}
      </span>
    ) : null);

  return (
    <GlassCard
      className={cx("flex h-full flex-col", className)}
      interactive={interactive}
      wash
      gradientBorder
      padding="md"
    >
      {label ? <div className="mb-4">{label}</div> : null}
      <h3 className="hv-heading-md !text-base sm:!text-lg">
        {title}
      </h3>
      <p className="hv-body mt-2.5 !text-sm">
        {description}
      </p>
    </GlassCard>
  );
}
