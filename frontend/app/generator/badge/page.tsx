import { BadgeGenerator } from '@/components/generator-components/badge'
import { Metadata } from 'next'
import { GeneratorLayout } from '@/components/generator-components/shared/generator-layout'

export const metadata: Metadata = {
  title: 'Badge Generator - Waveify',
  description: 'Create custom animated badges for your GitHub README. Modern, gradient, glass, neon, and more styles with full customization.',
  keywords: 'badge, status, shield, github, readme, svg, generator, ci, build',
  openGraph: {
    title: 'Badge Generator - Waveify',
    description: 'Create custom animated badges for your GitHub README',
    type: 'website',
  }
}

export default function BadgeGeneratorPage() {
  return (
    <GeneratorLayout
        title="Badge Generator"
        description="Create custom animated badges for your GitHub README. Modern, gradient, glass, neon, and more styles with full customization."
    >
      <BadgeGenerator />
    </GeneratorLayout>
  )
}
