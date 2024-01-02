"use client";

import { cn, getIsScreenMobile } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {getIsScreenMobile(screenWidth) && (
        <div className={cn("mb-5 p-5 ", className)}>
          {Array.from({ length: imageUrls.length }).map((_, index) => (
            <Image
              key={index}
              className="mb-5 px-5"
              src={imageUrls[index]!}
              alt="Project Gallery Image"
              width={2000}
              height={2000}
              quality={imageQuality}
              priority
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MobileImageList;
