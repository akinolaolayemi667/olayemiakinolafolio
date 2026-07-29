import { TechLogo } from "./techLogos";

type Props = {
  /** Kept for call-site compatibility / future alt text. */
  label?: string;
  icon: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8 sm:h-9 sm:w-9",
} as const;

/**
 * Official SVG tech logo — never renders text initials.
 * Decorative by default; parent controls accessible name.
 */
export function TechnologyIcon({
  icon,
  size = "sm",
  className = "",
}: Props) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center ${className}`}
    >
      <TechLogo id={icon} className={sizeClass[size]} />
    </span>
  );
}
