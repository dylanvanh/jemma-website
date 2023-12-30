"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface GridGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

const GridGallery: React.FC<GridGalleryProps> = ({
  imageUrls,
  imageQuality,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:px-6 lg:px-8 2xl:grid-cols-4",
        className,
      )}
    >
      {imageUrls.map((url, index) => (
        <div key={index} className="w-full">
          <Image
            src={url}
            alt={`Gallery Image ${index + 1}`}
            layout="responsive"
            width={100}
            height={100}
            quality={imageQuality}
          />
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
