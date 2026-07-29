import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  title: string;
  description: string;
  icon?: ReactNode;
  /** Mid content (tech chips, badges). */
  meta?: ReactNode;
  /** Footer slot (CTA, links). */
  footer?: ReactNode;
  interactive?: boolean;
  gradientBorder?: boolean;
  id?: string;
};

/** Generic capability / service / feature card. */
export function FeatureCard({
  title,
  description,
  icon,
  meta,
  footer,
  interactive = true,
  gradientBorder = false,
  id,
  className = "",
}: Props) {
  return (
    <GlassCard
      id={id}
      className={cx("flex h-full flex-col", className)}
      interactive={interactive}
      wash
      gradientBorder={gradientBorder}
      padding="md"
    >
      {icon ? (
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-hv group-hover/card:scale-105 motion-reduce:transform-none">
          {icon}
        </span>
      ) : null}
      <h3
        className={cx(
          "hv-heading-md !text-lg sm:!text-xl",
          icon ? "mt-5" : ""
        )}
      >
        {title}
      </h3>
      <p className="hv-body mt-3 flex-1 !text-sm md:!text-[15px]">
        {description}
      </p>
      {meta ? <div className="mt-5">{meta}</div> : null}
      {footer ? (
        <div className="mt-6 border-t border-[color:var(--hv-border)] pt-4">
          {footer}
        </div>
      ) : null}
    </GlassCard>
  );
}
