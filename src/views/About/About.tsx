import BiographySection from "@components/About/BiographySection";
import CareerHighlights from "@components/About/CareerHighlights";
import CertificationSection from "@components/About/CertificationSection";
import EducationSection from "@components/About/EducationSection";
import ExperienceSection from "@components/About/ExperienceSection";
import SkillSection from "@components/About/SkillSection";
import { Container } from "@components/ui/Container";

/**
 * About page — storytelling experience with premium section rhythm.
 */
export default function AboutPage() {
  return (
    <div className="hv-page-shell">
      {/* Professional introduction + portrait + philosophy + stats */}
      <section className="hv-section-band relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(20,184,166,0.08),transparent_50%),radial-gradient(ellipse_at_90%_20%,rgba(34,211,238,0.06),transparent_45%)]"
        />
        <Container className="relative">
          <BiographySection />
        </Container>
      </section>

      {/* Career highlights */}
      <section className="hv-section-band relative overflow-hidden border-y border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/30">
        <Container>
          <CareerHighlights />
        </Container>
      </section>

      {/* Technology focus */}
      <section className="hv-section-band relative overflow-hidden">
        <Container>
          <SkillSection />
        </Container>
      </section>

      {/* Experience timeline preview */}
      <section className="hv-section-band relative overflow-hidden border-t border-[color:var(--hv-border)] bg-[color:var(--hv-surface)]/20">
        <ExperienceSection />
      </section>

      <section className="hv-section-sm relative overflow-hidden">
        <EducationSection />
      </section>

      <section className="hv-section-sm relative overflow-hidden pb-[var(--hv-section-y)]">
        <CertificationSection />
      </section>
    </div>
  );
}
