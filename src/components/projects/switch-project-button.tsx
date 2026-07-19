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
    <nav
      aria-label="Project navigation"
      className={cn(
        "flex w-full items-center justify-between gap-4",
        className,
      )}
    >
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.id}`}
          className="group text-muted-foreground hover:text-foreground flex min-h-11 items-center gap-3 transition-colors"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <div className="text-left">
            <p className="text-xs tracking-[0.1em] uppercase">Previous</p>
            <p className="text-foreground text-sm font-medium">
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
          className="group text-muted-foreground hover:text-foreground flex min-h-11 items-center gap-3 transition-colors"
        >
          <div className="text-right">
            <p className="text-xs tracking-[0.1em] uppercase">Next</p>
            <p className="text-foreground text-sm font-medium">
              {nextProject.title}
            </p>
          </div>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
