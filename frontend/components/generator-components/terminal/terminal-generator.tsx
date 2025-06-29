"use client"

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { api } from '@/lib/api'
import type { TerminalConfig } from '@/lib/api'
import { TerminalControls } from './terminal-controls'
import { TerminalPreview } from './terminal-preview'
import { TerminalPresets } from './terminal-presets'
import { CodeOutput, CopyButton } from '../shared/components'
import { useToast } from '@/hooks/use-toast'
import { Download } from 'lucide-react'

const defaultConfig: TerminalConfig = {
  commands: ['npm install', 'npm run dev', 'echo "Hello World"'],
  theme: 'modern',
  speed: 50,
  cursor: true,
  prompt: '$ ',
  width: 800,
  height: 400,
  fontSize: 14,
  showHeader: true,
  title: 'Terminal',
  githubMode: false,
  commandType: 'auto'
}

export function TerminalGenerator() {
  const [config, setConfig] = useState<TerminalConfig>(defaultConfig)
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const { toast } = useToast()

  const updateConfig = useCallback((updates: Partial<TerminalConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig)
    toast({
      title: "Settings Reset",
      description: "Terminal configuration has been reset to defaults."
    })
  }, [toast])

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        description: "Copied to clipboard!"
      })
    } catch (error) {
      toast({
        description: "Failed to copy to clipboard",
        variant: "destructive"
      })
    }
  }, [toast])

  const downloadSVG = useCallback(async (url: string) => {
    try {
      const response = await fetch(url)
      const svgText = await response.text()
      const blob = new Blob([svgText], { type: 'image/svg+xml' })
      const downloadUrl = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'terminal.svg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(downloadUrl)
      
      toast({
        description: "Terminal downloaded successfully!"
      })
    } catch (error) {
      toast({
        description: "Failed to download terminal",
        variant: "destructive"
      })
    }
  }, [toast])

  const url = api.generateTerminal(config)
  const markdownCode = api.generateMarkdown('terminal', url, 'Terminal Demo')
  const htmlCode = api.generateHTML(url, 'Terminal Demo')

  const handlePresetSelect = useCallback((preset: TerminalConfig) => {
    setConfig(preset)
    toast({
      title: "Preset Applied",
      description: "Terminal configuration updated successfully."
    })
  }, [toast])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  TERMINAL
                </Badge>
                Terminal Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customize" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customize" className="mt-6">
                  <TerminalControls 
                    config={config} 
                    onUpdate={updateConfig}
                    onReset={resetConfig}
                  />
                </TabsContent>

                <TabsContent value="presets" className="mt-6">
                  <TerminalPresets onSelect={handlePresetSelect} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Preview & Export */}
        <div className="space-y-6">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <TerminalPreview 
                config={config} 
                url={url}
                isLoading={isPreviewLoading}
                onLoadingChange={setIsPreviewLoading}
              />
            </CardContent>
          </Card>

          {/* Export */}
          <Card>
            <CardHeader>
              <CardTitle>Export</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <CopyButton text={url} onCopy={() => copyToClipboard(url)}>
                  Copy URL
                </CopyButton>
                <Button variant="outline" onClick={() => downloadSVG(url)} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download SVG
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Markdown</h4>
                  <CodeOutput 
                    code={markdownCode} 
                    language="markdown" 
                    onCopy={() => copyToClipboard(markdownCode)}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">HTML</h4>
                  <CodeOutput 
                    code={htmlCode} 
                    language="html" 
                    onCopy={() => copyToClipboard(htmlCode)}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Direct URL</h4>
                  <CodeOutput 
                    code={url} 
                    language="text" 
                    onCopy={() => copyToClipboard(url)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
