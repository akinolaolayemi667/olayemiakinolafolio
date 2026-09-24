import Image from "next/image";
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
    mono: "h-9 w-9",
    img: 36,
    word: "text-sm",
    radius: "rounded-xl",
  },
  "nav-scrolled": {
    mono: "h-8 w-8",
    img: 32,
    word: "text-sm",
    radius: "rounded-lg",
  },
  hero: {
    mono: "h-12 w-12 sm:h-14 sm:w-14",
    img: 56,
    word: "hv-display text-[clamp(2.75rem,7vw,5rem)]",
    radius: "rounded-2xl",
  },
  footer: {
    mono: "h-9 w-9",
    img: 36,
    word: "text-base",
    radius: "rounded-xl",
  },
} as const;

function LogoMark({
  size,
  className = "",
}: {
  size: keyof typeof sizeMap;
  className?: string;
}) {
  const tokens = sizeMap[size];
  return (
    <span
      className={cx(
        "relative inline-flex shrink-0 overflow-hidden border border-accent/35 bg-accent/10 shadow-[0_0_24px_rgba(20,184,166,0.18)]",
        tokens.mono,
        tokens.radius,
        className
      )}
    >
      <Image
        src={profile.logoSrc}
        alt=""
        width={tokens.img}
        height={tokens.img}
        className="h-full w-full object-cover"
        sizes={`${tokens.img}px`}
        priority={size === "nav" || size === "hero"}
      />
    </span>
  );
}

/**
 * HOLASVISION brand lockup — GitHub profile logo + wordmark.
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
      {showMonogram ? <LogoMark size={size} /> : null}
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
          <LogoMark
            size={size}
            className="border-accent/40 shadow-[0_0_32px_rgba(20,184,166,0.22)]"
          />
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
