import dynamic from "next/dynamic";

import { projectConfig } from "@/config/project-config";
import { type ProjectItem } from "@/types/project";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTopButton from "@/components/back-to-top-button";
import SwitchProjectButton from "@/components/projects/switch-project-button";

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
    <main className="min-h-screen pt-20">
      <div className="px-6 py-12 md:px-12 md:py-16 lg:px-24">
        <SwitchProjectButton currentProjectId={resolvedParams.id} className="mb-8" />

        <div className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {projectItem.designType}
          </p>
          <h1 className="mb-6 font-heading text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            {projectItem.title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {projectItem.description}
          </p>
        </div>

        <Gallery id={resolvedParams.id} />

        <SwitchProjectButton currentProjectId={resolvedParams.id} className="mt-16" />
      </div>
      <BackToTopButton />
    </main>
  );
}
