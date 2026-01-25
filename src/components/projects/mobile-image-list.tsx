"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn, createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";

interface MobileImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

export default function MobileImageList({
  imageUrls,
  imageQuality,
  className,
}: MobileImageListProps) {
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
    <>
      <div className={cn("space-y-4", className)}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-muted"
            onClick={() => openModal(url)}
          >
            <Image
              src={url}
              alt={`Project Gallery Image ${index + 1}`}
              fill
              className="object-cover"
              quality={imageQuality}
              sizes="100vw"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                createImagePlaceholderShimmer(400, 300),
              )}`}
              priority={index < 3}
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
              "absolute right-4 top-4 z-10",
              "flex size-10 items-center justify-center rounded-full",
              "border border-border bg-background/80 text-muted-foreground",
            )}
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImageUrl}
              alt="Enlarged Gallery Image"
              width={800}
              height={600}
              className="max-h-[90vh] w-auto object-contain"
              quality={80}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
