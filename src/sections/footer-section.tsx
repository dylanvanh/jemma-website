import { navBarConfig } from "@/config/nav-config";
import { Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container flex flex-col items-center justify-center py-5">
      <div className="mb-5 flex flex-row">
        {navBarConfig.navItems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="mx-2 text-slate-500 dark:text-slate-400 dark:hover:text-primary sm:mx-5"
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="justify-cente mb-5 flex flex-row ">
        <a
          href="mailto:jemmawedgwood01@gmail.com"
          className="mx-5 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-primary"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/jemma-wedgwood/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 text-slate-500 hover:text-blue-600 dark:text-ring dark:text-slate-400 dark:hover:text-primary"
        >
          <Linkedin size={28} />
        </a>
      </div>
      <div className="text-xs text-slate-500 dark:text-ring dark:text-slate-400 sm:text-sm">
        © {currentYear} Jemma Wedgwood. All rights reserved.
      </div>
    </footer>
  );
}
