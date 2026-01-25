"use client";

import { type NavItem } from "@/types/navbar";
import Link from "next/link";
import { ThemeModeToggle } from "../theme-mode-toggle";
import { NavDrawer } from "./nav-drawer";

interface MainNavProps {
  navItems: NavItem[];
}

export function MainNav({ navItems }: MainNavProps) {
  if (!navItems?.length) {
    return null;
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-md md:px-12">
      <Link
        href="/"
        className="font-heading text-xl font-medium tracking-tight"
      >
        JW
      </Link>

      <div className="hidden items-center gap-1 md:flex">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="group relative px-4 py-2">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground">
              {item.title}
            </span>
            <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <ThemeModeToggle />
      </div>

      <div className="md:hidden">
        <NavDrawer navItems={navItems} />
      </div>
    </nav>
  );
}
