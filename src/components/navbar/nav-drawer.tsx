"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavItem } from "@/types/navbar";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface SideNavProps {
  navItems: NavItem[];
}

export function NavDrawer({ navItems }: SideNavProps) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} key="left">
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className={"flex px-24"}>Jemma Wedgwood</SheetTitle>
        </SheetHeader>
        <div className={"flex-col"}>
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={cn(
                    "my-5 p-5",
                    "group flex rounded-md hover:bg-accent hover:text-accent-foreground",
                    path.includes(item.href) ? "bg-accent" : "transparent",
                  )}
                >
                  <span className={"flex items-center justify-start"}>
                    {item.title}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
