import { type NavBarConfig } from "@/types/navbar";

export const navBarConfig: NavBarConfig = {
  navItems: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/",
      hash: "about",
    },
    {
      title: "Projects",
      to: "/",
      hash: "projects",
    },
    {
      title: "Experience",
      to: "/",
      hash: "experience",
    },
    {
      title: "Contact",
      to: "/",
      hash: "contact",
    },
  ],
};
