import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { XCircle } from "lucide-react";
import { createImagePlaceholderShimmer, toBase64 } from "@/lib/utils";

interface GridGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

const GridGallery: React.FC<GridGalleryProps> = ({
  imageUrls,
  imageQuality,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (url: string) => {
    setSelectedImageUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="w-full cursor-pointer"
            onClick={() => openModal(url)}
          >
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
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={handleModalClick}
        >
          <div className="relative max-h-full max-w-2xl overflow-auto md:max-w-4xl lg:max-w-6xl">
            <Button
              onClick={closeModal}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white shadow-lg focus:outline-none"
            >
              <XCircle />
            </Button>
            <Image
              src={selectedImageUrl}
              alt="Enlarged Gallery Image"
              layout="responsive"
              width={100}
              height={100}
              quality={imageQuality}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                createImagePlaceholderShimmer(400, 400),
              )}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
