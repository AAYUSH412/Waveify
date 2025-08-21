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
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import CardFlip from "@/components/kokonutui/card-flip"
import { HighlightText } from "@/components/animate-ui/text/highlight"

const componentTypes = [
  {
    icon: Waves,
    title: "Wave Animations",
    description: "10+ wave types including sine, square, fluid, neon, and plasma effects",
    count: "10+",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Sine Waves", "Fluid Motion", "Neon Effects", "Plasma Waves"],
  },
  {
    icon: Type,
    title: "Typing Effects",
    description: "8+ typing styles from classic to matrix, neon, and rainbow animations",
    count: "8+",
    color: "text-green-500",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    gradient: "from-green-500 to-emerald-500",
    features: ["Classic Typing", "Matrix Style", "Neon Text", "Rainbow Effects"],
  },
  {
    icon: Terminal,
    title: "Terminal Themes",
    description: "6+ terminal simulations with modern, matrix, and cyberpunk styles",
    count: "6+",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    gradient: "from-purple-500 to-violet-500",
    features: ["Modern Terminal", "Matrix Theme", "Cyberpunk Style", "Retro Look"],
  },
  {
    icon: Loader,
    title: "Loading Animations",
    description: "20+ loader types including dots, spinners, bars, and DNA helix",
    count: "20+",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    gradient: "from-orange-500 to-red-500",
    features: ["Dot Loaders", "Spinners", "Progress Bars", "DNA Helix"],
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
              radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
              radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
          }}
        />
        {/* Dark mode circuit board */}
        <div
          className="absolute inset-0 dark:block hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(148, 163, 184, 0.06) 19px, rgba(148, 163, 184, 0.06) 20px, transparent 20px, transparent 39px, rgba(148, 163, 184, 0.06) 39px, rgba(148, 163, 184, 0.06) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(148, 163, 184, 0.06) 19px, rgba(148, 163, 184, 0.06) 20px, transparent 20px, transparent 39px, rgba(148, 163, 184, 0.06) 39px, rgba(148, 163, 184, 0.06) 40px),
              radial-gradient(circle at 20px 20px, rgba(148, 163, 184, 0.08) 2px, transparent 2px),
              radial-gradient(circle at 40px 40px, rgba(148, 163, 184, 0.08) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="glass-card border-primary/20 mb-6 px-4 py-2 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Production Ready Platform
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <HighlightText
              text="Stand Out"
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Comprehensive SVG component generator with 40+ animation types, real-time preview, and enterprise-grade
            infrastructure built for modern developers.
          </p>
        </motion.div>

        {/* Component Types Grid with Card Flip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {componentTypes.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <CardFlip
                title={component.title}
                subtitle={`${component.count} variants`}
                description={component.description}
                features={component.features}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard
              name="Zero Design Skills Required"
              className="col-span-1 md:col-span-2 lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20" />
              }
              Icon={Palette}
              description="Create professional animations without any design experience. Just customize and copy."
              href="#"
              cta="Get Started"
            />
            <BentoCard
              name="One-Click Integration"
              className="col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20" />
              }
              Icon={Code}
              description="Add to any README with a single line of markdown. Works everywhere GitHub does."
              href="#"
              cta="Try Now"
            />
            <BentoCard
              name="Lightning Fast Performance"
              className="col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20" />
              }
              Icon={Zap}
              description="Optimized SVG animations load instantly. Sub-200ms API response times worldwide."
              href="#"
              cta="Test Speed"
            />
            <BentoCard
              name="Advanced Customization"
              className="col-span-1 md:col-span-2 lg:col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20" />
              }
              Icon={Layers}
              description="Fine-tune colors, speeds, gradients, and animations with real-time preview."
              href="#"
              cta="Customize"
            />
            <BentoCard
              name="GitHub Native"
              className="col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20" />
              }
              Icon={Github}
              description="Built specifically for GitHub with perfect markdown compatibility and seamless integration."
              href="#"
              cta="Learn More"
            />
            <BentoCard
              name="Enterprise Ready"
              className="col-span-1"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-teal-500/20" />
              }
              Icon={Shield}
              description="SOC 2 compliant with enterprise-grade security and 99.9% uptime SLA."
              href="#"
              cta="Enterprise"
            />
          </BentoGrid>
        </motion.div>        
      </div>
    </section>
  )
}
