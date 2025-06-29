import { LoaderGenerator } from '@/components/generator-components/loader'
import { Metadata } from 'next'
import { GeneratorLayout } from '@/components/generator-components/shared/generator-layout'

export const metadata: Metadata = {
  title: 'Loader Generator - Waveify',
  description: 'Create animated loading spinners and indicators for your GitHub README. Choose from spinners, dots, bars, pulse, and wave animations.',
  keywords: 'loader, spinner, animation, loading, github, readme, svg, generator',
  openGraph: {
    title: 'Loader Generator - Waveify',
    description: 'Create animated loading spinners and indicators for your GitHub README',
    type: 'website',
  }
}

export default function LoaderGeneratorPage() {
  return (
    <GeneratorLayout
      title="Loader Generator"
      description="Create animated loading spinners and indicators for your GitHub README">
        <LoaderGenerator />
    </GeneratorLayout>
  )
}
