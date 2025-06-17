import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import { WaveControls } from './wave-controls'
import { WavePreview } from './wave-preview'
import { WavePresets } from './wave-presets'
import { WaveTypeSelector } from './wave-type-selector'
import { useGenerator } from '../shared'
import { WaveConfig } from '../shared/types'
import { RotateCcw, Undo, Redo, Palette } from 'lucide-react'

export function WaveGenerator() {
  const [activeTab, setActiveTab] = useState('controls')
  const { theme } = useTheme()
  
  const {
    config,
    updateConfig,
    reset,
    undo,
    redo,
    canUndo,
    canRedo,
    subtype,
    setSubtype,
    outputFormat,
    setOutputFormat,
    url,
    outputCode,
    isLoading,
    copy,
    copied
  } = useGenerator('wave')

  const handleWaveTypeSelect = (waveType: string, color: string) => {
    setSubtype(waveType === 'default' ? undefined : waveType)
    updateConfig({ color })
  }

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="h-full flex flex-col lg:flex-row gap-6 p-6">
        {/* Left Panel - Controls */}
        <div className="lg:w-1/3 space-y-6">
          <Card className={`transition-colors ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-800' 
              : 'bg-white border-gray-200'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>Wave Generator</span>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={undo}
                    disabled={!canUndo}
                    className="h-8 w-8 p-0"
                    title="Undo (Ctrl+Z)"
                  >
                    <Undo className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={redo}
                    disabled={!canRedo}
                    className="h-8 w-8 p-0"
                    title="Redo (Ctrl+Y)"
                  >
                    <Redo className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={reset}
                    className="h-8 w-8 p-0"
                    title="Reset to defaults"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
              </CardTitle>
              {subtype && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {subtype.charAt(0).toUpperCase() + subtype.slice(1)} Wave
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
                    selectedType={subtype || 'default'}
                    onTypeSelect={handleWaveTypeSelect}
                    onConfigUpdate={updateConfig}
                  />
                </TabsContent>
                
                <TabsContent value="controls" className="mt-4">
                  <WaveControls
                    config={config as WaveConfig}
                    onUpdate={updateConfig}
                    subtype={subtype}
                    onSubtypeChange={setSubtype}
                  />
                </TabsContent>
                
                <TabsContent value="presets" className="mt-4">
                  <WavePresets
                    onSelect={(presetConfig) => {
                      updateConfig(presetConfig)
                    }}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Preview */}
        <div className="lg:w-2/3">
          <WavePreview
            url={url}
            config={config as WaveConfig}
            isLoading={isLoading}
            outputCode={outputCode}
            outputFormat={outputFormat}
            onOutputFormatChange={setOutputFormat}
            onCopy={copy}
            copied={copied}
          />
        </div>
      </div>
    </div>
  )
}
