import { getImageSources } from "@/lib/images";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projectConfig } from "@/config/project-config";

export function ProjectSection() {
  const projects = projectConfig.projectItems;
  return (
    <section
      id="projects"
      className="site-shell projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-heading">
        <p className="eyebrow">Selected work</p>
        <p>
          Ideas made spatial.{" "}
          <span>01—{String(projects.length).padStart(2, "0")}</span>
        </p>
      </div>
      <div className="project-showcase">
        <div className="project-stage">
          <img
            src="/projects/clinic-detail.png"
            srcSet={getImageSources("/projects/clinic-detail.png")}
            alt="Curved chairs and warm timber in the Skin Clinic consultation room"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 767px) 100vw, 65vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="project-stage-shade" />
          <div className="project-stage-copy">
            <h2 id="projects-title">
              Where form
              <br />
              meets feeling.
            </h2>
            <Link
              to="/"
              hash="project-index"
              className="pill-link pill-link-light"
            >
              View all projects <ArrowDown size={15} aria-hidden="true" />
            </Link>
          </div>
          <Link
            to="/projects/$projectId"
            params={{ projectId: "2" }}
            className="stage-caption"
          >
            <span>
              Skin Clinic <span> / Healing design</span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </div>
        <div
          id="project-index"
          className="project-index"
          aria-label="All projects"
        >
          {projects.map((project, index) => (
            <Link
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              key={project.id}
              className="project-tile"
            >
              <div className="project-tile-image">
                <img
                  src={project.previewImageUrl}
                  srcSet={getImageSources(project.previewImageUrl)}
                  alt={`${project.title} design concept`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 767px) 100vw, (max-width: 1520px) 30vw, 400px"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="project-tile-arrow">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="project-tile-caption">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.designType}</p>
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
