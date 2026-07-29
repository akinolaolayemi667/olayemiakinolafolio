export type TWorkExperience = {
  name: string;
  companyLogo?: string;
  position: string;
  startDate: string;
  endDate?: string;
  /**
   * Optional human-readable period when a calendar founding date is not published.
   * Prefer this over inventing start years.
   */
  timelineLabel?: string;
  responsibilities: string[];
  skills: string[];
};
