import { ReactNode } from "react";
import { GlassCard } from "@components/premium/GlassCard";

/** Shared premium surface — thin alias over GlassCard. */
export function SurfaceCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <GlassCard
      as="div"
      className={className}
      interactive={hover}
      padding="lg"
      wash={hover}
    >
      {children}
    </GlassCard>
  );
}
