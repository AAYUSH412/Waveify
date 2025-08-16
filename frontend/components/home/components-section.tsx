"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Copy, Eye, Heart, Sparkles } from "lucide-react"

const componentCategories = [
  {
    id: "waves",
    name: "Wave Animations",
    count: "10+",
    description: "Fluid wave animations with customizable patterns",
  },
  {
    id: "typing",
    name: "Typing Effects",
    count: "8+",
    description: "Dynamic text animations with various styles",
  },
  {
    id: "terminals",
    name: "Terminal Themes",
    count: "6+",
    description: "Realistic terminal simulations and themes",
  },
  {
    id: "loaders",
    name: "Loading Animations",
    count: "20+",
    description: "Smooth loading indicators and spinners",
  },
]

const sampleComponents = {
  waves: [
    {
      id: 1,
      name: "Fluid Wave",
      preview: "https://waveify.onrender.com/api/wave/fluid?color=%23007CF0&height=80&width=400",
      likes: 1234,
      views: 5678,
      isNew: true,
    },
    {
      id: 2,
      name: "Neon Pulse",
      preview: "https://waveify.onrender.com/api/wave/neon?color=%23A855F7&height=80&width=400",
      likes: 987,
      views: 3456,
      isNew: false,
    },
    {
      id: 3,
      name: "Plasma Wave",
      preview: "https://waveify.onrender.com/api/wave/plasma?color=%2306B6D4&height=80&width=400",
      likes: 1567,
      views: 4321,
      isNew: true,
    },
  ],
  typing: [
    {
      id: 4,
      name: "Matrix Style",
      preview: "https://waveify.onrender.com/api/typing/matrix?text=console.log('Hello World')&width=400&height=80",
      likes: 2345,
      views: 7890,
      isNew: false,
    },
    {
      id: 5,
      name: "Neon Glow",
      preview: "https://waveify.onrender.com/api/typing/neon?text=Creating Magic&width=400&height=80",
      likes: 1876,
      views: 5432,
      isNew: true,
    },
    {
      id: 6,
      name: "Rainbow Text",
      preview: "https://waveify.onrender.com/api/typing/rainbow?text=Colorful Code&width=400&height=80",
      likes: 3456,
      views: 8901,
      isNew: false,
    },
  ],
  terminals: [
    {
      id: 7,
      name: "Cyberpunk",
      preview: "https://waveify.onrender.com/api/terminal/cyberpunk?title=root@waveify&command=npm start&width=460&height=300",
      likes: 876,
      views: 2345,
      isNew: false,
    },
    {
      id: 8,
      name: "Matrix Terminal",
      preview: "https://waveify.onrender.com/api/terminal/matrix?title=Waveify Terminal&command=git clone waveify&width=460&height=300",
      likes: 1432,
      views: 3876,
      isNew: true,
    },
    {
      id: 9,
      name: "Glass Modern",
      preview: "https://waveify.onrender.com/api/terminal/glass?title=Waveify&command=echo 'Hello World'&width=460&height=300",
      likes: 2109,
      views: 6543,
      isNew: false,
    },
  ],
  loaders: [
    {
      id: 10,
      name: "DNA Helix",
      preview: "https://waveify.onrender.com/api/loader/dna?color=%23F472B6&height=80&width=400",
      likes: 3210,
      views: 9876,
      isNew: true,
    },
    {
      id: 11,
      name: "Pulse Dots",
      preview: "https://waveify.onrender.com/api/loader/pulse?color=%23FBBF24&height=80&width=400",
      likes: 1654,
      views: 4321,
      isNew: false,
    },
    {
      id: 12,
      name: "Wave Loader",
      preview: "https://waveify.onrender.com/api/loader/wave?color=%23A855F7&height=80&width=400",
      likes: 2876,
      views: 7654,
      isNew: true,
    },
  ],
}

export function ComponentsSection() {
  const [activeCategory, setActiveCategory] = useState("waves")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="components" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="glass-card border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            40+ Component Types
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Choose from <span className="text-gradient">Professional</span> Components
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Professionally designed animated components for every style and use case. From minimal to bold, we have the
            perfect component for your project.
          </p>
        </motion.div>

        {/* Component Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass-card p-1 h-auto">
              {componentCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Component Grid */}
            <div ref={containerRef} className="mt-8">
              {componentCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleComponents[category.id as keyof typeof sampleComponents]?.map((component, index) => (
                      <motion.div
                        key={component.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <Card className="glass-card hover-lift border-border/50 overflow-hidden">
                          {/* Preview */}
                          <div className="relative h-48 overflow-hidden bg-slate-50 dark:bg-slate-800">
                            {component.preview.startsWith('http') ? (
                              <img 
                                src={component.preview} 
                                alt={component.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  // Fallback to gradient if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  if (target.nextElementSibling) {
                                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                            ) : null}
                            <div className={`w-full h-full ${component.preview.startsWith('http') ? 'hidden' : ''} ${component.preview.startsWith('bg-') ? component.preview : 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'} relative flex items-center justify-center`}>
                              <h3 className="text-white text-xl font-bold drop-shadow-lg">
                                {category.id === "typing"
                                  ? "Typing..."
                                  : category.id === "terminals"
                                    ? "$ command"
                                    : category.id === "loaders"
                                      ? "Loading..."
                                      : "Sample Project"}
                              </h3>
                            </div>

                              {/* Badges */}
                              <div className="absolute top-3 left-3 flex gap-2">
                                {component.isNew && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
                                <Badge variant="secondary" className="glass-card text-xs">
                                  {category.name}
                                </Badge>
                              </div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex gap-3">
                                  <Button size="sm" variant="secondary" className="glass-card">
                                    <Play className="w-4 h-4 mr-1" />
                                    Preview
                                  </Button>
                                  <Button size="sm" className="gradient-primary text-white">
                                    <Copy className="w-4 h-4 mr-1" />
                                    Use
                                  </Button>
                                </div>
                              </div>
                          </div>

                          {/* Content */}
                          <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {component.name}
                            </h3>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {component.likes.toLocaleString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {component.views.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass-card hover:bg-muted/50 transition-all duration-300 bg-transparent"
          >
            Explore All Components
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
