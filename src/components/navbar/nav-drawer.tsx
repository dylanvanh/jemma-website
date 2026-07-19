"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { type NavItem } from "@/types/navbar";
import { Menu } from "lucide-react";
import { ThemeModeToggle } from "../theme-mode-toggle";

interface SideNavProps {
  navItems: NavItem[];
}

export function NavDrawer({ navItems }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="flex size-11 items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background flex w-full flex-col border-none p-0 sm:max-w-full"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="site-shell flex items-center py-4">
          <span className="font-heading text-2xl font-medium tracking-[-0.04em]">
            JW
          </span>
        </div>

        <nav className="site-shell flex flex-1 flex-col justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group border-border flex min-h-20 items-center justify-between border-b py-5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-heading group-hover:text-accent text-5xl font-medium tracking-[-0.04em] transition-colors">
                {item.title}
              </span>
              <span className="text-muted-foreground text-xs tabular-nums">
                0{index + 1}
              </span>
            </Link>
          ))}
        </nav>

        <div className="site-shell border-border flex items-center justify-between border-t py-6">
          <span className="text-muted-foreground text-sm">Theme</span>
          <ThemeModeToggle useSwitcherView={true} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
