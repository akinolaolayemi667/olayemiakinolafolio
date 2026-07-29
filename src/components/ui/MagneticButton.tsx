"use client";

import { ReactNode } from "react";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { useMagnetic } from "@hooks/useMagnetic";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  glow?: boolean;
  className?: string;
  ariaLabel?: string;
};

/** PrimaryButton wrapper with subtle magnetic pointer follow. */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  glow = false,
  className = "",
  ariaLabel,
}: Props) {
  const { ref, onMove, onLeave } = useMagnetic(0.18);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-200 ease-out motion-reduce:transform-none"
    >
      <PrimaryButton
        href={href}
        variant={variant}
        glow={glow}
        className={className}
        ariaLabel={ariaLabel}
      >
        {children}
      </PrimaryButton>
    </div>
  );
}
