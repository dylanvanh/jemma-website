"use client";

import Link from "next/link";
import { type NavItem } from "@/types/navbar";
import { NavDrawer } from "./nav-drawer";
import { ThemeModeToggle } from "../theme-mode-toggle";

interface MainNavProps {
  navItems: NavItem[];
}

export function MainNav({ navItems }: MainNavProps) {
  if (!navItems?.length) {
    return null;
  }

  return (
    <nav className="z-10 flex w-full justify-between px-12 py-5">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="font-bold">Portfolio</span>
      </Link>
      <div className={"hidden md:flex"}>
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <span
                className={
                  "flex rounded-md px-3 py-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground"
                }
              >
                <span>{item.title}</span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className={"hidden md:flex"}>
        <div className={"px-5"}>
          <ThemeModeToggle />
        </div>
      </div>
      <div className={"ml-auto hover:cursor-pointer md:hidden"}>
        <NavDrawer navItems={navItems} />
      </div>
    </nav>
  );
}
