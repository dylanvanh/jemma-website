import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <>
      <section className="container my-20 flex flex-col items-center justify-center md:flex-row">
        <div className="md:mr-20  md:px-10 lg:px-10">
          <Avatar
            className={cn(
              "mx-auto mb-10",
              "h-56 w-56",
              "md:h-56 md:w-56",
              "lg:h-96 lg:w-96",
            )}
          >
            <AvatarImage src="/jemma-profile.webp" />
            <AvatarFallback>Jemma</AvatarFallback>
          </Avatar>
        </div>
        <div className="sm:w-2/3 md:w-1/3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Bio</AccordionTrigger>
              <AccordionContent className="break-words">
                <p className="mb-4">
                  I have embarked on a journey in interior design, successfully
                  completing numerous projects with my unique designs.
                </p>
                <p className="mb-4">
                  My creative flair also finds expression in photography. As I
                  continue to explore these artistic domains, I am enthusiastic
                  about broadening my expertise and leaving a distinctive mark
                  in both interior design and photography.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Skills</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  <li>Interior Design</li>
                  <li>3D Models</li>
                  <li>Renders</li>
                  <li>Technical Drawings</li>
                  <li>Branding</li>
                  <li>Custom Furniture</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Location</AccordionTrigger>
              <AccordionContent>Cape Town, South Africa</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
