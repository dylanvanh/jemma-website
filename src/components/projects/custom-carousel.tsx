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
import { useEffect, useState } from "react";

interface CustomCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

export default function CustomCarousel({
  imageUrls,
  imageQuality,
  className,
}: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn("relative", className)}>
      <Carousel
        opts={{ align: "center", loop: true }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {imageUrls.map((url, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
                <Image
                  src={url}
                  alt={`Project Gallery Image ${index + 1}`}
                  fill
                  className="object-contain"
                  quality={imageQuality}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    createImagePlaceholderShimmer(1200, 800),
                  )}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </p>
    </div>
  );
}
