import { type NavItem } from "@/types/navbar";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { NavDrawer } from "./nav-drawer";

export function MainNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="site-shell site-header">
      <nav className="desktop-nav nav-left" aria-label="Main navigation">
        {navItems.slice(0, 2).map((item) => (
          <Link to={item.to} hash={item.hash} key={item.hash ?? item.to}>
            <span aria-hidden="true">·</span>
            {item.title}
          </Link>
        ))}
      </nav>
      <Link to="/" className="site-brand" aria-label="Jemma Wedgwood home">
        <span className="brand-monogram">
          jw<span>.</span>
        </span>
        <span className="brand-name">Jemma Wedgwood</span>
      </Link>
      <nav className="desktop-nav nav-right" aria-label="Work and contact">
        <Link to="/" hash="projects">
          <span aria-hidden="true">·</span>Projects
        </Link>
        <Link to="/" hash="contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </nav>
      <div className="mobile-nav">
        <NavDrawer navItems={navItems} />
      </div>
    </header>
  );
}
