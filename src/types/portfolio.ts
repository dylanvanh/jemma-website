export type PortfolioItem = {
  title: string;
  href: string;
  interiorType: string;
  imageUrl: string;
  markdownFileName: string;
};

export type PortfolioConfig = {
  portfolioItems: PortfolioItem[];
};
