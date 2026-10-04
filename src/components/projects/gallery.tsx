"use client";

import { projectConfig } from "@/config/project-config";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  LayoutGrid,
  Rows3,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

function ProjectImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="text-muted-foreground flex h-full min-h-40 items-center justify-center px-6 text-center text-sm">
        This image could not load. Please try again later.
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={85}
      className="object-contain"
      onError={() => setHasError(true)}
    />
  );
}

export default function Gallery({ id, className }: GalleryProps) {
  const [view, setView] = useState<"grid" | "single">("grid");
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);
  const project = projectConfig.projectItems.find((item) => item.id === id);

  if (!project || project.imageListUrls.length === 0) return null;

  const imageUrls = project.imageListUrls;
  const imageCount = imageUrls.length;
  const selectedUrl =
    selectedImage === null ? undefined : imageUrls[selectedImage];

  function changeSelectedImage(direction: number) {
    setSelectedImage((index) =>
      index === null ? null : (index + direction + imageCount) % imageCount,
    );
  }

  function openImage(index: number, button: HTMLButtonElement) {
    returnFocusRef.current = button;
    setSelectedImage(index);
  }

  return (
    <Dialog.Root
      open={selectedImage !== null}
      onOpenChange={(open) => {
        if (!open) setSelectedImage(null);
      }}
    >
      <div className={cn("min-w-0", className)}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {String(imageCount).padStart(2, "0")} images · Select to explore
          </p>
          <div
            className="border-border flex rounded-full border p-1"
            role="group"
            aria-label="Gallery layout"
          >
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs whitespace-nowrap transition-colors",
                view === "grid"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <LayoutGrid className="size-3.5" aria-hidden="true" />
              Grid view
            </button>
            <button
              type="button"
              onClick={() => setView("single")}
              aria-pressed={view === "single"}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs whitespace-nowrap transition-colors",
                view === "single"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Rows3 className="size-3.5" aria-hidden="true" />
              Single view
            </button>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 md:gap-y-10">
            {imageUrls.map((url, index) => (
              <button
                type="button"
                key={`${url}-${index}`}
                onClick={(event) => openImage(index, event.currentTarget)}
                className={cn(
                  "group min-w-0 cursor-zoom-in text-left",
                  index % 5 === 0 && "md:col-span-2",
                )}
                aria-label={`Open ${project.title} image ${index + 1}`}
              >
                <div
                  className={cn(
                    "bg-muted relative aspect-[4/3] overflow-hidden",
                    index % 5 === 0 && "md:aspect-[16/9]",
                  )}
                >
                  <ProjectImage
                    src={url}
                    alt={`${project.title} project study, image ${index + 1}`}
                    sizes={
                      index % 5 === 0
                        ? "(max-width: 1440px) 100vw, 1360px"
                        : "(max-width: 767px) 100vw, 50vw"
                    }
                  />
                  <span className="bg-background text-foreground group-hover:bg-foreground group-hover:text-background absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full transition-colors">
                    <Expand className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <span className="text-muted-foreground mt-3 flex justify-between gap-4 text-xs">
                  <span>Project study</span>
                  <span className="tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div
            role="region"
            aria-label={`${project.title} image carousel`}
            aria-roledescription="carousel"
          >
            <button
              type="button"
              className="bg-muted relative block aspect-[4/3] w-full cursor-zoom-in md:aspect-[16/9]"
              onClick={(event) => openImage(currentImage, event.currentTarget)}
              aria-label={`Open ${project.title} image ${currentImage + 1}`}
            >
              <ProjectImage
                key={imageUrls[currentImage]}
                src={imageUrls[currentImage]!}
                alt={`${project.title} project study, image ${currentImage + 1}`}
                sizes="(max-width: 1440px) 100vw, 1360px"
              />
              <span className="bg-background text-foreground absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full">
                <Expand className="size-4" aria-hidden="true" />
              </span>
            </button>
            <div className="border-border mt-5 flex items-center justify-between border-b pb-5">
              <button
                type="button"
                onClick={() =>
                  setCurrentImage(
                    (index) => (index - 1 + imageCount) % imageCount,
                  )
                }
                className="flex size-11 items-center justify-center rounded-full border"
                aria-label="Previous image"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <p className="text-sm tabular-nums" aria-live="polite">
                {String(currentImage + 1).padStart(2, "0")} /{" "}
                {String(imageCount).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={() =>
                  setCurrentImage((index) => (index + 1) % imageCount)
                }
                className="flex size-11 items-center justify-center rounded-full border"
                aria-label="Next image"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-foreground/75 fixed inset-0 z-[70]" />
        <Dialog.Content
          className="bg-background text-foreground fixed inset-3 z-[80] flex min-w-0 flex-col p-4 md:inset-8 md:p-6"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            returnFocusRef.current?.focus();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              changeSelectedImage(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <div className="mb-4 flex min-w-0 items-center justify-between gap-4">
            <Dialog.Title className="min-w-0 text-base font-medium [overflow-wrap:anywhere]">
              {project.title}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Project image viewer. Use the left and right arrow keys to change
              images. Press Escape to close.
            </Dialog.Description>
            <Dialog.Close
              className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-label="Close image viewer"
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <div className="bg-muted relative min-h-0 flex-1">
            {selectedUrl ? (
              <ProjectImage
                key={selectedUrl}
                src={selectedUrl}
                alt={`${project.title} project study, image ${(selectedImage ?? 0) + 1}`}
                sizes="100vw"
              />
            ) : null}
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => changeSelectedImage(-1)}
              className="border-border flex size-11 items-center justify-center rounded-full border"
              aria-label="Previous image"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <p className="text-sm tabular-nums" aria-live="polite">
              {String((selectedImage ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(imageCount).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => changeSelectedImage(1)}
              className="border-border flex size-11 items-center justify-center rounded-full border"
              aria-label="Next image"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
