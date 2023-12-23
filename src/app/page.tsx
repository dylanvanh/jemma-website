import FooterSection from "@/sections/footer";
import { LandingSection } from "@/sections/landing";
import { navBarConfig } from "@/config/nav-config";

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
