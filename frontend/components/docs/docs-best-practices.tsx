"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, Lightbulb, Zap, Code, Palette, FileText, Shield } from "lucide-react"

export function DocsBestPractices() {
  const bestPractices = [
    {
      category: "Performance",
      icon: Zap,
      color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
      practices: [
        {
          title: "Optimize Image Sizes",
          description: "Use appropriate width and height parameters to reduce file size",
          example: "?width=800&height=150 instead of default 1200x150",
          type: "do"
        },
        {
          title: "Cache-Friendly URLs",
          description: "Avoid frequently changing parameters to benefit from browser caching",
          example: "Keep consistent colors and sizes across your project",
          type: "do"
        },
        {
          title: "Minimize Animation Speed",
          description: "Don't use extremely fast animations (speed < 1s) as they can be distracting",
          example: "Use speed=2 or higher for professional appearance",
          type: "avoid"
        }
      ]
    },
    {
      category: "Design",
      icon: Palette,
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
      practices: [
        {
          title: "Brand Consistency",
          description: "Use colors that match your project's brand identity",
          example: "Create a color palette and stick to it across all banners",
          type: "do"
        },
        {
          title: "Contrast & Readability",
          description: "Ensure sufficient contrast between text and background",
          example: "Test your banners in both light and dark themes",
          type: "do"
        },
        {
          title: "Visual Hierarchy",
          description: "Use different sizes and styles to create clear information hierarchy",
          example: "Larger waves for headers, smaller badges for status",
          type: "do"
        }
      ]
    },
    {
      category: "Accessibility",
      icon: Shield,
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
      practices: [
        {
          title: "Alt Text",
          description: "Always include descriptive alt text for screen readers",
          example: "![Build Status - Passing](url) not just ![](url)",
          type: "do"
        },
        {
          title: "Motion Sensitivity",
          description: "Consider users with motion sensitivity when using animations",
          example: "Provide static alternatives or slower animations",
          type: "do"
        },
        {
          title: "Color Blindness",
          description: "Don't rely solely on color to convey information",
          example: "Use text labels alongside colored status indicators",
          type: "do"
        }
      ]
    },
    {
      category: "Content",
      icon: FileText,
      color: "from-orange-500/10 to-red-500/10 border-orange-500/20",
      practices: [
        {
          title: "Meaningful Text",
          description: "Use clear, descriptive text that adds value to your README",
          example: "Welcome to MyProject instead of just Welcome",
          type: "do"
        },
        {
          title: "Avoid Overuse",
          description: "Don't overwhelm your README with too many animated elements",
          example: "Use 1-3 key animations rather than animating everything",
          type: "avoid"
        },
        {
          title: "Professional Tone",
          description: "Keep animations professional for business/enterprise projects",
          example: "Subtle waves and clean typography over flashy effects",
          type: "do"
        }
      ]
    }
  ]

  const codeExamples = [
    {
      title: "Centered Header with Proper Alt Text",
      description: "A professional README header with accessibility in mind",
      code: `<div align="center">

![Waveify - Animated SVG Generator](https://waveify.onrender.com/api/wave?color=%23667eea&height=150&speed=3&amplitude=20)

# MyAwesome Project

*Create something amazing with clean, professional animations*

![Typing Animation](https://waveify.onrender.com/api/typing?text=Project%20Status:%20Active&style=modern&speed=100)
![Terminal Status](https://waveify.onrender.com/api/terminal?text=Version:%20v2.1.0&style=modern&color=blue)
![Loader Animation](https://waveify.onrender.com/api/loader?type=dots&color=green&size=24)

</div>`,
      type: "good"
    },
    {
      title: "Balanced Information Hierarchy",
      description: "Using different Waveify components to create clear sections",
      code: `![Project Header](https://waveify.onrender.com/api/wave?color=%23667eea&height=120&speed=4)

# Project Name

![Typing Animation](https://waveify.onrender.com/api/typing/gradient?text=Building+the+future+of+web+development&speed=80&fontSize=18)

## Features

- Feature 1
- Feature 2  
- Feature 3

![Installation Demo](https://waveify.onrender.com/api/typing/terminal?text=npm+install+my-package&prompt=$+&speed=100)

![Wave Divider](https://waveify.onrender.com/api/wave/sine?color=%23764ba2&height=80&speed=5)`,
      type: "good"
    }
  ]

  const commonMistakes = [
    {
      mistake: "Using too many animations",
      solution: "Limit to 2-3 key animated elements per README",
      severity: "medium"
    },
    {
      mistake: "Extremely fast animations (speed < 1s)",
      solution: "Use speed=2 or higher for professional appearance",
      severity: "low"
    },
    {
      mistake: "Missing alt text",
      solution: "Always include descriptive alt text: ![Description](url)",
      severity: "high"
    },
    {
      mistake: "Inconsistent brand colors",
      solution: "Create a color palette and use consistent hex values",
      severity: "medium"
    },
    {
      mistake: "Oversized images",
      solution: "Use appropriate width/height for your content area",
      severity: "low"
    }
  ]

  return (
    <section id="best-practices" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Best Practices</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Guidelines and recommendations for creating professional, accessible, and effective 
          animated content with Waveify APIs.
        </p>
      </motion.div>

      <Tabs defaultValue="guidelines" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="examples">Good Examples</TabsTrigger>
          <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
        </TabsList>

        <TabsContent value="guidelines" className="space-y-8">
          {bestPractices.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`rounded-lg p-6 border ${category.color}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="grid gap-4">
                {category.practices.map((practice, practiceIndex) => (
                  <div key={practiceIndex} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {practice.type === "do" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{practice.title}</h4>
                      <p className="text-sm text-muted-foreground">{practice.description}</p>
                      <div className="bg-muted/50 rounded p-2 text-sm">
                        <strong>Example:</strong> {practice.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          {codeExamples.map((example, index) => (
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
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {example.title}
                      </CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-300">
                      Good Example
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="mistakes" className="space-y-6">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Learn from common mistakes to create better, more professional READMEs.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Badge 
                          variant={mistake.severity === "high" ? "destructive" : mistake.severity === "medium" ? "secondary" : "outline"}
                        >
                          {mistake.severity}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-red-600 dark:text-red-400">
                          ❌ {mistake.mistake}
                        </h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          ✅ {mistake.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20"
      >
        <h3 className="text-xl font-semibold mb-3">💡 Pro Tips</h3>
        <div className="space-y-3 text-sm">
          <div>
            <strong>Test Across Platforms:</strong> Check how your animations look on GitHub, GitLab, and other platforms.
          </div>
          <div>
            <strong>Mobile Responsiveness:</strong> Consider how your animations appear on mobile devices.
          </div>
          <div>
            <strong>Load Time:</strong> SVG animations are lightweight, but multiple large images can still slow loading.
          </div>
          <div>
            <strong>Future-Proof:</strong> Use consistent URL patterns so you can easily update all banners later.
          </div>
        </div>
      </motion.div>
    </section>
  )
}
