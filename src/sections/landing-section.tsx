import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
export function LandingSection() {
  return (
    <>
      <section
        id="landing"
        className={cn(
          "container flex flex-col items-center justify-center",
          "min-h-screen",
        )}
      >
        <div className="container mb-40 flex flex-col items-center justify-center">
          <h1
            className={cn(
              "-mt-32",
              "font-heading",
              "mb-5 py-4 text-5xl",
              "md:py-6 md:text-6xl",
              "lg:py-10 lg:text-7xl",
            )}
          >
            Jemma Wedgwood
          </h1>
          <h2
            className={cn(
              "mb-8",
              "text-xl",
              "sm:text-2xl",
              "md:text-3xl",
              "lg:text-5xl",
            )}
          >
            <i>Interior Designer</i>
          </h2>
        </div>
        <div className="animate-bounce">
          <Link
            href="#about"
            title="Go to About Section"
            aria-label="Go to About Section"
          >
            <ChevronDown className="h-12 w-12 text-gray-600 hover:cursor-pointer hover:text-gray-200 dark:text-gray-400" />
          </Link>
        </div>
      </section>
    </>
  );
}
