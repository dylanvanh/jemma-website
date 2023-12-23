import { navBarConfig } from "@/config/nav-config";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center bg-gray-100 py-5">
      <div className="mb-5 flex flex-row">
        {navBarConfig.navItems.map((item, index) => {
          return (
            <a key={index} href={item.href} className="mx-5 text-gray-600">
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="justify-cente mb-5 flex flex-row ">
        <a
          href="mailto:jemmawedgwood01@gmail.com"
          className="mx-5 text-gray-600 hover:text-green-600"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/jemma-wedgwood/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 text-gray-600 hover:text-blue-600"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com/jemma982/"
          target="_blank"
          rel="noopener noreferrer:console.warn();"
          className="mx-5 text-gray-600 hover:text-pink-500"
        >
          <Instagram size={28} />
        </a>
      </div>
      <div className="text-xs text-gray-600 sm:text-sm">
        © {currentYear} Jemma Wedgwood. All rights reserved.
      </div>
    </footer>
  );
}
