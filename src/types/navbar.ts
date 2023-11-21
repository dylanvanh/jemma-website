import { type LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export type NavBarConfig = {
  navItems: NavItem[];
};
