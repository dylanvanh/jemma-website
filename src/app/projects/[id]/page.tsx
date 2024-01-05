import Gallery from "@/components/projects/gallery";
import { projectConfig } from "@/config/project-config";
import { type ProjectItem } from "@/types/project";

export default function Page({ params }: { params: { id: string } }) {
  const filterProjectItem: ProjectItem | undefined =
    projectConfig.projectItems.find((item) => item.id === params.id);

  if (!filterProjectItem) {
    console.error("Invalid url param id: " + params.id);
    throw new Error("Invalid url param id: " + params.id);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 py-5 md:mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {filterProjectItem?.title}
          </h2>
          <p className="md:text-l mx-auto px-8 text-xs text-gray-500 dark:text-gray-400 md:max-w-[700px] lg:max-w-[900px] xl:text-xl 2xl:max-w-[1300px]">
            {filterProjectItem?.description}
          </p>
        </div>
        <Gallery id={params.id} />
      </div>
    </>
  );
}
