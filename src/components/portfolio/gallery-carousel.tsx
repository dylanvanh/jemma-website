"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { portfolioConfig } from "@/config/portfolio-config";
import { getIsScreenMobile } from "@/lib/utils";

interface ProjectCarouselProps {
  id: string;
}

export default function GalleryCarousel({ id }: ProjectCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const configIndex: number = Number(id) - 1;
  const imageUrls: string[] =
    portfolioConfig.portfolioItems[configIndex]!.imageListUrls;
  const imageUrlListLength: number = imageUrls.length;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mb-5 px-8 sm:px-0">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation={getIsScreenMobile(screenWidth) ? "vertical" : "horizontal"}
        setApi={setApi}
        className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl"
      >
        <CarouselContent>
          {Array.from({ length: imageUrlListLength }).map((_, index) => (
            <CarouselItem key={index}>
              <Image
                onClick={() => console.log(index)}
                src={imageUrls[index]!}
                alt="Project Gallery Image"
                width={2000}
                height={2000}
                quality={50}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {!getIsScreenMobile(screenWidth) && <CarouselPrevious />}
        {!getIsScreenMobile(screenWidth) && <CarouselNext />}
      </Carousel>
      {!getIsScreenMobile && (
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      )}
    </div>
  );
}
