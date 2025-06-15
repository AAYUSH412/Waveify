import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ReadmePreviewSection } from "@/components/home/readme-preview-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FaqSection } from "@/components/home/faq-section"
import { Footer } from "@/components/home/footer"
import { FloatingElements } from "@/components/home/floating-elements"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ReadmePreviewSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
