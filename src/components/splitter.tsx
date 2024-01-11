import { cn } from "@/lib/utils";
import React from "react";

interface SplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
}

const Splitter: React.FC<SplitterProps> = ({ sectionTitle, className, id }) => {
  return (
    <span
      id={id}
      className={cn("relative flex justify-center pb-6", className)}
    >
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      <span className="relative z-10 bg-white px-6 font-heading text-3xl leading-[1.1] dark:bg-background sm:text-3xl md:text-6xl">
        {sectionTitle}
      </span>
    </span>
  );
};

export default Splitter;
