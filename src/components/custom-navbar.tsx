"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathName: string = usePathname();
  console.log("pathName", pathName);
  console.log(pathName.includes(navItems[0]!.href));

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link color={"foreground"} href={"/"}>
          <p className="font-bold text-inherit">Jemma Wedgwood</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navItems.map((item) => (
          <NavbarItem
            key={item.name + item.href}
            isActive={pathName.includes(item.href) ? true : false}
          >
            <Link color={"foreground"} href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem
            key={item.name + item.href}
            isActive={pathName.includes(item.href) ? true : false}
          >
            <Link
              color={"foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
