"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";
import { ArrowRight, ArrowRightCircle, ArrowUpRight } from "lucide-react";

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

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ portfolioItem, className, ...props }, ref) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(portfolioItem.href + "/" + portfolioItem.id);
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn("", className)}
        {...props}
      >
        <div className="group relative hover:cursor-pointer">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 
            transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-white">
                <p className="text-lg font-bold">{portfolioItem.title}</p>
                <p>{portfolioItem.designType}</p>
              </div>
            </div>
          </div>

          <Image
            src={portfolioItem.previewImageUrl}
            alt="Interior"
            width={400}
            height={400}
            className="h-auto w-full  object-cover"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              createImagePlaceholderShimmer(400, 400),
            )}`}
          />

          <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <div className="rounded-full bg-white p-2">
              <ArrowUpRight />
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-row justify-between">
          <div>
            <h4 className="text-xl font-bold">{portfolioItem.title}</h4>
            <p className="font-light">{portfolioItem.designType}</p>
          </div>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
