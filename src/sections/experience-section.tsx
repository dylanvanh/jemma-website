import HorizontalTimeline from "@/components/experience/horizontal-timeline";
import VerticalTimeline from "@/components/experience/vertical-timeline";
import { experienceConfig } from "@/config/experience-config";

export function ExperienceSection() {
  if (!experienceConfig.experienceItems) {
    console.error("Invalid experienceConfig");
    throw new Error("Invalid experienceConfig");
  }

  return (
    <>
      <HorizontalTimeline className="mx-8 mb-16 hidden md:flex" />
      <VerticalTimeline className="mx-8 mb-16 md:hidden" />
    </>
  );
}
