"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";

interface CustomCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  imageUrls,
  imageQuality,
  className,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
    <div className={cn("mb-5 px-8 sm:px-0", className)}>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation={"horizontal"}
        setApi={setApi}
        className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl"
      >
        <CarouselContent>
          {Array.from({ length: imageUrls.length }).map((_, index) => (
            <CarouselItem key={index}>
              <Image
                onClick={() => console.log(index)}
                src={imageUrls[index]!}
                alt="Project Gallery Image"
                width={2000}
                height={2000}
                quality={imageQuality}
                priority
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  createImagePlaceholderShimmer(400, 400),
                )}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default CustomCarousel;
