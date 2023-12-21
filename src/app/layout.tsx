import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "../components/providers/providers";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jemma Wedgwood",
  description: "Jemma Wedgwood Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <MainNav navItems={navBarConfig.navItems} />
          {children}
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}
