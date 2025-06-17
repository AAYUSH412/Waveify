"use client"

import { WaveGenerator } from '@/components/generator-components/wave'
import { ThemeToggle } from '@/components/theme-toggle'

export default function GeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Waveify
              </span>
            </h1>
            <span className="text-sm text-muted-foreground">Wave Generator</span>
          </div>
          
          <nav className="flex items-center gap-4">
            <a 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="/docs" 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Docs
            </a>
            <a 
              href="https://github.com/your-username/waveify" 
              className="text-sm font-medium hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <WaveGenerator />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          Made with ❤️ for the developer community • 
          <a 
            href="https://github.com/your-username/waveify" 
            className="hover:text-primary transition-colors ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
