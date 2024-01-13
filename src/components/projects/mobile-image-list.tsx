import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { XCircle } from "lucide-react";
import {
  cn,
  createImagePlaceholderShimmer,
  getIsScreenMobile,
  toBase64,
} from "@/lib/utils";

interface MobileImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrls: string[];
  imageQuality: number;
}

const MobileImageList: React.FC<MobileImageListProps> = ({
  imageUrls,
  imageQuality,
  className,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <>
      {getIsScreenMobile(screenWidth) && (
        <div className={cn("p-5", className)}>
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="mb-5 cursor-pointer px-5"
              onClick={() => openModal(url)}
            >
              <Image
                src={url}
                alt={`Project Gallery Image ${index + 1}`}
                width={800}
                height={800}
                quality={imageQuality}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  createImagePlaceholderShimmer(400, 400),
                )}`}
                priority
              />
            </div>
          ))}
        </div>
      )}
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
              width={800}
              height={800}
              quality={imageQuality}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileImageList;
