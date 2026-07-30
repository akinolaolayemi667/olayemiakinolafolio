"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FloatingGrid } from "@components/premium/FloatingGrid";
import { engineeringIntelligenceSection } from "@data/engineering-intelligence";
import { FounderArchitectureVisual } from "./FounderArchitectureVisual";
import { IntelligencePanel } from "./IntelligencePanel";

/**
 * Engineering Intelligence — premium architecture expertise introduction.
 */
export default function EngineeringIntelligence() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const copy = engineeringIntelligenceSection;

  return (
    <section
      ref={sectionRef}
      id="engineering-intelligence"
      className="hv-section-band cv-auto relative overflow-hidden border-y border-[color:var(--hv-border)]"
      aria-labelledby="engineering-intelligence-heading"
    >
      <FloatingGrid opacity={0.05} cellSize={72} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hv-section-wash"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 18% 40%, var(--hv-accent-dim), transparent 55%), radial-gradient(ellipse 40% 35% at 88% 20%, var(--hv-cyan-dim), transparent 50%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          titleId="engineering-intelligence-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
          <FounderArchitectureVisual active={active} />
          <IntelligencePanel reduceMotion={reduceMotion} active={active} />
        </div>
      </Container>
    </section>
  );
}
