"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Waves, ExternalLink, Zap, Sparkles, Info } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface Parameter {
  name: string;
  type: string;
  default: string;
  range: string;
  description: string;
}

interface WaveType {
  name: string;
  endpoint: string;
  description: string;
  url: string;
  features: string[];
}

export function DocsWaveApi() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      toast({
        title: "Copied!",
        description: "URL copied to clipboard",
      })
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      })
    }
  }

  const parameters: Parameter[] = [
    {
      name: "color",
      type: "string",
      default: "#007CF0",
      range: "Any hex color",
      description: "Primary color (URL encoded). Automatically generates complementary gradients. Example: %23ff0000 for red"
    },
    {
      name: "height",
      type: "number",
      default: "150",
      range: "50-500",
      description: "SVG height in pixels. Responsive scaling maintained"
    },
    {
      name: "speed",
      type: "number", 
      default: "4",
      range: "0.5-10",
      description: "Animation duration in seconds. Lower = faster. Recommended: 3-6 for smooth motion"
    },
    {
      name: "width",
      type: "number",
      default: "1200",
      range: "400-2000",
      description: "SVG width in pixels. GitHub README optimized"
    },
    {
      name: "amplitude",
      type: "number",
      default: "20",
      range: "5-100",
      description: "Wave amplitude. Controls vertical wave height"
    },
    {
      name: "frequency",
      type: "number",
      default: "2",
      range: "0.5-8",
      description: "Wave frequency/cycles. Number of wave periods. Recommended: 1-4 for best performance"
    },
    {
      name: "pulseWidth",
      type: "number",
      default: "0.3",
      range: "0.1-0.9",
      description: "Pulse width ratio (pulse waves only). Controls duty cycle percentage"
    }
  ]

  const waveTypes: WaveType[] = [
    {
      name: "Default (Professional)",
      endpoint: "/api/wave",
      description: "Enhanced curved wave with professional visual effects, multi-layered gradients, and ambient backgrounds",
      url: "https://waveify.onrender.com/api/wave?color=%23667eea&height=120&speed=4&amplitude=20&frequency=2",
      features: ["Multi-layered depth", "Professional glow", "Accessibility-compliant", "60fps performance"]
    },
    {
      name: "Sine Wave",
      endpoint: "/api/wave/sine", 
      description: "Mathematically precise sine wave with harmonic overtones and 120-point precision for ultra-smooth curves",
      url: "https://waveify.onrender.com/api/wave/sine?color=%23ff6b6b&height=120&speed=4&amplitude=20&frequency=2",
      features: ["120-point precision", "Harmonic overtones", "Dynamic gradients", "Perfect mathematical accuracy"]
    },
    {
      name: "Square Wave",
      endpoint: "/api/wave/square",
      description: "Modern digital aesthetics with rounded corners, smooth morphing, and professional glow effects",
      url: "https://waveify.onrender.com/api/wave/square?color=%2351cf66&height=120&speed=4&amplitude=20&frequency=2",
      features: ["Digital morphing", "Rounded corners", "Pixel-perfect edges", "Professional glow"]
    },
    {
      name: "Sawtooth Wave",
      endpoint: "/api/wave/sawtooth", 
      description: "Organic sawtooth with Bezier curve control points, smooth motion, and enhanced gradients",
      url: "https://waveify.onrender.com/api/wave/sawtooth?color=%23ffd43b&height=120&speed=4&amplitude=20&frequency=2",
      features: ["Bezier curve control", "Organic motion", "Layered animation", "Enhanced gradients"]
    },
    {
      name: "Triangle Wave",
      endpoint: "/api/wave/triangle",
      description: "Dynamic triangle wave with morphing roundness control and multi-gradient depth system",
      url: "https://waveify.onrender.com/api/wave/triangle?color=%23ff8cc8&height=120&speed=4&amplitude=20&frequency=2",
      features: ["Dynamic morphing", "Roundness control", "Multi-gradient depth", "Natural variation"]
    },
    {
      name: "Pulse Wave", 
      endpoint: "/api/wave/pulse",
      description: "High-performance pulse wave with configurable duty cycle and smooth transitions",
      url: "https://waveify.onrender.com/api/wave/pulse?color=%23845ef7&height=120&speed=4&amplitude=20&frequency=2&pulseWidth=0.3",
      features: ["Configurable pulse width", "Smooth transitions", "Professional gradients", "Perfect for digital themes"]
    },
    {
      name: "Fluid Wave",
      endpoint: "/api/wave/fluid",
      description: "Organic fluid motion with viscosity simulation, natural flow dynamics, and surface tension highlights",
      url: "https://waveify.onrender.com/api/wave/fluid?color=%2339d0d8&height=120&speed=6&amplitude=25&frequency=2",
      features: ["Viscosity simulation", "Natural flow dynamics", "Surface tension", "Turbulence effects"]
    },
    {
      name: "Glitch Wave",
      endpoint: "/api/wave/glitch", 
      description: "Cyberpunk digital distortion with RGB channel separation, real-time glitch effects, and color matrix transformations",
      url: "https://waveify.onrender.com/api/wave/glitch?color=%23fa5252&height=120&speed=1&amplitude=30&frequency=3",
      features: ["RGB channel separation", "Real-time glitch", "Digital artifacts", "High-frequency animation"]
    },
    {
      name: "Plasma Wave",
      endpoint: "/api/wave/plasma",
      description: "Multi-frequency energy waves with plasma effects, rotating radial gradients, and atmospheric depth",
      url: "https://waveify.onrender.com/api/wave/plasma?color=%23ff6b6b&height=120&speed=4&amplitude=25&frequency=2.5",
      features: ["Multi-frequency waves", "Rotating gradients", "Energy effects", "Atmospheric depth"]
    },
    {
      name: "Neon Wave",
      endpoint: "/api/wave/neon",
      description: "Spectacular cyberpunk neon tube with electrical effects, white-hot core, and electrical discharge simulation",
      url: "https://waveify.onrender.com/api/wave/neon?color=%2300ffff&height=120&speed=3&amplitude=25&frequency=2",
      features: ["Multi-layer neon glow", "Electrical discharge", "White-hot core", "Motion blur effects"]
    }
  ]

  return (
    <section id="wave-basic" className="space-y-4 w-full min-w-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full min-w-0"
      >
        <div className="flex items-center gap-2 mb-4">
          <Waves className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Wave API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Generate stunning animated wave patterns with professional-grade visual effects and advanced customization options. 
          From smooth mathematical sine waves to cyberpunk neon effects, create the perfect header for any GitHub repository or project. 
          Each wave features 60fps performance, accessibility compliance, and mobile-responsive design.
        </p>
      </motion.div>

      <div className="w-full min-w-0">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="types">Wave Types</TabsTrigger>
            <TabsTrigger value="parameters">Parameters</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
          </TabsList>

        <TabsContent value="types" className="space-y-6">
          <div className="grid gap-6 w-full min-w-0">
            {waveTypes.map((wave, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className="w-full min-w-0"
              >
                <Card className="w-full min-w-0 overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{wave.name}</CardTitle>
                          {(wave.name.includes("Neon") || wave.name.includes("Plasma") || wave.name.includes("Glitch")) && (
                            <Badge variant="secondary" className="text-xs">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Advanced
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {wave.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-2 font-mono text-xs">
                        {wave.endpoint}
                      </Badge>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {wave.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 w-full">
                      <div className="w-full flex justify-center">
                        <img 
                          src={wave.url}
                          alt={wave.name}
                          className="max-w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full min-w-0">
                      <div className="bg-muted px-2 py-1 rounded text-sm flex-1 min-w-0">
                        <code className="block text-xs break-all">
                          {wave.url}
                        </code>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(wave.url, index)}
                        className="flex-shrink-0"
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

        <TabsContent value="parameters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>URL Parameters</CardTitle>
              <CardDescription>
                Customize your wave animations using these query parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Default</TableHead>
                      <TableHead>Range</TableHead>
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
                          <Badge variant="secondary">{param.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <code className="text-sm">{param.default}</code>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs text-muted-foreground">{param.range}</code>
                        </TableCell>
                        <TableCell className="text-sm">
                          {param.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Encoding</CardTitle>
              <CardDescription>Important note about color parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-sm">
                  <strong>⚠️ Important:</strong> Hex colors must be URL encoded. 
                  Replace <code>#</code> with <code>%23</code>.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">❌ Wrong:</span>
                  <code>color=#ff0000</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅ Correct:</span>
                  <code>color=%23ff0000</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6 w-full min-w-0">
            <Card className="w-full min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle>Professional Header Example</CardTitle>
                <CardDescription>A fully customized wave perfect for GitHub README headers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 w-full">
                  <div className="w-full flex justify-center">
                    <img 
                      src="https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=4&amplitude=30&frequency=2.5&width=1200"
                      alt="Professional Header Wave"
                      className="max-w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full min-w-0">
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <div className="bg-muted p-3 rounded text-sm w-full min-w-0 overflow-hidden">
                    <code className="block text-xs break-all">
                      ![Header Wave](https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=4&amplitude=30&frequency=2.5&width=1200)
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle>Cyberpunk Neon Theme</CardTitle>
                <CardDescription>Perfect for gaming or cyberpunk-themed projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-black rounded-lg p-4 w-full">
                  <div className="w-full flex justify-center">
                    <img 
                      src="https://waveify.onrender.com/api/wave/neon?color=%2300ffff&height=160&speed=3&amplitude=25&frequency=2&width=800"
                      alt="Cyberpunk Neon Wave"
                      className="max-w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full min-w-0">
                  <h4 className="text-sm font-medium mb-2">URL:</h4>
                  <div className="bg-muted p-3 rounded text-sm w-full min-w-0 overflow-hidden">
                    <code className="block text-xs break-all">
                      https://waveify.onrender.com/api/wave/neon?color=%2300ffff&height=160&speed=3&amplitude=25&frequency=2&width=800
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Multi-layer glow</Badge>
                    <Badge variant="outline">Electrical effects</Badge>
                    <Badge variant="outline">Motion blur</Badge>
                    <Badge variant="outline">White-hot core</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle>Energy Plasma Wave</CardTitle>
                <CardDescription>Multi-frequency energy effects for sci-fi themes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 w-full">
                  <div className="w-full flex justify-center">
                    <img 
                      src="https://waveify.onrender.com/api/wave/plasma?color=%23ff6b6b&height=150&speed=4&amplitude=28&frequency=2.5&width=800"
                      alt="Energy Plasma Wave"
                      className="max-w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full min-w-0">
                  <h4 className="text-sm font-medium mb-2">Parameters used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">color=%23ff6b6b</Badge>
                    <Badge variant="outline">height=150</Badge>
                    <Badge variant="outline">speed=4</Badge>
                    <Badge variant="outline">amplitude=28</Badge>
                    <Badge variant="outline">frequency=2.5</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="best-practices" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <CardTitle>Performance Optimization</CardTitle>
                </div>
                <CardDescription>Tips for optimal performance and loading times</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Optimal Dimensions</h4>
                      <p className="text-sm text-muted-foreground">Use width=1200 and height=150-200 for README headers</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">width=1200&height=150</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Animation Speed</h4>
                      <p className="text-sm text-muted-foreground">Use speed=3-6 for smooth, readable animations</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">speed=4 (recommended)</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Frequency Control</h4>
                      <p className="text-sm text-muted-foreground">Keep frequency=1-4 for best performance and visual appeal</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">frequency=2-3 (optimal)</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <CardTitle>Professional Color Schemes</CardTitle>
                </div>
                <CardDescription>Curated color palettes for different project themes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Corporate/Business</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#667eea"}}></div>
                        <code className="text-xs">%23667eea</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#8B5CF6"}}></div>
                        <code className="text-xs">%238B5CF6</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#6B7280"}}></div>
                        <code className="text-xs">%236B7280</code>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tech/Development</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#28a745"}}></div>
                        <code className="text-xs">%2328a745</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#06B6D4"}}></div>
                        <code className="text-xs">%2306B6D4</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#0ea5e9"}}></div>
                        <code className="text-xs">%230ea5e9</code>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Creative/Gaming</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#f97316"}}></div>
                        <code className="text-xs">%23f97316</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#ec4899"}}></div>
                        <code className="text-xs">%23ec4899</code>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: "#a855f7"}}></div>
                        <code className="text-xs">%23a855f7</code>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <CardTitle>Wave Type Selection Guide</CardTitle>
                </div>
                <CardDescription>Choose the right wave type for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="grid gap-2">
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Default Wave</span>
                      <span className="text-muted-foreground">Professional headers, business presentations</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Sine Wave</span>
                      <span className="text-muted-foreground">Mathematical/scientific projects, clean aesthetics</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Square Wave</span>
                      <span className="text-muted-foreground">Tech/digital projects, coding portfolios</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Fluid Wave</span>
                      <span className="text-muted-foreground">Organic/natural themes, creative projects</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Glitch Wave</span>
                      <span className="text-muted-foreground">Gaming, cyberpunk, digital art projects</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Neon Wave</span>
                      <span className="text-muted-foreground">Cyberpunk aesthetics, night themes, gaming</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="font-medium">Plasma Wave</span>
                      <span className="text-muted-foreground">Energy themes, sci-fi projects, gaming</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">🎨 Interactive Wave Generator</h3>
            <p className="text-muted-foreground mb-4">
              Want to experiment with different wave styles visually? Try our interactive generator with real-time previews, 
              color pickers, and instant code generation. Perfect for finding the exact look you want before implementing.
            </p>
            <div className="flex gap-3">
              <Button asChild variant="default" className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
                <a href="/generator/wave" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Wave Generator
                </a>
              </Button>
              <Button asChild variant="outline" className="border-blue-500/20">
                <a href="/docs" target="_blank" rel="noopener noreferrer">
                  <Info className="w-4 h-4 mr-2" />
                  Full API Docs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
