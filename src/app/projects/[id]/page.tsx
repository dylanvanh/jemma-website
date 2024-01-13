import dynamic from "next/dynamic";

import { projectConfig } from "@/config/project-config";
import { type ProjectItem } from "@/types/project";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTopButton from "@/components/back-to-top-button";

const Gallery = dynamic(() => import("@/components/projects/gallery"), {
  ssr: false,
});

interface PageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const projectItem = getProjectItemFromParams(params.id);

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

export default function Page({ params }: PageProps) {
  const projectItem: ProjectItem = getProjectItemFromParams(params.id);

  return (
    <>
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 py-5 md:mb-10">
          <h2 className="mb-2 font-heading text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {projectItem?.title}
          </h2>
          <p className="md:text-l mx-auto px-8 text-xs text-gray-500 dark:text-gray-400 md:max-w-[70%] lg:max-w-[80%] xl:text-xl 2xl:max-w-[85%]">
            {projectItem?.description}
          </p>
        </div>
        <Gallery id={params.id} />
      </div>
      <BackToTopButton />
    </>
  );
}
