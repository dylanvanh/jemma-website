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
        "grid w-full min-w-0 grid-cols-2 gap-4 md:gap-10",
        className,
      )}
    >
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.id}`}
          className="group flex min-h-16 min-w-0 items-center gap-3 md:gap-5"
        >
          <ArrowLeft
            className="size-4 shrink-0 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <div className="min-w-0 text-left">
            <p className="text-muted-foreground mb-2 text-xs">
              Previous project
            </p>
            <p className="font-heading text-lg leading-tight tracking-[-0.03em] [overflow-wrap:anywhere] md:text-3xl">
              {prevProject.title}
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href="/#projects"
          className="text-muted-foreground flex min-h-16 items-center gap-3 text-sm"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
          All projects
        </Link>
      )}

      {nextProject ? (
        <Link
          href={`/projects/${nextProject.id}`}
          className="group flex min-h-16 min-w-0 items-center justify-end gap-3 md:gap-5"
        >
          <div className="min-w-0 text-right">
            <p className="text-muted-foreground mb-2 text-xs">Next project</p>
            <p className="font-heading text-lg leading-tight tracking-[-0.03em] [overflow-wrap:anywhere] md:text-3xl">
              {nextProject.title}
            </p>
          </div>
          <ArrowRight
            className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <Link
          href="/#projects"
          className="text-muted-foreground flex min-h-16 items-center justify-end gap-3 text-sm"
        >
          All projects
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}
