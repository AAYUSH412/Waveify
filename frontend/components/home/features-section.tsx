"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Palette,
  Code,
  Zap,
  Layers,
  Sparkles,
  Github,
  BarChart3,
  Shield,
  Globe,
  Terminal,
  Type,
  Loader,
  Waves,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const componentTypes = [
  {
    icon: Waves,
    title: "Wave Animations",
    description: "10+ wave types including sine, square, fluid, neon, and plasma effects",
    count: "10+",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    icon: Type,
    title: "Typing Effects",
    description: "8+ typing styles from classic to matrix, neon, and rainbow animations",
    count: "8+",
    color: "text-green-500",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    icon: Terminal,
    title: "Terminal Themes",
    description: "6+ terminal simulations with modern, matrix, and cyberpunk styles",
    count: "6+",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
  },
  {
    icon: Loader,
    title: "Loading Animations",
    description: "20+ loader types including dots, spinners, bars, and DNA helix",
    count: "20+",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
  },
]

const features = [
  {
    icon: Palette,
    title: "Zero Design Skills",
    description: "Create professional animations without any design experience. Just customize and copy.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "One-Click Integration",
    description: "Add to any README with a single line of markdown. Works everywhere GitHub does.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized SVG animations load instantly. Sub-200ms API response times.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Layers,
    title: "Advanced Customization",
    description: "Fine-tune colors, speeds, gradients, and animations with real-time preview.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Github,
    title: "GitHub Native",
    description: "Built specifically for GitHub with perfect markdown compatibility.",
    color: "from-gray-500 to-slate-500",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track component performance and engagement with detailed analytics.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "SOC 2 compliant with enterprise-grade security and 99.9% uptime SLA.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Fast loading worldwide with optimized content delivery network.",
    color: "from-green-500 to-emerald-500",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden section-gradient">
      {/* Dark mode gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent dark:via-slate-800/20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge
            variant="outline"
            className="glass-card border-primary/20 mb-4 dark:bg-slate-800/80 dark:border-slate-600/50"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Production Ready Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Everything You Need to <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive SVG component generator with 40+ animation types, real-time preview, and enterprise-grade
            infrastructure.
          </p>
        </motion.div>

        {/* Component Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {componentTypes.map((component, index) => (
            <Card
              key={component.title}
              className="glass-card hover-lift border-border/50 dark:bg-slate-800/80 dark:border-slate-700/50"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl ${component.bgColor} flex items-center justify-center mb-3`}>
                  <component.icon className={`w-6 h-6 ${component.color}`} />
                </div>
                <CardTitle className="text-lg flex items-center justify-between">
                  {component.title}
                  <Badge variant="secondary" className="text-xs dark:bg-slate-700/80">
                    {component.count}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="glass-card hover-lift h-full border-border/50 dark:bg-slate-800/80 dark:border-slate-700/50">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-xl bg-background dark:bg-slate-800 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="glass-card border-border/50 max-w-2xl mx-auto dark:bg-slate-800/80 dark:border-slate-700/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join 50,000+ developers using Waveify to enhance their GitHub presence with professional animated
                components.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-primary text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-blue-500/25 dark:hover:shadow-blue-500/40"
              >
                Explore All Features
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
