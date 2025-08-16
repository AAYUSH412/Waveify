"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Loader2, Sparkles, Clock, Zap, Heart, Eye, Accessibility } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsLoaderApi() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      toast({
        description: "URL copied to clipboard!"
      })
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      toast({
        description: "Failed to copy to clipboard",
        variant: "destructive"
      })
    }
  }

  // Basic loaders - fundamental loading indicators
  const basicLoaders = [
    {
      name: "Dots",
      description: "Three animated dots with gradient effects - perfect for 'loading...' states",
      type: "dots",
      category: "Essential",
      url: "https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5"
    },
    {
      name: "Spinner",
      description: "Classic rotating circle loader with smooth animation",
      type: "spinner", 
      category: "Essential",
      url: "https://waveify.onrender.com/api/loader?type=spinner&color=green&speed=2&size=30"
    },
    {
      name: "Bars",
      description: "Animated vertical bars with staggered timing",
      type: "bars",
      category: "Essential",
      url: "https://waveify.onrender.com/api/loader?type=bars&color=%23ff6b6b&speed=1.2"
    },
    {
      name: "Pulse",
      description: "Pulsing circle animation with breathing effect",
      type: "pulse",
      category: "Essential",
      url: "https://waveify.onrender.com/api/loader?type=pulse&color=purple&speed=2&size=40"
    },
    {
      name: "Wave",
      description: "Animated wave loader with fluid motion",
      type: "wave",
      category: "Essential",
      url: "https://waveify.onrender.com/api/loader?type=wave&color=cyan&speed=1.8&width=120"
    }
  ]

  // Modern loaders - advanced visual effects
  const modernLoaders = [
    {
      name: "Gradient",
      description: "Modern gradient progress bar with smooth transitions",
      type: "gradient",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=200&height=8"
    },
    {
      name: "Orbit",
      description: "Orbital animation with gradient and depth effects",
      type: "orbit",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=orbit&color=%234facfe&speed=2"
    },
    {
      name: "Neon Pulse",
      description: "Cyberpunk neon glowing pulse with electrical effects",
      type: "neon-pulse",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1.5"
    },
    {
      name: "Triangles",
      description: "Rotating triangular elements with geometric patterns",
      type: "triangles",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=triangles&color=%23ff9a9e&speed=2"
    },
    {
      name: "Ripple",
      description: "Ripple wave effect with expanding circles",
      type: "ripple",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=ripple&color=%23764ba2&speed=2.5"
    },
    {
      name: "Glassmorphism",
      description: "Modern glass effect with backdrop blur and transparency",
      type: "glassmorphism",
      category: "Modern",
      url: "https://waveify.onrender.com/api/loader?type=glassmorphism&color=%23ffffff&speed=2"
    }
  ]

  // Advanced loaders - cutting-edge animations
  const advancedLoaders = [
    {
      name: "DNA Helix",
      description: "Double helix structure with scientific visualization",
      type: "dna-helix",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=dna-helix&color=%234facfe&speed=3"
    },
    {
      name: "Matrix Rain",
      description: "Digital rain effect inspired by The Matrix",
      type: "matrix-rain",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=matrix-rain&color=%2300ff00&speed=2"
    },
    {
      name: "Liquid",
      description: "Organic liquid motion with surface tension effects",
      type: "liquid",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=liquid&color=%236366f1&speed=4"
    },
    {
      name: "Particle System",
      description: "Dynamic particle animation with physics simulation",
      type: "particle-system",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=particle-system&color=%23f59e0b&speed=2.5"
    },
    {
      name: "Heart Beat",
      description: "Pulsing heart animation with cardiac rhythm",
      type: "heart-beat",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=heart-beat&color=%23ef4444&speed=1.2"
    },
    {
      name: "Breathing",
      description: "Organic breathing animation with natural rhythm",
      type: "breathing",
      category: "Advanced",
      url: "https://waveify.onrender.com/api/loader?type=breathing&color=%2310b981&speed=3"
    }
  ]

  // Specialized loaders - skeleton loading and status indicators
  const specializedLoaders = [
    {
      name: "Skeleton",
      description: "Content placeholder with shimmer effect",
      type: "skeleton",
      category: "Specialized",
      url: "https://waveify.onrender.com/api/loader?type=skeleton&color=%23e5e7eb&width=300&height=60"
    },
    {
      name: "Typewriter",
      description: "Text appearing character by character",
      type: "typewriter",
      category: "Specialized",
      url: "https://waveify.onrender.com/api/loader?type=typewriter&color=%23374151&speed=2"
    },
    {
      name: "Coming Soon",
      description: "Perfect for upcoming features or projects",
      type: "coming-soon",
      category: "Status",
      url: "https://waveify.onrender.com/api/loader?type=coming-soon"
    },
    {
      name: "Building",
      description: "Shows project under construction with progress",
      type: "building",
      category: "Status",
      url: "https://waveify.onrender.com/api/loader?type=building"
    },
    {
      name: "Work in Progress",
      description: "Clear indication of ongoing development",
      type: "work-in-progress",
      category: "Status",
      url: "https://waveify.onrender.com/api/loader?type=work-in-progress"
    },
    {
      name: "Loading Text",
      description: "Customizable loading text with animated dots",
      type: "loading-text",
      category: "Status",
      url: "https://waveify.onrender.com/api/loader?type=loading-text&color=%23667eea"
    }
  ]

  // Enhanced parameters with new options
  const parameters = [
    { name: "type", type: "string", default: "dots", description: "Animation type - see all available types in tabs above" },
    { name: "color", type: "string", default: "blue", description: "Primary color (hex codes, color names, or semantic colors)" },
    { name: "speed", type: "number", default: "1.5", description: "Animation speed in seconds (0.1-10)" },
    { name: "size", type: "number", default: "40", description: "Element size in pixels (10-200)" },
    { name: "width", type: "number", default: "100", description: "SVG width in pixels (50-2000)" },
    { name: "height", type: "number", default: "40", description: "SVG height in pixels (20-1000)" },
    { name: "backgroundColor", type: "string", default: "transparent", description: "Background color or 'transparent'" },
    { name: "easing", type: "string", default: "easeInOut", description: "Animation easing function" },
    { name: "glowEffect", type: "boolean", default: "false", description: "Enable glow filter effects" },
    { name: "shadowIntensity", type: "number", default: "0.3", description: "Shadow intensity (0-1)" },
    { name: "theme", type: "string", default: "modern", description: "Visual theme preset" },
    { name: "reducedMotion", type: "boolean", default: "false", description: "Accessibility mode with reduced animation" }
  ]

  // Enhanced use cases with more detail
  const useCases = [
    {
      title: "Project Status & Development",
      icon: "🚧",
      description: "Show development status and project lifecycle in README headers",
      examples: [
        "Coming Soon sections for planned features",
        "Work in Progress indicators for active development", 
        "Under Construction pages for incomplete sections",
        "Build status indicators with real-time updates"
      ]
    },
    {
      title: "Loading States & UX",
      icon: "⏳",
      description: "Indicate dynamic content loading and async operations",
      examples: [
        "API loading states during data fetching",
        "Content skeleton loaders for better UX",
        "Process indicators for long-running operations",
        "Form submission states and progress tracking"
      ]
    },
    {
      title: "Visual Enhancement",
      icon: "✨",
      description: "Add visual interest and professional polish to documentation",
      examples: [
        "Section dividers with animated elements",
        "Transition effects between content blocks",
        "Decorative animations for hero sections",
        "Interactive elements to engage viewers"
      ]
    },
    {
      title: "Branding & Identity",
      icon: "🎨", 
      description: "Strengthen brand presence with consistent visual elements",
      examples: [
        "Brand-colored loaders matching company theme",
        "Consistent animation styles across repositories",
        "Professional visual identity for open source projects",
        "Memorable visual signatures for project recognition"
      ]
    },
    {
      title: "Performance Indicators",
      icon: "📊",
      description: "Show real-time project status and health metrics",
      examples: [
        "CI/CD pipeline status visualization",
        "Deployment state indicators",
        "Service health monitoring displays",
        "Test coverage and quality metrics"
      ]
    },
    {
      title: "Accessibility & Inclusion",
      icon: "♿",
      description: "Provide accessible loading indicators for all users",
      examples: [
        "Reduced motion alternatives for sensitive users",
        "High contrast modes for visual accessibility",
        "Screen reader friendly ARIA labels",
        "Semantic markup for assistive technologies"
      ]
    }
  ]

  // Advanced configuration examples
  const advancedExamples = [
    {
      title: "Professional Header",
      description: "Corporate-style loader with glow effects",
      url: "https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=400&height=12&glowEffect=true",
      code: `![Professional Loader](https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=400&height=12&glowEffect=true)`
    },
    {
      title: "Cyberpunk Aesthetic",
      description: "Neon effects for gaming/tech projects",
      url: "https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1&glowEffect=true&theme=cyberpunk",
      code: `![Cyberpunk Loader](https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1&glowEffect=true&theme=cyberpunk)`
    },
    {
      title: "Scientific Visualization",
      description: "DNA helix for biotech/research projects",
      url: "https://waveify.onrender.com/api/loader?type=dna-helix&color=%234facfe&speed=3&size=60",
      code: `![DNA Helix](https://waveify.onrender.com/api/loader?type=dna-helix&color=%234facfe&speed=3&size=60)`
    }
  ]

  return (
    <section id="loader-api" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
          <h2 className="text-3xl font-bold">Loader API</h2>
          <Badge variant="secondary" className="ml-2">20+ Animations</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Generate stunning loading animations for "Work in Progress" sections, dynamic content, and status indicators. 
          Features advanced effects, accessibility compliance, and professional-grade customization options.
        </p>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <Accessibility className="w-3 h-3" />
            Accessibility Ready
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            60fps Performance
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            Advanced Effects
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            GitHub Optimized
          </Badge>
        </div>
      </motion.div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic">Basic Loaders</TabsTrigger>
          <TabsTrigger value="modern">Modern Effects</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="specialized">Specialized</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Essential Loading Indicators</h3>
            <p className="text-muted-foreground">Fundamental loaders perfect for any project. These are the most commonly used animations.</p>
          </div>
          <div className="grid gap-6">
            {basicLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {loader.name}
                          <Badge variant="default">{loader.category}</Badge>
                        </CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">
                        type={loader.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center min-h-[80px] border">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto max-w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Copy className="w-3 h-3" />
                          API URL
                        </h4>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs flex-1 overflow-hidden font-mono">
                            {loader.url}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(loader.url, index)}
                          >
                            {copiedIndex === index ? "Copied!" : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Markdown Usage:</h4>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto font-mono">
{`![${loader.name}](${loader.url})`}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modern" className="space-y-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Modern Visual Effects</h3>
            <p className="text-muted-foreground">Contemporary loaders with advanced visual effects and gradients.</p>
          </div>
          <div className="grid gap-6">
            {modernLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {loader.name}
                          <Badge variant="secondary">{loader.category}</Badge>
                        </CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">
                        type={loader.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center min-h-[80px] border">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto max-w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Copy className="w-3 h-3" />
                          API URL
                        </h4>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs flex-1 overflow-hidden font-mono">
                            {loader.url}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(loader.url, index + 100)}
                          >
                            {copiedIndex === index + 100 ? "Copied!" : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Markdown Usage:</h4>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto font-mono">
{`![${loader.name}](${loader.url})`}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Advanced Animations</h3>
            <p className="text-muted-foreground">Cutting-edge loaders with complex animations and special effects.</p>
          </div>
          <div className="grid gap-6">
            {advancedLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {loader.name}
                          <Badge variant="destructive">{loader.category}</Badge>
                        </CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">
                        type={loader.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center min-h-[80px] border">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto max-w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Copy className="w-3 h-3" />
                          API URL
                        </h4>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs flex-1 overflow-hidden font-mono">
                            {loader.url}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(loader.url, index + 200)}
                          >
                            {copiedIndex === index + 200 ? "Copied!" : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Markdown Usage:</h4>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto font-mono">
{`![${loader.name}](${loader.url})`}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specialized" className="space-y-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Specialized Loaders</h3>
            <p className="text-muted-foreground">Purpose-built loaders for specific use cases and project status indicators.</p>
          </div>
          <div className="grid gap-6">
            {specializedLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {loader.name}
                          <Badge variant={loader.category === 'Status' ? 'secondary' : 'outline'}>
                            {loader.category}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">
                        type={loader.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center min-h-[80px] border">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto max-w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Copy className="w-3 h-3" />
                          API URL
                        </h4>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs flex-1 overflow-hidden font-mono">
                            {loader.url}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(loader.url, index + 300)}
                          >
                            {copiedIndex === index + 300 ? "Copied!" : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Markdown Usage:</h4>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto font-mono">
{`![${loader.name}](${loader.url})`}
                        </pre>
                      </div>
                      {loader.category === 'Status' && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            💡 Perfect for GitHub README status sections
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="parameters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                URL Parameters
              </CardTitle>
              <CardDescription>
                Customize your loading animations using these query parameters. All parameters are optional.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Parameter</TableHead>
                    <TableHead className="w-[80px]">Type</TableHead>
                    <TableHead className="w-[100px]">Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parameters.map((param, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                          {param.name}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {param.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs font-mono text-muted-foreground">
                          {param.default}
                        </code>
                      </TableCell>
                      <TableCell className="text-sm">{param.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Enhanced Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle>Color Options</CardTitle>
              <CardDescription>
                Comprehensive color palette with semantic colors, hex codes, and special effects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Basic Colors</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-red-500"></div>
                      <span>red, blue, green</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-yellow-500"></div>
                      <span>yellow, orange, purple</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-pink-500"></div>
                      <span>pink, cyan, gray</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Semantic Colors</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-green-500"></div>
                      <span>success, error</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-500"></div>
                      <span>warning, info</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-purple-500"></div>
                      <span>primary, secondary</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Brand Colors</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-gray-900"></div>
                      <span>github</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-400"></div>
                      <span>twitter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-600"></div>
                      <span>linkedin</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Special Effects</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-gradient-to-r from-green-400 to-blue-500"></div>
                      <span>neon (glowing)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-gradient-to-r from-pink-500 to-violet-500"></div>
                      <span>cyberpunk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-gradient-to-r from-yellow-400 to-red-500"></div>
                      <span>retro</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Hex Color Examples</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm font-mono">
                  <div>%23FF5733 (Red-Orange)</div>
                  <div>%23667eea (Blue Gradient)</div>
                  <div>%23764ba2 (Purple Gradient)</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Note: URL encode hex colors (# becomes %23)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Advanced Configuration Examples
              </CardTitle>
              <CardDescription>
                Real-world examples showcasing advanced features and customization options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {advancedExamples.map((example, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{example.title}</h4>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(example.code, 1000 + index)}
                    >
                      {copiedIndex === 1000 + index ? "Copied!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src={example.url}
                      alt={example.title}
                      className="h-auto max-w-full"
                      loading="lazy"
                    />
                  </div>
                  <pre className="bg-muted p-3 rounded text-xs overflow-x-auto font-mono">
{example.code}
                  </pre>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Enhanced Use Cases Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Use Cases & Applications</h3>
          <p className="text-muted-foreground">
            Discover how Waveify loaders can enhance your projects across different scenarios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{useCase.icon}</span>
                    <span className="text-lg">{useCase.title}</span>
                  </CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Best Practices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-blue-500/20"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Best Practices & Guidelines
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              GitHub README Usage
            </h4>
            <p className="text-muted-foreground">
              Use status loaders like 'coming-soon' or 'work-in-progress' for clear project communication. 
              Keep dimensions reasonable (width: 200-400px) for optimal mobile viewing.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Performance Optimization
            </h4>
            <p className="text-muted-foreground">
              Choose appropriate animation speeds (1-3s) and sizes (&lt;200px) for fast loading. 
              Use reduced motion parameters for accessibility compliance.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Accessibility First
            </h4>
            <p className="text-muted-foreground">
              Always include descriptive alt text and consider users with motion sensitivities. 
              Use high contrast colors and semantic color choices.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Brand Consistency
            </h4>
            <p className="text-muted-foreground">
              Match loader colors to your project branding and maintain consistent styles 
              across repositories for professional appearance.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Context Appropriateness
            </h4>
            <p className="text-muted-foreground">
              Select loader types that match your content context. Use scientific loaders 
              for research projects, neon effects for gaming, etc.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Future-Proofing
            </h4>
            <p className="text-muted-foreground">
              Use semantic parameters and avoid hardcoded values. Consider how loaders 
              will appear in both light and dark themes.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white/10 dark:bg-black/10 rounded-lg border border-white/20">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Accessibility className="w-4 h-4" />
            Accessibility Features
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Automatic reduced motion support with prefers-reduced-motion</li>
            <li>• High contrast mode compatibility</li>
            <li>• Screen reader friendly ARIA labels</li>
            <li>• Semantic color choices for better comprehension</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
