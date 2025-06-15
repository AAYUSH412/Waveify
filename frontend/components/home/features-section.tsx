"use client"

import { motion, useInView } from "framer-motion"
import { Layers, Wand2, Palette, Code, Github, Sparkles, Zap, LineChart, Lock } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Layers />,
    title: "Layered Wave Animations",
    description:
      "Create complex wave patterns with multiple layers and customizable sinusoidal animations that bring your README to life.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: <Wand2 />,
    title: "Live Preview Editor",
    description:
      "See your changes in real-time and get ready-to-use markdown code to embed directly in your GitHub README.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: <Palette />,
    title: "Custom Themes & Presets",
    description:
      "Choose from a variety of pre-designed themes or create your own custom color schemes and animation patterns.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Code />,
    title: "Simple API Integration",
    description:
      "Easily integrate with your projects using our simple API. Just add a single line of markdown to your README.",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: <Github />,
    title: "GitHub Integration",
    description: "Seamlessly connect with your GitHub repositories to automatically add banners to your projects.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <Sparkles />,
    title: "Advanced Animation Controls",
    description: "Fine-tune your animations with advanced controls for speed, amplitude, frequency, and more.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: <Zap />,
    title: "Performance Optimized",
    description: "Lightweight SVG animations that won't slow down your README or consume unnecessary resources.",
    color: "from-yellow-500 to-lime-500",
  },
  {
    icon: <LineChart />,
    title: "Analytics Dashboard",
    description: "Track views and engagement with your banners through our comprehensive analytics dashboard.",
    color: "from-lime-500 to-emerald-500",
  },
  {
    icon: <Lock />,
    title: "Private Repositories",
    description: "Support for private repositories with secure authentication and access controls.",
    color: "from-emerald-500 to-teal-500",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Stand Out</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Create stunning animated banners for your GitHub profile and repositories with our comprehensive set of
            features.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Icon with gradient background */}
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-5 w-14 h-14 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300"
          >
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
