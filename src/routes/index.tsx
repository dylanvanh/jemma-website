import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { LandingSection } from "@/sections/landing-section";
import { ProjectSection } from "@/sections/projects-section";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main id="main-content" className="portfolio-home">
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
