import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-auto mt-40 space-y-5 pb-20 text-center">
      <h1 className="mb-5 font-heading text-5xl">Not Found</h1>
      <p className="pb-8">Looks like this page doesn&apos;t exist.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
