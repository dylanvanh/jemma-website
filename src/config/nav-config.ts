import { type NavBarConfig } from "@/types/navbar";
import { Wrench } from "lucide-react";

export const navBarConfig: NavBarConfig = {
  navItems: [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
};

export const navbDropDown: NavBarConfig = {
  navItems: [
    {
      title: "About",
      href: "#about",
      icon: Wrench,
    },
    {
      title: "Projects",
      href: "/#projects",
      icon: Wrench,
    },
    {
      title: "Experience",
      href: "/#experience",
      icon: Wrench,
    },
    {
      title: "Contact",
      href: "/#contact",
      icon: Wrench,
    },
  ],
};
