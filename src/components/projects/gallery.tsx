"use client";

import { projectConfig } from "@/config/project-config";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CustomCarousel from "./custom-carousel";
import MobileImageList from "./mobile-image-list";
import GridGallery from "./grid-gallery";
import { LayoutGrid, Rows3 } from "lucide-react";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export default function Gallery({ id, className }: GalleryProps) {
  const [isCarouselShowing, setIsCarouselShowing] = useState(false);

  const configIndex: number = Number(id) - 1;
  const imageUrls: string[] =
    projectConfig.projectItems[configIndex]!.imageListUrls;

  return (
    <div className={cn(className)}>
      <div className="md:hidden">
        <MobileImageList imageUrls={imageUrls} imageQuality={30} />
      </div>
      <div className="hidden md:block">
        <div className="mb-6 flex justify-end">
          <div className="border-border flex items-center gap-1 border p-1">
            <button
              onClick={() => setIsCarouselShowing(true)}
              className={cn(
                "flex size-10 items-center justify-center transition-colors",
                isCarouselShowing
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-label="Carousel view"
            >
              <Rows3 className="size-4" />
            </button>
            <button
              onClick={() => setIsCarouselShowing(false)}
              className={cn(
                "flex size-10 items-center justify-center transition-colors",
                !isCarouselShowing
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-label="Grid view"
            >
              <LayoutGrid className="size-4" />
            </button>
          </div>
        </div>

        {isCarouselShowing ? (
          <CustomCarousel imageUrls={imageUrls} imageQuality={50} />
        ) : (
          <GridGallery imageUrls={imageUrls} imageQuality={50} />
        )}
      </div>
    </div>
  );
}
