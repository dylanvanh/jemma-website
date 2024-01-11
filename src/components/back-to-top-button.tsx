"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.scrollY > 400) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 400) {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="duration-30 fixed bottom-5 right-5 rounded-full bg-primary p-2 text-primary-foreground transition hover:bg-primary/90 "
        aria-label="Back to top"
      >
        <ChevronUp className="h-8 w-8 text-white hover:cursor-pointer hover:text-gray-200 dark:text-gray-500" />
      </button>
    )
  );
};

export default BackToTopButton;
