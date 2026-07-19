"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
}

export default function Splitter({
  sectionTitle,
  className,
  id,
}: SplitterProps) {
  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("site-shell scroll-mt-20", className)}
    >
      <div className="border-border grid gap-5 border-t pt-5 md:grid-cols-[8rem_1fr] md:gap-10">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          {sectionTitle === "About" && "01 / Profile"}
          {sectionTitle === "Projects" && "02 / Selected work"}
          {sectionTitle === "Experience" && "03 / Practice"}
          {sectionTitle === "Contact" && "04 / Enquiries"}
        </p>
        <h2 className="section-title font-heading max-w-[11ch] font-medium">
          {sectionTitle}
        </h2>
      </div>
    </motion.header>
  );
}
