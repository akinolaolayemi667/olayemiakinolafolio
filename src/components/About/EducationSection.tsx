import { getEducations } from "@lib/api";
import { Container } from "@components/ui/Container";
import { profile } from "@data/profile";
import { sectionCopy } from "@data/about";

/** Renders only when education entries are published. */
const EducationSection = async () => {
  const Educations = await getEducations();

  if (Educations.length === 0) {
    return null;
  }

  return (
    <Container>
      <div className="mb-8 md:mb-10">
        <p className="hv-eyebrow">{profile.educationLabel}</p>
        <h2 className="hv-heading-lg mt-3">{sectionCopy.educationTitle}</h2>
      </div>

      <ol className="relative list-none space-y-6 p-0 before:absolute before:inset-y-2 before:left-[0.6875rem] before:w-px before:bg-gradient-to-b before:from-transparent before:via-[color:var(--hv-border-strong)] before:to-transparent md:before:left-1/2 md:before:-translate-x-px">
        {Educations.map((item, index) => (
          <li
            key={`${item.degree}-${index}`}
            className="relative flex items-start justify-between md:items-center md:justify-normal md:odd:flex-row-reverse"
          >
            <span
              aria-hidden
              className="absolute left-[0.6875rem] top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-accent/50 bg-accent shadow-[0_0_16px_rgba(20,184,166,0.35)] md:left-1/2 md:top-1/2 md:-translate-y-1/2"
            />
            <article className="hv-card ml-8 w-full min-w-0 p-5 md:ml-0 md:w-[calc(50%-2.5rem)] md:p-6 md:odd:text-start md:even:text-end">
              <h3 className="hv-heading-md !text-xl">{item.degree}</h3>
              <p className="mt-1 font-semibold text-accent">{item.program}</p>
              <p className="mt-2 text-sm text-[color:var(--hv-fg-secondary)]">
                {item.location}
              </p>
              <time className="mt-1 block text-sm text-[color:var(--hv-fg-muted)]">
                {item.date}
              </time>
              {item.grade ? (
                <p className="mt-1 text-sm text-[color:var(--hv-fg-muted)]">
                  {item.grade}
                </p>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default EducationSection;
