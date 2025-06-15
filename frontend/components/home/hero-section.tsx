"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, ArrowRight, Code, Github, Sparkles } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <motion.div style={{ y, opacity }} className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-sm font-medium mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-4 w-4 text-violet-400" />
                <span>Introducing Waveify 2.0</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                Elevate Your <br className="hidden sm:block" />
                <span className="text-gradient">GitHub Presence</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Create stunning animated wave banners for your repositories and profile. Stand out with beautiful,
                customizable animations in seconds.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button size="lg" variant="outline" className="glass-effect gap-2 group">
                <Play className="h-4 w-4 text-violet-500" />
                <span>Watch Demo</span>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>API Access</span>
              </div>
            </div>
          </motion.div>

          {/* Hero preview */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute -inset-1 rounded-2xl animated-border opacity-70"></div>

              {/* Preview window */}
              <div className="relative rounded-2xl overflow-hidden glass-card">
                {/* Window header */}
                <div className="bg-muted/30 backdrop-blur-sm p-3 border-b border-white/10 flex items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs font-medium px-2 py-1 rounded bg-muted/30">README.md</div>
                </div>

                {/* Preview content */}
                <div className="p-6 bg-gradient-to-b from-background/80 to-background">
                  <div className="flex justify-center mb-6">
                    <div className="relative h-[120px] w-full max-w-md overflow-hidden rounded-md bg-gradient-to-r from-gray-900 to-black flex items-center justify-center">
                      <AnimatedWavePreview />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">My Awesome Project</h3>
                      </div>
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <h1>My Awesome Project</h1>
                    <p>
                      A cutting-edge solution for modern development challenges. This project aims to simplify complex
                      workflows and improve developer productivity.
                    </p>
                    <h2>Features</h2>
                    <ul>
                      <li>Intuitive API with comprehensive documentation</li>
                      <li>Seamless integration with existing tools</li>
                      <li>Optimized performance for large-scale applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-violet-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { value: "10K+", label: "Developers" },
            { value: "50K+", label: "Banners Created" },
            { value: "100+", label: "Templates" },
            { value: "4.9/5", label: "User Rating" },
          ].map((stat, i) => (
            <div key={i} className="glass-effect rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedWavePreview() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          d="M0,0 C150,20 350,0 500,30 C650,60 700,0 900,20 C1050,40 1200,10 1200,10 V120 H0 Z"
          className="fill-violet-500/30"
        ></motion.path>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          d="M0,40 C150,20 300,60 450,40 C600,20 750,70 900,50 C1050,30 1200,60 1200,60 V120 H0 Z"
          className="fill-fuchsia-500/30"
        ></motion.path>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M0,60 C150,80 300,40 450,60 C600,80 750,30 900,50 C1050,70 1200,40 1200,40 V120 H0 Z"
          className="fill-violet-600/30"
        ></motion.path>
      </svg>
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(236, 72, 153, 0.3) 75%, rgba(236, 72, 153, 0) 100%)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  )
}
