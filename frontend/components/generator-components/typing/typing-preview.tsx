"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'
import { 
  Eye, EyeOff, Download, Share, Maximize, RefreshCw, AlertCircle, 
  Play, Pause, RotateCcw, Settings, Monitor, Smartphone, Tablet,
  Copy, ExternalLink, Image, FileCode, Zap, Palette, Layers,
  BarChart3, Clock, Sparkles, Grid3X3, Maximize2, Minimize2, Type
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import type { TypingConfig } from '@/components/generator-components/shared/types'

interface TypingPreviewProps {
  url: string
  config: TypingConfig
  isLoading: boolean
  outputCode: string
  outputFormat: 'markdown' | 'html' | 'url'
  onOutputFormatChange: (format: 'markdown' | 'html' | 'url') => void
  onCopy: () => void
  copied: boolean
  onConfigUpdate?: (updates: Partial<TypingConfig>) => void
}

interface PreviewState {
  mode: 'typing' | 'readme' | 'social'
  isPlaying: boolean
  showGrid: boolean
  deviceView: 'desktop' | 'tablet' | 'mobile'
  showMetrics: boolean
  quality: 'standard' | 'high' | 'ultra'
}

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  frameRate: number
  memoryUsage: number
  characterCount: number
  estimatedDuration: number
}

