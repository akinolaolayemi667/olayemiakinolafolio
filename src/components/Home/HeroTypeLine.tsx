"use client";

import { useEffect, useState } from "react";
import { TypeSequence } from "@components/ui/TypeSequence";
import { hero } from "@data/hero";

/** Animated typing subtitle / social-proof line under the hero subheadline. */
export function HeroTypeLine() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!hero.socialProof?.trim()) return null;

  return (
    <TypeSequence
      active={active}
      text={hero.socialProof}
      className="max-w-2xl text-[color:var(--hv-fg-secondary)]"
      charMs={20}
    />
  );
}
