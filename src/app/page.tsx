import Splitter from "@/components/splitter";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export default function CombinedSections() {
  return (
    <>
      <LandingSection />
      <Splitter className="mb-12 pt-5" sectionTitle="About" id="about" />
      <AboutSection />
      <Splitter className="mb-12 pt-5" sectionTitle="Projects" id="projects" />
      <ProjectSection />
      <Splitter
        className="mb-12 pt-5"
        sectionTitle="Experience"
        id="experience"
      />
      <ExperienceSection />
      <Splitter className="mb-12 pt-5" sectionTitle="Contact me" id="contact" />
      <ContactSection />
    </>
  );
}
