import dynamic from "next/dynamic";

import { projectConfig } from "@/config/project-config";
import { type ProjectItem } from "@/types/project";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTopButton from "@/components/back-to-top-button";
import SwitchProjectButton from "@/components/projects/switch-project-button";
import Image from "next/image";

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
    <main id="main-content" className="min-h-screen pt-16">
      <div className="site-shell py-8 md:py-12">
        <SwitchProjectButton
          currentProjectId={resolvedParams.id}
          className="mb-10"
        />

        <header className="border-border grid gap-10 border-t pt-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-accent mb-8 text-xs font-semibold tracking-[0.16em] uppercase">
              {projectItem.designType} · Project 0{resolvedParams.id}
            </p>
            <h1 className="section-title font-heading max-w-[12ch] font-medium">
              {projectItem.title}
            </h1>
          </div>
          <div className="flex items-end lg:col-span-5">
            <details className="border-border w-full border-y py-4 md:hidden">
              <summary className="cursor-pointer text-sm font-semibold tracking-[0.13em] uppercase">
                Read project brief
              </summary>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                {projectItem.description}
              </p>
            </details>
            <p className="text-muted-foreground hidden max-w-[62ch] text-base leading-relaxed md:block md:text-lg">
              {projectItem.description}
            </p>
          </div>
        </header>

        <div className="bg-muted relative mt-12 aspect-[4/3] overflow-hidden md:aspect-[16/9]">
          <Image
            src={projectItem.previewImageUrl}
            alt={`${projectItem.title} project overview`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1600px) 100vw, 1600px"
          />
          <div className="bg-background/90 absolute bottom-0 left-0 px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase backdrop-blur-sm">
            Project overview
          </div>
        </div>

        <div className="border-border mt-20 mb-8 grid gap-4 border-t pt-5 md:grid-cols-2 md:items-end">
          <h2 className="font-heading text-4xl font-medium tracking-[-0.035em] md:text-5xl">
            Project study
          </h2>
          <p className="text-muted-foreground text-sm md:text-right">
            Drawings, details and spatial views
          </p>
        </div>

        <Gallery id={resolvedParams.id} />

        <SwitchProjectButton
          currentProjectId={resolvedParams.id}
          className="border-border mt-20 border-t pt-6"
        />
      </div>
      <BackToTopButton />
    </main>
  );
}
