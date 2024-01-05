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
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 py-5 md:mb-10">
          <h2 className="font-heading text-3xl tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {filterProjectItem?.title}
          </h2>
          <p className="max-w-[65%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {filterProjectItem?.description}
          </p>
        </div>
        <Gallery id={params.id} />
      </div>
    </>
  );
}
