import Particles from "@/components/particles";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="animate-fade-in my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        HELLO I&apos;M
      </h1>
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        JEMMA
      </h1>
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
        WEDGWOOD
      </h1>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
    </div>
  );
}
