import { TCertificate } from "@type/Certificate";
import { TWorkExperience } from "@type/Company";
import { TEducation } from "@type/Eduction";
import { certificates } from "../data/certificates";
import { educations } from "../data/education";
import { experiences } from "../data/experience";

export async function getWorkExperiences(): Promise<TWorkExperience[]> {
  return experiences;
}

export async function getEducations(): Promise<TEducation[]> {
  return educations;
}

export async function getCertifications(): Promise<TCertificate[]> {
  return certificates;
}
