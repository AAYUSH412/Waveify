"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Terminal, Type, Sparkles, Zap, Rainbow } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsTypingApi() {
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

  const parameters = [
    {
      name: "text",
      type: "string",
      default: "Welcome to my project",
      description: "Text to animate (URL encoded, use + for spaces). Supports emojis and Unicode characters"
    },
    {
      name: "speed",
      type: "number",
      default: "50",
      description: "Typing speed in milliseconds per character (lower = faster)"
    },
    {
      name: "color",
      type: "string",
      default: "#000000",
      description: "Text color (URL encoded hex). Style-specific defaults apply"
    },
    {
      name: "backgroundColor",
      type: "string", 
      default: "transparent",
      description: "Background color (URL encoded hex or 'transparent')"
    },
    {
      name: "fontSize",
      type: "number",
      default: "20",
      description: "Font size in pixels (range: 12-48 for optimal readability)"
    },
    {
      name: "fontFamily",
      type: "string",
      default: "monospace",
      description: "Font family (monospace, Arial, sans-serif, etc.)"
    },
    {
      name: "cursor",
      type: "boolean",
      default: "true",
      description: "Show blinking cursor animation"
    },
    {
      name: "cursorColor",
      type: "string",
      default: "#000000",
      description: "Cursor color (URL encoded hex)"
    },
    {
      name: "width",
      type: "number",
      default: "400",
      description: "SVG width in pixels (auto-adjusts based on text length)"
    },
    {
      name: "height",
      type: "number",
      default: "60",
      description: "SVG height in pixels"
    },
    {
      name: "prompt",
      type: "string",
      default: "$ ",
      description: "Terminal prompt text (terminal style only)"
    },
    {
      name: "gradientColors",
      type: "array",
      default: "#667eea,#764ba2",
      description: "Comma-separated hex colors for gradient (gradient style only)"
    }
  ]

  const typingStyles = [
    {
      name: "Classic",
      endpoint: "/api/typing",
      description: "Traditional typewriter effect with clean, monospace styling",
      icon: Type,
      url: "https://waveify.onrender.com/api/typing?text=Hello+World+👋&speed=80&color=%23333333&fontSize=22",
      features: ["Smooth character reveal", "Blinking cursor", "Emoji support", "Customizable fonts"]
    },
    {
      name: "Neon",
      endpoint: "/api/typing/neon",
      description: "Cyberpunk-inspired glowing neon text with electric effects",
      icon: Zap,
      url: "https://waveify.onrender.com/api/typing/neon?text=CYBER+SECURITY+🔐&speed=100&color=%2300ffff&fontSize=24",
      features: ["Multi-layer glow", "Electric discharge", "Cyberpunk aesthetics", "Atmospheric effects"]
    },
    {
      name: "Glitch",
      endpoint: "/api/typing/glitch",
      description: "Digital corruption with RGB channel separation and distortion",
      icon: Zap,
      url: "https://waveify.onrender.com/api/typing/glitch?text=SYSTEM+ERROR+⚠️&speed=60&color=%23ff0040&fontSize=22",
      features: ["Digital artifacts", "RGB separation", "Random distortions", "Error aesthetics"]
    },
    {
      name: "Rainbow",
      endpoint: "/api/typing/rainbow",
      description: "Vibrant multi-color animation with smooth color transitions",
      icon: Rainbow,
      url: "https://waveify.onrender.com/api/typing/rainbow?text=COLORFUL+PROJECT+🌈&speed=70&fontSize=24",
      features: ["Smooth color cycling", "HSL color space", "Vibrant gradients", "Eye-catching design"]
    },
    {
      name: "Wave",
      endpoint: "/api/typing/wave",
      description: "Flowing wave motion with organic text movement",
      icon: Type,
      url: "https://waveify.onrender.com/api/typing/wave?text=Flowing+Animation+🌊&speed=85&color=%23007CF0&fontSize=22",
      features: ["Sine wave motion", "Organic flow", "Depth effects", "Natural movement"]
    },
    {
      name: "Matrix",
      endpoint: "/api/typing/matrix",
      description: "Classic Matrix-style green rain effect with digital aesthetics",
      icon: Terminal,
      url: "https://waveify.onrender.com/api/typing/matrix?text=Welcome+to+the+Matrix+💊&speed=90&fontSize=20",
      features: ["Digital rain", "Green monochrome", "Hacker aesthetics", "Code-like styling"]
    },
    {
      name: "Terminal",
      endpoint: "/api/typing/terminal",
      description: "Authentic command-line interface with customizable prompts",
      icon: Terminal,
      url: "https://waveify.onrender.com/api/typing/terminal?text=npm+install+awesome-project&prompt=user@dev:~$+&speed=80&fontSize=18",
      features: ["Custom prompts", "Terminal styling", "Command simulation", "Developer-friendly"]
    },
    {
      name: "Gradient",
      endpoint: "/api/typing/gradient",
      description: "Beautiful gradient transitions with customizable color schemes",
      icon: Sparkles,
      url: "https://waveify.onrender.com/api/typing/gradient?text=Beautiful+Gradient+✨&gradientColors=%23667eea,%234ecdc4,%23764ba2&speed=75&fontSize=24",
      features: ["Multi-color gradients", "Smooth transitions", "Custom color schemes", "Professional look"]
    }
  ]

  return (
    <section id="typing-animations" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Type className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Typing Animation API
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Create dynamic typing animations with modern visual effects and comprehensive emoji support. 
              Perfect for showcasing project names, descriptions, or interactive headers in your GitHub READMEs.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-blue-700 dark:text-blue-300">8 Unique Styles</span>
            </div>
            <p className="text-sm text-muted-foreground">From classic typewriter to cyberpunk neon effects</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-green-700 dark:text-green-300">Emoji Support</span>
            </div>
            <p className="text-sm text-muted-foreground">Full Unicode emoji support with proper rendering</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-purple-700 dark:text-purple-300">60fps Smooth</span>
            </div>
            <p className="text-sm text-muted-foreground">Hardware-accelerated animations for peak performance</p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="styles" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="styles">Animation Styles</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="examples">Use Cases</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="styles" className="space-y-6">
          <div className="grid gap-6">
            {typingStyles.map((style, index) => {
              const IconComponent = style.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{style.name} Typing</CardTitle>
                            <CardDescription className="text-base">{style.description}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs font-mono">
                          {style.endpoint}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-6 w-full border">
                        <div className="w-full flex justify-center">
                          <img 
                            src={style.url}
                            alt={`${style.name} Typing Animation`}
                            className="max-w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {style.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 w-full min-w-0">
                        <div className="bg-muted px-3 py-2 rounded-md text-sm flex-1 min-w-0 border">
                          <code className="block text-xs break-all font-mono">
                            {style.url}
                          </code>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(style.url, index)}
                          className="flex-shrink-0"
                        >
                          {copiedIndex === index ? "Copied!" : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="parameters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                URL Parameters Reference
              </CardTitle>
              <CardDescription>
                Comprehensive parameter guide for customizing your typing animations. All parameters are optional with intelligent defaults.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[140px]">Parameter</TableHead>
                    <TableHead className="w-[100px]">Type</TableHead>
                    <TableHead className="w-[140px]">Default</TableHead>
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
                        <Badge variant="secondary" className="text-xs">
                          {param.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm text-muted-foreground">{param.default}</code>
                      </TableCell>
                      <TableCell className="text-sm">
                        {param.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Text Encoding Guide
                </CardTitle>
                <CardDescription>How to properly format text parameters for URLs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Pro Tips</span>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Use <code>+</code> or <code>%20</code> for spaces</li>
                    <li>• Emojis work directly in URLs</li>
                    <li>• Special characters need URL encoding</li>
                  </ul>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-green-600 font-medium">✅ Good Examples:</span>
                    <div className="mt-1 space-y-1 font-mono text-xs">
                      <div><code>text=Hello+World+👋</code></div>
                      <div><code>text=Welcome%20to%20my%20project</code></div>
                      <div><code>text=API+Documentation+📚</code></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-orange-600 font-medium">⚠️ URL Encode These:</span>
                    <div className="mt-1 space-y-1 font-mono text-xs">
                      <div><code>&amp; → %26</code></div>
                      <div><code># → %23</code></div>
                      <div><code>% → %25</code></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Style-Specific Parameters
                </CardTitle>
                <CardDescription>Special parameters for specific animation styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium mb-1">Terminal Style</div>
                    <code className="bg-background px-2 py-1 rounded text-xs">prompt</code>
                    <span className="ml-2 text-muted-foreground">Custom terminal prompt (default: "$ ")</span>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium mb-1">Gradient Style</div>
                    <code className="bg-background px-2 py-1 rounded text-xs">gradientColors</code>
                    <span className="ml-2 text-muted-foreground">Comma-separated hex colors</span>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium mb-1">Background Control</div>
                    <code className="bg-background px-2 py-1 rounded text-xs">backgroundColor</code>
                    <span className="ml-2 text-muted-foreground">Some styles have optimized defaults</span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Terminal className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-green-700 dark:text-green-300 text-sm">Example</span>
                  </div>
                  <code className="text-xs break-all">
                    /api/typing/gradient?gradientColors=%23ff6b6b,%234ecdc4,%23764ba2
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Project Welcome Headers
                </CardTitle>
                <CardDescription>Perfect for README introductions and project branding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-6 overflow-hidden border">
                  <img 
                    src="https://waveify.onrender.com/api/typing/gradient?text=Welcome+to+my+awesome+project!+🚀&speed=60&fontSize=28&gradientColors=%23667eea,%234ecdc4,%23764ba2"
                    alt="Project Welcome"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      Markdown Usage:
                    </h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto border font-mono">
{`![Welcome](https://waveify.onrender.com/api/typing/gradient?text=Welcome+to+my+awesome+project!+🚀&speed=60&fontSize=28&gradientColors=%23667eea,%234ecdc4,%23764ba2)`}
                    </pre>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>💡 Pro Tip:</strong> Use gradient style with brand colors for professional project headers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Installation Commands
                </CardTitle>
                <CardDescription>Show package installation with terminal styling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-6 overflow-hidden border">
                  <img 
                    src="https://waveify.onrender.com/api/typing/terminal?text=npm+install+my-awesome-package&prompt=user@dev:~$+&speed=80&fontSize=18"
                    alt="Terminal Command"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      Multiple Commands:
                    </h4>
                    <div className="grid gap-2">
                      <pre className="bg-muted p-3 rounded text-xs overflow-x-auto border font-mono">
{`![Install](https://waveify.onrender.com/api/typing/terminal?text=npm+install+my-package&prompt=$+)`}
                      </pre>
                      <pre className="bg-muted p-3 rounded text-xs overflow-x-auto border font-mono">
{`![Usage](https://waveify.onrender.com/api/typing/terminal?text=npm+start&prompt=user@dev:~$+)`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Cybersecurity & Tech Projects
                </CardTitle>
                <CardDescription>Perfect for security, hacking, or tech-focused repositories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-6 overflow-hidden border">
                  <img 
                    src="https://waveify.onrender.com/api/typing/neon?text=SECURE+AUTHENTICATION+SYSTEM+🔐&speed=90&color=%2300ff88&fontSize=24"
                    alt="Cyber Security"
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Matrix Style:</h5>
                    <pre className="bg-muted p-2 rounded text-xs overflow-x-auto border font-mono">
{`![Matrix](https://waveify.onrender.com/api/typing/matrix?text=ACCESSING+DATABASE...&speed=100)`}
                    </pre>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2">Glitch Effect:</h5>
                    <pre className="bg-muted p-2 rounded text-xs overflow-x-auto border font-mono">
{`![Glitch](https://waveify.onrender.com/api/typing/glitch?text=SYSTEM+BREACH+⚠️&speed=60)`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rainbow className="w-5 h-5" />
                  Creative & Design Projects
                </CardTitle>
                <CardDescription>Colorful animations for artistic and creative repositories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-6 overflow-hidden border">
                  <img 
                    src="https://waveify.onrender.com/api/typing/rainbow?text=CREATIVE+DESIGN+PORTFOLIO+🎨&speed=70&fontSize=26"
                    alt="Creative Design"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Wave Animation:</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto border font-mono">
{`![Wave](https://waveify.onrender.com/api/typing/wave?text=Flowing+Animation+🌊&speed=85&color=%23007CF0)`}
                    </pre>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      <strong>🎨 Creative Tip:</strong> Combine different styles for dynamic project sections
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Performance Optimization
                </CardTitle>
                <CardDescription>Best practices for optimal animation performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Recommended Settings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Speed Range:</span>
                        <code className="bg-muted px-2 py-1 rounded">50-120ms</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Font Size:</span>
                        <code className="bg-muted px-2 py-1 rounded">16-32px</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Text Length:</span>
                        <code className="bg-muted px-2 py-1 rounded">5-50 chars</code>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Performance Features</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• Hardware-accelerated CSS animations</div>
                      <div>• Automatic reduced-motion support</div>
                      <div>• Optimized SVG rendering</div>
                      <div>• CDN caching for faster loads</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">🚀 Performance Example</h5>
                  <pre className="text-xs font-mono bg-background p-2 rounded border">
{`// Optimized for GitHub README
https://waveify.onrender.com/api/typing/classic?text=Fast+Loading&speed=80&fontSize=20`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Accessibility & UX
                </CardTitle>
                <CardDescription>Ensuring inclusive design and better user experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Built-in Accessibility</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Respects prefers-reduced-motion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>ARIA labels for screen readers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>High contrast support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Scalable vector graphics</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-3">Design Guidelines</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• Use readable color contrasts</div>
                      <div>• Keep animations smooth (not too fast)</div>
                      <div>• Consider mobile viewports</div>
                      <div>• Test with different themes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Integration Examples
                </CardTitle>
                <CardDescription>Advanced integration patterns and use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">HTML Integration</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto border font-mono">
{`<img src="https://waveify.onrender.com/api/typing/neon?text=Dynamic+Content" 
     alt="Dynamic Content" 
     style="max-width: 100%; height: auto;" />`}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Responsive Design</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto border font-mono">
{`<picture>
  <source media="(max-width: 768px)" 
          srcset="https://waveify.onrender.com/api/typing?fontSize=16&width=300">
  <img src="https://waveify.onrender.com/api/typing?fontSize=24&width=600" 
       alt="Responsive Typing">
</picture>`}
                    </pre>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Dynamic URLs (JavaScript)</h4>
                    <pre className="bg-muted p-3 rounded text-sm overflow-x-auto border font-mono">
{`const baseUrl = 'https://waveify.onrender.com/api/typing/gradient';
const params = new URLSearchParams({
  text: 'Dynamic Project Name',
  gradientColors: '#667eea,#764ba2',
  fontSize: '24'
});
const typingUrl = \`\${baseUrl}?\${params}\`;`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-xl p-8 border border-purple-500/20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Creative Ideas & Use Cases
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Type className="w-4 h-4 text-blue-500" />
              </div>
              <h4 className="font-semibold text-foreground">README Headers</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Create engaging project introductions with gradient or neon styling for immediate visual impact.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-green-500" />
              </div>
              <h4 className="font-semibold text-foreground">Command Demos</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Show installation commands, API usage, or CLI examples with authentic terminal styling.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-500" />
              </div>
              <h4 className="font-semibold text-foreground">Status Updates</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Display project status, build information, or feature announcements dynamically.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Rainbow className="w-4 h-4 text-orange-500" />
              </div>
              <h4 className="font-semibold text-foreground">Brand Identity</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Create memorable project branding with custom colors, emojis, and style consistency.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border/50">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Pro Tip: Style Combinations
          </h4>
          <p className="text-sm text-muted-foreground">
            Mix different typing styles throughout your README - use <strong>gradient</strong> for headers, 
            <strong>terminal</strong> for commands, <strong>neon</strong> for highlights, and <strong>classic</strong> for descriptions.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
