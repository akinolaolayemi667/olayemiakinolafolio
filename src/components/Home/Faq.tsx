"use client";

import { useState } from "react";
import { Container } from "@components/ui/Container";
import { SectionHeading } from "@components/ui/SectionHeading";
import { FadeIn, SectionFade } from "@components/ui/Motion";
import { faqItems, faqSection } from "@data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="hv-section-band cv-auto"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionFade>
          <SectionHeading
            titleId="faq-heading"
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            description={faqSection.description}
          />
        </SectionFade>

        <FadeIn delay={0.06}>
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="hv-glass overflow-hidden !rounded-2xl p-0 list-none">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <li
                    key={item.question}
                    className="border-b border-[color:var(--hv-border)] last:border-b-0"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-[color:var(--hv-fg)] transition-colors hover:text-accent focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:px-6 md:text-lg"
                      >
                        <span>{item.question}</span>
                        <span
                          aria-hidden
                          className={`shrink-0 text-accent transition-transform duration-hv motion-reduce:transition-none ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className={isOpen ? "px-5 pb-5 md:px-6" : undefined}
                    >
                      <p className="pr-6 text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
