"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Terminal, Monitor, Sparkles, ExternalLink, Zap, Palette, Shield, Settings } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsTerminalApi() {
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

  const terminalThemes = [
    {
      name: "Modern",
      description: "Clean macOS-style terminal with professional styling and subtle animations",
      endpoint: "/terminal",
      category: "Professional",
      features: ["Window controls", "Modern typography", "Subtle shadows", "Smooth animations"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22npm%20install%22%2C%20%22npm%20run%20dev%22%5D&theme=modern&width=700&height=220"
    },
    {
      name: "Professional",
      description: "Corporate-grade design with enhanced typography and accessibility features",
      endpoint: "/terminal/professional",
      category: "Professional",
      features: ["Corporate design", "Enhanced typography", "High contrast", "Accessibility optimized"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22npm%20run%20build%22%2C%20%22npm%20run%20test%22%2C%20%22npm%20run%20deploy%22%5D&theme=professional&width=700&height=220"
    },
    {
      name: "GitHub Dark",
      description: "GitHub dark mode compatible terminal with seamless integration",
      endpoint: "/terminal/github-dark",
      category: "GitHub",
      features: ["GitHub colors", "Dark theme", "README optimized", "Auto theme switching"],
      url: "https://waveify.onrender.com/api/terminal/github-dark?commands=%5B%22git%20clone%20repo.git%22%2C%20%22cd%20repo%22%2C%20%22npm%20install%22%5D&width=700&height=220"
    },
    {
      name: "GitHub Light",
      description: "GitHub light mode compatible terminal with professional styling",
      endpoint: "/terminal/github-light",
      category: "GitHub",
      features: ["GitHub colors", "Light theme", "Professional styling", "README friendly"],
      url: "https://waveify.onrender.com/api/terminal/github-light?commands=%5B%22npm%20test%22%2C%20%22npm%20run%20build%22%5D&width=700&height=220"
    },
    {
      name: "Ocean",
      description: "Deep blue gradients with wave-like effects and calming atmosphere",
      endpoint: "/terminal/ocean",
      category: "Themed",
      features: ["Blue gradients", "Wave effects", "Calming atmosphere", "Smooth transitions"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22docker%20build%20-t%20app%20.%22%2C%20%22docker%20run%20app%22%5D&theme=ocean&width=700&height=220"
    },
    {
      name: "Sunset",
      description: "Warm gradients with golden hour effects and vibrant colors",
      endpoint: "/terminal/sunset",
      category: "Themed",
      features: ["Warm gradients", "Golden hour effects", "Vibrant colors", "Energy vibes"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22yarn%20build%22%2C%20%22yarn%20deploy%22%5D&theme=sunset&width=700&height=220"
    },
    {
      name: "Matrix",
      description: "Matrix-inspired terminal with green glowing text and hacker aesthetic",
      endpoint: "/terminal/matrix", 
      category: "Cyberpunk",
      features: ["Neon green text", "Glow effects", "Hacker aesthetic", "Digital rain vibes"],
      url: "https://waveify.onrender.com/api/terminal/matrix?commands=%5B%22ls%20-la%22%2C%20%22cat%20matrix.txt%22%2C%20%22whoami%22%5D&width=700&height=220"
    },
    {
      name: "Cyberpunk",
      description: "Futuristic cyberpunk terminal with neon colors and glitch effects",
      endpoint: "/terminal/cyberpunk",
      category: "Cyberpunk",
      features: ["Neon glow", "Glitch animations", "Animated borders", "Futuristic vibes"],
      url: "https://waveify.onrender.com/api/terminal/cyberpunk?commands=%5B%22docker%20build%20-t%20app%20.%22%2C%20%22docker%20run%20app%22%5D&width=700&height=220"
    },
    {
      name: "Neon",
      description: "Spectacular neon glow effects with electrical discharge simulation",
      endpoint: "/terminal/neon",
      category: "Cyberpunk",
      features: ["Multi-layer neon glow", "Electrical effects", "High-frequency flutter", "Energy trails"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22npm%20start%22%2C%20%22echo%20%27Server%20running%27%22%5D&theme=neon&width=700&height=220"
    },
    {
      name: "Glass",
      description: "Modern glassmorphism effect with transparency and backdrop blur",
      endpoint: "/terminal/glass",
      category: "Modern",
      features: ["Glass effect", "Backdrop blur", "Modern styling", "Translucent design"],
      url: "https://waveify.onrender.com/api/terminal/glass?commands=%5B%22vercel%20deploy%22%2C%20%22echo%20%27Deployment%20complete!%27%22%5D&width=700&height=220"
    },
    {
      name: "Minimal",
      description: "Clean minimalist design with subtle colors and maximum readability",
      endpoint: "/terminal/minimal",
      category: "Modern",
      features: ["Minimalist design", "High readability", "Subtle colors", "Clean typography"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22pnpm%20install%22%2C%20%22pnpm%20dev%22%5D&theme=minimal&width=700&height=220"
    },
    {
      name: "Monochrome",
      description: "High contrast monochrome design with minimalist black and white aesthetics",
      endpoint: "/terminal/monochrome",
      category: "Classic",
      features: ["High contrast", "Monochrome palette", "Minimalist design", "Timeless style"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22make%20build%22%2C%20%22make%20test%22%5D&theme=monochrome&width=700&height=220"
    },
    {
      name: "Retro",
      description: "Vintage terminal with classic amber text and nostalgic computing vibes",
      endpoint: "/terminal/retro",
      category: "Classic",
      features: ["Vintage amber text", "Classic styling", "Nostalgic vibes", "Retro scanlines"],
      url: "https://waveify.onrender.com/api/terminal/retro?commands=%5B%22ls%20-la%22%2C%20%22cat%20readme.txt%22%5D&width=700&height=220"
    }
  ]

  const parameters = [
    { name: "commands", type: "array/string", default: "[]", description: "Commands to execute (JSON array or comma-separated)" },
    { name: "theme", type: "string", default: "modern", description: "Terminal theme (modern, professional, matrix, cyberpunk, etc.)" },
    { name: "speed", type: "number", default: "50", description: "Typing speed in milliseconds per character" },
    { name: "cursor", type: "boolean", default: "true", description: "Show animated cursor" },
    { name: "prompt", type: "string", default: "$ ", description: "Command prompt string" },
    { name: "width", type: "number", default: "800", description: "Terminal width in pixels" },
    { name: "height", type: "number", default: "400", description: "Terminal height in pixels" },
    { name: "fontSize", type: "number", default: "14", description: "Font size in pixels" },
    { name: "showHeader", type: "boolean", default: "true", description: "Show terminal header with window controls" },
    { name: "title", type: "string", default: "Terminal", description: "Terminal window title" },
    { name: "borderRadius", type: "number", default: "12", description: "Border radius for modern styling (0-20)" },
    { name: "padding", type: "number", default: "16", description: "Internal padding in pixels (4-32)" },
    { name: "lineHeight", type: "number", default: "1.4", description: "Line height for text spacing (1.2-2.0)" },
    { name: "showLineNumbers", type: "boolean", default: "false", description: "Show line numbers in terminal" },
    { name: "enableScanlines", type: "boolean", default: "true", description: "Enable retro scanline effects" },
    { name: "showTimestamp", type: "boolean", default: "false", description: "Show timestamp for each command" },
    { name: "highContrast", type: "boolean", default: "false", description: "Enable high contrast mode for accessibility" },
    { name: "reducedMotion", type: "boolean", default: "false", description: "Reduce animations for accessibility" }
  ]

  const commandTypes = [
    {
      category: "Package Management",
      icon: "📦",
      commands: ["npm install", "yarn add react", "pnpm install --frozen-lockfile", "bun install"],
      simulation: "Shows realistic package installation progress with dependencies and version info"
    },
    {
      category: "Git Operations", 
      icon: "🔧",
      commands: ["git clone repo.git", "git add .", "git commit -m 'update'", "git push origin main"],
      simulation: "Displays commit hashes, branch info, file changes, and push progress"
    },
    {
      category: "Docker Commands",
      icon: "🐳", 
      commands: ["docker build -t app .", "docker run -p 3000:3000 app", "docker ps", "docker compose up"],
      simulation: "Shows build steps, layer information, container startup, and running containers"
    },
    {
      category: "Development",
      icon: "⚡",
      commands: ["npm run dev", "npm run build", "npm test", "yarn dev", "pnpm dev"],
      simulation: "Simulates dev server startup, build process, test execution, and hot reload"
    },
    {
      category: "System Commands",
      icon: "🖥️",
      commands: ["ls -la", "cat package.json", "mkdir project", "cd project", "pwd", "which node"],
      simulation: "Shows file listings, content display, directory operations, and system info"
    },
    {
      category: "Deployment",
      icon: "🚀",
      commands: ["vercel deploy", "netlify deploy --prod", "heroku create app", "railway deploy"],
      simulation: "Displays deployment progress, build logs, URLs, and status updates"
    },
    {
      category: "Database Operations",
      icon: "🗄️",
      commands: ["prisma migrate dev", "npm run db:seed", "mongod --port 27017", "redis-server"],
      simulation: "Shows migration progress, seeding operations, and database server startup"
    },
    {
      category: "Testing & CI/CD",
      icon: "🧪",
      commands: ["jest --coverage", "cypress run", "npm run lint", "github actions run"],
      simulation: "Displays test results, coverage reports, linting output, and CI pipeline status"
    }
  ]

  return (
    <section id="terminal-api" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Terminal API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Create realistic terminal interfaces with animated command sequences and intelligent 
          command simulation. Perfect for showcasing development workflows and command demonstrations.
        </p>
      </motion.div>

      <Tabs defaultValue="themes" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="themes">Terminal Themes</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="commands">Command Types</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="themes" className="space-y-6">
          <div className="grid gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                13 Unique Themes
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Palette className="w-3 h-3" />
                Professional Design
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Accessibility Ready
              </Badge>
            </div>
          </div>

          {/* Group themes by category */}
          {["Professional", "GitHub", "Modern", "Themed", "Cyberpunk", "Classic"].map(category => {
            const categoryThemes = terminalThemes.filter(theme => theme.category === category);
            if (categoryThemes.length === 0) return null;
            
            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{category} Themes</h3>
                  <Badge variant="secondary">{categoryThemes.length}</Badge>
                </div>
                <div className="grid gap-6">
                  {categoryThemes.map((theme, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.05 * index }}
                    >
                      <Card className="overflow-hidden">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                {theme.name} Terminal
                                {theme.category === "GitHub" && <Badge variant="outline" className="text-xs">GitHub Ready</Badge>}
                                {theme.category === "Professional" && <Badge variant="outline" className="text-xs">Enterprise</Badge>}
                              </CardTitle>
                              <CardDescription>{theme.description}</CardDescription>
                            </div>
                            <Badge variant="outline">{theme.endpoint}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="bg-muted rounded-lg p-4 w-full">
                            <div className="w-full flex justify-center">
                              <img 
                                src={theme.url}
                                alt={`${theme.name} Terminal`}
                                className="max-w-full h-auto object-contain border rounded-md shadow-sm"
                                style={{ maxHeight: '300px' }}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {theme.features.map((feature, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 w-full min-w-0">
                            <div className="bg-muted px-2 py-1 rounded text-sm flex-1 min-w-0">
                              <code className="block text-xs break-all">
                                {theme.url}
                              </code>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(theme.url, index)}
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
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="parameters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                URL Parameters
              </CardTitle>
              <CardDescription>
                Customize your terminal animations using these query parameters. All parameters are optional.
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
              <CardTitle>Command Input Formats</CardTitle>
              <CardDescription>Different ways to specify commands in your terminal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">JSON Array (Recommended)</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=["npm install", "npm run dev", "git status"]`}
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Best for complex commands with spaces and special characters</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Comma-Separated String</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=npm install,npm run dev,git status`}
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Simple format for basic commands without spaces</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Pipe-Separated String</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=npm install|npm run dev|git status`}
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Alternative separator for compatibility</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
              <CardDescription>Enhanced accessibility options for better user experience</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">High Contrast Mode</h4>
                <pre className="bg-muted p-2 rounded text-xs">
?highContrast=true
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Increases contrast for better visibility</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Reduced Motion</h4>
                <pre className="bg-muted p-2 rounded text-xs">
?reducedMotion=true
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Reduces animations for motion sensitivity</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Custom Font Size</h4>
                <pre className="bg-muted p-2 rounded text-xs">
?fontSize=16
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Adjustable font size for readability</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Line Height Control</h4>
                <pre className="bg-muted p-2 rounded text-xs">
?lineHeight=1.6
                </pre>
                <p className="text-xs text-muted-foreground mt-1">Better text spacing for readability</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commands" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {commandTypes.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.category}
                    </CardTitle>
                    <CardDescription>{category.simulation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Example Commands:</h4>
                      <ul className="space-y-1">
                        {category.commands.map((cmd, i) => (
                          <li key={i} className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            {cmd}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Stack Development Workflow</CardTitle>
                <CardDescription>Complete development process from project setup to deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal?commands=%5B%22git%20clone%20https%3A//github.com/user/awesome-project.git%22%2C%20%22cd%20awesome-project%22%2C%20%22npm%20install%22%2C%20%22npm%20run%20dev%22%5D&theme=professional&width=800&height=280"
                    alt="Development Workflow"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Development Workflow](https://waveify.onrender.com/api/terminal?commands=["git clone https://github.com/user/awesome-project.git", "cd awesome-project", "npm install", "npm run dev"]&theme=professional&width=800&height=280)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Docker Containerization</CardTitle>
                <CardDescription>Modern container build and deployment process with cyberpunk aesthetics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal/cyberpunk?commands=%5B%22docker%20build%20-t%20myapp%3Alatest%20.%22%2C%20%22docker%20run%20-p%203000%3A3000%20myapp%22%2C%20%22docker%20ps%22%2C%20%22docker%20logs%20myapp%22%5D&width=800&height=280"
                    alt="Docker Development"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Docker Development](https://waveify.onrender.com/api/terminal/cyberpunk?commands=["docker build -t myapp:latest .", "docker run -p 3000:3000 myapp", "docker ps", "docker logs myapp"]&width=800&height=280)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GitHub Integration Terminal</CardTitle>
                <CardDescription>Perfect for GitHub READMEs with automatic theme switching support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal/github-dark?commands=%5B%22npm%20run%20test%20--%20--coverage%22%2C%20%22npm%20run%20build%22%2C%20%22vercel%20deploy%20--prod%22%2C%20%22echo%20%27Deployment%20successful!%27%22%5D&width=800&height=280"
                    alt="GitHub Compatible Terminal"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![GitHub Terminal](https://waveify.onrender.com/api/terminal/github-dark?commands=["npm run test -- --coverage", "npm run build", "vercel deploy --prod", "echo 'Deployment successful!'"]&width=800&height=280)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Database Operations</CardTitle>
                <CardDescription>Modern database management with ocean theme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal?commands=%5B%22prisma%20migrate%20dev%22%2C%20%22npm%20run%20db%3Aseed%22%2C%20%22prisma%20studio%22%5D&theme=ocean&width=800&height=280"
                    alt="Database Operations"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Database Operations](https://waveify.onrender.com/api/terminal?commands=["prisma migrate dev", "npm run db:seed", "prisma studio"]&theme=ocean&width=800&height=280)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI/ML Development Pipeline</CardTitle>
                <CardDescription>Machine learning workflow with neon aesthetics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal?commands=%5B%22python%20-m%20venv%20ml-env%22%2C%20%22source%20ml-env/bin/activate%22%2C%20%22pip%20install%20tensorflow%20numpy%20pandas%22%2C%20%22python%20train_model.py%22%5D&theme=neon&width=800&height=280"
                    alt="AI/ML Pipeline"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![AI/ML Pipeline](https://waveify.onrender.com/api/terminal?commands=["python -m venv ml-env", "source ml-env/bin/activate", "pip install tensorflow numpy pandas", "python train_model.py"]&theme=neon&width=800&height=280)`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Advanced Customization
              </CardTitle>
              <CardDescription>
                Professional-grade customization options for enterprise and advanced use cases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Custom Styling</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>borderRadius</code>
                      <span className="text-muted-foreground">0-20px border radius</span>
                    </div>
                    <div className="flex justify-between">
                      <code>padding</code>
                      <span className="text-muted-foreground">4-32px internal spacing</span>
                    </div>
                    <div className="flex justify-between">
                      <code>lineHeight</code>
                      <span className="text-muted-foreground">1.2-2.0 text spacing</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Enhanced Features</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>showLineNumbers</code>
                      <span className="text-muted-foreground">Line number display</span>
                    </div>
                    <div className="flex justify-between">
                      <code>showTimestamp</code>
                      <span className="text-muted-foreground">Command timestamps</span>
                    </div>
                    <div className="flex justify-between">
                      <code>enableScanlines</code>
                      <span className="text-muted-foreground">Retro CRT effects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Complete Example with All Parameters</h4>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`https://waveify.onrender.com/api/terminal?
commands=["npm install", "npm run dev"]&
theme=professional&
width=900&
height=320&
fontSize=16&
speed=40&
cursor=true&
prompt="→ "&
title="Development Terminal"&
borderRadius=16&
padding=20&
lineHeight=1.5&
showLineNumbers=true&
showTimestamp=true&
highContrast=false&
reducedMotion=false`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance & Optimization</CardTitle>
              <CardDescription>Best practices for optimal performance and user experience</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Performance Tips
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use moderate speeds (40-80ms) for smooth animation</li>
                  <li>• Limit to 5-8 commands per terminal for best UX</li>
                  <li>• Optimize dimensions for your target platform</li>
                  <li>• Cache URLs when possible to reduce server load</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Accessibility Best Practices
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enable highContrast for better visibility</li>
                  <li>• Use reducedMotion for motion-sensitive users</li>
                  <li>• Increase fontSize for better readability</li>
                  <li>• Include descriptive alt text in markdown</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration Examples</CardTitle>
              <CardDescription>Real-world integration patterns and use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">GitHub Actions Integration</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`# .github/workflows/demo.yml
name: Update Terminal Demo
on: [push]
jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Terminal
        run: |
          curl "https://waveify.onrender.com/api/terminal?commands=['npm test', 'npm run build']&theme=github-dark" > terminal.svg`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Documentation Website</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`<!-- Responsive terminal for docs -->
<picture>
  <source media="(max-width: 768px)" 
          srcset="https://waveify.onrender.com/api/terminal?...&width=600">
  <img src="https://waveify.onrender.com/api/terminal?...&width=1000" 
       alt="Terminal Demo">
</picture>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20"
      >
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Monitor className="w-5 h-5" />
          Terminal Pro Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Intelligent Simulation
            </h4>
            <p className="text-muted-foreground">Advanced command detection with realistic outputs including progress bars, file listings, build logs, and deployment status.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <Palette className="w-4 h-4" />
              13 Professional Themes
            </h4>
            <p className="text-muted-foreground">From GitHub-compatible themes to cyberpunk aesthetics, each with carefully crafted color palettes and animations.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Accessibility Ready
            </h4>
            <p className="text-muted-foreground">Built-in high contrast mode, reduced motion support, and customizable font sizes for inclusive design.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Performance Optimized
            </h4>
            <p className="text-muted-foreground">SVG-based rendering for lightning-fast loading, scalability, and minimal bandwidth usage across all devices.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <Settings className="w-4 h-4" />
              Extensive Customization
            </h4>
            <p className="text-muted-foreground">18+ parameters including styling options, accessibility features, and advanced terminal behaviors.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              Modern Dev Tools
            </h4>
            <p className="text-muted-foreground">Support for npm, yarn, pnpm, bun, Docker, Git, CI/CD pipelines, and modern development workflows.</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-background/50 rounded-lg border">
          <h4 className="font-medium mb-2">🎯 Perfect for:</h4>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div>• GitHub README demonstrations</div>
            <div>• Documentation websites</div>
            <div>• Portfolio project showcases</div>
            <div>• Technical blog posts</div>
            <div>• Learning platform tutorials</div>
            <div>• API documentation</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