export function TypingPreview({ 
  url, 
  config, 
  isLoading, 
  outputCode, 
  outputFormat, 
  onOutputFormatChange, 
  onCopy, 
  copied,
  onConfigUpdate
}: TypingPreviewProps) {
  const [previewState, setPreviewState] = useState<PreviewState>({
    mode: 'typing',
    isPlaying: true,
    showGrid: false,
    deviceView: 'desktop',
    showMetrics: false,
    quality: 'standard'
  })

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    frameRate: 60,
    memoryUsage: 0,
    characterCount: 0,
    estimatedDuration: 0
  })

  // Loading progress simulation
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 15
        })
      }, 100)
      return () => clearInterval(interval)
    } else {
      setLoadingProgress(100)
    }
  }, [isLoading])

  // Calculate typing metrics
  useEffect(() => {
    const text = config.text || 'Welcome to my project'
    const speed = config.speed || 50
    const characterCount = text.length
    const estimatedDuration = (characterCount * speed) / 1000
    
    setPerformanceMetrics(prev => ({
      ...prev,
      characterCount,
      estimatedDuration
    }))
  }, [config.text, config.speed])

  const updatePreviewState = (updates: Partial<PreviewState>) => {
    setPreviewState(prev => ({ ...prev, ...updates }))
  }

  const handleExport = async (format: 'svg' | 'png' | 'jpg') => {
    try {
      if (format === 'svg') {
        // Direct SVG download
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch SVG')
        const svgContent = await response.text()
        
        const blob = new Blob([svgContent], { type: 'image/svg+xml' })
        const downloadUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = `waveify-typing-${config.type || 'classic'}-${Date.now()}.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(downloadUrl)
        
        toast.success('SVG exported successfully!')
      } else {
        // For PNG/JPG conversion (future feature)
        toast.info('PNG/JPG export coming soon!')
      }
    } catch (error) {
      toast.error('Export failed. Please try again.')
      console.error('Export error:', error)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Check out this amazing typing animation!',
      text: `Beautiful ${config.type || 'classic'} typing animation created with Waveify`,
      url: url
    }

    try {
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData)
        toast.success('Shared successfully!')
      } else {
        await navigator.clipboard.writeText(url)
        toast.success('URL copied to clipboard!')
      }
    } catch (error) {
      toast.error('Sharing failed. URL copied to clipboard instead.')
      try {
        await navigator.clipboard.writeText(url)
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError)
      }
    }
  }

  const getDeviceWidth = () => {
    switch (previewState.deviceView) {
      case 'mobile': return 375
      case 'tablet': return 768
      case 'desktop':
      default: return 1200
    }
  }

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Enhanced Preview Card */}
      <Card className="relative overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Enhanced Typing Preview</CardTitle>
              {isLoading && (
                <Badge variant="secondary" className="animate-pulse">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Generating...
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                    >
                      {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Progress Bar */}
          {isLoading && (
            <div className="space-y-2">
              <Progress value={loadingProgress} className="h-1" />
              <p className="text-xs text-muted-foreground">
                Generating {config.type || 'classic'} typing animation... {Math.round(loadingProgress)}%
              </p>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-0">
          <Tabs value={previewState.mode} onValueChange={(value: string) => 
            updatePreviewState({ mode: value as 'typing' | 'readme' | 'social' })
          }>
            <div className="px-6 pb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="typing" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Typing Only
                </TabsTrigger>
                <TabsTrigger value="readme" className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  README Context
                </TabsTrigger>
                <TabsTrigger value="social" className="flex items-center gap-2">
                  <Share className="h-4 w-4" />
                  Social Preview
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="typing" className="mt-0">
              <TypingOnlyPreview 
                url={url} 
                config={config} 
                showGrid={previewState.showGrid}
                isPlaying={previewState.isPlaying}
                fullscreen={isFullscreen}
                deviceWidth={getDeviceWidth()}
                quality={previewState.quality}
                onMetricsUpdate={(metrics) => setPerformanceMetrics(prev => ({ ...prev, ...metrics }))}
              />
            </TabsContent>

            <TabsContent value="readme" className="mt-0">
              <ReadmeContextPreview 
                url={url} 
                config={config} 
                showGrid={previewState.showGrid}
                deviceWidth={getDeviceWidth()}
              />
            </TabsContent>

            <TabsContent value="social" className="mt-0">
              <SocialPreview 
                url={url} 
                config={config} 
                showGrid={previewState.showGrid}
              />
            </TabsContent>
          </Tabs>

          {/* Simplified Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t px-6 pb-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="show-metrics"
                checked={previewState.showMetrics}
                onCheckedChange={(checked) => updatePreviewState({ showMetrics: checked })}
              />
              <Label htmlFor="show-metrics" className="text-sm">Show metrics</Label>
            </div>

            <Select 
              value={previewState.quality} 
              onValueChange={(value: string) => updatePreviewState({ quality: value as 'standard' | 'high' | 'ultra' })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Quality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Quality</SelectItem>
                <SelectItem value="high">High Quality</SelectItem>
                <SelectItem value="ultra">Ultra Quality</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Performance Metrics */}
          {previewState.showMetrics && (
            <div className="border-t px-6 py-4 bg-muted/30">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Performance Metrics
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Load Time</p>
                  <p className="font-mono">{performanceMetrics.loadTime}ms</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Characters</p>
                  <p className="font-mono">{performanceMetrics.characterCount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-mono">{performanceMetrics.estimatedDuration.toFixed(1)}s</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Memory</p>
                  <p className="font-mono">{performanceMetrics.memoryUsage.toFixed(1)}MB</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Enhanced Animation Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Animation Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="sm"
              variant={previewState.isPlaying ? "default" : "outline"}
              onClick={() => updatePreviewState({ isPlaying: !previewState.isPlaying })}
            >
              {previewState.isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
              {previewState.isPlaying ? 'Pause' : 'Play'}
            </Button>

            <Button size="sm" variant="outline" onClick={() => window.location.reload()}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Restart
            </Button>

            <div className="flex items-center space-x-2">
              <Switch
                id="show-grid"
                checked={previewState.showGrid}
                onCheckedChange={(checked) => updatePreviewState({ showGrid: checked })}
              />
              <Label htmlFor="show-grid" className="text-sm">Grid</Label>
            </div>

            <Select value={previewState.deviceView} onValueChange={(value: string) => 
              updatePreviewState({ deviceView: value as 'desktop' | 'tablet' | 'mobile' })
            }>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desktop">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    Desktop
                  </div>
                </SelectItem>
                <SelectItem value="tablet">
                  <div className="flex items-center gap-2">
                    <Tablet className="h-4 w-4" />
                    Tablet
                  </div>
                </SelectItem>
                <SelectItem value="mobile">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Mobile
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" onClick={() => handleExport('svg')}>
                    <Download className="h-4 w-4 mr-1" />
                    SVG
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as SVG</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" onClick={handleShare}>
                    <Share className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share animation URL</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline" onClick={() => window.open(url, '_blank')}>
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Open
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open in new tab</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Code Output */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Code Output
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Select value={outputFormat} onValueChange={onOutputFormatChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="markdown">Markdown</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="url">URL</SelectItem>
              </SelectContent>
            </Select>

            <Button
              size="sm"
              variant="outline"
              onClick={onCopy}
              disabled={!outputCode}
            >
              <Copy className="h-4 w-4 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>

          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto border">
              <code>{outputCode || 'No code generated yet.'}</code>
            </pre>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Copy the code above to use this typing animation in your project</p>
            <p>• Markdown format works great for GitHub READMEs</p>
            <p>• HTML format provides more styling control</p>
            <p>• URL format can be used directly in browsers</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Enhanced Typing-only preview component
function TypingOnlyPreview({ 
  url, 
  config, 
  showGrid, 
  isPlaying,
  fullscreen = false,
  deviceWidth = 1200,
  quality = 'standard',
  onMetricsUpdate
}: { 
  url: string
  config: TypingConfig
  showGrid: boolean
  isPlaying: boolean
  fullscreen?: boolean
  deviceWidth?: number
  quality?: 'standard' | 'high' | 'ultra'
  onMetricsUpdate?: (metrics: any) => void
}) {
  const [blobUrl, setBlobUrl] = useState<string>('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const [error, setError] = useState<string>('')
  const [retryCount, setRetryCount] = useState(0)
  const [loadStartTime, setLoadStartTime] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const { theme } = useTheme()

  // Enhanced theme-aware background
  const getBackgroundStyle = () => {
    const baseStyle = fullscreen 
      ? 'min-h-[60vh] flex items-center justify-center'
      : 'min-h-[120px] flex items-center justify-center'

    if (showGrid) {
      const gridColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
      const gridSize = quality === 'ultra' ? '10px' : quality === 'high' ? '15px' : '20px'
      return {
        background: `repeating-linear-gradient(90deg, transparent, transparent calc(${gridSize} - 1px), ${gridColor} ${gridSize}), repeating-linear-gradient(0deg, transparent, transparent calc(${gridSize} - 1px), ${gridColor} ${gridSize})`
      }
    }
    
    if (theme === 'dark') {
      return {
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0f0f0f 100%)'
      }
    }
    
    return {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)'
    }
  }

  // Simplified fetch function
  const fetchSvgBlob = useCallback(async () => {
    if (!url || isLoadingPreview) return

    setIsLoadingPreview(true)
    setError('')
    setLoadStartTime(Date.now())
    
    try {
      console.log('Fetching typing SVG from:', url)
      
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Accept': 'image/svg+xml,application/xml,text/xml,*/*',
        },
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const blob = await response.blob()
      
      // Verify SVG content
      if (!blob.type.includes('svg') && !blob.type.includes('xml')) {
        console.warn('Response might not be SVG:', blob.type)
      }
      
      // Clean up previous blob URL before creating new one
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl)
      }
      
      const objectUrl = URL.createObjectURL(blob)
      setBlobUrl(objectUrl)
      
      // Update performance metrics
      const loadTime = Date.now() - loadStartTime
      onMetricsUpdate?.({
        loadTime,
        renderTime: 0,
        frameRate: 60,
        memoryUsage: Math.round(blob.size / 1024 / 1024 * 100) / 100
      })
      
      console.log(`Typing SVG loaded successfully in ${loadTime}ms:`, objectUrl)
    } catch (err) {
      console.error('Failed to fetch typing SVG:', err)
      console.error('URL that failed:', url)
      console.error('Error details:', {
        message: err instanceof Error ? err.message : 'Unknown error',
        name: err instanceof Error ? err.name : 'UnknownError',
        stack: err instanceof Error ? err.stack : undefined
      })
      
      setError(err instanceof Error ? err.message : 'Failed to load preview')
      
      // Show toast for user feedback
      toast.error('Failed to load typing preview. Please try again.')
    } finally {
      setIsLoadingPreview(false)
    }
  }, [url, isLoadingPreview, blobUrl, onMetricsUpdate, loadStartTime])

  // Simple URL change management
  const prevUrlRef = useRef<string>('')
  
  useEffect(() => {
    // Only fetch if URL actually changed
    if (url && url !== prevUrlRef.current) {
      console.log('URL changed, fetching new typing SVG:', url)
      prevUrlRef.current = url
      fetchSvgBlob()
    }
  }, [url, fetchSvgBlob])

  // Cleanup blob URL when component unmounts or URL changes
  useEffect(() => {
    return () => {
      if (blobUrl) {
        console.log('Cleaning up typing blob URL:', blobUrl)
        URL.revokeObjectURL(blobUrl)
      }
    }
  }, [blobUrl])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    const src = img.src
    
    console.error('Typing image failed to display:', {
      src,
      error: e.nativeEvent,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete
    })
    
    // Check if it's a blob URL error
    if (src.startsWith('blob:')) {
      console.error('Blob URL error - URL may have been revoked prematurely')
      setError('Blob URL error - please try refreshing')
      toast.error('Preview failed to load. Click retry to generate a new preview.')
    } else {
      setError('Failed to display SVG')
      toast.error('Failed to display typing animation. Please check your configuration.')
    }
  }

  const handleRetry = () => {
    // Clean up existing blob URL before retry
    if (blobUrl) {
      URL.revokeObjectURL(blobUrl)
      setBlobUrl('')
    }
    
    setError('')
    setRetryCount(prev => prev + 1)
    toast.info('Retrying typing generation...')
    
    // Small delay to ensure cleanup is complete
    setTimeout(() => {
      fetchSvgBlob()
    }, 100)
  }

  const handleDownload = () => {
    if (blobUrl) {
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `waveify-typing-${config.type || 'classic'}-${Date.now()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success('Typing animation downloaded successfully!')
    }
  }

  const handleImageLoad = () => {
    const renderTime = Date.now() - loadStartTime
    onMetricsUpdate?.({
      loadTime: Date.now() - loadStartTime,
      renderTime,
      frameRate: 60,
      memoryUsage: Math.round(Math.random() * 2 + 1)
    })
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-lg overflow-hidden group transition-all duration-300 ${
        fullscreen ? 'h-[60vh]' : 'min-h-[120px]'
      }`}
      style={{
        ...getBackgroundStyle(),
        maxWidth: fullscreen ? '100%' : `${deviceWidth}px`
      }}
    >
      {isLoadingPreview && (
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <div className="relative">
            <RefreshCw className="h-8 w-8 animate-spin" />
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
          </div>
          <div className="text-center">
            <span className="text-sm font-medium">Loading typing preview...</span>
            <p className="text-xs mt-1">
              Generating {config.type || 'classic'} typing with {quality} quality
            </p>
          </div>
        </div>
      )}

      {error && (
        <Alert className="max-w-md mx-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="space-y-3">
            <div className="font-medium">Failed to load typing preview</div>
            <div className="text-xs text-muted-foreground">{error}</div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={handleRetry}>
                <RefreshCw className="h-3 w-3 mr-1" />
                Retry
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {blobUrl && blobUrl.startsWith('blob:') && !isLoadingPreview && !error && (
        <>
          <img
            ref={imageRef}
            src={blobUrl}
            alt={`${config.type || 'Classic'} Typing Animation`}
            className={`h-auto transition-all duration-300 ${
              fullscreen ? 'max-h-full w-auto' : 'w-full max-w-full'
            }`}
            style={{
              animationPlayState: isPlaying ? 'running' : 'paused',
              display: 'block',
              imageRendering: quality === 'ultra' ? 'crisp-edges' : 'auto'
            }}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="eager"
          />
          
          {/* Enhanced overlay controls */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40 backdrop-blur-sm border-white/20"
                    onClick={handleDownload}
                  >
                    <Download className="h-3 w-3 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download SVG</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0 bg-black/20 hover:bg-black/40 backdrop-blur-sm border-white/20"
                    onClick={() => window.open(url, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open in new tab</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </>
      )}
    </div>
  )
}

// Enhanced README context preview
function ReadmeContextPreview({ 
  url, 
  config, 
  showGrid,
  deviceWidth = 1200
}: { 
  url: string
  config: TypingConfig
  showGrid: boolean
  deviceWidth?: number
}) {
  const [blobUrl, setBlobUrl] = useState<string>('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (!url) return

    const fetchSvgBlob = async () => {
      setIsLoadingPreview(true)
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch')
        const blob = await response.blob()
        const objectUrl = URL.createObjectURL(blob)
        setBlobUrl(objectUrl)
      } catch (error) {
        console.error('Failed to fetch typing preview:', error)
      } finally {
        setIsLoadingPreview(false)
      }
    }

    fetchSvgBlob()

    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl)
      }
    }
  }, [url])

  return (
    <div 
      className={`space-y-4 p-6 rounded-lg border transition-colors ${
        theme === 'dark' 
          ? 'bg-gray-900/50 border-gray-700' 
          : 'bg-white/50 border-gray-200'
      }`}
      style={{ maxWidth: `${deviceWidth}px` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <div>
            <h3 className="font-semibold">awesome-project</h3>
            <p className="text-sm text-muted-foreground">Public repository</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">⭐ 2.1k</Badge>
          <Badge variant="outline">🍴 456</Badge>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        An amazing project with beautiful typing animations
      </div>

      <div className="border rounded-lg p-4 bg-background/50">
        <h4 className="text-lg font-bold mb-3">README.md</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-center py-4">
            {isLoadingPreview ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Loading...
              </div>
            ) : blobUrl ? (
              <img 
                src={blobUrl} 
                alt="Typing Animation Preview"
                className="max-w-full h-auto"
                style={{
                  background: showGrid ? 
                    'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px)' :
                    'transparent'
                }}
              />
            ) : null}
          </div>
          
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2>🚀 Features</h2>
            <ul>
              <li>Beautiful typing animations</li>
              <li>Multiple animation styles</li>
              <li>Customizable colors and speeds</li>
              <li>Emoji support 😊</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// New Social Media Preview Component
function SocialPreview({ 
  url, 
  config, 
  showGrid 
}: { 
  url: string
  config: TypingConfig
  showGrid: boolean 
}) {
  const [blobUrl, setBlobUrl] = useState<string>('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (!url) return

    const fetchSvgBlob = async () => {
      setIsLoadingPreview(true)
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch')
        const blob = await response.blob()
        const objectUrl = URL.createObjectURL(blob)
        setBlobUrl(objectUrl)
      } catch (error) {
        console.error('Failed to fetch typing preview:', error)
      } finally {
        setIsLoadingPreview(false)
      }
    }

    fetchSvgBlob()

    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl)
      }
    }
  }, [url])

  return (
    <div className="space-y-6">
      {/* Twitter/X Preview */}
      <div className={`p-4 rounded-xl border ${
        theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Developer</span>
              <span className="text-muted-foreground">@dev_user</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">2h</span>
            </div>
            
            <p className="text-sm">
              Check out this amazing typing animation I created with Waveify! 🚀
            </p>
            
            <div className="flex items-center justify-center py-4 border rounded-lg bg-muted/30">
              {isLoadingPreview ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Loading...
                </div>
              ) : blobUrl ? (
                <img 
                  src={blobUrl} 
                  alt="Typing Animation"
                  className="max-w-full h-auto"
                  style={{
                    background: showGrid ? 
                      'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px)' :
                      'transparent'
                  }}
                />
              ) : null}
            </div>
            
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">💬 12</span>
              <span className="flex items-center gap-1">🔄 45</span>
              <span className="flex items-center gap-1">❤️ 128</span>
              <span className="flex items-center gap-1">📊 1.2K</span>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Preview */}
      <div className={`p-4 rounded-xl border ${
        theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800" />
          <div className="flex-1 space-y-3">
            <div>
              <div className="font-semibold">Professional Developer</div>
              <div className="text-sm text-muted-foreground">Senior Frontend Engineer | Open Source Contributor</div>
              <div className="text-xs text-muted-foreground">2 hours ago</div>
            </div>
            
            <p className="text-sm leading-relaxed">
              Excited to share this beautiful typing animation created with Waveify! 
              The {config.type || 'classic'} style really brings text to life. 
              Perfect for enhancing README files and web projects. 💻✨
              
              #WebDevelopment #Animation #OpenSource #Frontend
            </p>
            
            <div className="border rounded-lg overflow-hidden bg-muted/30">
              <div className="flex items-center justify-center py-6">
                {isLoadingPreview ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                ) : blobUrl ? (
                  <img 
                    src={blobUrl} 
                    alt="Typing Animation"
                    className="max-w-full h-auto"
                    style={{
                      background: showGrid ? 
                        'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px)' :
                        'transparent'
                    }}
                  />
                ) : null}
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground text-sm pt-2 border-t">
              <span className="flex items-center gap-1">👍 32</span>
              <span className="flex items-center gap-1">💬 8 comments</span>
              <span className="flex items-center gap-1">🔄 12 reposts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
