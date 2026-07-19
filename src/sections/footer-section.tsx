import { navBarConfig } from "@/config/nav-config";
import Link from "next/link";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-shell pt-16 pb-8 md:pt-24">
      <div className="border-border grid gap-12 border-t pt-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="font-heading text-5xl font-medium tracking-[-0.045em]"
          >
            Jemma Wedgwood
          </Link>
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
            Interior designer and photographer based in Cape Town, South Africa.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 md:col-span-4">
          {navBarConfig.navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
                className="border-border text-muted-foreground hover:text-foreground flex min-h-11 items-center border-b text-xs font-semibold tracking-[0.13em] uppercase transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-start md:col-span-3 md:items-end">
          <Link
            href="mailto:jemmawedgwood01@gmail.com"
            className="border-border hover:text-accent flex min-h-11 items-center gap-2 border-b text-sm transition-colors"
          >
            Email <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jemma-wedgwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:text-accent flex min-h-11 items-center gap-2 border-b text-sm transition-colors"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="border-border text-muted-foreground mt-14 flex flex-col gap-2 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Jemma Wedgwood. All rights reserved.</p>
        <p>Cape Town · 33.9249° S, 18.4241° E</p>
      </div>
    </footer>
  );
}
