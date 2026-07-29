import ExperienceDetails from "@components/Work/ExperienceDetails";
import WorkLandingSection from "@components/Work/WorkLandingSection";
import { Container } from "@components/ui/Container";
import { getWorkExperiences } from "@lib/api";

export default async function WorkExperiencePage() {
  const WorkExperiences = await getWorkExperiences();

  return (
    <div className="hv-page-shell">
      <Container className="hv-section-band">
        <section className="relative overflow-hidden">
          <WorkLandingSection workExperiences={WorkExperiences} />
        </section>
        <section className="relative overflow-hidden pt-6 md:pt-10">
          <ExperienceDetails workExperiences={WorkExperiences} />
        </section>
      </Container>
    </div>
  );
}
