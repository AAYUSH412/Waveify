"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'
import { 
  Eye, EyeOff, Download, Share, Maximize, RefreshCw, AlertCircle, 
  Play, Pause, RotateCcw, Settings, Monitor, Smartphone, Tablet,
  Copy, ExternalLink, Image, FileCode, Zap, Palette, Layers,
  BarChart3, Clock, Sparkles, Grid3X3, Maximize2, Minimize2, Loader, Check
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
import type { LoaderConfig } from '@/components/generator-components/shared/types'

interface LoaderPreviewProps {
  url: string
  config: LoaderConfig
  isLoading: boolean
  outputCode: string
  outputFormat: 'markdown' | 'html' | 'url'
  onOutputFormatChange: (format: 'markdown' | 'html' | 'url') => void
  onCopy: () => void
  copied: boolean
  onConfigUpdate?: (updates: Partial<LoaderConfig>) => void
}

interface PreviewState {
  mode: 'loader' | 'readme' | 'social'
  isPlaying: boolean
  showGrid: boolean
  deviceView: 'desktop' | 'tablet' | 'mobile'
  showMetrics: boolean
  quality: 'standard' | 'high' | 'ultra'
  backgroundStyle: 'none' | 'light' | 'dark' | 'gradient'
}

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  frameRate: number
  memoryUsage: number
  animationComplexity: number
  estimatedDuration: number
}

