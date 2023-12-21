import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="footer" className="flex-col  bg-gray-100 p-6">
      <h1
        className={cn(
          "mb-5 mt-10 py-4 text-3xl font-medium",
          "sm:text-4xl",
          "md:py-10 md:text-5xl",
        )}
      >
        I would love to hear from you!
      </h1>
      <h2 className="mb-20 text-xl">jemmaofficial01@gmail.com</h2>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/jemma-wedgwood/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/jemma982/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="mailto:jemmawedgwood01@gmail.com"
          className="hover:text-green-600"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jemma Wedgwood. All rights reserved.
      </div>
    </footer>
  );
}
