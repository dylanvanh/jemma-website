import "@/styles/globals.css";

import { Outfit, Playfair_Display } from "next/font/google";
import { Providers } from "../components/providers/providers";
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

const titleDefault = "Jemma Wedgwood — Interior Designer";
const descriptionDefault =
  "Cape Town interior designer Jemma Wedgwood creates thoughtful residential, hospitality and workplace interiors.";

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
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
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <a
          href="#main-content"
          className="bg-foreground text-background fixed top-4 left-4 z-[70] -translate-y-24 px-4 py-3 text-sm font-semibold transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <MainNav navItems={navBarConfig.navItems} />
          {children}
        </Providers>
        <Toaster />
        <FooterSection />
      </body>
    </html>
  );
}
