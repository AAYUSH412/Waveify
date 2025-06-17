"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Terminal, Monitor, Sparkles, ExternalLink } from "lucide-react"
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
      description: "Clean macOS-style terminal with professional styling",
      endpoint: "/terminal",
      features: ["Window controls", "Modern typography", "Subtle shadows"],
      url: "https://waveify.onrender.com/api/terminal?commands=%5B%22npm%20install%22%2C%20%22npm%20run%20dev%22%5D&theme=modern&width=600&height=200"
    },
    {
      name: "Matrix",
      description: "Matrix-inspired terminal with green glowing text",
      endpoint: "/terminal/matrix", 
      features: ["Neon green text", "Glow effects", "Hacker aesthetic"],
      url: "https://waveify.onrender.com/api/terminal/matrix?commands=%5B%22ls%20-la%22%2C%20%22cat%20matrix.txt%22%2C%20%22whoami%22%5D&width=600&height=200"
    },
    {
      name: "Cyberpunk",
      description: "Futuristic cyberpunk terminal with neon colors",
      endpoint: "/terminal/cyberpunk",
      features: ["Neon glow", "Glitch animations", "Animated borders"],
      url: "https://waveify.onrender.com/api/terminal/cyberpunk?commands=%5B%22docker%20build%20-t%20app%20.%22%2C%20%22docker%20run%20app%22%5D&width=600&height=200"
    },
    {
      name: "Glass",
      description: "Modern glassmorphism effect with transparency",
      endpoint: "/terminal/glass",
      features: ["Glass effect", "Backdrop blur", "Modern styling"],
      url: "https://waveify.onrender.com/api/terminal/glass?commands=%5B%22vercel%20deploy%22%2C%20%22echo%20%27Deployment%20complete!%27%22%5D&width=600&height=200"
    },
    {
      name: "GitHub Dark",
      description: "GitHub dark mode compatible terminal",
      endpoint: "/terminal/github-dark",
      features: ["GitHub colors", "Dark theme", "README optimized"],
      url: "https://waveify.onrender.com/api/terminal/github-dark?commands=%5B%22git%20clone%20repo.git%22%2C%20%22cd%20repo%22%2C%20%22npm%20install%22%5D&width=600&height=200"
    },
    {
      name: "GitHub Light",
      description: "GitHub light mode compatible terminal",
      endpoint: "/terminal/github-light",
      features: ["GitHub colors", "Light theme", "Professional styling"],
      url: "https://waveify.onrender.com/api/terminal/github-light?commands=%5B%22npm%20test%22%2C%20%22npm%20run%20build%22%5D&width=600&height=200"
    }
  ]

  const parameters = [
    { name: "commands", type: "array/string", default: "[]", description: "Commands to execute (JSON array or comma-separated)" },
    { name: "theme", type: "string", default: "modern", description: "Terminal theme (modern, matrix, cyberpunk, etc.)" },
    { name: "speed", type: "number", default: "50", description: "Typing speed in milliseconds per character" },
    { name: "cursor", type: "boolean", default: "true", description: "Show animated cursor" },
    { name: "prompt", type: "string", default: "$ ", description: "Command prompt string" },
    { name: "width", type: "number", default: "800", description: "Terminal width in pixels" },
    { name: "height", type: "number", default: "400", description: "Terminal height in pixels" },
    { name: "fontSize", type: "number", default: "14", description: "Font size in pixels" },
    { name: "showHeader", type: "boolean", default: "true", description: "Show terminal header with window controls" },
    { name: "title", type: "string", default: "Terminal", description: "Terminal window title" }
  ]

  const commandTypes = [
    {
      category: "Package Management",
      icon: "📦",
      commands: ["npm install", "yarn add react", "pnpm install --frozen-lockfile"],
      simulation: "Shows realistic package installation progress with dependencies"
    },
    {
      category: "Git Operations", 
      icon: "🔧",
      commands: ["git clone repo.git", "git add .", "git commit -m 'update'", "git push origin main"],
      simulation: "Displays commit hashes, branch info, and push progress"
    },
    {
      category: "Docker Commands",
      icon: "🐳", 
      commands: ["docker build -t app .", "docker run -p 3000:3000 app", "docker ps"],
      simulation: "Shows build steps, container startup, and running containers"
    },
    {
      category: "Development",
      icon: "⚡",
      commands: ["npm run dev", "npm run build", "npm test"],
      simulation: "Simulates dev server startup, build process, and test execution"
    },
    {
      category: "System Commands",
      icon: "🖥️",
      commands: ["ls -la", "cat package.json", "mkdir project", "cd project"],
      simulation: "Shows file listings, content display, and directory operations"
    },
    {
      category: "Deployment",
      icon: "🚀",
      commands: ["vercel deploy", "netlify deploy --prod", "heroku create app"],
      simulation: "Displays deployment progress, URLs, and status updates"
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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="themes">Terminal Themes</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="commands">Command Types</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="themes" className="space-y-6">
          <div className="grid gap-6">
            {terminalThemes.map((theme, index) => (
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
                        <CardTitle className="text-lg">{theme.name} Terminal</CardTitle>
                        <CardDescription>{theme.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{theme.endpoint}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 overflow-hidden">
                      <img 
                        src={theme.url}
                        alt={`${theme.name} Terminal`}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {theme.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
                        {theme.url}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(theme.url, index)}
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
                Customize your terminal animations using these query parameters
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
              <CardDescription>Different ways to specify commands</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">JSON Array (Recommended)</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=["npm install", "npm run dev", "git status"]`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Comma-Separated String</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=npm install,npm run dev,git status`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Pipe-Separated String</h4>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`?commands=npm install|npm run dev|git status`}
                </pre>
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
                <CardTitle>Development Workflow</CardTitle>
                <CardDescription>Complete development process from git clone to deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal?commands=%5B%22git%20clone%20https%3A//github.com/user/awesome-project.git%22%2C%20%22cd%20awesome-project%22%2C%20%22npm%20install%22%2C%20%22npm%20run%20dev%22%5D&theme=modern&width=700&height=250"
                    alt="Development Workflow"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Development Workflow](https://waveify.onrender.com/api/terminal?commands=["git clone https://github.com/user/awesome-project.git", "cd awesome-project", "npm install", "npm run dev"]&theme=modern&width=700&height=250)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Docker Development</CardTitle>
                <CardDescription>Container build and deployment process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal/cyberpunk?commands=%5B%22docker%20build%20-t%20myapp%3Alatest%20.%22%2C%20%22docker%20run%20-p%203000%3A3000%20myapp%22%2C%20%22docker%20ps%22%5D&width=700&height=250"
                    alt="Docker Development"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Docker Development](https://waveify.onrender.com/api/terminal/cyberpunk?commands=["docker build -t myapp:latest .", "docker run -p 3000:3000 myapp", "docker ps"]&width=700&height=250)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GitHub Compatible Terminal</CardTitle>
                <CardDescription>Optimized for GitHub dark/light mode switching</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/terminal/github-dark?commands=%5B%22npm%20test%20--%20--coverage%22%2C%20%22npm%20run%20build%22%2C%20%22vercel%20deploy%20--prod%22%5D&width=700&height=250"
                    alt="GitHub Compatible Terminal"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![GitHub Terminal](https://waveify.onrender.com/api/terminal/github-dark?commands=["npm test -- --coverage", "npm run build", "vercel deploy --prod"]&width=700&height=250)`}
                  </pre>
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
        className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20"
      >
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Monitor className="w-5 h-5" />
          Terminal Pro Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-2">Intelligent Simulation</h4>
            <p className="text-muted-foreground">Commands are automatically detected and simulated with realistic outputs including progress bars, file listings, and status messages.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">GitHub Integration</h4>
            <p className="text-muted-foreground">Use github-dark/github-light themes for seamless integration with GitHub's automatic theme switching.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Performance Optimized</h4>
            <p className="text-muted-foreground">Terminals are rendered as SVG for fast loading and scalability across all devices and screen sizes.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Accessibility</h4>
            <p className="text-muted-foreground">All terminals include proper alt text and are compatible with screen readers and accessibility tools.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
