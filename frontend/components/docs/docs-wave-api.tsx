"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Waves, ExternalLink } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

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

  const parameters = [
    {
      name: "color",
      type: "string",
      default: "#007CF0",
      description: "Hex color code (URL encoded). Example: %23ff0000 for red"
    },
    {
      name: "height",
      type: "number",
      default: "150",
      description: "SVG height in pixels"
    },
    {
      name: "speed",
      type: "number", 
      default: "4",
      description: "Animation speed in seconds"
    },
    {
      name: "width",
      type: "number",
      default: "1200",
      description: "SVG width in pixels"
    },
    {
      name: "amplitude",
      type: "number",
      default: "20",
      description: "Wave amplitude/height"
    },
    {
      name: "frequency",
      type: "number",
      default: "2",
      description: "Number of wave cycles"
    }
  ]

  const waveTypes = [
    {
      name: "Default (Smooth)",
      endpoint: "/api/wave",
      description: "Smooth, curved wave animation",
      url: "https://waveify.onrender.com/api/wave?color=%23667eea&height=120"
    },
    {
      name: "Sine Wave",
      endpoint: "/api/wave/sine", 
      description: "Mathematical sine wave pattern",
      url: "https://waveify.onrender.com/api/wave/sine?color=%23ff6b6b&height=120"
    },
    {
      name: "Square Wave",
      endpoint: "/api/wave/square",
      description: "Digital square wave pattern",
      url: "https://waveify.onrender.com/api/wave/square?color=%2351cf66&height=120"
    },
    {
      name: "Sawtooth Wave",
      endpoint: "/api/wave/sawtooth", 
      description: "Sharp sawtooth pattern",
      url: "https://waveify.onrender.com/api/wave/sawtooth?color=%23ffd43b&height=120"
    },
    {
      name: "Triangle Wave",
      endpoint: "/api/wave/triangle",
      description: "Triangular wave pattern",
      url: "https://waveify.onrender.com/api/wave/triangle?color=%23ff8cc8&height=120"
    },
    {
      name: "Pulse Wave", 
      endpoint: "/api/wave/pulse",
      description: "Pulse/heartbeat style wave",
      url: "https://waveify.onrender.com/api/wave/pulse?color=%23845ef7&height=120"
    },
    {
      name: "Fluid Wave",
      endpoint: "/api/wave/fluid",
      description: "Organic, fluid motion",
      url: "https://waveify.onrender.com/api/wave/fluid?color=%2339d0d8&height=120"
    },
    {
      name: "Glitch Wave",
      endpoint: "/api/wave/glitch", 
      description: "Digital glitch effects",
      url: "https://waveify.onrender.com/api/wave/glitch?color=%23fa5252&height=120"
    }
  ]

  return (
    <section id="wave-basic" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Waves className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Wave API</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Generate beautiful animated wave patterns with various styles and customization options. 
          Perfect for adding dynamic headers to your GitHub repositories.
        </p>
      </motion.div>

      <Tabs defaultValue="types" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="types">Wave Types</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="types" className="space-y-6">
          <div className="grid gap-6">
            {waveTypes.map((wave, index) => (
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
                        <CardTitle className="text-lg">{wave.name}</CardTitle>
                        <CardDescription>{wave.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{wave.endpoint}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 overflow-hidden">
                      <img 
                        src={wave.url}
                        alt={wave.name}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1">
                        {wave.url}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(wave.url, index)}
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
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Example</CardTitle>
                <CardDescription>A fully customized wave with all parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 overflow-hidden">
                  <img 
                    src="https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=2&amplitude=30&frequency=3&width=800"
                    alt="Custom Wave Example"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown:</h4>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`![Custom Wave](https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=2&amplitude=30&frequency=3&width=800)`}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Parameters used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">color=%23667eea</Badge>
                    <Badge variant="outline">height=200</Badge>
                    <Badge variant="outline">speed=2</Badge>
                    <Badge variant="outline">amplitude=30</Badge>
                    <Badge variant="outline">frequency=3</Badge>
                    <Badge variant="outline">width=800</Badge>
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
        className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">🎨 Interactive Generator</h3>
        <p className="text-muted-foreground mb-4">
          Want to experiment with different wave styles visually? Try our interactive generator to see 
          real-time previews and get the exact code you need.
        </p>
        <Button asChild variant="outline" className="border-blue-500/20">
          <a href="/generator/wave" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Open Wave Generator
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
