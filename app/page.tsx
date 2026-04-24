import Hero from "@/components/Hero";
import AstronautScroll from "@/components/AstronautScroll";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Astronaut Scroll Feature (Core) */}
      <AstronautScroll />

      {/* Section 3: Products */}
      <ProductSection />

      {/* Section 4: Features / Why Nano Banana */}
      <FeaturesSection />

      {/* Section 5: Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
