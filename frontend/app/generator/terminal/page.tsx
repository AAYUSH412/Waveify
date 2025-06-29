import { TerminalGenerator } from '@/components/generator-components/terminal'
import { Metadata } from 'next'
import { GeneratorLayout } from '@/components/generator-components/shared/generator-layout'

export const metadata: Metadata = {
  title: 'Terminal Generator - Waveify',
  description: 'Generate animated terminal command demonstrations for your GitHub README. Show realistic command execution with multiple themes and customizable styling.',
  keywords: 'terminal, command line, animation, github, readme, svg, generator',
  openGraph: {
    title: 'Terminal Generator - Waveify',
    description: 'Generate animated terminal command demonstrations for your GitHub README',
    type: 'website',
  }
}

export default function TerminalGeneratorPage() {
  return (
    <GeneratorLayout
      title="Terminal Generator"
      description="Generate animated terminal command demonstrations for your GitHub README"
    >
      <TerminalGenerator />
    </GeneratorLayout>
  )
}
