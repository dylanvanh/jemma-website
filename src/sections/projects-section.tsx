"use client";

import ProjectCard from "@/components/projects/project-card";
import { projectConfig } from "@/config/project-config";
import { motion } from "motion/react";

export function ProjectSection() {
  return (
    <section className="site-shell section-space pt-12 md:pt-16">
      <div className="border-border mb-12 grid gap-6 border-b pb-8 md:grid-cols-2 md:items-end">
        <p className="text-muted-foreground max-w-md text-base leading-relaxed md:text-lg">
          A selection of residential, hospitality and workplace concepts—each
          built around a different way of living.
        </p>
        <p className="text-muted-foreground text-left text-xs font-semibold tracking-[0.16em] uppercase md:text-right">
          Selected projects · 2021—2024
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-y-24">
        {projectConfig.projectItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard portfolioItem={item} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
