"use client";

import { projectConfig } from "@/config/project-config";
import { cn, getIsScreenMobile } from "@/lib/utils";
import { useEffect, useState } from "react";
import CustomCarousel from "./custom-carousel";
import MobileImageList from "./mobile-image-list";
import GridGallery from "./grid-gallery";
import { LayoutGrid, Rows3 } from "lucide-react";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export default function Gallery({ id, className }: GalleryProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isCarouselShowing, setIsCarouselShowing] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const configIndex: number = Number(id) - 1;
  const imageUrls: string[] =
    projectConfig.projectItems[configIndex]!.imageListUrls;

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return (
      <div
        className={cn(
          "flex min-h-[400px] flex-col items-center justify-center",
          className,
        )}
      >
        <div className="size-8 animate-spin rounded-full border-2 border-muted border-t-accent" />
      </div>
    );
  }

  const isMobile = getIsScreenMobile(screenWidth);

  return (
    <div className={cn("", className)}>
      {isMobile ? (
        <MobileImageList imageUrls={imageUrls} imageQuality={30} />
      ) : (
        <>
          <div className="mb-6 flex justify-end">
            <div className="flex items-center gap-2 rounded-full border border-border p-1">
              <button
                onClick={() => setIsCarouselShowing(true)}
                className={cn(
                  "flex size-9 items-center justify-center rounded-full transition-colors",
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
                  "flex size-9 items-center justify-center rounded-full transition-colors",
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
        </>
      )}
    </div>
  );
}
