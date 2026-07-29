"use client";

import { ReactNode } from "react";
import { FadeIn } from "@components/ui/Motion";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  /** Wrap body in gradient glass surface */
  surface?: boolean;
  /** Optional supporting line under the title */
  description?: string;
};

/**
 * Accessible case-study section shell — scroll reveal, premium type, optional glass.
 */
export function CaseStudySection({
  id,
  title,
  children,
  className = "",
  as = "section",
  surface = false,
  description,
}: Props) {
  const Tag = as;

  return (
    <FadeIn y={20}>
      <Tag
        id={id}
        className={`scroll-mt-28 ${className}`}
        aria-labelledby={`${id}-heading`}
      >
        <div className="case-section-kicker" aria-hidden />
        <h2 id={`${id}-heading`} className="case-section-title">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base">
            {description}
          </p>
        ) : null}
        <div className={description ? "mt-6 md:mt-8" : "mt-5 md:mt-7"}>
          {surface ? (
            <div className="gradient-border case-surface">{children}</div>
          ) : (
            children
          )}
        </div>
      </Tag>
    </FadeIn>
  );
}

type BulletListProps = {
  items: string[];
  className?: string;
};

export function CaseStudyBulletList({ items, className = "" }: BulletListProps) {
  if (!items.length) return null;

  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px] md:leading-relaxed"
        >
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(20,184,166,0.45)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
