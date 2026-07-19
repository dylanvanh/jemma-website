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
  const [isImageLoading, setIsImageLoading] = useState(true);

  const openModal = (url: string) => {
    setSelectedImageUrl(url);
    setIsImageLoading(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
        {imageUrls.map((url, index) => (
          <button
            type="button"
            key={index}
            className={cn(
              "group bg-muted relative cursor-zoom-in overflow-hidden text-left",
              index % 5 === 0
                ? "col-span-2 aspect-[16/10] md:col-span-8"
                : index % 5 === 1
                  ? "aspect-[3/4] md:col-span-4"
                  : "aspect-[4/3] md:col-span-4",
            )}
            onClick={() => openModal(url)}
            aria-label={`Open project image ${index + 1}`}
          >
            <Image
              src={url}
              alt={`Project study view ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={imageQuality}
              sizes="(max-width: 768px) 50vw, 33vw"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                createImagePlaceholderShimmer(400, 300),
              )}`}
            />
            <span className="bg-background/90 absolute right-3 bottom-3 px-2 py-1 text-xs tabular-nums backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {isModalOpen ? (
        <div
          className="bg-background/95 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className={cn(
              "absolute top-6 right-6 z-10",
              "flex size-12 items-center justify-center",
              "border-border bg-background/80 text-muted-foreground border",
              "hover:border-accent hover:text-accent transition-colors",
            )}
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {isImageLoading ? (
              <div className="flex min-h-[200px] min-w-[300px] items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading image…</p>
              </div>
            ) : null}
            <Image
              src={selectedImageUrl}
              alt="Enlarged project study"
              width={1200}
              height={800}
              className={cn(
                "max-h-[90vh] w-auto object-contain",
                isImageLoading && "invisible absolute",
              )}
              quality={90}
              priority
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
