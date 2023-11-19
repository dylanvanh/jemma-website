"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavItem } from "@/types/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { NavDrawer } from "./nav-drawer";

interface MainNavProps {
  navItems: NavItem[];
}

export function MainNav({ navItems }: MainNavProps) {
  const path = usePathname();

  if (!navItems?.length) {
    return null;
  }

  return (
    <nav className="flex justify-between px-12 py-5">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold">Jemma Wedgwood</span>
      </Link>
      <div className={"hidden md:flex"}>
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "group flex rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className={"hidden md:flex"}>
        <div className={"px-5"}>
          <ModeToggle />
        </div>
      </div>
      <div className={"hover:cursor-pointer md:hidden"}>
        <NavDrawer navItems={navItems} />
      </div>
    </nav>
  );
}