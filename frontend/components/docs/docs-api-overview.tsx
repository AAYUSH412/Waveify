"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Code, Globe, Zap, Shield } from "lucide-react"

export function DocsApiOverview() {
  const endpoints = [
    {
      endpoint: "/api/wave",
      method: "GET",
      description: "Generate animated wave patterns",
      params: "color, height, speed, amplitude, frequency"
    },
    {
      endpoint: "/api/typing",
      method: "GET", 
      description: "Create typing animations",
      params: "text, speed, color, fontSize, cursor"
    },
    {
      endpoint: "/api/health",
      method: "GET",
      description: "API health check",
      params: "none"
    }
  ]

  const features = [
    {
      icon: Globe,
      title: "RESTful Design",
      description: "Clean, predictable API endpoints following REST principles"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized SVG generation with caching for fast responses"
    },
    {
      icon: Shield,
      title: "CORS Enabled",
      description: "Cross-origin requests supported for GitHub embedding"
    },
    {
      icon: Code,
      title: "URL Parameters",
      description: "All customization through simple query parameters"
    }
  ]

  return (
    <section id="api-overview" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">API Overview</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          The Waveify API is built on REST principles with a simple, predictable structure. 
          All endpoints return SVG content that can be embedded directly in markdown.
        </p>
      </motion.div>

      {/* API Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Base URL and Authentication */}
      <Tabs defaultValue="base-url" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="base-url">Base URL</TabsTrigger>
          <TabsTrigger value="auth">Authentication</TabsTrigger>
          <TabsTrigger value="rate-limits">Rate Limits</TabsTrigger>
        </TabsList>
        
        <TabsContent value="base-url" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Base URL</CardTitle>
              <CardDescription>All API requests should be made to this base URL</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">https://waveify.onrender.com/api</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Example: <code>https://waveify.onrender.com/api/wave?color=%23007CF0</code>
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="auth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Current authentication requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Public API</Badge>
                  <span className="text-sm">No authentication required</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Waveify API is currently public and doesn't require any authentication. 
                  Simply make GET requests to the endpoints with your desired parameters.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rate-limits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rate Limits</CardTitle>
              <CardDescription>API usage limits and guidelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">100 requests</Badge>
                  <span className="text-sm">per 15 minutes per IP</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Current rate limits are generous for normal usage. If you need higher limits for 
                  enterprise use, please contact us.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Endpoints Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Available Endpoints</CardTitle>
            <CardDescription>Complete list of API endpoints and their purposes</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Key Parameters</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {endpoints.map((endpoint, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        {endpoint.endpoint}
                      </code>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{endpoint.method}</Badge>
                    </TableCell>
                    <TableCell>{endpoint.description}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {endpoint.params}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
