import { projectsSection } from "@data/projects";

type Props = {
  items: string[];
  className?: string;
};

/** Technology badge row for case study surfaces. */
export function TechnologyStack({ items, className = "" }: Props) {
  if (!items.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={projectsSection.sectionLabels.technologyStack}>
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-lg border border-white/10 bg-ink/50 px-2.5 py-1 text-xs text-white/75 transition-colors hover:border-accent/30 hover:text-white/90"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
