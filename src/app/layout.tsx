import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "../components/providers/providers";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { type Metadata } from "next";
import FooterSection from "@/sections/footer-section";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

const titleDefault = "Jemma Wedgwood - Portfolio Website";
const descriptionDefault = "Jemma Wedgwood Portfolio & Resume";

export const metadata: Metadata = {
  title: {
    default: titleDefault,
    template: "%s - Project Gallery | Jemma Wedwood",
  },
  description: descriptionDefault,
  twitter: {
    card: "summary_large_image",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: titleDefault,
    description: descriptionDefault,
    images: [
      {
        url: "/thumbnail.png",
      },
    ],
  },
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
        <FooterSection />
      </body>
    </html>
  );
}
