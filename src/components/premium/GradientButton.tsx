"use client";

import Link from "next/link";
import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cx, type WithClassName } from "./types";

type Props = WithClassName & {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  /** Full-width on mobile. */
  block?: boolean;
};

type Ripple = { id: number; x: number; y: number };

const sizeClass = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[15px]",
} as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function useRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  const spawn = useCallback((event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = ++idRef.current;
    setRipples((prev) => [
      ...prev,
      {
        id,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 520);
  }, []);

  return { ripples, spawn };
}

/**
 * Gradient CTA — accent → cyan fill with ripple (respects reduced motion).
 */
export function GradientButton({
  children,
  href,
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
  size = "md",
  block = false,
  className = "",
}: Props) {
  const { ripples, spawn } = useRipple();
  const classes = cx(
    "hv-btn hv-btn-gradient relative overflow-hidden",
    sizeClass[size],
    focusRing,
    block && "w-full",
    disabled && "pointer-events-none opacity-60",
    className
  );

  function handleClick(event: MouseEvent<HTMLElement>) {
    spawn(event);
    onClick?.();
  }

  const content = (
    <>
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
      </span>
      {ripples.length ? (
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          aria-hidden
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="hv-btn-ripple"
              style={{ left: ripple.x, top: ripple.y }}
            />
          ))}
        </span>
      ) : null}
    </>
  );

  if (href && href.trim() && href !== "#") {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <Link
        href={href}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
