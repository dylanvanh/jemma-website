import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="site-shell flex min-h-dvh items-center pt-16"
    >
      <div className="border-border grid w-full gap-10 border-t py-12 md:grid-cols-12">
        <p className="text-accent text-xs font-semibold tabular-nums md:col-span-2">
          404
        </p>
        <div className="md:col-span-8">
          <h1 className="section-title font-heading font-medium">
            This page has moved out.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed">
            The address may be out of date. Return to the portfolio to keep
            exploring.
          </p>
          <Button asChild className="mt-8 h-12 rounded-none px-7">
            <Link href="/">Back to portfolio ↗</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
