import Splitter from "@/components/splitter";
import { ExperienceSection } from "@/sections/experience-section";
import FooterSection from "@/sections/footer-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export default function CombinedSections() {
  console.log(
    "Created by https://www.linkedin.com/in/dylan-van-heerden-a7b160139/",
  );

  return (
    <>
      <LandingSection />
      <Splitter className="px-12" sectionTitle="Projects" />
      <ProjectSection />
      <Splitter className="px-12" sectionTitle="Experience" />
      <ExperienceSection />
      <FooterSection />
    </>
  );
}
