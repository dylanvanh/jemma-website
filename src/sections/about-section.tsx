import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projectConfig } from "@/config/project-config";

const skills = [
  "Interior design",
  "3D modelling",
  "Renders",
  "Technical drawings",
  "Branding",
  "Custom furniture",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="site-shell about-section"
      aria-labelledby="about-title"
    >
      <div className="about-aside">
        <p className="eyebrow">A little about me</p>
        <figure className="about-portrait">
          <div className="about-portrait-image">
            <img
              src="/jemma-profile.webp"
              alt="Jemma Wedgwood"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 120px, 184px"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption>
            Jemma Wedgwood
            <br />
            <span>Designer & photographer</span>
          </figcaption>
        </figure>
      </div>
      <div className="about-body">
        <h2 id="about-title">
          Good spaces look beautiful.
          <br />
          Great spaces feel like you.
        </h2>
        <p className="about-copy">
          I’m Jemma, an interior designer based in Cape Town. I bring together
          spatial planning, material detail and a photographer’s eye for light
          to create spaces with purpose and personality.
        </p>
        <div className="about-facts">
          <div>
            <p className="fact-value">
              {String(projectConfig.projectItems.length).padStart(2, "0")}
              <span>↗</span>
            </p>
            <p className="fact-label">Selected projects</p>
          </div>
          <div>
            <p className="fact-value">
              {String(skills.length).padStart(2, "0")}
            </p>
            <p className="fact-label">Creative disciplines</p>
          </div>
        </div>
        <div className="discipline-list" aria-label="Creative disciplines">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <Link to="/" hash="experience" className="text-link">
          More about my background <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
