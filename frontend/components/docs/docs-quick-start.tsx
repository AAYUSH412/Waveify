"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Zap } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsQuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
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

  const examples = [
    {
      title: "Basic Wave",
      description: "Add a simple animated wave to your README",
      markdown: `![Wave](https://waveify.onrender.com/api/wave)`,
      preview: "https://waveify.onrender.com/api/wave"
    },
    {
      title: "Custom Colored Wave",
      description: "Wave with custom color and size",
      markdown: `![Custom Wave](https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=3)`,
      preview: "https://waveify.onrender.com/api/wave?color=%23667eea&height=200&speed=3"
    },
    {
      title: "Typing Animation",
      description: "Dynamic typing effect with custom text",
      markdown: `![Typing](https://waveify.onrender.com/api/typing?text=Welcome+to+my+project&speed=80)`,
      preview: "https://waveify.onrender.com/api/typing?text=Welcome+to+my+project&speed=80"
    }
  ]

  return (
    <section id="quick-start" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Quick Start</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Get started with Waveify in under 2 minutes. Simply copy and paste these URLs into your README.
        </p>
      </motion.div>

      <Alert>
        <ExternalLink className="h-4 w-4" />
        <AlertDescription>
          <strong>Base URL:</strong> <code>https://waveify.onrender.com/api</code>
          <br />
          All Waveify APIs are accessible via this base URL with different endpoints and parameters.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Ready-to-Use Examples</h3>
        
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </div>
                  <Badge variant="outline">Example {index + 1}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Preview */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Preview:</h4>
                  <div className="bg-muted rounded-lg p-4 overflow-hidden">
                    <img 
                      src={example.preview}
                      alt={example.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Markdown Code */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown Code:</h4>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{example.markdown}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(example.markdown, index)}
                    >
                      {copiedIndex === index ? (
                        "Copied!"
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-lg p-6 border border-violet-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">🎯 Pro Tip</h3>
        <p className="text-muted-foreground mb-4">
          Use our interactive generator to customize your animations visually, then copy the generated markdown code.
        </p>
        <Button asChild variant="outline" className="border-violet-500/20">
          <a href="/generator/wave" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Try Interactive Generator
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
