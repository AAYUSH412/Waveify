"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Github, Star, Users, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"
import { GridBackground } from "./grid-background"
import Link from "next/link"

const stats = [
  { icon: Users, value: "50K+", label: "Developers", color: "text-blue-500" },
  { icon: Star, value: "4.9", label: "Rating", color: "text-yellow-500" },
  { icon: Github, value: "25K+", label: "Repositories", color: "text-purple-500" },
  { icon: Code, value: "40+", label: "Components", color: "text-green-500" },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32"
    >

      
      
      {/* Enhanced Dark Mode Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Primary floating gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-indigo-600/30 rounded-full blur-3xl animate-float"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 dark:from-purple-600/30 dark:via-pink-600/30 dark:to-rose-600/30 rounded-full blur-3xl animate-float-delayed"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 dark:from-cyan-600/30 dark:via-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-float-slow"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        {/* Grid Background */}
      <GridBackground />
        

        {/* Additional dark mode ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-900/5 to-transparent dark:via-blue-900/10 pointer-events-none" />
        
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-purple-900/5 to-transparent dark:via-purple-900/10 pointer-events-none" />
        
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-8"
        >
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge
              variant="secondary"
              className="glass-card px-4 py-2 text-sm font-medium border-primary/20 dark:bg-slate-800/80 dark:border-slate-600/50"
            >
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Create Stunning GitHub Components
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance">
              Create <span className="text-gradient animate-gradient">Stunning</span>
              <br />
              GitHub Components
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl text-balance">
              Professional animated SVG components for GitHub READMEs. Waves, typing effects, terminals, and loaders -
              all with zero design skills required.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/generator/wave">
              <Button
                size="lg"
                className="gradient-primary text-white shadow-2xl hover:shadow-xl transition-all duration-300 group text-lg px-8 py-6 dark:shadow-blue-500/25 dark:hover:shadow-blue-500/40"
              >
                Start Creating Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="#preview">
              <Button
                size="lg"
                variant="outline"
                className="glass-card hover:bg-muted/50 transition-all duration-300 group text-lg px-8 py-6 bg-transparent dark:bg-slate-800/60 dark:hover:bg-slate-700/60 dark:border-slate-600/50"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="group"
              >
                <Card className="glass-card hover-lift h-full border-border/50 dark:bg-slate-800/80 dark:border-slate-700/50">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <stat.icon className={`w-8 h-8 mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full max-w-7xl px-4 mt-20 mb-12"
      >
        <div className="text-center mb-8">
          <Badge variant="outline" className="glass-card border-primary/20 mb-4">
            <Code className="w-4 h-4 mr-2 text-primary" />
            Live Preview
          </Badge>
          <h3 className="text-2xl lg:text-3xl font-bold text-gradient">
            See It In Action
          </h3>
          <p className="text-muted-foreground mt-2">
            Real GitHub README with live Waveify components
          </p>
        </div>

        <Card className="glass-card border-border/50 overflow-hidden dark:bg-slate-900/80 dark:border-slate-700/50 shadow-2xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              {/* Enhanced Browser Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 bg-slate-700/50 px-3 py-1 rounded-md text-sm font-mono text-gray-300">
                    github.com/user/awesome-project/README.md
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
              </div>

              {/* README Content */}
              <div className="p-8 space-y-6">
                {/* Live Wave Banner */}
                <div className="relative">
                  <div className="relative h-32 rounded-lg overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50">
                    <img 
                      src="https://waveify.onrender.com/api/wave?color=%23667eea&height=130&speed=4&amplitude=40"
                      alt="Waveify Live Banner"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback animation if API is not available
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback Animation */}
                    <div className="hidden absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg pb-14">🚀 My Awesome Project</h3>
                    </div>
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white shadow-lg">
                    ✨ Live API
                  </Badge>
                </div>

                {/* Enhanced Typing Effect */}
                <div className="bg-slate-800/60 rounded-lg p-5 border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-400 font-mono">Terminal</span>
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    <span className="text-blue-400">user@awesome-project</span>
                    <span className="text-white">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-white">$ </span>
                    <motion.span
                      key="typing-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      npm start
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-1 text-green-400"
                    >
                      ▊
                    </motion.span>
                  </div>
                  <div className="mt-2 text-gray-300 text-sm">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      ⚡ Server running on http://localhost:3000
                    </motion.div>
                  </div>
                </div>

                {/* Component Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Wave Component */}
                  <motion.div 
                    className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30"
                    whileHover={{ scale: 1.02, borderColor: "rgb(139 92 246 / 0.5)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-blue-500/30 mb-3 flex items-center justify-center">
                      <span className="text-xs font-mono text-blue-300">Wave API</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">Fluid Waves</h4>
                    <p className="text-xs text-gray-400">10+ wave types</p>
                  </motion.div>

                  {/* Typing Component */}
                  <motion.div 
                    className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30"
                    whileHover={{ scale: 1.02, borderColor: "rgb(34 197 94 / 0.5)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded border border-green-500/30 mb-3 flex items-center justify-center">
                      <span className="text-xs font-mono text-green-300">Typing API</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">Typing Effects</h4>
                    <p className="text-xs text-gray-400">8+ typing styles</p>
                  </motion.div>

                  {/* Terminal Component */}
                  <motion.div 
                    className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30"
                    whileHover={{ scale: 1.02, borderColor: "rgb(168 85 247 / 0.5)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded border border-purple-500/30 mb-3 flex items-center justify-center">
                      <span className="text-xs font-mono text-purple-300">Terminal API</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">Terminal Themes</h4>
                    <p className="text-xs text-gray-400">6+ terminal styles</p>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-4">
                  <Link href="/generator/wave">
                    <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Try It Now - It's Free!
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
