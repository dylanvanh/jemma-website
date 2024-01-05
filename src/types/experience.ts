export type ExperienceItem = {
  title: string;
  jobType: string;
  description: string;
  period: string;
  employmentType: string;
  logoUrl: string;
};

export type ExperienceConfig = {
  experienceItems: ExperienceItem[];
};
