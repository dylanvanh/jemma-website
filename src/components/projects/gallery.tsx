"use client";

import { projectConfig } from "@/config/project-config";
import { cn, getIsScreenMobile } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./custom-carousel";
import MobileImageList from "./mobile-image-list";
import GridGallery from "./grid-gallery";
import { Button } from "../ui/button";
import SwitchProjectButton, { doesProjectExist } from "./switch-project-button";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

const Gallery: React.FC<GalleryProps> = ({ id, className }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isCarouselShowing, setIsCarouselShowing] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const configIndex: number = Number(id) - 1;
  const imageUrls: string[] =
    projectConfig.projectItems[configIndex]!.imageListUrls;

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
    
    // Set initial screen width
    setScreenWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Use a minimal loading div if client hasn't mounted yet
  if (!isClient) {
    return (
      <div className={cn(
        "flex flex-col items-center justify-center pb-2 md:pb-14 min-h-[200px]",
        className,
      )}>
        <div className="text-sm text-muted-foreground">Loading gallery...</div>
      </div>
    );
  }

  const isForwardButtonVisible = doesProjectExist(configIndex, "forward");
  const isBackwardButtonVisible = doesProjectExist(configIndex, "backward");

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center pb-2 md:pb-14",
        className,
      )}
    >
      {!getIsScreenMobile(screenWidth) && (
        <>
          <div className="mb-4">
            <Button
              className="w-44"
              onClick={() => setIsCarouselShowing(!isCarouselShowing)}
            >
              Toggle Gallery View
            </Button>
          </div>
          {isCarouselShowing ? (
            <CustomCarousel imageUrls={imageUrls} imageQuality={50} />
          ) : (
            <GridGallery
              imageUrls={imageUrls}
              imageQuality={50}
              className="mb-8"
            />
          )}
          <div
            className={cn(
              "flex flex-col items-center justify-center md:flex-row",
              {
                "space-y-4 md:space-x-8 md:space-y-0":
                  isBackwardButtonVisible && isForwardButtonVisible,
              },
            )}
          >
            {isBackwardButtonVisible && (
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="backward"
              />
            )}
            {isForwardButtonVisible && (
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="forward"
              />
            )}
          </div>
        </>
      )}
      {getIsScreenMobile(screenWidth) && (
        <>
          <div
            className={cn(
              "flex flex-col items-center justify-center md:flex-row",
              {
                "space-y-4 md:space-x-8 md:space-y-0":
                  isBackwardButtonVisible && isForwardButtonVisible,
              },
            )}
          >
            {isBackwardButtonVisible && (
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="backward"
              />
            )}
            {isForwardButtonVisible && (
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="forward"
              />
            )}
          </div>
          <MobileImageList imageUrls={imageUrls} imageQuality={30} />
        </>
      )}
    </div>
  );
};

export default Gallery;
