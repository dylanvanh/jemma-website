import BackToTopButton from "@/components/back-to-top-button";
import Splitter from "@/components/splitter";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <LandingSection />

      <Splitter className="pt-24 md:pt-32" sectionTitle="About" id="about" />
      <AboutSection />

      <Splitter
        className="pt-24 md:pt-32"
        sectionTitle="Projects"
        id="projects"
      />
      <ProjectSection />

      <Splitter
        className="pt-24 md:pt-32"
        sectionTitle="Experience"
        id="experience"
      />
      <ExperienceSection />

      <Splitter
        className="pt-24 md:pt-32"
        sectionTitle="Contact"
        id="contact"
      />
      <ContactSection />

      <BackToTopButton />
    </main>
  );
}
