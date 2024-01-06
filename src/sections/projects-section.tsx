import ProjectCard from "@/components/projects/project-card";
import { projectConfig } from "@/config/project-config";

export function ProjectSection() {
  return (
    <>
      <section id="projects" className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projectConfig.projectItems.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                portfolioItem={item}
                className="m-1 mb-2"
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
