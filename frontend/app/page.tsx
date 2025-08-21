import React, { Suspense } from "react"
import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { Footer } from "@/components/home/footer"
import { LazySection } from "@/lib/lazy-loading"
import { ScreenReaderOnly } from "@/components/ui/accessibility"

// Lazy load heavy sections for better performance
const LazyFeaturesSection = React.lazy(() => 
  import("@/components/home/features-section").then(module => ({ default: module.FeaturesSection }))
)
const LazyReadmePreviewSection = React.lazy(() => 
  import("@/components/home/readme-preview-section").then(module => ({ default: module.ReadmePreviewSection }))
)
const LazyTestimonialsSection = React.lazy(() => 
  import("@/components/home/testimonials-section").then(module => ({ default: module.TestimonialsSection }))
)
const LazyFaqSection = React.lazy(() => 
  import("@/components/home/faq-section").then(module => ({ default: module.FaqSection }))
)

// Loading component for sections
const SectionSkeleton = () => (
  <div className="w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse rounded-lg">
    <div className="flex items-center justify-center h-full">
      <div className="text-muted-foreground">Loading section...</div>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScreenReaderOnly>
        <h1>Waveify - Create Stunning GitHub Components</h1>
        <p>Professional animated SVG components for GitHub READMEs. No design skills needed.</p>
      </ScreenReaderOnly>
      
      <Header />
      
      <main role="main">
        {/* Hero section loads immediately for LCP optimization */}
        <HeroSection />
        
        {/* Features section - lazy loaded but prioritized */}
        <LazySection
          threshold={0.1}
          rootMargin="200px"
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <LazyFeaturesSection />
          </Suspense>
        </LazySection>
        
        {/* README Preview section - lazy loaded */}
        <LazySection
          threshold={0.1}
          rootMargin="150px"
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <LazyReadmePreviewSection />
          </Suspense>
        </LazySection>
        
        {/* Testimonials section - lazy loaded */}
        <LazySection
          threshold={0.1}
          rootMargin="100px"
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <LazyTestimonialsSection />
          </Suspense>
        </LazySection>
        
        {/* FAQ section - lazy loaded */}
        <LazySection
          threshold={0.1}
          rootMargin="100px"
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <LazyFaqSection />
          </Suspense>
        </LazySection>
      </main>
      
      <Footer />
    </div>
  )
}
