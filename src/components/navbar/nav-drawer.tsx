"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { type NavItem } from "@/types/navbar";
import { ArrowUpRight, Menu } from "lucide-react";

export function NavDrawer({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="menu-trigger" aria-label="Open menu">
          <span>Menu</span>
          <Menu size={19} aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background flex w-full flex-col overflow-y-auto border-none px-6 py-8 sm:max-w-full"
      >
        <SheetTitle className="font-heading text-2xl">
          Jemma Wedgwood
        </SheetTitle>
        <SheetDescription className="text-muted-foreground text-sm">
          Interior designer · Cape Town
        </SheetDescription>
        <nav className="drawer-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
              <ArrowUpRight size={24} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <a
          href="mailto:jemmawedgwood01@gmail.com"
          className="text-link text-sm"
        >
          Send an email <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </SheetContent>
    </Sheet>
  );
}
