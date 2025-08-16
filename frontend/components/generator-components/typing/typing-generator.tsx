"use client"

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Download } from 'lucide-react'
import { api } from '@/lib/api'
import type { TypingConfig } from '@/components/generator-components/shared/types'
import { TypingControls } from './typing-controls'
import { TypingPreview } from './typing-preview'
import { TypingPresets } from './typing-presets'
import { CodeOutput, CopyButton } from '../shared/components'
import { useToast } from '@/hooks/use-toast'

const defaultConfig: TypingConfig = {
  text: 'Welcome to my project',
  speed: 50,
  color: '#000000',
  backgroundColor: '#ffffff',
  fontSize: 20,
  fontFamily: 'monospace',
  width: 400,
  height: 60,
  cursor: true,
  cursorColor: '#000000',
  type: 'classic',
  prompt: ''
}

export function TypingGenerator() {
  const [config, setConfig] = useState<TypingConfig>(defaultConfig)
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [outputFormat, setOutputFormat] = useState<'markdown' | 'html' | 'url'>('markdown')
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const updateConfig = useCallback((updates: Partial<TypingConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig)
    toast({
      title: "Settings Reset",
      description: "Typing configuration has been reset to defaults."
    })
  }, [toast])

  const url = useMemo(() => api.generateTyping(config, config.type), [config])
  const markdownCode = useMemo(() => api.generateMarkdown('typing', url, 'Typing Animation'), [url])
  const htmlCode = useMemo(() => api.generateHTML(url, 'Typing Animation'), [url])

  const copyToClipboard = useCallback(async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard.`
      })
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      })
    }
  }, [toast])

  const downloadSVG = useCallback(() => {
    const link = document.createElement('a')
    link.href = url
    link.download = 'typing.svg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast({
      title: "Download Started",
      description: "Your typing animation is being downloaded."
    })
  }, [url, toast])

  const handlePresetSelect = useCallback((preset: TypingConfig) => {
    setConfig(preset)
    toast({
      title: "Preset Applied",
      description: "Typing configuration updated successfully."
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
                  TYPING
                </Badge>
                Typing Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customize" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customize" className="mt-6">
                  <TypingControls 
                    config={config} 
                    onUpdate={updateConfig}
                    onReset={resetConfig}
                  />
                </TabsContent>

                <TabsContent value="presets" className="mt-6">
                  <TypingPresets onSelect={handlePresetSelect} />
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
              <TypingPreview 
                url={url}
                config={config}
                isLoading={isPreviewLoading}
                outputCode={outputFormat === 'markdown' ? markdownCode : outputFormat === 'html' ? htmlCode : url}
                outputFormat={outputFormat}
                onOutputFormatChange={setOutputFormat}
                onCopy={() => {
                  const code = outputFormat === 'markdown' ? markdownCode : outputFormat === 'html' ? htmlCode : url
                  copyToClipboard(code, outputFormat.toUpperCase())
                }}
                copied={copied}
                onConfigUpdate={updateConfig}
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
                <CopyButton 
                  text={url} 
                  onCopy={() => copyToClipboard(url, 'URL')}
                  copied={copiedText === url}
                >
                  Copy URL
                </CopyButton>
                <Button 
                  variant="outline" 
                  onClick={downloadSVG}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download SVG
                </Button>
              </div>

              <div className="space-y-4">
                <CodeOutput 
                  code={markdownCode} 
                  language="markdown"
                  onCopy={() => copyToClipboard(markdownCode, 'Markdown')}
                  copied={copiedText === markdownCode}
                />

                <CodeOutput 
                  code={htmlCode} 
                  language="html"
                  onCopy={() => copyToClipboard(htmlCode, 'HTML')}
                  copied={copiedText === htmlCode}
                />

                <CodeOutput 
                  code={url} 
                  language="text"
                  onCopy={() => copyToClipboard(url, 'URL')}
                  copied={copiedText === url}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
