import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
export function LandingSection() {
  return (
    <>
      <section
        className={cn(
          "flex flex-col items-center px-4 py-10",
          "sm:px-6 sm:py-16",
          "md:-mt-16 md:h-[95vh] md:flex-row md:items-center md:justify-center md:px-10 md:py-20",
        )}
      >
        <div className={cn("md:px-10", "lg:px-10")}>
          <Avatar
            className={cn(
              "mb-10",
              "h-56 w-56",
              "md:h-56 md:w-56",
              "lg:h-96 lg:w-96",
            )}
          >
            <AvatarImage src="/jemma-profile.webp" />
            <AvatarFallback>Jemma</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center text-center">
          <h1
            className={cn(
              "mb-5 py-4 text-3xl",
              "sm:text-4xl",
              "md:py-6 md:text-5xl",
              "lg:py-10 lg:text-7xl",
            )}
          >
            <b>Jemma Wedgwood</b>
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
          <a href="#portfolio" className="mt-8 text-blue-800 sm:mt-10">
            {" "}
            <button className="text-2xl text-blue-800">
              <b>Learn More ↓</b>
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
