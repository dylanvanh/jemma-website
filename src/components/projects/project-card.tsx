"use client";

import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PortfolioItem = {
  id: string;
  title: string;
  designType: string;
  href: string;
  previewImageUrl: string;
};

interface ProjectCardProps extends React.ComponentPropsWithoutRef<"div"> {
  portfolioItem: PortfolioItem;
}

export default function ProjectCard({
  portfolioItem,
  className,
  ...props
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(portfolioItem.href + portfolioItem.id);
  };

  return (
    <div
      onClick={handleClick}
      className={cn("group cursor-pointer", className)}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={portfolioItem.previewImageUrl}
          alt={portfolioItem.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            createImagePlaceholderShimmer(400, 300),
          )}`}
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
      </div>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <h3 className="font-heading text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
            {portfolioItem.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {portfolioItem.designType}
          </p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}
