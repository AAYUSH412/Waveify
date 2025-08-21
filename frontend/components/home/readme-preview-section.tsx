"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Sparkles, Video } from "lucide-react"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import GitHubVideoDialog from "@/components/magicui/github-video-dialog"
import ShimmerText from "@/components/kokonutui/shimmer-text"
import { RollingText } from "@/components/animate-ui/text/rolling"

export function ReadmePreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="video-tutorial" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 -z-10">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="hsl(var(--primary))"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
      </div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8 border border-violet-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Video className="h-4 w-4 text-violet-400" />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Video Tutorial
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <RollingText 
                text="Experience Waveify"
                className="text-gradient-professional block"
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <span className="block mt-2 text-foreground/90">Live Demo</span>
            </h2>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <ShimmerText 
              text="Discover how effortlessly you can transform your GitHub profile with dynamic, interactive components that captivate and engage"
              className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed"
            />
          </motion.div>

          {/* Call to action hint */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Play className="h-4 w-4" />
            <span>Watch the video automatically play when in view</span>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          style={{ y }}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative video-container">
            {/* GitHub Copilot-Style Video Container */}
            <motion.div 
              className="relative p-[3px] rounded-[28px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:300%_300%]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                y: [0, -8, 0]
              }}
              whileHover={{ 
                scale: 1.01,
                filter: "brightness(1.1)",
                y: -12
              }}
            >
              {/* Outer Glow Effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[32px] blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />
              
              {/* Video Container with Glass Effect */}
              <div className="relative rounded-3xl overflow-hidden glass-effect-enhanced shadow-2xl bg-slate-900/95 dark:bg-slate-900/95">
                {/* GitHub-Style Video Component */}
                <GitHubVideoDialog
                  videoSrc="https://www.youtube.com/embed/n7XDyBzGJyE?autoplay=1&mute=1&loop=1&rel=0&controls=0&modestbranding=1&fs=0&cc_load_policy=0&iv_load_policy=3&disablekb=1" // Updated working YouTube video with proper autoplay parameters
                  desktopPosterSrc="/Waveify_logo.png" 
                  mobilePosterSrc="/Waveify_logo.png"
                  videoAlt="Waveify Component Creation Demo - See how to create animated GitHub components"
                  className="w-full aspect-video"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
