"use client";

import { type NavItem } from "@/types/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NavDrawer } from "./nav-drawer";

export function MainNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="site-shell site-header">
      <nav className="desktop-nav nav-left" aria-label="Main navigation">
        {navItems.slice(0, 2).map((item) => (
          <Link href={item.href} key={item.href}>
            <span aria-hidden="true">·</span>
            {item.title}
          </Link>
        ))}
      </nav>
      <Link href="/" className="site-brand" aria-label="Jemma Wedgwood home">
        <span className="brand-monogram">
          jw<span>.</span>
        </span>
        <span className="brand-name">Jemma Wedgwood</span>
      </Link>
      <nav className="desktop-nav nav-right" aria-label="Work and contact">
        <Link href="/#projects">
          <span aria-hidden="true">·</span>Projects
        </Link>
        <Link href="/#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </nav>
      <div className="mobile-nav">
        <NavDrawer navItems={navItems} />
      </div>
    </header>
  );
}
