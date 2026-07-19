"use client";

import { cn } from "@/lib/utils";
import { projectConfig } from "@/config/project-config";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function LandingSection() {
  const featuredProject = projectConfig.projectItems[0]!;

  return (
    <section id="landing" className="relative min-h-dvh overflow-hidden pt-16">
      <div className="site-shell grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-end gap-10 py-8 md:grid-cols-12 md:gap-6 md:py-12">
        <div className="relative z-10 md:col-span-8 md:pb-4 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8 text-xs font-semibold tracking-[0.18em] uppercase md:mb-10"
          >
            Interior designer · Cape Town
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={cn(
              "display-type font-heading font-medium",
              "relative z-20",
            )}
          >
            <span className="block">Jemma</span>
            <span className="text-accent block italic">Wedgwood</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-border mt-10 grid max-w-2xl gap-8 border-t pt-6 sm:grid-cols-[1fr_auto] sm:items-end md:mt-14"
          >
            <p className="text-muted-foreground max-w-[34rem] text-base leading-relaxed md:text-lg">
              Thoughtful interiors shaped around the people who live, work and
              gather in them.
            </p>
            <Link
              href="#projects"
              className="group inline-flex min-h-11 items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              View selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative min-h-[28rem] md:col-span-4 md:h-[72vh] md:min-h-[34rem] lg:col-span-5"
        >
          <div className="bg-muted absolute inset-0 overflow-hidden">
            <Image
              src={featuredProject.previewImageUrl}
              alt={`${featuredProject.title} interior by Jemma Wedgwood`}
              fill
              priority
              className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.025]"
              sizes="(max-width: 767px) 100vw, 42vw"
            />
            <div className="from-foreground/40 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
                Featured project
              </p>
              <p className="font-heading mt-2 text-3xl font-medium">
                {featuredProject.title}
              </p>
            </div>
            <span className="text-sm tabular-nums">01 / 05</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
