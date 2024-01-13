import { cn } from "@/lib/utils";
import { projectConfig } from "@/config/project-config";
import { Button } from "../ui/button";
import Link from "next/link";

interface SwitchProjectButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentProjectIndex: number;
  direction: "forward" | "backwards";
}

const SwitchProjectButton: React.FC<SwitchProjectButtonProps> = ({
  currentProjectIndex,
  direction,
  className,
}) => {
  function doesProjectExist(): boolean {
    if (direction === "backwards") {
      return currentProjectIndex > 0;
    }
    return currentProjectIndex < projectConfig.projectItems.length - 1;
  }

  function generateHref(): string {
    const baseUrl = "/projects/";
    const projectPageId = currentProjectIndex + 1;

    if (direction === "backwards") {
      return baseUrl + (projectPageId - 1);
    }
    return baseUrl + (projectPageId + 1);
  }

  return (
    <div className={cn("flex flex-row items-center justify-evenly", className)}>
      {doesProjectExist() && (
        <Link href={generateHref()}>
          <Button className="w-32 sm:w-36">
            {direction === "forward" ? "Next Project" : "Previous Project"}
          </Button>
        </Link>
      )}
    </div>
  );
};

SwitchProjectButton.displayName = "SwitchProjectButton";
export default SwitchProjectButton;
