"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Code, Github, Sparkles } from "lucide-react"

export function DocsIntroduction() {
  return (
    <section id="introduction" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Waveify is a comprehensive SaaS platform that enables developers to create stunning animated SVG components 
          for GitHub README files. Since GitHub markdown doesn't support custom HTML or CSS styling, Waveify bridges 
          this gap by providing dynamic SVG graphics delivered via URL.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Wave Animations</CardTitle>
              </div>
              <CardDescription>
                Generate beautiful animated wave patterns with various styles and effects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Sine Waves</Badge>
                <Badge variant="secondary">Square Waves</Badge>
                <Badge variant="secondary">Fluid Effects</Badge>
                <Badge variant="secondary">Glitch Styles</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Typing Animations</CardTitle>
              </div>
              <CardDescription>
                Create dynamic typewriter effects with modern styling options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Classic Typing</Badge>
                <Badge variant="secondary">Neon Effects</Badge>
                <Badge variant="secondary">Matrix Style</Badge>
                <Badge variant="secondary">Rainbow Text</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Custom Badges</CardTitle>
              </div>
              <CardDescription>
                Design unique badges with stunning visual effects and animations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">Modern Styles</Badge>
                <Badge variant="secondary">Gradient Effects</Badge>
                <Badge variant="secondary">Animated Borders</Badge>
                <Badge variant="secondary">Custom Colors</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-muted/50 rounded-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-3">Why Waveify?</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-2">✨ Zero Design Barrier</h4>
            <p>No design skills required. Create professional-quality animated banners in seconds.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">⚡ Performance Optimized</h4>
            <p>Lightweight SVG animations that don't impact page load times.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">🔗 URL-Based Implementation</h4>
            <p>Simply embed URLs in markdown - no complex setup required.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">🎨 Fully Customizable</h4>
            <p>Control colors, animations, sizes, and effects through URL parameters.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
