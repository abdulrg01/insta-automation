import FooterSection from "./(website)/Footer";
import { Hero } from "./(website)/Hero";
import { Nav } from "./(website)/Nav";
import { PricingSection } from "./(website)/Pricing";

export default function page() {
  return (
    <main>
      <Nav />
      <Hero />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
