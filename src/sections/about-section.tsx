"use client";

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
    <section className="site-shell section-space pt-12 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-muted relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:mt-24 lg:aspect-[3/4]"
        >
          <Image
            src="/jemma-profile.webp"
            alt="Jemma Wedgwood"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="from-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent" />
          <p className="absolute bottom-5 left-5 text-xs font-semibold tracking-[0.16em] text-white uppercase">
            Portrait / Cape Town
          </p>
        </motion.div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent mb-6 text-xs font-semibold tracking-[0.16em] uppercase">
              About Jemma
            </p>
            <h3 className="font-heading max-w-[14ch] text-4xl leading-none font-medium tracking-[-0.035em] md:text-6xl">
              Spaces with purpose, personality and a clear point of view.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-accent text-muted-foreground mt-10 max-w-[62ch] space-y-6 border-l pl-6 md:pl-8"
          >
            <p className="text-base leading-relaxed md:text-lg">
              I design interiors that work beautifully in everyday life. My
              approach balances spatial planning, material detail and a strong
              visual story so each project feels considered rather than styled.
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              Photography sharpens how I see light, composition and atmosphere.
              Those instincts carry through my interior work, from the first
              sketch to the final, lived-in space.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-border mt-12 border-t pt-6"
          >
            <p className="text-muted-foreground mb-5 text-xs font-semibold tracking-[0.16em] uppercase">
              Working across
            </p>
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {SKILLS.map((skill, index) => (
                <div
                  key={skill}
                  className="border-border flex items-center justify-between border-b pb-3 text-sm"
                >
                  <span>{skill}</span>
                  <span className="text-muted-foreground text-xs tabular-nums">
                    0{index + 1}
                  </span>
                </div>
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
            <div className="bg-accent size-2 rounded-full" />
            <p className="text-muted-foreground text-sm">
              Based in Cape Town · Working across interior design and
              photography
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
