import { cn } from "@/lib/utils";
import React from "react";

interface SplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
}

const Splitter: React.FC<SplitterProps> = ({
  sectionTitle,
  className,
  ...props
}) => {
  return (
    <div className={cn("my-4", className)} {...props}>
      <hr className="border-t border-gray-300" />
      <h2 className="mt-3 px-2 text-lg font-semibold">{sectionTitle}</h2>
    </div>
  );
};

export default Splitter;
