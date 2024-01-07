import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "../components/providers/providers";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <MainNav navItems={navBarConfig.navItems} />
          {children}
        </Providers>
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
