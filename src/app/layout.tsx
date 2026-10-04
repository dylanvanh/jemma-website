import "@/styles/globals.css";

import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "../components/providers/providers";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { type Metadata } from "next";
import FooterSection from "@/sections/footer-section";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const fontHeading = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  display: "swap",
});

const titleDefault = "Jemma Wedgwood — Interior Designer";
const descriptionDefault =
  "Cape Town interior designer Jemma Wedgwood creates thoughtful residential, hospitality and workplace interiors.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  title: {
    default: titleDefault,
    template: "%s - Project Gallery | Jemma Wedgwood",
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
  themeColor: "#ffffff",
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
          <Toaster />
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
