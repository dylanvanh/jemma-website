"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";

type PortfolioItem = {
  title: string;
  interiorType: string;
  href: string;
  imageUrl: string;
};

interface ProjectCardProps extends React.ComponentPropsWithoutRef<"div"> {
  portfolioItem: PortfolioItem;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ portfolioItem, className, ...props }, ref) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(portfolioItem.href);
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
                <p>{portfolioItem.interiorType}</p>
              </div>
            </div>
          </div>

          <Image
            src={portfolioItem.imageUrl}
            alt="Interior"
            width={400}
            height={400}
            className="h-auto w-full rounded-t-lg object-cover"
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
            <p className="font-light">{portfolioItem.interiorType}</p>
          </div>
          <ArrowRightCircle className="h-12 w-12 hover:cursor-pointer" />
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
