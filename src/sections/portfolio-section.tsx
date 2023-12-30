import ProjectCard from "@/components/portfolio/project-card";
import { portfolioConfig } from "@/config/portfolio-config";

export function PortfolioSection() {
  return (
    <>
      <section id="portfolio" className="p-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {portfolioConfig.portfolioItems.map((item, index) => {
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
