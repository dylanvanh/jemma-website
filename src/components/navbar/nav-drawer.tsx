"use client";
import Link from "next/link";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/types/navbar";
import { Menu } from "lucide-react";
import { ThemeModeToggle } from "../theme-mode-toggle";

interface SideNavProps {
  navItems: NavItem[];
}

export function NavDrawer({ navItems }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} key="left">
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <div>
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={cn(
                    "items-center justify-center",
                    "my-5 p-5",
                    "group flex rounded-md hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <span>{item.title}</span>
                </span>
              </Link>
            );
          })}
          <div className="ml-5 flex items-center justify-center space-x-4">
            <ThemeModeToggle useSwitcherView={true} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