export function LoaderPreview({ 
  url, 
  config, 
  isLoading, 
  outputCode, 
  outputFormat, 
  onOutputFormatChange, 
  onCopy, 
  copied,
  onConfigUpdate
}: LoaderPreviewProps) {
  const [previewState, setPreviewState] = useState<PreviewState>({
    mode: 'loader',
    isPlaying: true,
    showGrid: false,
    deviceView: 'desktop',
    showMetrics: false,
    quality: 'standard',
    backgroundStyle: 'none'
  })

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    frameRate: 60,
    memoryUsage: 0,
    animationComplexity: 0,
    estimatedDuration: 0
  })

  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

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

  // Calculate loader metrics
  useEffect(() => {
    if (config.type) {
      const complexityMap: Record<string, number> = {
        'dots': 1, 'spinner': 2, 'bars': 2, 'pulse': 1, 'wave': 3,
        'gradient': 3, 'orbit': 4, 'ripple': 3, 'triangles': 3,
        'neon-pulse': 5, 'skeleton': 2, 'dna-helix': 6, 'matrix-rain': 8,
        'liquid': 7, 'glassmorphism': 6, 'particle-system': 9,
        'typewriter': 4, 'heart-beat': 2, 'breathing': 2
      }
      
      const animationComplexity = complexityMap[config.type as string] || 3
      const estimatedDuration = (config.speed || 1.5) * animationComplexity

      setPerformanceMetrics(prev => ({
        ...prev,
        animationComplexity,
        estimatedDuration
      }))
    }
  }, [config])

  const handleImageLoad = useCallback(() => {
    const endTime = performance.now()
    setPerformanceMetrics(prev => ({
      ...prev,
      loadTime: endTime - prev.renderTime,
      renderTime: endTime
    }))
    setError(null)
  }, [])

  const handleImageError = useCallback(() => {
    setError('Failed to load loader preview')
  }, [])

  const refresh = useCallback(() => {
    setKey(prev => prev + 1)
    setError(null)
    setLoadingProgress(0)
    setPerformanceMetrics(prev => ({ ...prev, renderTime: performance.now() }))
  }, [])

  const exportAsSVG = useCallback(async () => {
    try {
      const response = await fetch(url)
      const svgText = await response.text()
      const blob = new Blob([svgText], { type: 'image/svg+xml' })
      const downloadUrl = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `loader-${config.type || 'dots'}-${Date.now()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(downloadUrl)
      
      toast.success('Loader exported as SVG!')
    } catch (error) {
      toast.error('Failed to export loader')
    }
  }, [url, config.type])

  const exportAsPNG = useCallback(async () => {
    if (!imageRef.current || !canvasRef.current) return

    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = imageRef.current

      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      
      // Set background based on preview style
      if (previewState.backgroundStyle !== 'none') {
        ctx!.fillStyle = previewState.backgroundStyle === 'dark' ? '#1a1a1a' : 
                         previewState.backgroundStyle === 'light' ? '#ffffff' :
                         'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        ctx!.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      ctx?.drawImage(img, 0, 0)
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `loader-${config.type || 'dots'}-${Date.now()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
          toast.success('Loader exported as PNG!')
        }
      }, 'image/png', 1.0)
    } catch (error) {
      toast.error('Failed to export loader')
    }
  }, [config.type, previewState.backgroundStyle])

  const shareOnSocial = useCallback((platform: string) => {
    const text = `Check out this awesome loader animation I created with Waveify! 🚀 #loader #animation #webdev`
    const shareUrl = encodeURIComponent(url)
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${shareUrl}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      reddit: `https://reddit.com/submit?url=${shareUrl}&title=${encodeURIComponent(text)}`
    }
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400')
  }, [url])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen)
  }, [isFullscreen])

  const togglePlayback = useCallback(() => {
    setPreviewState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }, [])

  const getDeviceClasses = () => {
    const base = "transition-all duration-300 ease-in-out"
    switch (previewState.deviceView) {
      case 'mobile':
        return `${base} max-w-sm mx-auto`
      case 'tablet':
        return `${base} max-w-2xl mx-auto`
      default:
        return `${base} w-full`
    }
  }

  const getBackgroundStyle = () => {
    switch (previewState.backgroundStyle) {
      case 'light':
        return 'bg-white'
      case 'dark':
        return 'bg-gray-900'
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
      default:
        return 'bg-muted/30'
    }
  }

  // Optimized image URL with quality parameter
  const optimizedUrl = `${url}&quality=${previewState.quality}&device=${previewState.deviceView}&bg=${previewState.backgroundStyle}`

  return (
    <TooltipProvider>
      <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-background p-6 overflow-auto' : ''}`}>
        {/* Enhanced Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Loader className="w-4 h-4 text-muted-foreground" />
            <h4 className="text-sm font-medium">Loader Preview</h4>
            {previewState.showMetrics && (
              <Badge variant="secondary" className="text-xs">
                {config.type || 'dots'} • {performanceMetrics.animationComplexity}/10 complexity
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={togglePlayback}
                  size="sm"
                  variant="ghost"
                >
                  {previewState.isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{previewState.isPlaying ? 'Pause animation' : 'Play animation'}</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setPreviewState(prev => ({ ...prev, showMetrics: !prev.showMetrics }))}
                  size="sm"
                  variant="ghost"
                >
                  <BarChart3 className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Toggle performance metrics</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={refresh} size="sm" variant="outline" disabled={isLoading}>
                  <RefreshCw className={`w-3 h-3 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh preview</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={toggleFullscreen} size="sm" variant="outline">
                  {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Performance Metrics Panel */}
        {previewState.showMetrics && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Load Time</div>
                  <div className="font-mono">{performanceMetrics.loadTime.toFixed(0)}ms</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Complexity</div>
                  <div className="font-mono">{performanceMetrics.animationComplexity}/10</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Duration</div>
                  <div className="font-mono">{performanceMetrics.estimatedDuration.toFixed(1)}s</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Type</div>
                  <div className="font-mono capitalize">{config.type || 'dots'}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Multi-Mode Preview Tabs */}
        <Tabs value={previewState.mode} onValueChange={(value) => 
          setPreviewState(prev => ({ ...prev, mode: value as PreviewState['mode'] }))
        }>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="loader" className="flex items-center gap-2">
              <Loader className="w-3 h-3" />
              Loader Only
            </TabsTrigger>
            <TabsTrigger value="readme" className="flex items-center gap-2">
              <FileCode className="w-3 h-3" />
              README Context
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Share className="w-3 h-3" />
              Social Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="loader">
            <LoaderOnlyPreview 
              url={optimizedUrl}
              config={config}
              isLoading={isLoading}
              error={error}
              previewState={previewState}
              setPreviewState={setPreviewState}
              imageRef={imageRef}
              handleImageLoad={handleImageLoad}
              handleImageError={handleImageError}
              getDeviceClasses={getDeviceClasses}
              getBackgroundStyle={getBackgroundStyle}
              loadingProgress={loadingProgress}
              key={key}
            />
          </TabsContent>

          <TabsContent value="readme">
            <ReadmeContextPreview 
              url={optimizedUrl}
              config={config}
              outputCode={outputCode}
              outputFormat={outputFormat}
              onOutputFormatChange={onOutputFormatChange}
              onCopy={onCopy}
              copied={copied}
              isLoading={isLoading}
              error={error}
              previewState={previewState}
              imageRef={imageRef}
              handleImageLoad={handleImageLoad}
              handleImageError={handleImageError}
              getDeviceClasses={getDeviceClasses}
              getBackgroundStyle={getBackgroundStyle}
              loadingProgress={loadingProgress}
              key={key}
            />
          </TabsContent>

          <TabsContent value="social">
            <SocialPreview 
              url={optimizedUrl}
              config={config}
              shareOnSocial={shareOnSocial}
              exportAsSVG={exportAsSVG}
              exportAsPNG={exportAsPNG}
              isLoading={isLoading}
              error={error}
              previewState={previewState}
              setPreviewState={setPreviewState}
              imageRef={imageRef}
              handleImageLoad={handleImageLoad}
              handleImageError={handleImageError}
              getDeviceClasses={getDeviceClasses}
              getBackgroundStyle={getBackgroundStyle}
              loadingProgress={loadingProgress}
              key={key}
            />
          </TabsContent>
        </Tabs>

        {/* Hidden canvas for PNG export */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </TooltipProvider>
  )
}

