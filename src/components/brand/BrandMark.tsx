import Link from "next/link";
import { profile } from "@data/profile";
import { cx } from "@components/premium/types";

type Props = {
  href?: string;
  className?: string;
  /** Compact for sticky nav; hero for landing. */
  size?: "nav" | "nav-scrolled" | "hero" | "footer";
  showWordmark?: boolean;
  showMonogram?: boolean;
};

const sizeMap = {
  nav: {
    mono: "h-9 w-9 text-sm",
    word: "text-sm",
  },
  "nav-scrolled": {
    mono: "h-8 w-8 text-xs",
    word: "text-sm",
  },
  hero: {
    mono: "h-12 w-12 text-base sm:h-14 sm:w-14 sm:text-lg",
    word: "hv-display text-[clamp(2.75rem,7vw,5rem)]",
  },
  footer: {
    mono: "h-9 w-9 text-sm",
    word: "text-base",
  },
} as const;

/**
 * HOLASVISION brand lockup — monogram + wordmark.
 * Hero size is intentionally larger than section headlines.
 */
export function BrandMark({
  href = "/",
  className = "",
  size = "nav",
  showWordmark = true,
  showMonogram = true,
}: Props) {
  const tokens = sizeMap[size];
  const isHero = size === "hero";

  const inner = (
    <>
      {showMonogram ? (
        <span
          aria-hidden={!isHero || showWordmark}
          className={cx(
            "inline-flex shrink-0 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 font-semibold tracking-tight text-accent shadow-[0_0_24px_rgba(20,184,166,0.18)]",
            tokens.mono
          )}
        >
          {profile.initials}
        </span>
      ) : null}
      {showWordmark ? (
        <span
          className={cx(
            "font-semibold tracking-tight text-[color:var(--hv-fg)]",
            tokens.word,
            (size === "nav" || size === "nav-scrolled") && "hidden md:inline"
          )}
        >
          {profile.brand}
        </span>
      ) : null}
    </>
  );

  if (isHero) {
    return (
      <div
        className={cx(
          "flex flex-col items-start gap-4 sm:gap-5",
          className
        )}
      >
        {showMonogram ? (
          <span
            aria-hidden
            className={cx(
              "inline-flex shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 font-semibold tracking-tight text-accent shadow-[0_0_32px_rgba(20,184,166,0.22)]",
              tokens.mono
            )}
          >
            {profile.initials}
          </span>
        ) : null}
        <p className={cx(tokens.word, "leading-none text-[color:var(--hv-fg)]")}>
          {profile.brand}
        </p>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:gap-3",
        className
      )}
      aria-label={`${profile.brand} — ${profile.name} — Home`}
    >
      {inner}
    </Link>
  );
}
