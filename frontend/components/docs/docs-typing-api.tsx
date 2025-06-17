"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Terminal, Type } from "lucide-react"
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
      description: "Text to animate (URL encoded, use + for spaces)"
    },
    {
      name: "speed",
      type: "number",
      default: "50",
      description: "Typing speed in milliseconds per character"
    },
    {
      name: "color",
      type: "string",
      default: "#000000",
      description: "Text color (URL encoded hex)"
    },
    {
      name: "fontSize",
      type: "number",
      default: "20",
      description: "Font size in pixels"
    },
    {
      name: "cursor",
      type: "boolean",
      default: "true",
      description: "Show blinking cursor"
    },
    {
      name: "width",
      type: "number",
      default: "400",
      description: "SVG width in pixels"
    },
    {
      name: "height",
      type: "number",
      default: "60",
      description: "SVG height in pixels"
    }
  ]

  const typingStyles = [
    {
      name: "Classic",
      endpoint: "/api/typing",
      description: "Traditional typewriter effect",
      url: "https://waveify.onrender.com/api/typing?text=Hello+World&speed=80&color=%23333333"
    },
    {
      name: "Neon",
      endpoint: "/api/typing/neon",
      description: "Glowing neon text effect",
      url: "https://waveify.onrender.com/api/typing/neon?text=CYBER+SECURITY&speed=100&color=%2300ffff"
    },
    {
      name: "Glitch",
      endpoint: "/api/typing/glitch",
      description: "Digital glitch text effect",
      url: "https://waveify.onrender.com/api/typing/glitch?text=SYSTEM+ERROR&speed=60&color=%23ff0040"
    },
    {
      name: "Rainbow",
      endpoint: "/api/typing/rainbow",
      description: "Colorful rainbow text",
      url: "https://waveify.onrender.com/api/typing/rainbow?text=COLORFUL+TEXT&speed=70"
    },
    {
      name: "Matrix",
      endpoint: "/api/typing/matrix",
      description: "Matrix-style green text",
      url: "https://waveify.onrender.com/api/typing/matrix?text=Welcome+to+the+Matrix&speed=90"
    },
    {
      name: "Terminal",
      endpoint: "/api/typing/terminal",
      description: "Terminal/command line style",
      url: "https://waveify.onrender.com/api/typing/terminal?text=npm+install+awesome-project&prompt=user@dev:~$+"
    },
    {
      name: "Gradient",
      endpoint: "/api/typing/gradient",
      description: "Beautiful gradient text",
      url: "https://waveify.onrender.com/api/typing/gradient?text=Beautiful+Gradient&gradientColors=%23ff6b6b,%234ecdc4"
    }
  ]

  return (
    <section id="typing-animations" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Typing API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Create dynamic typing animations with various modern styles and effects. 
          Perfect for showcasing project names, descriptions, or interactive headers.
        </p>
      </motion.div>

      <Tabs defaultValue="styles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="styles">Typing Styles</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="styles" className="space-y-6">
          <div className="grid gap-6">
            {typingStyles.map((style, index) => (
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
                        <CardTitle className="text-lg">{style.name} Typing</CardTitle>
                        <CardDescription>{style.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{style.endpoint}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 overflow-hidden">
                      <img 
                        src={style.url}
                        alt={`${style.name} Typing Animation`}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
                        {style.url}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(style.url, index)}
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
                Customize your typing animations using these query parameters
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
                        <Badge variant="secondary">{param.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm">{param.default}</code>
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
                <CardTitle>Text Encoding</CardTitle>
                <CardDescription>How to format text parameter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>💡 Tip:</strong> Use <code>+</code> for spaces in URLs, or use <code>%20</code>.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✅ Good:</span>
                    <code>text=Hello+World</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✅ Also good:</span>
                    <code>text=Hello%20World</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Parameters</CardTitle>
                <CardDescription>Style-specific parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">prompt</code>
                    <span className="ml-2">Terminal prompt text (terminal style only)</span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">gradientColors</code>
                    <span className="ml-2">Comma-separated colors (gradient style)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Welcome Message</CardTitle>
                <CardDescription>Perfect for README headers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/typing/gradient?text=Welcome+to+my+awesome+project!&speed=60&fontSize=24&gradientColors=%23667eea,%23764ba2"
                    alt="Project Welcome"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Welcome](https://waveify.onrender.com/api/typing/gradient?text=Welcome+to+my+awesome+project!&speed=60&fontSize=24&gradientColors=%23667eea,%23764ba2)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terminal Command Demo</CardTitle>
                <CardDescription>Show installation commands</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/typing/terminal?text=npm+install+my-package&prompt=$+&speed=80&fontSize=16"
                    alt="Terminal Command"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Install](https://waveify.onrender.com/api/typing/terminal?text=npm+install+my-package&prompt=$+&speed=80&fontSize=16)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cyber Security Theme</CardTitle>
                <CardDescription>Perfect for security-related projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/typing/neon?text=SECURE+AUTHENTICATION&speed=90&color=%2300ff88&fontSize=22"
                    alt="Cyber Security"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Security](https://waveify.onrender.com/api/typing/neon?text=SECURE+AUTHENTICATION&speed=90&color=%2300ff88&fontSize=22)`}
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
        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">💡 Creative Ideas</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-2">README Headers</h4>
            <p>Use typing animations for dynamic project introductions and feature highlights.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Command Demos</h4>
            <p>Show installation or usage commands with terminal-style typing effects.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Status Messages</h4>
            <p>Display current project status or build information dynamically.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Branding</h4>
            <p>Create memorable project names with gradient or neon styling.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