// Loader-only preview component
function LoaderOnlyPreview({ 
  url, config, isLoading, error, previewState, setPreviewState,
  imageRef, handleImageLoad, handleImageError, getDeviceClasses,
  getBackgroundStyle, loadingProgress, ...props 
}: any) {
  return (
    <div className="space-y-4">
      {/* Preview Controls */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <Label htmlFor="device-view" className="text-xs">View:</Label>
          <Select 
            value={previewState.deviceView} 
            onValueChange={(value) => setPreviewState((prev: any) => ({ ...prev, deviceView: value }))}
          >
            <SelectTrigger id="device-view" className="w-24 h-7 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desktop"><Monitor className="w-3 h-3 mr-1 inline" />Desktop</SelectItem>
              <SelectItem value="tablet"><Tablet className="w-3 h-3 mr-1 inline" />Tablet</SelectItem>
              <SelectItem value="mobile"><Smartphone className="w-3 h-3 mr-1 inline" />Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="background" className="text-xs">Background:</Label>
          <Select 
            value={previewState.backgroundStyle} 
            onValueChange={(value) => setPreviewState((prev: any) => ({ ...prev, backgroundStyle: value }))}
          >
            <SelectTrigger id="background" className="w-20 h-7 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="gradient">Gradient</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="quality" className="text-xs">Quality:</Label>
          <Select 
            value={previewState.quality} 
            onValueChange={(value) => setPreviewState((prev: any) => ({ ...prev, quality: value }))}
          >
            <SelectTrigger id="quality" className="w-20 h-7 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="ultra">Ultra</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="show-grid"
            checked={previewState.showGrid}
            onCheckedChange={(checked) => setPreviewState((prev: any) => ({ ...prev, showGrid: checked }))}
          />
          <Label htmlFor="show-grid" className="text-xs">Grid</Label>
        </div>
      </div>

      {/* Preview Area */}
      <div className={`relative min-h-[200px] border rounded-lg overflow-hidden ${getDeviceClasses()}`}>
        {previewState.showGrid && (
          <div className="absolute inset-0 opacity-20 pointer-events-none"
               style={{ 
                 backgroundImage: 'radial-gradient(circle, #666 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }} />
        )}

        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Loader className="w-4 h-4 animate-spin" />
              Generating loader animation...
            </div>
            <Progress value={loadingProgress} className="w-48" />
            <div className="text-xs text-muted-foreground mt-2">{loadingProgress.toFixed(0)}%</div>
          </div>
        )}
        
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <Alert variant="destructive" className="max-w-sm">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className={`w-full h-full flex items-center justify-center min-h-[200px] ${getBackgroundStyle()}`}>
            <img
              ref={imageRef}
              src={url}
              alt="Loader Animation Preview"
              className="max-w-full max-h-full object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ 
                filter: previewState.quality === 'ultra' ? 'contrast(1.1) saturate(1.1)' : 'none',
                animationPlayState: previewState.isPlaying ? 'running' : 'paused'
              }}
              {...props}
            />
          </div>
        )}
      </div>

      {/* Loader Information */}
      <div className="text-xs text-muted-foreground space-y-1 p-3 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2 font-medium mb-2">
          <Sparkles className="w-3 h-3" />
          Loader Features
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <p>• 20+ professional loader animations</p>
          <p>• Accessibility compliance with reduced motion</p>
          <p>• Performance optimized SVG generation</p>
          <p>• Customizable colors, themes, and effects</p>
          <p>• Advanced easing functions and timing</p>
          <p>• Perfect for loading states and progress indicators</p>
        </div>
      </div>
    </div>
  )
}

