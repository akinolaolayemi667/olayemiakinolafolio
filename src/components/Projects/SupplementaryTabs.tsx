"use client";

import { useState } from "react";
import { TProjectSupplementarySection } from "@type/Project";
import { CaseStudyBulletList, CaseStudySection } from "@components/Projects/CaseStudySection";
import { JourneySteps } from "@components/Projects/JourneySteps";

type Props = {
  sections: TProjectSupplementarySection[];
};

function renderSectionContent(section: TProjectSupplementarySection) {
  if (section.id === "user-journey") {
    return <JourneySteps items={section.items} />;
  }
  return <CaseStudyBulletList items={section.items} />;
}

/** Tabbed supplementary sections — reduces scroll fatigue on rich case studies. */
export function SupplementaryTabs({ sections }: Props) {
  const valid = sections.filter((s) => s.items.length > 0);
  const [activeId, setActiveId] = useState(valid[0]?.id ?? "");

  if (!valid.length) return null;

  if (valid.length === 1) {
    const section = valid[0];
    return (
      <CaseStudySection id={section.id} title={section.title}>
        {renderSectionContent(section)}
      </CaseStudySection>
    );
  }

  const active = valid.find((s) => s.id === activeId) ?? valid[0];

  return (
    <CaseStudySection id="supplementary" title="Additional details">
      <div
        className="mb-5 flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-ink/40 p-1"
        role="tablist"
        aria-label="Case study details"
      >
        {valid.map((section) => {
          const selected = section.id === active.id;
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${section.id}`}
              id={`tab-${section.id}`}
              onClick={() => setActiveId(section.id)}
              className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm ${
                selected
                  ? "bg-accent/15 text-white shadow-[inset_0_0_0_1px_rgba(20,184,166,0.35)]"
                  : "text-white/65 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {section.title}
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="motion-safe:animate-[fadeUp_0.3s_ease-out]"
      >
        {renderSectionContent(active)}
      </div>
    </CaseStudySection>
  );
}
