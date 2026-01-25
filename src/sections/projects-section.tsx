"use client";

import ProjectCard from "@/components/projects/project-card";
import { projectConfig } from "@/config/project-config";
import { motion } from "motion/react";

export function ProjectSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
        {projectConfig.projectItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <ProjectCard portfolioItem={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
