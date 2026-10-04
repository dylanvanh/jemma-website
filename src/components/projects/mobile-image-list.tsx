import { getImageSources } from "@/lib/images";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
}

export default function MobileImageList({
  imageUrls,
  className,
}: MobileImageListProps) {
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
    <>
      <div className={cn("space-y-4", className)}>
        {imageUrls.map((url, index) => (
          <button
            type="button"
            key={index}
            className="bg-muted relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden text-left"
            onClick={() => openModal(url)}
            aria-label={`Open project image ${index + 1}`}
          >
            <img
              src={url}
              srcSet={getImageSources(url)}
              alt={`Project study view ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="100vw"
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
              "absolute top-4 right-4 z-10",
              "flex size-11 items-center justify-center",
              "border-border bg-background/80 text-muted-foreground border",
            )}
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {isImageLoading ? (
              <div className="flex min-h-[200px] min-w-[250px] items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading image…</p>
              </div>
            ) : null}
            <img
              src={selectedImageUrl}
              srcSet={getImageSources(selectedImageUrl)}
              alt="Enlarged project study"
              width={800}
              height={600}
              decoding="async"
              loading="eager"
              className={cn(
                "max-h-[90vh] w-auto object-contain",
                isImageLoading && "invisible absolute",
              )}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
