"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Loader2, Sparkles, Clock } from "lucide-react"
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

  const basicLoaders = [
    {
      name: "Dots",
      description: "Three animated dots - perfect for 'loading...' states",
      type: "dots",
      url: "https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5"
    },
    {
      name: "Spinner",
      description: "Classic rotating circle loader",
      type: "spinner", 
      url: "https://waveify.onrender.com/api/loader?type=spinner&color=green&speed=2&size=30"
    },
    {
      name: "Bars",
      description: "Animated vertical bars",
      type: "bars",
      url: "https://waveify.onrender.com/api/loader?type=bars&color=%23ff6b6b&speed=1.2"
    },
    {
      name: "Pulse",
      description: "Pulsing circle animation",
      type: "pulse",
      url: "https://waveify.onrender.com/api/loader?type=pulse&color=purple&speed=2&size=40"
    },
    {
      name: "Wave",
      description: "Animated wave loader",
      type: "wave",
      url: "https://waveify.onrender.com/api/loader?type=wave&color=cyan&speed=1.8&width=120"
    }
  ]

  const modernLoaders = [
    {
      name: "Gradient",
      description: "Modern gradient progress bar",
      type: "gradient",
      url: "https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=200&height=8"
    },
    {
      name: "Orbit",
      description: "Orbital animation with gradient",
      type: "orbit",
      url: "https://waveify.onrender.com/api/loader?type=orbit&color=%234facfe&speed=2"
    },
    {
      name: "Neon Pulse",
      description: "Neon glowing pulse effect",
      type: "neon-pulse",
      url: "https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1.5"
    },
    {
      name: "Triangles",
      description: "Rotating triangular elements",
      type: "triangles",
      url: "https://waveify.onrender.com/api/loader?type=triangles&color=%23ff9a9e&speed=2"
    },
    {
      name: "Ripple",
      description: "Ripple wave effect",
      type: "ripple",
      url: "https://waveify.onrender.com/api/loader?type=ripple&color=%23764ba2&speed=2.5"
    }
  ]

  const textLoaders = [
    {
      name: "Coming Soon",
      description: "Perfect for upcoming features or projects",
      type: "coming-soon",
      url: "https://waveify.onrender.com/api/loader?type=coming-soon"
    },
    {
      name: "Building",
      description: "Shows project under construction with progress",
      type: "building",
      url: "https://waveify.onrender.com/api/loader?type=building"
    },
    {
      name: "Work in Progress",
      description: "Clear indication of ongoing development",
      type: "work-in-progress",
      url: "https://waveify.onrender.com/api/loader?type=work-in-progress"
    },
    {
      name: "Loading Text",
      description: "Customizable loading text with animated dots",
      type: "loading-text",
      url: "https://waveify.onrender.com/api/loader?type=loading-text&color=%23667eea"
    }
  ]

  const parameters = [
    { name: "type", type: "string", default: "dots", description: "Animation type (see available types below)" },
    { name: "color", type: "string", default: "blue", description: "Animation color (hex codes or color names)" },
    { name: "speed", type: "number", default: "1.5", description: "Animation speed in seconds" },
    { name: "size", type: "number", default: "40", description: "Size in pixels (for circular loaders)" },
    { name: "width", type: "number", default: "100", description: "SVG width in pixels" },
    { name: "height", type: "number", default: "40", description: "SVG height in pixels" },
    { name: "backgroundColor", type: "string", default: "transparent", description: "Background color" }
  ]

  const useCases = [
    {
      title: "Project Status",
      icon: "🚧",
      description: "Show development status in README headers",
      examples: ["Coming Soon sections", "Work in Progress features", "Under Construction pages"]
    },
    {
      title: "Loading States",
      icon: "⏳",
      description: "Indicate dynamic content or async operations",
      examples: ["API loading states", "Data fetching", "Process indicators"]
    },
    {
      title: "Visual Breaks",
      icon: "✨",
      description: "Add visual interest to documentation",
      examples: ["Section dividers", "Transition elements", "Decorative animations"]
    },
    {
      title: "Status Indicators",
      icon: "📊",
      description: "Show real-time project status",
      examples: ["Build status", "Deployment state", "Service health"]
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
          <Loader2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Loader API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Generate loading animations for "Work in Progress" sections, dynamic content, and status indicators. 
          Perfect for GitHub READMEs and project documentation.
        </p>
      </motion.div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Loaders</TabsTrigger>
          <TabsTrigger value="modern">Modern Effects</TabsTrigger>
          <TabsTrigger value="text">Text Loaders</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid gap-6">
            {basicLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{loader.name}</CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline">type={loader.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modern" className="space-y-6">
          <div className="grid gap-6">
            {modernLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{loader.name}</CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="outline">type={loader.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
                        {loader.url}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(loader.url, index + 10)}
                      >
                        {copiedIndex === index + 10 ? "Copied!" : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="text" className="space-y-6">
          <div className="grid gap-6">
            {textLoaders.map((loader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{loader.name}</CardTitle>
                        <CardDescription>{loader.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">GitHub Optimized</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                      <img 
                        src={loader.url}
                        alt={`${loader.name} Loader`}
                        className="h-auto"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Markdown Usage:</h4>
                      <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![${loader.name}](${loader.url})`}
                      </pre>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
                        {loader.url}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(loader.url, index + 20)}
                      >
                        {copiedIndex === index + 20 ? "Copied!" : <Copy className="w-4 h-4" />}
                      </Button>
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
              <CardTitle>URL Parameters</CardTitle>
              <CardDescription>
                Customize your loading animations using these query parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parameters.map((param, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {param.name}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{param.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm">{param.default}</code>
                      </TableCell>
                      <TableCell className="text-sm">{param.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Colors</CardTitle>
              <CardDescription>Color options for loader animations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="space-y-1">
                  <h4 className="font-medium">Basic Colors</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <div>red, green, blue</div>
                    <div>yellow, purple, pink</div>
                    <div>orange, cyan, gray</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Status Colors</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <div>success, error</div>
                    <div>warning, info</div>
                    <div>primary, secondary</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Hex Colors</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <div>%23FF5733</div>
                    <div>%23667eea</div>
                    <div>%23764ba2</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Special</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <div>gradient (auto)</div>
                    <div>neon (glowing)</div>
                    <div>rainbow (multi)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {useCases.map((useCase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{useCase.icon}</span>
                {useCase.title}
              </CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-500/20"
      >
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Loader Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-2">GitHub README Usage</h4>
            <p className="text-muted-foreground">Use text-based loaders like 'coming-soon' or 'work-in-progress' for clear communication in README files.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Performance</h4>
            <p className="text-muted-foreground">Keep loader sizes reasonable (under 200px) for fast loading and better mobile experience.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Accessibility</h4>
            <p className="text-muted-foreground">Always include descriptive alt text that explains the loading state or project status.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Color Choices</h4>
            <p className="text-muted-foreground">Use colors that match your project branding and provide sufficient contrast for visibility.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
