import "@/styles/globals.css";

import { Outfit, Playfair_Display } from "next/font/google";
import { Providers } from "../components/providers/providers";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { type Metadata } from "next";
import FooterSection from "@/sections/footer-section";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
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
