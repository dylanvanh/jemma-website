"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";

interface GridGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

export default function GridGallery({
  imageUrls,
  imageQuality,
  className,
}: GridGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (url: string) => {
    setSelectedImageUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted"
            onClick={() => openModal(url)}
          >
            <Image
              src={url}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={imageQuality}
              sizes="(max-width: 768px) 50vw, 33vw"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                createImagePlaceholderShimmer(400, 300),
              )}`}
            />
          </div>
        ))}
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className={cn(
              "absolute right-6 top-6 z-10",
              "flex size-12 items-center justify-center rounded-full",
              "border border-border bg-background/80 text-muted-foreground",
              "transition-colors hover:border-accent hover:text-accent",
            )}
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImageUrl}
              alt="Enlarged Gallery Image"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
              quality={90}
              priority
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
