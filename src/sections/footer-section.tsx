import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

export default function FooterSection() {
  return (
    <footer className="site-shell site-footer">
      <Link href="/" className="footer-name">
        Jemma Wedgwood<span>Interior designer · Cape Town</span>
      </Link>
      <nav aria-label="Footer navigation">
        <Link href="/#experience">Experience</Link>
        <a
          href="https://www.linkedin.com/in/jemma-wedgwood/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <ThemeModeToggle />
      </nav>
      <p>© {new Date().getFullYear()} Jemma Wedgwood</p>
    </footer>
  );
}
