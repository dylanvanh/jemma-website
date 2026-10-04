import { getImageSources } from "@/lib/images";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projectConfig } from "@/config/project-config";

export function LandingSection() {
  const featuredProject = projectConfig.projectItems.find(
    (item) => item.id === "4",
  )!;

  return (
    <section id="landing" aria-labelledby="hero-title">
      <div className="site-shell hero-heading">
        <div className="hero-title-group">
          <p className="eyebrow">Jemma Wedgwood · Cape Town</p>
          <h1 id="hero-title" className="hero-title">
            Interior
            <br />
            Design<span className="accent-dot">.</span>
          </h1>
        </div>
        <div className="hero-intro">
          <p>
            Thoughtful spaces.
            <br />
            Made for everyday life.
          </p>
          <p className="hero-description">
            Interiors shaped around the people who live, work and gather in
            them.
          </p>
          <Link to="/" hash="projects" className="pill-link">
            Explore my work <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <Link
          to="/projects/$projectId"
          params={{ projectId: "1" }}
          className="hero-study"
          aria-label="Explore the PG Bison residential project"
        >
          <div className="hero-study-image">
            <img
              src="/projects/pg-bison.jpg"
              srcSet={getImageSources("/projects/pg-bison.jpg")}
              alt="Timber and concrete architecture in the PG Bison concept"
              loading="lazy"
              decoding="async"
              sizes="180px"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <span>
            Spaces with a point of view{" "}
            <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </Link>
      </div>
      <figure className="site-shell hero-figure">
        <Link
          to="/projects/$projectId"
          params={{ projectId: featuredProject.id }}
          className="hero-image-link"
          aria-label={`View ${featuredProject.title}, a hospitality design project`}
        >
          <img
            src={featuredProject.previewImageUrl}
            srcSet={getImageSources(featuredProject.previewImageUrl)}
            alt="Brew Pub interior: warm brick arches, timber tables and hanging lights"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="(max-width: 767px) 100vw, (max-width: 1520px) 95vw, 1440px"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="image-open">
            <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </Link>
        <figcaption className="hero-caption">
          <span>
            <span className="caption-dot" /> Featured — {featuredProject.title}
          </span>
          <span className="hero-caption-type">
            {featuredProject.designType}
          </span>
          <Link to="/" hash="about" className="scroll-link">
            Discover more <ArrowDown size={14} aria-hidden="true" />
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}
