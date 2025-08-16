import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ComponentsSection } from "@/components/home/components-section"
import { ReadmePreviewSection } from "@/components/home/readme-preview-section"
import { TemplatesSection } from "@/components/home/templates-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FaqSection } from "@/components/home/faq-section"
import { Footer } from "@/components/home/footer"
import { GridBackground } from "@/components/home/grid-background"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComponentsSection />
        <ReadmePreviewSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
