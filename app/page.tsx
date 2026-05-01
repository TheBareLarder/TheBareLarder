import { About } from "@/components/sections/About";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { FindUs } from "@/components/sections/FindUs";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { WhyTallow } from "@/components/sections/WhyTallow";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyTallow />
        <About />
        <Products />
        <FindUs />
      </main>
      <ContactFooter />
    </>
  );
}
