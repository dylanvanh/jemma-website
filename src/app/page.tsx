import CustomNavbar from "@/components/custom-navbar";
import { Navbar } from "@nextui-org/react";
import React from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div>
      <CustomNavbar />
    </div>
  );
}
