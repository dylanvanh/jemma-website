export type PortfolioItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  designType: string;
  previewImageUrl: string;
  imageListUrls: string[];
};

export type PortfolioConfig = {
  portfolioItems: PortfolioItem[];
};
