"use client"

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { api } from '@/lib/api'
import type { LoaderConfig } from '@/components/generator-components/shared/types'
import { LoaderControls } from './loader-controls'
import { LoaderPreview } from './loader-preview'
import { LoaderPresets } from './loader-presets'
import { CodeOutput, CopyButton } from '../shared/components'
import { useToast } from '@/hooks/use-toast'
import { Download } from 'lucide-react'

const defaultConfig: LoaderConfig = {
  type: 'spinner',
  color: '#007CF0',
  size: 40,
  speed: 1,
  width: 100,
  height: 100
}

export function LoaderGenerator() {
  const [config, setConfig] = useState<LoaderConfig>(defaultConfig)
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const [outputFormat, setOutputFormat] = useState<'markdown' | 'html' | 'url'>('markdown')
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const updateConfig = useCallback((updates: Partial<LoaderConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig)
    toast({
      title: "Settings Reset",
      description: "Loader configuration has been reset to defaults."
    })
  }, [toast])

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
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

  const handleCopyOutput = useCallback(() => {
    const outputCode = getOutputCode()
    copyToClipboard(outputCode)
  }, [copyToClipboard, outputFormat])

  const downloadSVG = useCallback(async (url: string) => {
    try {
      const response = await fetch(url)
      const svgText = await response.text()
      const blob = new Blob([svgText], { type: 'image/svg+xml' })
      const downloadUrl = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'loader.svg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(downloadUrl)
      
      toast({
        description: "Loader downloaded successfully!"
      })
    } catch (error) {
      toast({
        description: "Failed to download loader",
        variant: "destructive"
      })
    }
  }, [toast])

  // Generate URLs and code
  const url = useMemo(() => api.generateLoader(config), [config])
  const markdownCode = useMemo(() => `![Loading Animation](${url})`, [url])
  const htmlCode = useMemo(() => `<img src="${url}" alt="Loading Animation" />`, [url])

  const getOutputCode = () => {
    switch (outputFormat) {
      case 'markdown':
        return markdownCode
      case 'html':
        return htmlCode
      case 'url':
        return url
      default:
        return markdownCode
    }
  }

  const handlePresetSelect = useCallback((preset: LoaderConfig) => {
    setConfig(preset)
    toast({
      title: "Preset Applied",
      description: "Loader configuration updated successfully."
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
                  LOADER
                </Badge>
                Loader Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customize" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customize" className="mt-6">
                  <LoaderControls 
                    config={config} 
                    onUpdate={updateConfig}
                    onReset={resetConfig}
                  />
                </TabsContent>

                <TabsContent value="presets" className="mt-6">
                  <LoaderPresets onSelect={handlePresetSelect} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Enhanced Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <LoaderPreview 
                url={url}
                config={config} 
                isLoading={isPreviewLoading}
                outputCode={getOutputCode()}
                outputFormat={outputFormat}
                onOutputFormatChange={setOutputFormat}
                onCopy={handleCopyOutput}
                copied={copied}
                onConfigUpdate={updateConfig}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
