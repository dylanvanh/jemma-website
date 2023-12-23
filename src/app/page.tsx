import FooterSection from "@/sections/footer-section";
import { LandingSection } from "@/sections/landing-section";
import { PortfolioSection } from "@/sections/portfolio-section";

export default function CombinedSections() {
  console.log(
    "Created by https://www.linkedin.com/in/dylan-van-heerden-a7b160139/",
  );
  return (
    <>
      <LandingSection />
      <FooterSection />
    </>
  );
}
