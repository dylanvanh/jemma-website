"use client";

import { projectConfig } from "@/config/project-config";
import { cn, getIsScreenMobile } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import CustomCarousel from "./custom-carousel";
import MobileImageList from "./mobile-image-list";
import GridGallery from "./grid-gallery";
import { Button } from "../ui/button";
import SwitchProjectButton from "./switch-project-button";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

const Gallery: React.FC<GalleryProps> = ({ id, className }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isCarouselShowing, setIsCarouselShowing] = useState(true);

  const configIndex: number = Number(id) - 1;
  const imageUrls: string[] =
    projectConfig.projectItems[configIndex]!.imageListUrls;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cn("pb-14", className)}>
      {!getIsScreenMobile(screenWidth) && (
        <div className="mb-3 flex flex-row justify-center">
          <Button onClick={() => setIsCarouselShowing(!isCarouselShowing)}>
            Toggle Gallery View
          </Button>
        </div>
      )}
      {isCarouselShowing ? (
        !getIsScreenMobile(screenWidth) ? (
          <CustomCarousel imageUrls={imageUrls} imageQuality={50} />
        ) : (
          <div>
            <div className="flex flex-row items-center justify-center space-x-6">
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="backwards"
              />
              <SwitchProjectButton
                currentProjectIndex={configIndex}
                direction="forward"
              />
            </div>
            <MobileImageList imageUrls={imageUrls} imageQuality={30} />
          </div>
        )
      ) : (
        <GridGallery imageUrls={imageUrls} imageQuality={50} className="mb-4" />
      )}
      <div className="hidden flex-row items-center justify-center space-x-6 md:flex">
        <SwitchProjectButton
          currentProjectIndex={configIndex}
          direction="backwards"
        />
        <SwitchProjectButton
          currentProjectIndex={configIndex}
          direction="forward"
        />
      </div>
    </div>
  );
};

export default Gallery;
