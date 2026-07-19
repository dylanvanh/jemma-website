"use client";

import { experienceConfig } from "@/config/experience-config";
import { motion } from "motion/react";

export function ExperienceSection() {
  if (!experienceConfig.experienceItems) {
    throw new Error("Invalid experienceConfig");
  }

  return (
    <section className="site-shell section-space pt-12 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-muted-foreground max-w-xs text-base leading-relaxed md:text-lg">
            From photography into interior design, with a practice grounded in
            observation, craft and real-world project experience.
          </p>
        </div>

        <ol className="border-border border-t lg:col-span-8">
          {experienceConfig.experienceItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-border grid gap-5 border-b py-7 sm:grid-cols-[6rem_1fr_auto] sm:items-start md:py-9"
            >
              <p className="text-accent text-xs font-semibold tabular-nums">
                {item.period}
              </p>
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-base">
                  {item.description} · {item.employmentType}
                </p>
              </div>
              <p className="text-muted-foreground text-sm sm:text-right">
                {item.jobType}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
