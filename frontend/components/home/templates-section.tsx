"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Heart, Download, Eye } from "lucide-react"

const categories = ["All", "Minimal", "Gradient", "Animated", "3D", "Neon", "Corporate"]

const templates = [
  {
    id: 1,
    name: "Ocean Waves",
    category: "Animated",
    preview: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    likes: 1234,
    downloads: 5678,
    isNew: true,
  },
  {
    id: 2,
    name: "Neon Pulse",
    category: "Neon",
    preview: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    likes: 987,
    downloads: 3456,
    isNew: false,
  },
  {
    id: 3,
    name: "Minimal Clean",
    category: "Minimal",
    preview: "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400",
    likes: 2345,
    downloads: 7890,
    isNew: false,
  },
  {
    id: 4,
    name: "Cyber Grid",
    category: "3D",
    preview: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
    likes: 1567,
    downloads: 4321,
    isNew: true,
  },
  {
    id: 5,
    name: "Sunset Glow",
    category: "Gradient",
    preview: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500",
    likes: 3456,
    downloads: 8901,
    isNew: false,
  },
  {
    id: 6,
    name: "Corporate Blue",
    category: "Corporate",
    preview: "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800",
    likes: 876,
    downloads: 2345,
    isNew: false,
  },
]

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const filteredTemplates =
    activeCategory === "All" ? templates : templates.filter((template) => template.category === activeCategory)

  return (
    <section id="templates" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Choose from <span className="text-gradient">100+ Templates</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Professionally designed templates for every style and use case. From minimal to bold, we have the perfect
            banner for your project.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-lg shadow-primary/25"
                  : "glass hover:bg-muted/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 tilt">
                {/* Preview */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`w-full h-full ${template.preview} relative`}>
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />

                    {/* Sample text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">Sample Project</h3>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {template.isNew && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
                      <Badge variant="secondary" className="glass text-xs">
                        {template.category}
                      </Badge>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <Button size="sm" className="glass text-white border-white/20 hover:bg-white/20">
                          <Play className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="gradient-primary text-white">
                          <Download className="w-4 h-4 mr-1" />
                          Use
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {template.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {template.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass hover:bg-muted/50 transition-all duration-300 bg-transparent"
          >
            Load More Templates
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
