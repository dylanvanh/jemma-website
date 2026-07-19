import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PortfolioItem = {
  id: string;
  title: string;
  designType: string;
  href: string;
  previewImageUrl: string;
};

interface ProjectCardProps {
  portfolioItem: PortfolioItem;
  index: number;
  className?: string;
}

export default function ProjectCard({
  portfolioItem,
  index,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={portfolioItem.href + portfolioItem.id}
      className={cn("group block focus-visible:outline-none", className)}
    >
      <article>
        <div className="bg-muted relative aspect-[4/3] overflow-hidden">
          <Image
            src={portfolioItem.previewImageUrl}
            alt={portfolioItem.title}
            fill
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              createImagePlaceholderShimmer(400, 300),
            )}`}
          />
          <div className="bg-foreground/0 group-hover:bg-foreground/10 absolute inset-0 transition-colors duration-300" />
          <span className="bg-background/90 absolute top-4 left-4 px-3 py-2 text-xs font-semibold tabular-nums backdrop-blur-sm">
            0{index + 1}
          </span>
        </div>

        <div className="border-border mt-5 flex items-start justify-between gap-6 border-t pt-4">
          <div>
            <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.14em] uppercase">
              {portfolioItem.designType}
            </p>
            <h3 className="font-heading group-hover:text-accent text-3xl font-medium tracking-[-0.035em] transition-colors md:text-4xl">
              {portfolioItem.title}
            </h3>
          </div>
          <div className="border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground flex size-11 shrink-0 items-center justify-center border transition-all duration-300">
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
