"use client";

import { projectConfig } from "@/config/project-config";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SwitchProjectButtonProps {
  currentProjectId: string;
  className?: string;
}

export default function SwitchProjectButton({
  currentProjectId,
  className,
}: SwitchProjectButtonProps) {
  const currentIndex = projectConfig.projectItems.findIndex(
    (item) => item.id === currentProjectId,
  );

  const prevProject =
    currentIndex > 0 ? projectConfig.projectItems[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectConfig.projectItems.length - 1
      ? projectConfig.projectItems[currentIndex + 1]
      : null;

  return (
    <div className={cn("flex w-full items-center justify-between gap-4", className)}>
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.id}`}
          className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.1em]">Previous</p>
            <p className="font-heading text-sm font-medium text-foreground">
              {prevProject.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link
          href={`/projects/${nextProject.id}`}
          className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.1em]">Next</p>
            <p className="font-heading text-sm font-medium text-foreground">
              {nextProject.title}
            </p>
          </div>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
