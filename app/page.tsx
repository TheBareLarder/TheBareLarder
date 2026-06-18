import { About } from "@/components/sections/About";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { FindUs } from "@/components/sections/FindUs";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { ThreeIngredients } from "@/components/sections/ThreeIngredients";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ThreeIngredients />
        <About />
        <Products />
        <FindUs />
      </main>
      <ContactFooter />
    </>
  );
}
