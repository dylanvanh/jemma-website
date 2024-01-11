import { type MetadataRoute } from "next";
import { env } from "@/env.mjs";
import { projectConfig } from "@/config/project-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectItems: MetadataRoute.Sitemap = projectConfig.projectItems.map(
    ({ id }) => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/projects/${id}`,
    }),
  );

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/`,
    },
    ...projectItems,
  ];
}
