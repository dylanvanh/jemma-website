import { navBarConfig } from "@/config/nav-config";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link
            href="/"
            className="font-heading text-xl font-medium tracking-tight"
          >
            JW
          </Link>
          <nav className="flex flex-wrap justify-center gap-6">
            {navBarConfig.navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="mailto:jemmawedgwood01@gmail.com"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jemma-wedgwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Jemma Wedgwood. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
