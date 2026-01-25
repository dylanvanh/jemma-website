import BackToTopButton from "@/components/back-to-top-button";
import Splitter from "@/components/splitter";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export default function HomePage() {
  return (
    <main>
      <LandingSection />

      <Splitter
        className="mb-8 pt-16 md:mb-12 md:pt-24"
        sectionTitle="About"
        id="about"
      />
      <AboutSection />

      <Splitter
        className="mb-8 pt-16 md:mb-12 md:pt-24"
        sectionTitle="Projects"
        id="projects"
      />
      <ProjectSection />

      <Splitter
        className="mb-8 pt-16 md:mb-12 md:pt-24"
        sectionTitle="Experience"
        id="experience"
      />
      <ExperienceSection />

      <Splitter
        className="mb-8 pt-16 md:mb-12 md:pt-24"
        sectionTitle="Contact"
        id="contact"
      />
      <ContactSection />

      <BackToTopButton />
    </main>
  );
}
