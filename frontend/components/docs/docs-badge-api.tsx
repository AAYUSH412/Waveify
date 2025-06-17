"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Tag, Shield } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsBadgeApi() {
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
      name: "label",
      type: "string",
      default: "Label",
      description: "Left side text of the badge"
    },
    {
      name: "message",
      type: "string", 
      default: "Message",
      description: "Right side text of the badge"
    },
    {
      name: "color",
      type: "string",
      default: "blue", 
      description: "Badge color (blue, green, red, yellow, purple, etc.)"
    },
    {
      name: "style",
      type: "string",
      default: "modern",
      description: "Badge style (modern, gradient, neon, glass, etc.)"
    },
    {
      name: "labelColor",
      type: "string",
      default: "auto",
      description: "Custom color for label section"
    },
    {
      name: "messageColor", 
      type: "string",
      default: "auto",
      description: "Custom color for message section"
    }
  ]

  const badgeExamples = [
    {
      title: "Build Status",
      description: "Show build/CI status",
      url: "https://waveify.onrender.com/api/badge?label=Build&message=Passing&color=green&style=modern",
      useCase: "CI/CD pipelines"
    },
    {
      title: "Version Badge", 
      description: "Display current version",
      url: "https://waveify.onrender.com/api/badge?label=Version&message=v2.1.0&color=blue&style=gradient",
      useCase: "Release tracking"
    },
    {
      title: "License Info",
      description: "Show project license",
      url: "https://waveify.onrender.com/api/badge?label=License&message=MIT&color=yellow&style=neon",
      useCase: "Legal information"
    },
    {
      title: "Download Count",
      description: "Display download stats", 
      url: "https://waveify.onrender.com/api/badge?label=Downloads&message=1.2M&color=purple&style=glass",
      useCase: "Usage metrics"
    },
    {
      title: "Test Coverage",
      description: "Show test coverage percentage",
      url: "https://waveify.onrender.com/api/badge?label=Coverage&message=98%&color=green&style=modern",
      useCase: "Quality metrics"
    },
    {
      title: "Maintenance Status",
      description: "Project maintenance status",
      url: "https://waveify.onrender.com/api/badge?label=Maintained&message=Yes&color=green&style=gradient",
      useCase: "Project health"
    }
  ]

  const styles = [
    { name: "Modern", value: "modern", description: "Clean, flat design" },
    { name: "Gradient", value: "gradient", description: "Beautiful gradient effects" },
    { name: "Neon", value: "neon", description: "Glowing neon appearance" },
    { name: "Glass", value: "glass", description: "Glassmorphism effect" },
    { name: "3D", value: "3d", description: "Three-dimensional appearance" },
    { name: "Minimal", value: "minimal", description: "Ultra-minimal design" }
  ]

  const colors = [
    { name: "Blue", value: "blue", hex: "#007CF0" },
    { name: "Green", value: "green", hex: "#00A86B" },
    { name: "Red", value: "red", hex: "#FF4757" },
    { name: "Yellow", value: "yellow", hex: "#FFA502" },
    { name: "Purple", value: "purple", hex: "#5F27CD" },
    { name: "Orange", value: "orange", hex: "#FF6348" },
    { name: "Pink", value: "pink", hex: "#FF3838" },
    { name: "Cyan", value: "cyan", hex: "#00CED1" }
  ]

  return (
    <section id="badge-custom" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Badge API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Generate modern, unique custom badges with stunning visual effects and animations. 
          Perfect for displaying project status, versions, metrics, and more.
        </p>
      </motion.div>

      {/* Badge Examples */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Popular Badge Examples</h3>
        <div className="grid gap-6">
          {badgeExamples.map((example, index) => (
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
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{example.useCase}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src={example.url}
                      alt={example.title}
                      className="h-auto"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm flex-1 overflow-hidden">
                      {example.url}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(example.url, index)}
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

      {/* Parameters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>URL Parameters</CardTitle>
            <CardDescription>
              Customize your badges using these query parameters
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
      </motion.div>

      {/* Styles and Colors */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Available Styles</CardTitle>
              <CardDescription>Different badge design styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {styles.map((style, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                    <div>
                      <code className="text-sm font-medium">{style.value}</code>
                      <p className="text-xs text-muted-foreground">{style.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Available Colors</CardTitle>
              <CardDescription>Predefined color options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg border">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <code className="text-sm font-medium">{color.value}</code>
                      <p className="text-xs text-muted-foreground">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Complete Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Complete Example</CardTitle>
            <CardDescription>A fully customized badge with all parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
              <img 
                src="https://waveify.onrender.com/api/badge?label=Waveify&message=Awesome&color=purple&style=gradient&labelColor=%23667eea&messageColor=%23764ba2"
                alt="Custom Badge Example"
                className="h-auto"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Markdown:</h4>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Custom Badge](https://waveify.onrender.com/api/badge?label=Waveify&message=Awesome&color=purple&style=gradient&labelColor=%23667eea&messageColor=%23764ba2)`}
              </pre>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Parameters used:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">label=Waveify</Badge>
                <Badge variant="outline">message=Awesome</Badge>
                <Badge variant="outline">color=purple</Badge>
                <Badge variant="outline">style=gradient</Badge>
                <Badge variant="outline">labelColor=%23667eea</Badge>
                <Badge variant="outline">messageColor=%23764ba2</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">🏆 Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground mb-2">Keep It Simple</h4>
            <p>Use clear, concise labels and messages for better readability.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Color Meaning</h4>
            <p>Use green for success, red for errors, blue for info, yellow for warnings.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Consistency</h4>
            <p>Maintain consistent styling across badges in the same project.</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Accessibility</h4>
            <p>Ensure sufficient contrast and don't rely solely on color for information.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
