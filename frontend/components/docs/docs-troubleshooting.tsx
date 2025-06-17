"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { AlertTriangle, HelpCircle, RefreshCw, ExternalLink, ChevronDown, CheckCircle } from "lucide-react"
import { useState } from "react"

export function DocsTroubleshooting() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (item: string) => {
    setOpenItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }

  const commonIssues = [
    {
      id: "not-loading",
      category: "Loading Issues",
      severity: "high",
      title: "Image Not Loading or Showing Broken Link",
      symptoms: ["Image shows as broken link", "Alt text displayed instead of image", "404 error in browser"],
      causes: [
        "Incorrect URL formatting",
        "Special characters not URL encoded",
        "API endpoint temporarily unavailable",
        "Network connectivity issues"
      ],
      solutions: [
        {
          step: "Check URL Format",
          description: "Ensure the URL is properly formatted",
          code: "✅ https://waveify.onrender.com/api/wave?color=%23007CF0\n❌ https://waveify.onrender.com/api/wave?color=#007CF0"
        },
        {
          step: "URL Encode Special Characters",
          description: "Convert # to %23, spaces to +, etc.",
          code: "# becomes %23\n+ becomes %2B\n& becomes %26"
        },
        {
          step: "Test Direct URL",
          description: "Open the URL directly in your browser to verify it works",
          code: "Right-click image → 'Open image in new tab'"
        },
        {
          step: "Check API Status",
          description: "Verify the API is operational",
          code: "Visit: https://waveify.onrender.com/health"
        }
      ]
    },
    {
      id: "wrong-colors",
      category: "Display Issues",
      severity: "medium",
      title: "Colors Not Displaying as Expected",
      symptoms: ["Wrong colors showing", "Colors appear washed out", "Default blue color instead of custom"],
      causes: [
        "Incorrect hex color format",
        "Missing # symbol URL encoding",
        "Invalid color codes",
        "Browser color profile differences"
      ],
      solutions: [
        {
          step: "Verify Hex Format",
          description: "Use 6-digit hex codes with proper encoding",
          code: "✅ color=%23FF5733 (encodes #FF5733)\n❌ color=#FF5733\n❌ color=red"
        },
        {
          step: "Test Color Codes",
          description: "Verify your hex code in a color picker",
          code: "Use online tools like colorpicker.com or developer tools"
        },
        {
          step: "Check Color Profiles",
          description: "Colors may appear different on various displays",
          code: "Test on multiple devices and browsers"
        }
      ]
    },
    {
      id: "animation-issues",
      category: "Animation Issues",
      severity: "medium",
      title: "Animations Not Playing or Stuttering",
      symptoms: ["Static image instead of animation", "Choppy or stuttering animation", "Animation stops playing"],
      causes: [
        "Browser doesn't support SVG animations",
        "Reduced motion settings enabled",
        "Performance issues",
        "Incorrect speed parameters"
      ],
      solutions: [
        {
          step: "Check Browser Support",
          description: "Ensure browser supports SVG animations",
          code: "Modern browsers (Chrome, Firefox, Safari, Edge) support SVG animations"
        },
        {
          step: "Verify Speed Parameter",
          description: "Use reasonable speed values",
          code: "✅ speed=2 (2 seconds)\n✅ speed=4 (4 seconds)\n❌ speed=0.1 (too fast)"
        },
        {
          step: "Test Reduced Motion",
          description: "Check if system has reduced motion enabled",
          code: "System Preferences → Accessibility → Reduce Motion"
        }
      ]
    },
    {
      id: "github-markdown",
      category: "GitHub Issues",
      severity: "medium",
      title: "Not Displaying Properly in GitHub README",
      symptoms: ["Works in browser but not in GitHub", "Markdown not rendering", "Image too large or small"],
      causes: [
        "GitHub markdown restrictions",
        "Caching issues",
        "Incorrect markdown syntax",
        "Image size issues"
      ],
      solutions: [
        {
          step: "Use Correct Markdown Syntax",
          description: "Follow GitHub markdown standards",
          code: "![Alt Text](https://waveify.onrender.com/api/wave?color=%23007CF0)\n\nNote: Alt text is required for accessibility"
        },
        {
          step: "Clear GitHub Cache",
          description: "Force GitHub to reload the image",
          code: "Add ?v=1 to the end of URL to bypass cache:\n?color=%23007CF0&v=1"
        },
        {
          step: "Optimize Image Size",
          description: "Use appropriate dimensions for README",
          code: "✅ width=800&height=150 (good for headers)\n✅ width=400&height=100 (good for sections)"
        }
      ]
    },
    {
      id: "performance",
      category: "Performance Issues",
      severity: "low",
      title: "Slow Loading or Poor Performance",
      symptoms: ["Images take long to load", "Page feels sluggish", "Multiple requests causing delays"],
      causes: [
        "Too many animated elements",
        "Large image dimensions",
        "Network latency",
        "Browser resource limitations"
      ],
      solutions: [
        {
          step: "Reduce Image Count",
          description: "Use fewer animated elements per page",
          code: "Limit to 2-3 key animations per README"
        },
        {
          step: "Optimize Dimensions",
          description: "Use smaller dimensions when possible",
          code: "width=600&height=120 instead of width=1200&height=240"
        },
        {
          step: "Use Caching",
          description: "Keep URLs consistent to benefit from browser caching",
          code: "Same URL = cached result = faster loading"
        }
      ]
    }
  ]

  const debugSteps = [
    {
      title: "1. Verify Basic Connectivity",
      description: "Check if the Waveify API is accessible",
      actions: [
        "Visit https://waveify.onrender.com/health in your browser",
        "Should return: {\"status\": \"OK\", \"timestamp\": \"...\"}",
        "If this fails, the API is temporarily unavailable"
      ]
    },
    {
      title: "2. Test a Simple URL",
      description: "Start with a minimal, working example",
      actions: [
        "Try: https://waveify.onrender.com/api/wave",
        "This should show a blue animated wave",
        "If this works, your issue is with custom parameters"
      ]
    },
    {
      title: "3. Check URL Encoding",
      description: "Ensure special characters are properly encoded",
      actions: [
        "Replace # with %23 in color codes",
        "Replace spaces with + in text parameters",
        "Use online URL encoder if needed"
      ]
    },
    {
      title: "4. Browser Developer Tools",
      description: "Use browser tools to diagnose issues",
      actions: [
        "Open Developer Tools (F12)",
        "Check Network tab for failed requests",
        "Look for error messages in Console tab"
      ]
    }
  ]

  const quickFixes = [
    {
      problem: "Image shows 'alt text' instead of animation",
      solution: "URL is malformed or API is down",
      fix: "Check URL encoding and test API health endpoint"
    },
    {
      problem: "Wrong colors appearing",
      solution: "Hex color not properly URL encoded",
      fix: "Replace # with %23 in color parameter"
    },
    {
      problem: "Animation not playing",
      solution: "Browser or system settings",
      fix: "Check reduced motion settings and browser support"
    },
    {
      problem: "GitHub not showing image",
      solution: "Markdown syntax or caching issue",
      fix: "Add alt text and try cache-busting parameter"
    },
    {
      problem: "Slow loading performance",
      solution: "Too many or too large images",
      fix: "Reduce count and optimize dimensions"
    }
  ]

  return (
    <section id="troubleshooting" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Troubleshooting</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Common issues and solutions when using Waveify APIs. If you're experiencing problems, 
          start here to quickly resolve them.
        </p>
      </motion.div>

      <Tabs defaultValue="issues" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="issues">Common Issues</TabsTrigger>
          <TabsTrigger value="debugging">Debug Steps</TabsTrigger>
          <TabsTrigger value="quick-fixes">Quick Fixes</TabsTrigger>
        </TabsList>

        <TabsContent value="issues" className="space-y-6">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Click on any issue below to see detailed solutions and debugging steps.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <Collapsible open={openItems.includes(issue.id)} onOpenChange={() => toggleItem(issue.id)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant={issue.severity === "high" ? "destructive" : issue.severity === "medium" ? "secondary" : "outline"}
                            >
                              {issue.severity}
                            </Badge>
                            <div>
                              <CardTitle className="text-lg">{issue.title}</CardTitle>
                              <CardDescription>{issue.category}</CardDescription>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform ${openItems.includes(issue.id) ? 'rotate-180' : ''}`} />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="space-y-6">
                        {/* Symptoms */}
                        <div>
                          <h4 className="font-medium mb-2 text-red-600 dark:text-red-400">Symptoms:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {issue.symptoms.map((symptom, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Causes */}
                        <div>
                          <h4 className="font-medium mb-2">Possible Causes:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {issue.causes.map((cause, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                          <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">Solutions:</h4>
                          <div className="space-y-4">
                            {issue.solutions.map((solution, i) => (
                              <div key={i} className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="outline">{i + 1}</Badge>
                                  <h5 className="font-medium">{solution.step}</h5>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{solution.description}</p>
                                {solution.code && (
                                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                                    <code>{solution.code}</code>
                                  </pre>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="debugging" className="space-y-6">
          <Alert>
            <RefreshCw className="h-4 w-4" />
            <AlertDescription>
              Follow these steps in order to systematically debug any Waveify-related issues.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            {debugSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {step.title}
                    </CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quick-fixes" className="space-y-6">
          <div className="grid gap-4">
            {quickFixes.map((fix, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 dark:text-red-400">
                          ❌ Problem: {fix.problem}
                        </h4>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Likely cause:</strong> {fix.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          ✅ <strong>Quick fix:</strong> {fix.fix}
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
        <h3 className="text-xl font-semibold mb-3">🆘 Still Need Help?</h3>
        <p className="text-muted-foreground mb-4">
          If you're still experiencing issues after trying these solutions, we're here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" asChild>
            <a 
              href="https://github.com/AAYUSH412/Waveify/issues" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Report Issue on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a 
              href="https://github.com/AAYUSH412/Waveify/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ask Community
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
