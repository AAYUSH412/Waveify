"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'
import { 
  Eye, EyeOff, Download, Share, Maximize, RefreshCw, AlertCircle, 
  Play, Pause, RotateCcw, Settings, Monitor, Smartphone, Tablet,
  Copy, ExternalLink, Image, FileCode, Zap, Palette, Layers,
  BarChart3, Clock, Sparkles, Grid3X3, Maximize2, Minimize2, Terminal, Check
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
import type { TerminalConfig } from '@/components/generator-components/shared/types'

interface TerminalPreviewProps {
  url: string
  config: TerminalConfig
  isLoading: boolean
  outputCode: string
  outputFormat: 'markdown' | 'html' | 'url'
  onOutputFormatChange: (format: 'markdown' | 'html' | 'url') => void
  onCopy: () => void
  copied: boolean
  onConfigUpdate?: (updates: Partial<TerminalConfig>) => void
}

interface PreviewState {
  mode: 'terminal' | 'readme' | 'social'
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
  commandCount: number
  estimatedDuration: number
}

export function TerminalPreview({ 
  url, 
  config, 
  isLoading, 
  outputCode, 
  outputFormat, 
  onOutputFormatChange, 
  onCopy, 
  copied,
  onConfigUpdate
}: TerminalPreviewProps) {
  const [previewState, setPreviewState] = useState<PreviewState>({
    mode: 'terminal',
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
    commandCount: 0,
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

  // Calculate terminal metrics
  useEffect(() => {
    if (config.commands) {
      const commandsArray = Array.isArray(config.commands) ? config.commands : [config.commands]
      const commandCount = commandsArray.length
      const avgCommandLength = commandsArray.reduce((acc: number, cmd: string) => acc + cmd.length, 0) / commandCount
      const estimatedDuration = commandCount * (config.speed || 50) * avgCommandLength / 100

      setPerformanceMetrics(prev => ({
        ...prev,
        commandCount,
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
    setError('Failed to load terminal preview')
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
      link.download = `terminal-${config.theme || 'modern'}-${Date.now()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(downloadUrl)
      
      toast.success('Terminal exported as SVG!')
    } catch (error) {
      toast.error('Failed to export terminal')
    }
  }, [url, config.theme])

  const exportAsPNG = useCallback(async () => {
    if (!imageRef.current || !canvasRef.current) return

    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = imageRef.current

      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      
      ctx?.drawImage(img, 0, 0)
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `terminal-${config.theme || 'modern'}-${Date.now()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
          toast.success('Terminal exported as PNG!')
        }
      }, 'image/png', 1.0)
    } catch (error) {
      toast.error('Failed to export terminal')
    }
  }, [config.theme])

  const shareOnSocial = useCallback((platform: string) => {
    const text = `Check out this terminal animation I created with Waveify! 🚀 #terminal #coding #developer`
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

  const getQualityMultiplier = () => {
    switch (previewState.quality) {
      case 'ultra': return 2
      case 'high': return 1.5
      default: return 1
    }
  }

  // Optimized image URL with quality parameter
  const optimizedUrl = `${url}&quality=${previewState.quality}&device=${previewState.deviceView}`

  return (
    <TooltipProvider>
      <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-background p-6 overflow-auto' : ''}`}>
        {/* Enhanced Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <h4 className="text-sm font-medium">Terminal Preview</h4>
            {previewState.showMetrics && (
              <Badge variant="secondary" className="text-xs">
                {performanceMetrics.commandCount} commands
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2">
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
                  <div className="text-muted-foreground">Commands</div>
                  <div className="font-mono">{performanceMetrics.commandCount}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Est. Duration</div>
                  <div className="font-mono">{performanceMetrics.estimatedDuration.toFixed(1)}s</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Theme</div>
                  <div className="font-mono capitalize">{config.theme || 'modern'}</div>
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
            <TabsTrigger value="terminal" className="flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              Terminal Only
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

          <TabsContent value="terminal">
            <TerminalOnlyPreview 
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

// Terminal-only preview component
function TerminalOnlyPreview({ 
  url, config, isLoading, error, previewState, setPreviewState,
  imageRef, handleImageLoad, handleImageError, getDeviceClasses,
  loadingProgress, ...props 
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
      <div className={`relative min-h-[300px] border rounded-lg overflow-hidden ${getDeviceClasses()}`}>
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
              <Terminal className="w-4 h-4 animate-pulse" />
              Generating terminal animation...
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
          <div className="w-full h-full flex items-center justify-center bg-muted/30">
            <img
              ref={imageRef}
              src={url}
              alt="Terminal Animation Preview"
              className="max-w-full max-h-full object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ 
                filter: previewState.quality === 'ultra' ? 'contrast(1.1) saturate(1.1)' : 'none'
              }}
              {...props}
            />
          </div>
        )}
      </div>

      {/* Terminal Information */}
      <div className="text-xs text-muted-foreground space-y-1 p-3 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2 font-medium mb-2">
          <Sparkles className="w-3 h-3" />
          Terminal Features
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <p>• Professional terminal themes with authentic styling</p>
          <p>• Realistic command execution timing and animations</p>
          <p>• Support for npm, git, docker, and custom commands</p>
          <p>• GitHub-style themes for documentation integration</p>
          <p>• Accessibility features and high contrast support</p>
          <p>• Professional typography and smooth animations</p>
        </div>
      </div>
    </div>
  )
}

// README context preview component  
function ReadmeContextPreview({ 
  url, config, outputCode, outputFormat, onOutputFormatChange, 
  onCopy, copied, isLoading, error, previewState, imageRef,
  handleImageLoad, handleImageError, getDeviceClasses, loadingProgress, ...props 
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
        <div className={`relative min-h-[300px] border rounded-lg overflow-hidden ${getDeviceClasses()}`}>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm z-10">
              <Terminal className="w-6 h-6 animate-pulse mb-2" />
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
            <div className="w-full h-full flex items-center justify-center bg-muted/30">
              <img
                ref={imageRef}
                src={url}
                alt="Terminal Animation"
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
            <pre className="text-xs bg-muted p-3 rounded-lg overflow-auto max-h-[300px] font-mono">
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
              <li>The terminal animation will display in your repository</li>
              <li>Use different themes to match your project's style</li>
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
  handleImageLoad, handleImageError, getDeviceClasses, loadingProgress, ...props 
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
                    <Terminal className="w-6 h-6 animate-pulse" />
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                    Preview unavailable
                  </div>
                ) : (
                  <img
                    src={url}
                    alt="Terminal Animation"
                    className="w-full h-full object-cover"
                    {...props}
                  />
                )}
              </div>
              <div className="p-3">
                <h6 className="font-medium text-sm">Terminal Animation</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Interactive terminal animations for your projects
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
                    <Terminal className="w-6 h-6 animate-pulse" />
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                    Preview unavailable
                  </div>
                ) : (
                  <img
                    src={url}
                    alt="Terminal Animation"
                    className="w-full h-full object-cover"
                    {...props}
                  />
                )}
              </div>
              <div className="p-3">
                <h6 className="font-medium text-sm">Professional Terminal Animations</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Showcase your development workflow with beautiful terminal animations
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
              <li>Use high-quality exports for better visual impact</li>
              <li>Choose themes that contrast well with platform backgrounds</li>
              <li>Add relevant hashtags like #coding #terminal #developer</li>
              <li>Include context about what the terminal commands demonstrate</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
