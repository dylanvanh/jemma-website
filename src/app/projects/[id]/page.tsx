import dynamic from "next/dynamic";

import { projectConfig } from "@/config/project-config";
import { type ProjectItem } from "@/types/project";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTopButton from "@/components/back-to-top-button";
import SwitchProjectButton from "@/components/projects/switch-project-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Gallery = dynamic(() => import("@/components/projects/gallery"));

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const projectItem = getProjectItemFromParams(resolvedParams.id);

  return {
    title: projectItem.title,
    description: projectItem.designType,
    openGraph: {
      images: [
        {
          url: projectItem.previewImageUrl,
        },
      ],
    },
  };
}

function getProjectItemFromParams(id: string) {
  const filterProjectItem: ProjectItem | undefined =
    projectConfig.projectItems.find((item) => item.id === id);

  if (!filterProjectItem) {
    console.error("Invalid url param id: " + id);
    notFound();
  }

  return filterProjectItem;
}

export function generateStaticParams() {
  return projectConfig.projectItems.map((item) => ({
    id: item.id,
  }));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const projectItem: ProjectItem = getProjectItemFromParams(resolvedParams.id);

  return (
    <main id="main-content" className="min-h-screen">
      <div className="site-shell pt-7 pb-12 md:pt-10 md:pb-20">
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-3 text-xs transition-colors"
        >
          <span aria-hidden="true">↖</span> Back to selected work
        </Link>

        <header className="grid min-w-0 gap-8 pt-10 pb-10 md:grid-cols-12 md:items-end md:pt-16 md:pb-14">
          <div className="min-w-0 md:col-span-8">
            <p className="text-muted-foreground mb-5 text-xs">
              Selected work / {String(resolvedParams.id).padStart(2, "0")}
            </p>
            <h1 className="font-heading max-w-[16ch] text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.96] font-normal tracking-[-0.055em] [overflow-wrap:anywhere]">
              {projectItem.title}
            </h1>
          </div>
          <div className="min-w-0 md:col-span-4 md:pb-1 lg:pl-10">
            <p className="text-muted-foreground mb-3 text-xs">
              Design discipline
            </p>
            <p className="text-lg">{projectItem.designType}</p>
            <p className="text-muted-foreground mt-5 text-sm">
              A project by Jemma Wedgwood
            </p>
          </div>
        </header>

        <div className="bg-muted relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
          <Image
            src={projectItem.previewImageUrl}
            alt={`${projectItem.title} project overview`}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1360px"
          />
        </div>

        <section
          className="grid gap-8 py-14 md:grid-cols-12 md:py-24"
          aria-labelledby="project-brief"
        >
          <h2
            id="project-brief"
            className="text-muted-foreground text-xs md:col-span-4"
          >
            About the project
          </h2>
          <div className="min-w-0 md:col-span-8">
            <details className="border-border border-y py-4 md:hidden">
              <summary className="cursor-pointer text-base">
                Read the project brief
              </summary>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                {projectItem.description}
              </p>
            </details>
            <p className="hidden max-w-[60ch] text-xl leading-relaxed tracking-[-0.02em] md:block lg:text-2xl">
              {projectItem.description}
            </p>
          </div>
        </section>

        <div className="border-border mb-8 grid gap-5 border-t pt-6 md:grid-cols-12 md:items-end">
          <h2 className="font-heading text-4xl leading-none tracking-[-0.04em] md:col-span-7 md:text-5xl">
            A closer look.
          </h2>
          <p className="text-muted-foreground text-sm md:col-span-5 md:text-right">
            Drawings, details and spatial views
          </p>
        </div>

        <Gallery key={resolvedParams.id} id={resolvedParams.id} />

        <SwitchProjectButton
          currentProjectId={resolvedParams.id}
          className="border-border mt-16 border-t pt-8 md:mt-24"
        />

        <div className="border-border mt-14 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center md:mt-20">
          <p className="font-heading text-3xl tracking-[-0.04em] md:text-4xl">
            Have a space in mind?
          </p>
          <Link
            href="/#contact"
            className="bg-foreground text-background inline-flex min-h-12 items-center gap-8 rounded-full px-6 text-sm whitespace-nowrap"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
