"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

const SKILLS = [
  "Interior Design",
  "3D Modeling",
  "Renders",
  "Technical Drawings",
  "Branding",
  "Custom Furniture",
] as const;

export function AboutSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-full"
        >
          <Image
            src="/jemma-profile.webp"
            alt="Jemma Wedgwood"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About Me
            </p>
            <h3 className="mb-8 font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Creating spaces that tell stories
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base leading-relaxed md:text-lg">
              I have embarked on a journey in interior design, successfully
              completing numerous projects with my unique designs. My approach
              combines functionality with aesthetics, creating spaces that are
              both beautiful and livable.
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              My creative flair also finds expression in photography. As I
              continue to explore these artistic domains, I am enthusiastic
              about broadening my expertise and leaving a distinctive mark in
              both interior design and photography.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-normal",
                    "transition-colors hover:bg-accent hover:text-accent-foreground",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="size-2 rounded-full bg-accent" />
            <p className="text-sm text-muted-foreground">
              Based in Cape Town, South Africa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
