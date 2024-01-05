export type ProjectItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  designType: string;
  previewImageUrl: string;
  imageListUrls: string[];
};

export type ProjectConfig = {
  projectItems: ProjectItem[];
};
