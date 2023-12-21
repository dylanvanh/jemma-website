import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ArrowDownCircle } from "lucide-react";

export function LandingSection() {
  return (
    <>
      <section
        className={cn(
          "-mt-16 h-[95vh] md:flex md:items-center md:justify-center",
        )}
      >
        <div className={cn("lg:px-10", "md:px-10")}>
          <Avatar
            className={cn("h-36 w-36", "md:h-56 md:w-56", "lg:h-96 lg:w-96")}
          >
            <AvatarImage src="/jemma.webp" />
            <AvatarFallback>Jemma</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className={cn("md:text-3xl", "lg:text-5xl")}>
            <i>Hey There</i>
          </h2>
          <h1 className={cn("md:py- md:text-5xl", "lg:py-10 lg:text-7xl")}>
            I&apos;m <b>Jemma Wedgwood</b>
          </h1>
          <h2 className={cn("md:text-3xl", "lg:text-5xl")}>
            Interior Designer
          </h2>
        </div>
      </section>
    </>
  );
}
