"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { type NavItem } from "@/types/navbar";
import { Menu, X } from "lucide-react";
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
          className="flex size-10 items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-none bg-background p-0 sm:max-w-full"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-medium tracking-tight">
            JW
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex size-10 items-center justify-center"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group border-b border-border py-6"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-heading text-4xl font-medium tracking-tight transition-colors group-hover:text-accent">
                {item.title}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-border px-6 py-6">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeModeToggle useSwitcherView={true} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
