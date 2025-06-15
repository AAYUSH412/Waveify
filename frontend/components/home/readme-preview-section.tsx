"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy, Check, Play, Pause, Code, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function ReadmePreviewSection() {
  const [copied, setCopied] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [waveHeight, setWaveHeight] = useState(50)
  const [waveSpeed, setWaveSpeed] = useState(50)
  const [waveColor, setWaveColor] = useState("#8b5cf6")
  const [activeTab, setActiveTab] = useState("preview")

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handleCopy = () => {
    navigator.clipboard.writeText(`<div align="center">
  <img src="https://waveify.dev/api/wave?theme=neon&height=120" alt="Waveify Banner" />
</div>

# My Awesome Project

A cutting-edge solution for modern development challenges.`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="preview" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

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
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-sm font-medium mb-6">
            <Code className="h-4 w-4 text-violet-400" />
            <span>Interactive Editor</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Customize</span> Your Banner
          </h2>

          <p className="text-lg text-muted-foreground">
            Create the perfect banner for your GitHub README with our interactive editor. Adjust colors, wave height,
            animation speed, and more in real-time.
          </p>
        </motion.div>

        <motion.div
          style={{ y }}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-2">
              <motion.div
                className="glass-card rounded-2xl overflow-hidden"
                whileHover={{ boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-muted/30 backdrop-blur-sm p-4 border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-violet-400" />
                    Wave Controls
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-8 w-8 rounded-full"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="p-6 space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Wave Height</span>
                        <Badge variant="outline" className="glass-effect">
                          {waveHeight}%
                        </Badge>
                      </div>
                      <Slider
                        value={[waveHeight]}
                        min={10}
                        max={100}
                        step={1}
                        onValueChange={(value) => setWaveHeight(value[0])}
                        className="py-1"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Animation Speed</span>
                        <Badge variant="outline" className="glass-effect">
                          {waveSpeed}%
                        </Badge>
                      </div>
                      <Slider
                        value={[waveSpeed]}
                        min={10}
                        max={100}
                        step={1}
                        onValueChange={(value) => setWaveSpeed(value[0])}
                        className="py-1"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Wave Color</span>
                        <Badge variant="outline" className="glass-effect">
                          {waveColor}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-6 gap-3">
                        {["#8b5cf6", "#ec4899", "#f43f5e", "#f97316", "#10b981", "#3b82f6"].map((color) => (
                          <button
                            key={color}
                            className={`w-full aspect-square rounded-full transition-all duration-300 ${
                              waveColor === color
                                ? "ring-2 ring-offset-2 ring-offset-background ring-white scale-110"
                                : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setWaveColor(color)}
                            aria-label={`Select color ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 group">
                    Generate Banner
                    <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 glass-effect p-1 rounded-xl mb-4">
                  <TabsTrigger
                    value="preview"
                    onClick={() => setActiveTab("preview")}
                    className="rounded-lg data-[state=active]:bg-background"
                  >
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    onClick={() => setActiveTab("code")}
                    className="rounded-lg data-[state=active]:bg-background"
                  >
                    Code
                  </TabsTrigger>
                </TabsList>

                <motion.div
                  className="rounded-2xl overflow-hidden glass-card"
                  whileHover={{ boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="preview" className="m-0">
                    <div className="bg-muted/30 backdrop-blur-sm p-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="ml-3 flex items-center">
                          <div className="bg-background/50 text-xs font-medium px-3 py-1 rounded-md border border-white/10">
                            README.md
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-background/80 to-background p-6">
                      <div className="flex justify-center mb-6">
                        <div className="relative h-[120px] w-full max-w-md overflow-hidden rounded-md bg-gradient-to-r from-gray-900 to-black flex items-center justify-center">
                          <WavePreview color={waveColor} height={waveHeight} speed={waveSpeed} isPlaying={isPlaying} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">My Awesome Project</h3>
                          </div>
                        </div>
                      </div>

                      <div className="prose dark:prose-invert max-w-none">
                        <h1>My Awesome Project</h1>
                        <p>
                          A cutting-edge solution for modern development challenges. This project aims to simplify
                          complex workflows and improve developer productivity.
                        </p>
                        <h2>Features</h2>
                        <ul>
                          <li>Intuitive API with comprehensive documentation</li>
                          <li>Seamless integration with existing tools</li>
                          <li>Optimized performance for large-scale applications</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="m-0">
                    <div className="bg-muted/30 backdrop-blur-sm p-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="ml-3 flex items-center">
                          <div className="bg-background/50 text-xs font-medium px-3 py-1 rounded-md border border-white/10">
                            README.md
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs font-medium" onClick={handleCopy}>
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>

                    <div className="p-0 relative">
                      <div className="flex">
                        {/* Line Numbers */}
                        <div className="py-4 px-2 text-right text-xs font-mono text-muted-foreground bg-muted/10 select-none w-12">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="leading-6">
                              {i + 1}
                            </div>
                          ))}
                        </div>

                        {/* Code Content */}
                        <div className="py-4 px-4 font-mono text-sm overflow-x-auto flex-1">
                          <pre className="leading-6">
                            <div>
                              <span className="text-violet-400">&lt;div</span>{" "}
                              <span className="text-fuchsia-400">align</span>=
                              <span className="text-green-400">&quot;center&quot;</span>
                              <span className="text-violet-400">&gt;</span>
                            </div>
                            <div className="pl-4">
                              <span className="text-violet-400">&lt;img</span>{" "}
                              <span className="text-fuchsia-400">src</span>=
                              <span className="text-green-400">
                                &quot;https://waveify.dev/api/wave?theme=neon&height=120&quot;
                              </span>{" "}
                              <span className="text-fuchsia-400">alt</span>=
                              <span className="text-green-400">&quot;Waveify Banner&quot;</span>{" "}
                              <span className="text-violet-400">/&gt;</span>
                            </div>
                            <div>
                              <span className="text-violet-400">&lt;/div&gt;</span>
                            </div>
                            <div className="mt-4">
                              <span className="text-fuchsia-400"># My Awesome Project</span>
                            </div>
                            <div className="mt-2">A cutting-edge solution for modern development challenges.</div>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </motion.div>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WavePreview({ color = "#8b5cf6", height = 50, speed = 50, isPlaying = true }) {
  const normalizedHeight = (height / 100) * 30
  const normalizedSpeed = (speed / 100) * 15

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          d={`M0,0 C150,${normalizedHeight} 350,${-normalizedHeight} 500,${normalizedHeight} C650,${normalizedHeight * 2} 700,0 900,${normalizedHeight} C1050,${normalizedHeight} 1200,10 1200,10 V120 H0 Z`}
          fill={`${color}33`}
        ></motion.path>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          d={`M0,40 C150,${20 + normalizedHeight} 300,${60 - normalizedHeight} 450,${40 + normalizedHeight} C600,${20 - normalizedHeight} 750,${70 + normalizedHeight} 900,${50 - normalizedHeight} C1050,${30 + normalizedHeight} 1200,60 1200,60 V120 H0 Z`}
          fill={`${color}33`}
        ></motion.path>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          d={`M0,60 C150,${80 - normalizedHeight} 300,${40 + normalizedHeight} 450,${60 - normalizedHeight} C600,${80 + normalizedHeight} 750,${30 - normalizedHeight} 900,${50 + normalizedHeight} C1050,${70 - normalizedHeight} 1200,40 1200,40 V120 H0 Z`}
          fill={`${color}33`}
        ></motion.path>
      </svg>
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={isPlaying ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
        transition={{
          duration: 20 - normalizedSpeed,
          repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(90deg, ${color}00 0%, ${color}4D 50%, ${color}4D 75%, ${color}00 100%)`,
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  )
}
