import { getWorkExperiences } from "@lib/api";
import { ExperienceTimeline } from "@components/About/ExperienceTimeline";

/** About experience — server fetch + storytelling timeline preview. */
const ExperienceSection = async () => {
  const experiences = await getWorkExperiences();
  return (
    <ExperienceTimeline experiences={experiences} preview previewLimit={2} />
  );
};

export default ExperienceSection;
