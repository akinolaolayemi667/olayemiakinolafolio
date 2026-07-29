"use client";

import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  results: string[];
  businessImpact: string[];
  resultsLabel?: string;
  impactLabel?: string;
  className?: string;
  /** Show estimate disclaimer when outcomes are not audited metrics */
  showEstimatesDisclaimer?: boolean;
  estimatesDisclaimer?: string;
};

/** Results + business value — statement cards (same strings, premium layout). */
export function BusinessImpact({
  results,
  businessImpact,
  resultsLabel = "Results",
  impactLabel = "Business value",
  className = "",
  showEstimatesDisclaimer = false,
  estimatesDisclaimer,
}: Props) {
  const columns: { label: string; items: string[] }[] = [];
  if (results.length) columns.push({ label: resultsLabel, items: results });
  if (businessImpact.length)
    columns.push({ label: impactLabel, items: businessImpact });

  if (!columns.length) return null;

  const multi = columns.length > 1;

  return (
    <div className={`flex flex-col gap-8 md:gap-10 ${className}`}>
      {showEstimatesDisclaimer && estimatesDisclaimer ? (
        <p className="max-w-2xl text-xs leading-relaxed text-[color:var(--hv-fg-muted)] md:text-sm">
          {estimatesDisclaimer}
        </p>
      ) : null}

      <div
        className={`grid gap-8 md:gap-10 ${
          multi ? "lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {columns.map((column) => (
          <div key={column.label}>
            <p className="hv-eyebrow !text-accent">{column.label}</p>
            <Stagger
              as="ul"
              className="mt-5 grid list-none gap-3 p-0 sm:gap-4"
              stagger={0.05}
            >
              {column.items.map((item, index) => (
                <StaggerItem key={item}>
                  <div className="case-metric-card">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl"
                    />
                    <div className="relative flex gap-4">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-[11px] font-semibold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-[color:var(--hv-fg-secondary)] md:text-[15px] md:leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </div>
  );
}
