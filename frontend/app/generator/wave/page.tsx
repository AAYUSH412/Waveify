

import { WaveGenerator } from '@/components/generator-components/wave'
import { GeneratorLayout } from '@/components/generator-components/shared/generator-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wave Generator - Waveify',
  description: 'Create stunning animated wave SVGs for your GitHub README. Customize colors, height, speed, and more.',
  keywords: 'wave, animation, svg, github, readme, generator',
  openGraph: {
    title: 'Wave Generator - Waveify',
    description: 'Create stunning animated wave SVGs for your GitHub README',
    type: 'website',
  }
}

export default function WaveGeneratorPage() {
  return (
    <GeneratorLayout 
      title="Wave Generator" 
      description="Create stunning animated wave SVGs for your GitHub README"
    >
      <WaveGenerator />
    </GeneratorLayout>
  )
}
