import { type NavBarConfig } from "@/types/navbar";
import { Wrench } from "lucide-react";

export const navBarConfig: NavBarConfig = {
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const navbDropDown: NavBarConfig = {
  navItems: [
    {
      title: "About",
      href: "/about",
      icon: Wrench,
    },
    {
      title: "Gallery",
      href: "/gallery",
      icon: Wrench,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Wrench,
    },
  ],
};