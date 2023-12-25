export type PortfolioItem = {
  title: string;
  href: string;
  designType: string;
  imageUrl: string;
  markdownFileName: string;
};

export type PortfolioConfig = {
  portfolioItems: PortfolioItem[];
};
