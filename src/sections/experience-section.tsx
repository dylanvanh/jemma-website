import VerticalTimeline from "@/components/experience/vertical-timeline";
import { experienceConfig } from "@/config/experience-config";

export function ExperienceSection() {
  if (!experienceConfig.experienceItems) {
    console.error("Invalid experienceConfig");
    throw new Error("Invalid experienceConfig");
  }

  return (
    <>
      <VerticalTimeline className="mx-8 mb-16 md:hidden" />
    </>
  );
}
