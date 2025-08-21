"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Sparkles, Users, Star, Github, Code, Zap, Rocket, Heart } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { RollingText } from "@/components/animate-ui/text/rolling"
import ParticleButton from "@/components/kokonutui/particle-button"
import { HighlightText } from "@/components/animate-ui/text/highlight"
import { 
  useReducedMotion, 
  createAccessibleVariants, 
  focusRing,
  touchTarget,
  readableText 
} from "@/lib/accessibility"
import { LazySection } from "@/lib/lazy-loading"
import { usePerformanceTimer } from "@/lib/performance"

// Lazy load heavy components
const LazyMeteors = React.lazy(() => import("@/components/magicui/meteors").then(module => ({ default: module.Meteors })));

const stats = [
  { icon: Users, value: "50K+", label: "Developers", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/30" },
  { icon: Star, value: "4.9", label: "Rating", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
  { icon: Github, value: "25K+", label: "Repositories", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/30" },
  { icon: Code, value: "40+", label: "Components", color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-950/30" },
]

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Generate in seconds" },
  { icon: Rocket, title: "No Coding Required", desc: "Visual editor only" },
  { icon: Heart, title: "Open Source", desc: "Always free to use" },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const endPerformanceTimer = usePerformanceTimer('HeroSection')
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0])

  // Clean up performance timer on unmount
  React.useEffect(() => {
    return endPerformanceTimer;
  }, [endPerformanceTimer]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-16"
    >
      {/* Enhanced Background with Professional Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950" />
        
        {/* Top Fade Grid Pattern */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(99 102 241 / 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(99 102 241 / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #000 50%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #000 50%, transparent 100%)",
          }}
        />

        {/* Dark mode enhanced grid */}
        <div
          className="absolute inset-0 z-10 dark:block hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(139 92 246 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(139 92 246 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #000 50%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 0%, #000 50%, transparent 100%)",
          }}
        />

        {/* Subtle Orb Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 dark:from-indigo-600/30 dark:via-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-cyan-400/20 dark:from-violet-600/30 dark:via-blue-600/30 dark:to-cyan-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Meteors Animation - Lazy loaded for performance */}
      <LazySection
        fallback={<div className="absolute inset-0 z-20" />}
        threshold={0.1}
        rootMargin="200px"
      >
        <React.Suspense fallback={null}>
          <LazyMeteors number={prefersReducedMotion ? 5 : 15} className="absolute inset-0 z-20" />
        </React.Suspense>
      </LazySection>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-10"
        >
          {/* Enhanced Badge */}
          <motion.div 
            {...createAccessibleVariants(prefersReducedMotion)}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="relative"
          >
            <Badge
              variant="secondary"
              className="relative px-6 py-3 text-sm font-medium bg-white/90 dark:bg-slate-800/90 border border-indigo-200/50 dark:border-violet-500/30 shadow-xl backdrop-blur-xl overflow-hidden group"
              role="status"
              aria-label="Announcement: Create Stunning GitHub Components"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-400/20 dark:via-purple-400/20 dark:to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span className="relative z-10">✨ Create Stunning GitHub Components</span>
            </Badge>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.div
            {...createAccessibleVariants(prefersReducedMotion)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="space-y-6"
          >
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-balance leading-tight ${readableText.xl}`}>
              {prefersReducedMotion ? (
                <span className="text-slate-900 dark:text-slate-100">
                  Build <span className="text-gradient-professional">Beautiful</span> Components
                </span>
              ) : (
                <>
                  <RollingText
                    text="Build"
                    className="text-slate-900 dark:text-slate-100"
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />{" "}
                  <AnimatedGradientText
                    speed={2}
                    colorFrom="#4f46e5"
                    colorTo="#ec4899"
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold inline-block"
                  >
                    Beautiful
                  </AnimatedGradientText>
                  <br />
                  <span className="text-slate-900 dark:text-slate-100">
                    <RollingText
                      text="Components"
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </span>
                </>
              )}
            </h1>
            
            <motion.div 
              className={`text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl text-balance leading-relaxed font-medium ${readableText.large}`}
              {...createAccessibleVariants(prefersReducedMotion)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.8 }}
            >
              Professional animated SVG components for GitHub READMEs.{" "}
              <HighlightText 
                text="No design skills needed"
                className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-900 dark:text-indigo-100"
              />
              {" "}– just point, click, and generate stunning visuals in seconds.
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            {...createAccessibleVariants(prefersReducedMotion)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md sm:max-w-none"
          >
            <Link href="/generator/wave" className="w-full sm:w-auto group" aria-label="Start creating free animated components">
              <ParticleButton
                size="lg"
                className={`w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group text-lg px-10 py-6 border-0 relative overflow-hidden ${touchTarget} ${focusRing}`}
                aria-label="Start creating free animated SVG components"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center">
                  Start Creating Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
              </ParticleButton>
            </Link>

            <Link href="#components" className="w-full sm:w-auto group" aria-label="Explore our component library">
              <Button
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto bg-white/80 dark:bg-slate-800/80 hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-300 group text-lg px-10 py-6 border border-indigo-200 dark:border-slate-600 backdrop-blur-xl shadow-lg hover:shadow-xl ${touchTarget} ${focusRing}`}
                aria-label="Explore available components and features"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                Explore Components
              </Button>
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            {...createAccessibleVariants(prefersReducedMotion)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
            role="list"
            aria-label="Key features"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...createAccessibleVariants(prefersReducedMotion)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5, 
                  delay: prefersReducedMotion ? 0 : 1.4 + index * 0.1 
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-full border border-indigo-100 dark:border-slate-700 backdrop-blur-xl shadow-md"
                role="listitem"
              >
                <feature.icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                <span className={`text-sm font-medium text-slate-700 dark:text-slate-300 ${readableText.small}`}>
                  {feature.title}
                  <span className="sr-only">: {feature.desc}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            {...createAccessibleVariants(prefersReducedMotion)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-5xl mt-12"
            role="region"
            aria-label="Platform statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...createAccessibleVariants(prefersReducedMotion)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.6, 
                  delay: prefersReducedMotion ? 0 : 1.8 + index * 0.1 
                }}
                className="group"
              >
                <Card className="h-full bg-white/70 dark:bg-slate-800/70 border border-indigo-100/50 dark:border-slate-700/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-2">
                    <div 
                      className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 ${readableText.xl}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium text-slate-600 dark:text-slate-400 ${readableText.small}`}>
                      {stat.label}
                    </div>
                    <span className="sr-only">
                      {stat.value} {stat.label} {index === 0 ? 'use Waveify' : index === 1 ? 'average rating' : index === 2 ? 'include Waveify components' : 'are available'}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}