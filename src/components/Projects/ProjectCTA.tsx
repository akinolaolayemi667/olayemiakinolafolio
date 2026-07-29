import { PrimaryButton } from "@components/ui/PrimaryButton";
import { projectsSection } from "@data/projects";

type Props = {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

/** Closing conversion block — glass surface with glow CTA. */
export function ProjectCTA({
  className = "",
  title,
  description,
  buttonLabel,
  href,
}: Props) {
  const cta = projectsSection.cta;

  return (
    <div
      className={`gradient-border case-surface relative overflow-hidden !rounded-[1.75rem] !p-7 sm:!p-9 md:!p-11 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(20,184,166,0.18), transparent 55%), radial-gradient(ellipse 40% 50% at 100% 100%, rgba(34,211,238,0.08), transparent 50%)",
        }}
      />
      <div className="relative">
        <p className="hv-eyebrow !text-accent">Next step</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--hv-fg)] md:text-3xl lg:text-[2.15rem]">
          {title ?? cta.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--hv-fg-muted)] md:text-base md:leading-relaxed">
          {description ?? cta.description}
        </p>
        <div className="mt-7 md:mt-8">
          <PrimaryButton href={href ?? cta.href} glow>
            {buttonLabel ?? cta.buttonLabel}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
