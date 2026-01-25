"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";

export function LandingSection() {
  return (
    <section
      id="landing"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-12 pt-24 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent)_0%,_transparent_50%)] opacity-[0.03]" />

      <div className="flex-1" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground md:mb-6 md:text-base"
        >
          Interior Designer & Photographer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={cn(
            "font-heading font-medium tracking-tight",
            "text-5xl leading-[0.9]",
            "sm:text-6xl",
            "md:text-7xl",
            "lg:text-8xl",
            "xl:text-9xl",
          )}
        >
          Jemma
          <br />
          <span className="text-accent">Wedgwood</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground md:mt-12 md:text-lg"
        >
          Creating thoughtful spaces that balance aesthetics with functionality.
          Based in Cape Town, South Africa.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-16 flex items-end justify-between md:mt-24"
      >
        <Link
          href="#about"
          className="group flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>Scroll to explore</span>
          <span className="relative h-12 w-px bg-border">
            <span className="absolute left-0 top-0 h-4 w-px animate-pulse bg-accent" />
          </span>
        </Link>

        <div className="hidden text-right text-sm text-muted-foreground md:block">
          <p className="font-medium">Cape Town</p>
          <p className="font-light">South Africa</p>
        </div>
      </motion.div>
    </section>
  );
}
