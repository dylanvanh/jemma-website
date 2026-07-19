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
    <nav className="border-border/70 bg-background/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="site-shell flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-3 py-3">
          <span className="font-heading text-2xl font-medium tracking-[-0.04em]">
            JW
          </span>
          <span className="text-muted-foreground group-hover:text-foreground hidden text-xs font-semibold tracking-[0.16em] uppercase transition-colors lg:inline">
            Interior design · Cape Town
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="group relative py-5">
              <span className="text-muted-foreground group-hover:text-foreground text-xs font-semibold tracking-[0.14em] uppercase transition-colors">
                {item.title}
              </span>
              <span className="bg-accent absolute inset-x-0 bottom-3 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <ThemeModeToggle />
        </div>

        <div className="md:hidden">
          <NavDrawer navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}
