"use client";

import Link from "next/link";
import {
  ReactNode,
  useCallback,
  useRef,
  useState,
  type MouseEvent,
} from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
  /** Soft accent glow for primary CTAs */
  glow?: boolean;
};

const styles = {
  primary: "hv-btn-primary",
  secondary: "hv-btn-secondary",
  ghost: "hv-btn-ghost",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function isPlaceholderHref(href: string) {
  return href === "#" || href.trim() === "";
}

type Ripple = { id: number; x: number; y: number };

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

function RippleLayer({ ripples }: { ripples: Ripple[] }) {
  if (!ripples.length) return null;
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="hv-btn-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </span>
  );
}

/**
 * Design-system CTA — hierarchy via primary / secondary / ghost tokens.
 * Includes a lightweight click ripple (disabled under reduced motion).
 */
export function PrimaryButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
  glow = false,
}: Props) {
  const { ripples, spawn } = useRipple();
  const classes = `hv-btn relative overflow-hidden ${styles[variant]} ${focusRing} ${
    glow && variant === "primary" ? "btn-glow-primary" : ""
  } ${className} ${disabled ? "pointer-events-none opacity-60" : ""}`;

  function handleClick(event: MouseEvent<HTMLElement>) {
    spawn(event);
    onClick?.();
  }

  if (href && !isPlaceholderHref(href)) {
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
        <span className="relative z-[1] inline-flex items-center gap-2">
          {children}
        </span>
        <RippleLayer ripples={ripples} />
      </Link>
    );
  }

  if (href && isPlaceholderHref(href)) {
    return null;
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
      </span>
      <RippleLayer ripples={ripples} />
    </button>
  );
}
