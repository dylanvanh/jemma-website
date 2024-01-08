import Splitter from "@/components/splitter";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import FooterSection from "@/sections/footer-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export default function CombinedSections() {
  return (
    <>
      <LandingSection />
      <Splitter className="mb-12 mt-5" sectionTitle="Projects" />
      <ProjectSection />
      <Splitter className="mb-12 mt-5" sectionTitle="Experience" />
      <ExperienceSection />
      <Splitter className="mb-12 mt-5" sectionTitle="Contact me" />
      <ContactSection />
      <FooterSection />
    </>
  );
}
