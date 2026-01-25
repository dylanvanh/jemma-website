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
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("px-6 md:px-12 lg:px-24", className)}
    >
      <div className="flex items-end gap-6">
        <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
          {sectionTitle}
        </h2>
        <div className="mb-3 h-px flex-1 bg-border" />
      </div>
    </motion.div>
  );
}
