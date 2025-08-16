"use client"

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download, Palette, RotateCcw } from 'lucide-react'
import { api } from '@/lib/api'
import type { WaveConfig, WaveType } from '@/components/generator-components/shared/types'
import { WaveControls } from './wave-controls'
import { WavePreview } from './wave-preview'
import { WavePresets } from './wave-presets'
import { WaveTypeSelector } from './wave-type-selector'
import { CodeOutput, CopyButton } from '../shared/components'
import { useToast } from '@/hooks/use-toast'

const defaultConfig: WaveConfig = {
  color: '#007CF0',
  height: 150,
  speed: 4,
  width: 1200,
  amplitude: 20,
  frequency: 2,
  waveType: 'default'
}

export function WaveGenerator() {
  const [config, setConfig] = useState<WaveConfig>(defaultConfig)
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const [outputFormat, setOutputFormat] = useState<'markdown' | 'html' | 'url'>('markdown')
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('controls')
  const { toast } = useToast()

  const updateConfig = useCallback((updates: Partial<WaveConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig)
    toast({
      title: "Settings Reset",
      description: "Wave configuration has been reset to defaults."
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

  const downloadSVG = useCallback(async (url: string) => {
    try {
      const response = await fetch(url)
      const svgText = await response.text()
      const blob = new Blob([svgText], { type: 'image/svg+xml' })
      const downloadUrl = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `waveify-${config.waveType || 'wave'}-${Date.now()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(downloadUrl)
      
      toast({
        description: "Wave downloaded successfully!"
      })
    } catch (error) {
      toast({
        description: "Failed to download wave",
        variant: "destructive"
      })
    }
  }, [config.waveType, toast])

  // Generate URLs and code - fix for default wave type
  const url = useMemo(() => {
    const subtype = config.waveType === 'default' ? undefined : config.waveType
    return api.generateWave(config, subtype)
  }, [config])
  const markdownCode = useMemo(() => `![Wave Animation](${url})`, [url])
  const htmlCode = useMemo(() => `<img src="${url}" alt="Wave Animation" />`, [url])

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

  const handleCopyOutput = useCallback(() => {
    const outputCode = getOutputCode()
    copyToClipboard(outputCode)
  }, [copyToClipboard, outputFormat])

  const handleWaveTypeSelect = useCallback((waveType: string, color: string) => {
    updateConfig({ 
      waveType: (waveType === 'default' ? undefined : waveType) as WaveType | undefined, 
      color 
    })
  }, [updateConfig])

  const handlePresetSelect = useCallback((preset: WaveConfig) => {
    setConfig(preset)
    toast({
      title: "Preset Applied",
      description: "Wave configuration updated successfully."
    })
  }, [toast])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>Wave Generator</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetConfig}
                    className="gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadSVG(url)}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardTitle>
              {config.waveType && config.waveType !== 'default' && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {config.waveType.charAt(0).toUpperCase() + config.waveType.slice(1)} Wave
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {config.width}×{config.height}
                  </Badge>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="types">Types</TabsTrigger>
                  <TabsTrigger value="controls">Controls</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="types" className="mt-4">
                  <WaveTypeSelector
                    selectedType={config.waveType || 'default'}
                    onTypeSelect={handleWaveTypeSelect}
                    onConfigUpdate={updateConfig}
                  />
                </TabsContent>
                
                <TabsContent value="controls" className="mt-4">
                  <WaveControls
                    config={config}
                    onUpdate={updateConfig}
                    subtype={config.waveType}
                    onSubtypeChange={(waveType) => updateConfig({ waveType: waveType as WaveType | undefined })}
                  />
                </TabsContent>
                
                <TabsContent value="presets" className="mt-4">
                  <WavePresets
                    onSelect={handlePresetSelect}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Generated Code
                <Select value={outputFormat} onValueChange={(value) => setOutputFormat(value as 'markdown' | 'html' | 'url')}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="markdown">Markdown</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="url">Direct URL</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeOutput
                code={getOutputCode()}
                onCopy={handleCopyOutput}
                copied={copied}
                language={outputFormat}
              />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-6">
          <WavePreview
            url={url}
            config={config}
            isLoading={isPreviewLoading}
            outputCode={getOutputCode()}
            outputFormat={outputFormat}
            onOutputFormatChange={setOutputFormat}
            onCopy={handleCopyOutput}
            copied={copied}
          />
        </div>
      </div>
    </div>
  )
}
