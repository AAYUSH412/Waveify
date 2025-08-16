"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Code, Sparkles, ExternalLink } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function DocsExamples() {
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

  const projectExamples = [
    {
      title: "Full Stack Web App",
      description: "Complete README header for a full-stack application",
      preview: [
        "https://waveify.onrender.com/api/wave?color=%23667eea&height=150&speed=3&amplitude=25",
        "https://waveify.onrender.com/api/typing?text=TaskFlow+-+Project+Management+Made+Easy&speed=60&fontSize=28&style=gradient",
        "https://waveify.onrender.com/api/loader?type=pulse&color=green&text=Build%20Passing",
        "https://waveify.onrender.com/api/terminal?text=Version:%20v2.1.0&style=modern&color=blue"
      ],
      code: `![Header](https://waveify.onrender.com/api/wave?color=%23667eea&height=150&speed=3&amplitude=25)

![Title](https://waveify.onrender.com/api/typing?text=TaskFlow+-+Project+Management+Made+Easy&speed=60&fontSize=28&style=gradient)

<div align="center">

![Build Status](https://waveify.onrender.com/api/loader?type=pulse&color=green&text=Build%20Passing)
![Version](https://waveify.onrender.com/api/terminal?text=Version:%20v2.1.0&style=modern&color=blue)
![License](https://waveify.onrender.com/api/terminal?text=License:%20MIT&style=modern&color=yellow)
![Coverage](https://waveify.onrender.com/api/loader?type=bars&color=green&text=Coverage:%2098%)

</div>`
    },
    {
      title: "Open Source Library",
      description: "Perfect setup for an NPM package or library",
      preview: [
        "https://waveify.onrender.com/api/typing?text=AWESOME+LIBRARY&speed=100&color=%2300ff88&fontSize=32&style=neon",
        "https://waveify.onrender.com/api/wave?color=%2300ff88&height=120&speed=2&amplitude=20",
        "https://waveify.onrender.com/api/loader?type=orbit&color=red&text=NPM%20v1.5.2"
      ],
      code: `![Title](https://waveify.onrender.com/api/typing?text=AWESOME+LIBRARY&speed=100&color=%2300ff88&fontSize=32&style=neon)

![Divider](https://waveify.onrender.com/api/wave?color=%2300ff88&height=120&speed=2&amplitude=20)

## Installation

![Install](https://waveify.onrender.com/api/typing?text=npm+install+awesome-library&style=terminal&speed=80)

<div align="center">

![NPM](https://waveify.onrender.com/api/loader?type=orbit&color=red&text=NPM%20v1.5.2)
![Downloads](https://waveify.onrender.com/api/terminal?text=Downloads:%20125K&style=modern&color=blue)
![Size](https://waveify.onrender.com/api/terminal?text=Size:%2012KB&style=modern&color=green)

</div>`
    },
    {
      title: "Cybersecurity Project",
      description: "Dark theme setup for security-related projects",
      preview: [
        "https://waveify.onrender.com/api/typing?text=CYBER+SECURITY+TOOLKIT&speed=70&color=%23ff0040&fontSize=30&style=glitch",
        "https://waveify.onrender.com/api/wave?color=%23ff0040&height=140&speed=1&amplitude=30&style=glitch",
        "https://waveify.onrender.com/api/loader?type=grid&color=red&text=Security%20Verified"
      ],
      code: `![Title](https://waveify.onrender.com/api/typing?text=CYBER+SECURITY+TOOLKIT&speed=70&color=%23ff0040&fontSize=30&style=glitch)

![Divider](https://waveify.onrender.com/api/wave?color=%23ff0040&height=140&speed=1&amplitude=30&style=glitch)

## Features

![Terminal](https://waveify.onrender.com/api/terminal?text=sudo+python3+security_scan.py+--target+localhost&style=matrix&speed=90)

<div align="center">

![Security](https://waveify.onrender.com/api/loader?type=grid&color=red&text=Security%20Verified)
![Status](https://waveify.onrender.com/api/terminal?text=Status:%20Active&style=modern&color=green)
![Tools](https://waveify.onrender.com/api/terminal?text=Tools:%2050+&style=modern&color=purple)

</div>`
    }
  ]

  const useCases = [
    {
      title: "README Headers",
      icon: "📄",
      description: "Create stunning project introductions",
      items: ["Project titles with typing effects", "Animated wave dividers", "Dynamic status displays"]
    },
    {
      title: "Status Dashboards", 
      icon: "📊",
      description: "Real-time project monitoring",
      items: ["Build status badges", "Coverage indicators", "Version tracking"]
    },
    {
      title: "Personal Profiles",
      icon: "👤", 
      description: "Enhance GitHub profiles",
      items: ["Animated introductions", "Skill showcases", "Contact information"]
    },
    {
      title: "Documentation",
      icon: "📚",
      description: "Interactive documentation",
      items: ["Command demonstrations", "Feature highlights", "Navigation aids"]
    }
  ]

  return (
    <section id="examples" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Examples & Use Cases</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Real-world examples showing how to combine different Waveify APIs to create 
          stunning GitHub README files and project documentation.
        </p>
      </motion.div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Complete Projects</TabsTrigger>
          <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-8">
          {projectExamples.map((example, index) => (
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
                      <CardTitle className="text-xl">{example.title}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">Complete Example</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Preview */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Live Preview:</h4>
                    <div className="bg-muted rounded-lg p-4 space-y-3">
                      {example.preview.map((url, i) => (
                        <div key={i} className="flex items-center justify-center">
                          <img src={url} alt={`Preview ${i + 1}`} className="max-w-full h-auto" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Code */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium">Complete Markdown Code:</h4>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(example.code, index)}
                      >
                        {copiedIndex === index ? (
                          "Copied!"
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy All
                          </>
                        )}
                      </Button>
                    </div>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="use-cases" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{useCase.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{useCase.title}</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Markdown Tips
            </CardTitle>
            <CardDescription>Best practices for embedding Waveify in markdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium mb-1">Center alignment</h4>
              <p className="text-muted-foreground">Wrap images in `&lt;div align="center"&gt;` tags for centering</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Alt text</h4>
              <p className="text-muted-foreground">Always include descriptive alt text for accessibility</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Spacing</h4>
              <p className="text-muted-foreground">Add empty lines between different sections for better readability</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              External Resources
            </CardTitle>
            <CardDescription>Helpful links and tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium mb-1">GitHub Markdown Guide</h4>
              <p className="text-muted-foreground">Official GitHub markdown documentation</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Markdown Editors</h4>
              <p className="text-muted-foreground">Typora, Mark Text, or VS Code for live preview</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Color Picker</h4>
              <p className="text-muted-foreground">Use browser dev tools or online color pickers</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">🚀 Share Your Creations</h3>
        <p className="text-muted-foreground mb-4">
          Created something amazing with Waveify? We'd love to see it! Share your projects with the community 
          and inspire others to create beautiful README files.
        </p>
        <Button asChild variant="outline" className="border-orange-500/20">
          <a href="https://github.com/AAYUSH412/Waveify/discussions" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Share on GitHub Discussions
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
