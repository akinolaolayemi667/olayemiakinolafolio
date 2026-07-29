import { getCertifications } from "@lib/api";
import { Container } from "@components/ui/Container";
import { PrimaryButton } from "@components/ui/PrimaryButton";
import { sectionCopy } from "@data/about";

/** Renders only when certifications are published. */
const CertificationSection = async () => {
  const certifications = await getCertifications();

  if (certifications.length === 0) {
    return null;
  }

  return (
    <Container>
      <h2 className="hv-heading-lg mb-8 md:mb-10">
        {sectionCopy.certificationsTitle}
      </h2>

      <ol className="relative list-none space-y-8 p-0 before:absolute before:inset-y-2 before:left-[0.6875rem] before:w-px before:bg-gradient-to-b before:from-transparent before:via-[color:var(--hv-border-strong)] before:to-transparent">
        {certifications.map((item) => (
          <li key={item.id} className="relative pl-8 sm:pl-10">
            <span
              aria-hidden
              className="absolute left-[0.6875rem] top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-accent/50 bg-accent shadow-[0_0_16px_rgba(20,184,166,0.35)]"
            />
            <h3 className="hv-heading-md !text-xl">{item.title}</h3>
            <p className="mt-1 text-sm text-[color:var(--hv-fg-muted)]">
              {item.provider}
            </p>
            <div className="mt-4">
              <PrimaryButton
                href={item.certLink}
                variant="secondary"
                ariaLabel={`${sectionCopy.showCertificateLabel}: ${item.title}`}
              >
                {sectionCopy.showCertificateLabel}
              </PrimaryButton>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default CertificationSection;