// README context preview component  
function ReadmeContextPreview({ 
  url, config, outputCode, outputFormat, onOutputFormatChange, 
  onCopy, copied, isLoading, error, previewState, imageRef,
  handleImageLoad, handleImageError, getDeviceClasses, getBackgroundStyle, loadingProgress, ...props 
}: any) {
  return (
    <div className="space-y-4">
      {/* Output Format Controls */}
      <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
        <Label className="text-xs font-medium">Output Format:</Label>
        <div className="flex gap-1">
          {(['markdown', 'html', 'url'] as const).map((format) => (
            <Button
              key={format}
              onClick={() => onOutputFormatChange(format)}
              size="sm"
              variant={outputFormat === format ? "default" : "outline"}
              className="h-7 text-xs"
            >
              {format.toUpperCase()}
            </Button>
          ))}
        </div>
        <Button onClick={onCopy} size="sm" variant="outline" className="h-7">
          {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>

      {/* Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Preview */}
        <div className={`relative min-h-[200px] border rounded-lg overflow-hidden ${getDeviceClasses()}`}>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm z-10">
              <Loader className="w-6 h-6 animate-spin mb-2" />
              <Progress value={loadingProgress} className="w-32" />
            </div>
          )}
          
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${getBackgroundStyle()}`}>
              <img
                ref={imageRef}
                src={url}
                alt="Loader Animation"
                className="max-w-full max-h-full object-contain"
                onLoad={handleImageLoad}
                onError={handleImageError}
                {...props}
              />
            </div>
          )}
        </div>

        {/* Code Output */}
        <div className="space-y-2">
          <Label className="text-xs font-medium">Generated Code:</Label>
          <div className="relative">
            <pre className="text-xs bg-muted p-3 rounded-lg overflow-auto max-h-[200px] font-mono">
              <code>{outputCode || '// Generated code will appear here...'}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <Card>
        <CardContent className="pt-4">
          <div className="text-xs space-y-2">
            <h5 className="font-medium">README Integration:</h5>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Copy the {outputFormat.toUpperCase()} code above</li>
              <li>Paste it into your README.md file</li>
              <li>The loader animation will display in your repository</li>
              <li>Perfect for showcasing loading states in your projects</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Social preview component
function SocialPreview({ 
  url, config, shareOnSocial, exportAsSVG, exportAsPNG,
  isLoading, error, previewState, setPreviewState, imageRef,
  handleImageLoad, handleImageError, getDeviceClasses, getBackgroundStyle, loadingProgress, ...props 
}: any) {
  return (
    <div className="space-y-4">
      {/* Export & Share Controls */}
      <div className="flex flex-wrap gap-2 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-2">
          <Label className="text-xs font-medium">Export:</Label>
          <Button onClick={exportAsSVG} size="sm" variant="outline" className="h-7">
            <Download className="w-3 h-3 mr-1" />
            SVG
          </Button>
          <Button onClick={exportAsPNG} size="sm" variant="outline" className="h-7">
            <Image className="w-3 h-3 mr-1" />
            PNG
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Label className="text-xs font-medium">Share:</Label>
          <Button onClick={() => shareOnSocial('twitter')} size="sm" variant="outline" className="h-7">
            Twitter
          </Button>
          <Button onClick={() => shareOnSocial('linkedin')} size="sm" variant="outline" className="h-7">
            LinkedIn
          </Button>
          <Button onClick={() => shareOnSocial('reddit')} size="sm" variant="outline" className="h-7">
            Reddit
          </Button>
        </div>
      </div>

      {/* Social Media Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Twitter Card Preview */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Twitter Card Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden bg-card">
              <div className="aspect-video relative bg-muted/30">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="w-6 h-6 animate-spin" />
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                    Preview unavailable
                  </div>
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${getBackgroundStyle()}`}>
                    <img
                      src={url}
                      alt="Loader Animation"
                      className="max-w-full max-h-full object-contain"
                      {...props}
                    />
                  </div>
                )}
              </div>
              <div className="p-3">
                <h6 className="font-medium text-sm">Loader Animation</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Beautiful loading animations for your projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LinkedIn Preview */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">LinkedIn Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden bg-card">
              <div className="aspect-video relative bg-muted/30">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="w-6 h-6 animate-spin" />
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                    Preview unavailable
                  </div>
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${getBackgroundStyle()}`}>
                    <img
                      src={url}
                      alt="Loader Animation"
                      className="max-w-full max-h-full object-contain"
                      {...props}
                    />
                  </div>
                )}
              </div>
              <div className="p-3">
                <h6 className="font-medium text-sm">Professional Loader Animations</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Enhance your web applications with smooth loading indicators
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips for Social Sharing */}
      <Card>
        <CardContent className="pt-4">
          <div className="text-xs space-y-2">
            <h5 className="font-medium flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Social Media Tips:
            </h5>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Use contrasting backgrounds to make loaders stand out</li>
              <li>Choose loader types that match your project's aesthetic</li>
              <li>Add relevant hashtags like #animation #loader #webdev</li>
              <li>Include context about how the loader enhances user experience</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
