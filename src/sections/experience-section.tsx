"use client";

import { experienceConfig } from "@/config/experience-config";
import { motion } from "motion/react";

export function ExperienceSection() {
  if (!experienceConfig.experienceItems) {
    throw new Error("Invalid experienceConfig");
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="relative">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {experienceConfig.experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:flex md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:text-left"
                }`}
              >
                <div className="relative border-l border-border pl-6 md:border-none md:pl-0">
                  <div className="absolute -left-1.5 top-1 size-3 rounded-full border-2 border-accent bg-background md:hidden" />

                  <p className="text-sm font-medium text-accent">{item.period}</p>
                  <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{item.jobType}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description} · {item.employmentType}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 hidden size-4 -translate-x-1/2 items-center justify-center md:flex">
                <div className="size-3 rounded-full border-2 border-accent bg-background" />
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
