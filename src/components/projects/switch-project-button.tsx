import { cn } from "@/lib/utils";
import { projectConfig } from "@/config/project-config";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface SwitchProjectButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentProjectIndex: number;
  direction: "forward" | "backward";
}

export function doesProjectExist(
  currentProjectIndex: number,
  direction: "forward" | "backward",
): boolean {
  if (direction === "backward") {
    return currentProjectIndex > 0;
  }
  return currentProjectIndex < projectConfig.projectItems.length - 1;
}

const SwitchProjectButton: React.FC<SwitchProjectButtonProps> = ({
  currentProjectIndex,
  direction,
  className,
}) => {
  function generateHref(): string {
    const baseUrl = "/projects/";
    const projectPageId = currentProjectIndex + 1;

    if (direction === "backward") {
      return baseUrl + (projectPageId - 1);
    }
    return baseUrl + (projectPageId + 1);
  }

  return (
    <div className={cn("flex flex-row items-center justify-evenly", className)}>
      {doesProjectExist(currentProjectIndex, direction) && (
        <Link href={generateHref()}>
          <Button className="w-44">
            {direction === "forward" ? (
              <>
                Next Project
                <ArrowBigRight />
              </>
            ) : (
              <>
                <ArrowBigLeft />
                Previous Project
              </>
            )}
          </Button>
        </Link>
      )}
    </div>
  );
};

SwitchProjectButton.displayName = "SwitchProjectButton";
export default SwitchProjectButton;
