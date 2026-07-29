import type { ReactNode } from "react";
import { cx, type Align, type WithClassName } from "./types";

type Props = WithClassName & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  titleId?: string;
  /** Optional actions / CTA row under description. */
  actions?: ReactNode;
  /** Heading size scale. */
  size?: "md" | "lg" | "xl";
  /** Max width constraint. */
  maxWidth?: "sm" | "md" | "lg" | "full";
};

const headingClass = {
  md: "hv-heading-md",
  lg: "hv-heading-lg",
  xl: "hv-heading-xl",
} as const;

const maxWidthClass = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  full: "max-w-none",
} as const;

/**
 * Premium section heading — eyebrow, title, description, optional actions.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  actions,
  size = "lg",
  maxWidth = "md",
  className = "",
}: Props) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div
      className={cx(
        "reveal-up flex flex-col gap-3 md:gap-4",
        maxWidthClass[maxWidth],
        alignment,
        className
      )}
    >
      {eyebrow ? <p className="hv-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className={headingClass[size]}>
        {title}
      </h2>
      {description ? <p className="hv-body-lg">{description}</p> : null}
      {actions ? (
        <div
          className={cx(
            "mt-1 flex flex-wrap gap-3",
            align === "center" && "justify-center"
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  );
}
