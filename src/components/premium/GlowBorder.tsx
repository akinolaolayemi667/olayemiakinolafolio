import type { ReactNode } from "react";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  children: ReactNode;
  /** Animate the gradient edge. Default true. */
  animated?: boolean;
  /** Soften opacity when idle. */
  intensity?: "soft" | "strong";
  rounded?: "xl" | "2xl" | "3xl";
};

const radiusClass = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-[1.75rem]",
} as const;

/**
 * Animated gradient edge shell — presentation wrapper for premium cards.
 */
export function GlowBorder({
  children,
  className = "",
  animated = true,
  intensity = "soft",
  rounded = "2xl",
}: Props) {
  return (
    <div
      className={cx(
        "group/glow relative isolate overflow-hidden",
        radiusClass[rounded],
        className
      )}
    >
      <div
        aria-hidden
        className={cx(
          "hv-glow-border pointer-events-none absolute inset-0",
          radiusClass[rounded],
          animated && "hv-glow-border-animated",
          intensity === "strong" ? "opacity-90" : "opacity-70",
          "transition-opacity duration-500 group-hover/glow:opacity-100"
        )}
      />
      <div className={cx("relative m-px overflow-hidden", radiusClass[rounded])}>
        {children}
      </div>
    </div>
  );
}
