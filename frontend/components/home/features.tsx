"use client"

import { motion } from "framer-motion"
import { Layers, Wand2, Palette, Code, Github, Sparkles } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Sinusoidal & Layered Waves",
    description:
      "Create complex wave patterns with multiple layers and customizable sinusoidal animations that bring your README to life.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Wand2 className="h-10 w-10" />,
    title: "Live Preview + Markdown Embed",
    description:
      "See your changes in real-time and get ready-to-use markdown code to embed directly in your GitHub README.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Custom Themes & Presets",
    description:
      "Choose from a variety of pre-designed themes or create your own custom color schemes and animation patterns.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Simple API Integration",
    description:
      "Easily integrate with your projects using our simple API. Just add a single line of markdown to your README.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: <Github className="h-10 w-10" />,
    title: "GitHub Integration",
    description: "Seamlessly connect with your GitHub repositories to automatically add banners to your projects.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Advanced Animation Controls",
    description: "Fine-tune your animations with advanced controls for speed, amplitude, frequency, and more.",
    color: "from-amber-500 to-amber-600",
  },
]

export function Features() {
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
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Everything you need to create stunning animated banners for your GitHub profile and repositories
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
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col h-full p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-950/0 dark:to-purple-950/0 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-950 dark:group-hover:to-purple-950 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

              {/* Icon with gradient background */}
              <div
                className={`relative z-10 p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4 w-14 h-14 flex items-center justify-center text-white shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="relative z-10 text-xl font-bold mb-2">{feature.title}</h3>
              <p className="relative z-10 text-muted-foreground flex-grow">{feature.description}</p>

              {/* Subtle corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-tl-3xl transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
