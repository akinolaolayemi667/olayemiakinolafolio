import type { ReactNode } from "react";

/** Shared className escape hatch for every premium primitive. */
export type WithClassName = {
  className?: string;
};

export type WithChildren = {
  children?: ReactNode;
};

export type PaddingSize = "none" | "sm" | "md" | "lg";

export type Align = "left" | "center";

export type BadgeTone = "accent" | "neutral" | "brand" | "muted";

export type CardSurfaceProps = WithClassName &
  WithChildren & {
    /** Semantic element. Default: article for cards, div for shells. */
    as?: "div" | "article" | "li" | "section" | "figure";
    /** Optional DOM id (section anchors). */
    id?: string;
    padding?: PaddingSize;
    /** Enable hover elevation + border accent. */
    interactive?: boolean;
    /** Soft radial accent wash on hover. */
    wash?: boolean;
  };

export const paddingClass: Record<PaddingSize, string> = {
  none: "p-0",
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-6",
  lg: "p-5 sm:p-6 md:p-7",
};

/** Join class tokens — skips falsy values. */
export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
