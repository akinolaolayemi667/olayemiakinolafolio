"use client";

import { TProjectGalleryItem } from "@type/Project";
import { projectsSection } from "@data/projects";
import { GalleryCard } from "@components/premium/GalleryCard";
import { Stagger, StaggerItem } from "@components/ui/Motion";

type Props = {
  items: TProjectGalleryItem[];
  className?: string;
};

/** Responsive case-study gallery with elevation, zoom affordance, and captions. */
export function ProjectGallery({ items, className = "" }: Props) {
  if (!items.length) return null;

  return (
    <Stagger
      as="ul"
      className={`grid list-none gap-5 p-0 sm:grid-cols-2 sm:gap-6 ${className}`}
      stagger={0.06}
      aria-label={projectsSection.sectionLabels.gallery}
    >
      {items.map((item) => (
        <StaggerItem key={`${item.src}-${item.alt}`} as="li">
          <GalleryCard
            src={item.src}
            alt={item.alt}
            isPlaceholder={item.isPlaceholder}
            placeholderLabel={projectsSection.screenshotPlaceholderLabel}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
