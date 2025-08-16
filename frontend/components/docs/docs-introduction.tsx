"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Code, Github, Sparkles } from "lucide-react"

export function DocsIntroduction() {
  return (
    <div className="space-y-12">
      {/* Introduction Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Waveify is a comprehensive SaaS platform that enables developers to create stunning animated SVG components 
            for GitHub README files. Since GitHub markdown doesn't support custom HTML or CSS styling, Waveify bridges 
            this gap by providing dynamic SVG graphics delivered via URL.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <motion.div 
            className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.1k+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </motion.div>
          <motion.div 
            className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 border border-purple-200 dark:border-purple-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10k+</div>
            <div className="text-sm text-muted-foreground">Animations Generated</div>
          </motion.div>
          <motion.div 
            className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Available Components</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full glass-card hover:shadow-lg transition-all duration-300 group border-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 group-hover:scale-110 transition-transform">
                    <Waves className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Wave Animations</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Generate beautiful animated wave patterns with various styles and effects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Sine Waves</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Square Waves</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Fluid Effects</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Glitch Styles</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full glass-card hover:shadow-lg transition-all duration-300 group border-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-950/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 group-hover:scale-110 transition-transform">
                    <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Typing Animations</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Create dynamic typewriter effects with modern styling options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">Classic Typing</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">Neon Effects</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">Matrix Style</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">Rainbow Text</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full glass-card hover:shadow-lg transition-all duration-300 group border-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/50 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Custom Badges</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Design unique badges with stunning visual effects and animations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Modern Styles</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Gradient Effects</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Animated Borders</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Custom Colors</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Why Waveify Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold">Why Choose Waveify?</h3>
        <div className="glass-card p-8 rounded-2xl border-0 bg-gradient-to-br from-neutral-50/50 to-slate-50/50 dark:from-neutral-950/50 dark:to-slate-950/50">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <h4 className="font-semibold text-foreground">Zero Design Barrier</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">No design skills required. Create professional-quality animated banners in seconds with our intuitive interface.</p>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-foreground">Performance Optimized</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">Lightweight SVG animations that don't impact page load times, ensuring your README loads fast.</p>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🔗</span>
                </div>
                <h4 className="font-semibold text-foreground">URL-Based Implementation</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">Simply embed URLs in markdown - no complex setup, dependencies, or hosting required.</p>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <h4 className="font-semibold text-foreground">Fully Customizable</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">Control colors, animations, sizes, and effects through simple URL parameters for unlimited creativity.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
