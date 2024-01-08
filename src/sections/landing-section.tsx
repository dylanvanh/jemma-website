import { cn } from "@/lib/utils";
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
        <div className="flex flex-col items-center justify-center">
          <h1
            className={cn(
              "font-heading",
              "mb-5 py-4 text-3xl",
              "sm:text-4xl",
              "md:py-6 md:text-5xl",
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
      </section>
    </>
  );
}
