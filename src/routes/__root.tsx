import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Providers } from "@/components/providers/providers";
import { MainNav } from "@/components/navbar/main-nav";
import { navBarConfig } from "@/config/nav-config";
import { Toaster } from "@/components/ui/sonner";
import FooterSection from "@/sections/footer-section";
import NotFound from "@/components/not-found";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import cssUrl from "@/styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { name: "theme-color", content: "#ffffff" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:image", content: `${siteUrl}/thumbnail.png` },
    ],
    links: [
      { rel: "stylesheet", href: cssUrl },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="bg-foreground text-background fixed top-4 left-4 z-[70] -translate-y-24 px-4 py-3 text-sm font-semibold transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <MainNav navItems={navBarConfig.navItems} />
          <Outlet />
          <Toaster />
          <FooterSection />
        </Providers>
        <Scripts />
      </body>
    </html>
  );
}
