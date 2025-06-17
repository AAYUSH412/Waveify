import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useTheme } from 'next-themes'
import { 
  WaveConfig, 
  PreviewContainer, 
  CodeOutput, 
  CopyButton,
  AnimationControls
} from '../shared'
import { Eye, EyeOff, Download, Share, Maximize, RefreshCw, AlertCircle } from 'lucide-react'

interface WavePreviewProps {
  url: string
  config: WaveConfig
  isLoading: boolean
  outputCode: string
  outputFormat: 'markdown' | 'html' | 'url'
  onOutputFormatChange: (format: 'markdown' | 'html' | 'url') => void
  onCopy: () => void
  copied: boolean
}

export function WavePreview({ 
  url, 
  config, 
  isLoading, 
  outputCode, 
  outputFormat, 
  onOutputFormatChange, 
  onCopy, 
  copied 
}: WavePreviewProps) {
  const [previewMode, setPreviewMode] = useState<'wave' | 'readme'>('wave')
  const [isPlaying, setIsPlaying] = useState(true)
  const [showGrid, setShowGrid] = useState(false)

  return (
    <div className="space-y-6">
      {/* Preview Card */}
      <PreviewContainer
        title="Live Preview"
        description={`${config.width}×${config.height} • ${config.speed}s speed`}
        isLoading={isLoading}
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowGrid(!showGrid)}
              className="gap-2"
            >
              {showGrid ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
              Grid
            </Button>
            <Select value={previewMode} onValueChange={(value: 'wave' | 'readme') => setPreviewMode(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wave">Wave Only</SelectItem>
                <SelectItem value="readme">README Context</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
      >
        {previewMode === 'wave' ? (
          <WaveOnlyPreview 
            url={url} 
            config={config} 
            showGrid={showGrid}
            isPlaying={isPlaying}
          />
        ) : (
          <ReadmeContextPreview 
            url={url} 
            config={config} 
            showGrid={showGrid}
          />
        )}
      </PreviewContainer>

      {/* Animation Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            Animation Controls
            <Badge variant="secondary" className="text-xs">
              {config.speed}s cycle
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimationControls
            isPlaying={isPlaying}
            onToggle={() => setIsPlaying(!isPlaying)}
            speed={config.speed}
            onSpeedChange={(speed) => {
              // This would update the config if we had access to onUpdate
              console.log('Speed change:', speed)
            }}
          />
        </CardContent>
      </Card>

      {/* Code Output */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            Generated Code
            <div className="flex items-center gap-2">
              <Select value={outputFormat} onValueChange={onOutputFormatChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="markdown">Markdown</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="url">URL</SelectItem>
                </SelectContent>
              </Select>
              <CopyButton
                text={outputCode}
                onCopy={onCopy}
                copied={copied}
                variant="default"
              >
                Copy Code
              </CopyButton>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CodeOutput
            code={outputCode}
            language={outputFormat}
            onCopy={onCopy}
            copied={copied}
          />
          
          {/* Additional Actions */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-3 w-3" />
              Download SVG
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share className="h-3 w-3" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Maximize className="h-3 w-3" />
              Full Screen
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Implementation Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <h4 className="font-medium mb-1">For GitHub README:</h4>
            <p className="text-muted-foreground">
              Place the markdown code at the top of your README.md file for the best visual impact.
            </p>
          </div>
          
          <div className="p-3 bg-muted rounded-lg">
            <h4 className="font-medium mb-1">Responsive Design:</h4>
            <p className="text-muted-foreground">
              The SVG automatically scales to fit container width while maintaining aspect ratio.
            </p>
          </div>
          
          <div className="p-3 bg-muted rounded-lg">
            <h4 className="font-medium mb-1">Performance:</h4>
            <p className="text-muted-foreground">
              SVG animations are lightweight and won't impact page load times significantly.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Wave-only preview component with blob support and theme awareness
function WaveOnlyPreview({ 
  url, 
  config, 
  showGrid, 
  isPlaying 
}: { 
  url: string
  config: WaveConfig
  showGrid: boolean
  isPlaying: boolean 
}) {
  const [blobUrl, setBlobUrl] = useState<string>('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const [error, setError] = useState<string>('')
  const [retryCount, setRetryCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Theme-aware background
  const getBackgroundStyle = () => {
    if (showGrid) {
      const gridColor = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
      return `repeating-linear-gradient(90deg, transparent, transparent 19px, ${gridColor} 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, ${gridColor} 20px)`
    }
    
    if (theme === 'dark') {
      return 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
    }
    
    return 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  }

  // Fetch SVG as blob and create object URL
  useEffect(() => {
    if (!url) return

    const fetchSvgBlob = async () => {
      setIsLoadingPreview(true)
      setError('')
      
      try {
        console.log('Fetching SVG from:', url)
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'image/svg+xml,*/*',
          },
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const blob = await response.blob()
        
        // Verify it's SVG content
        if (!blob.type.includes('svg') && !blob.type.includes('xml')) {
          console.warn('Response might not be SVG:', blob.type)
        }
        
        // Create object URL from blob
        const objectUrl = URL.createObjectURL(blob)
        setBlobUrl(objectUrl)
        
        console.log('SVG blob loaded successfully:', objectUrl)
      } catch (err) {
        console.error('Failed to fetch SVG:', err)
        setError(err instanceof Error ? err.message : 'Failed to load preview')
      } finally {
        setIsLoadingPreview(false)
      }
    }

    fetchSvgBlob()

    // Cleanup function to revoke object URL
    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl)
      }
    }
  }, [url, retryCount])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
  }

  const handleDownload = () => {
    if (blobUrl) {
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `waveify-${config.waveType || 'wave'}-${Date.now()}.svg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center group"
      style={{
        background: getBackgroundStyle()
      }}
    >
      {isLoadingPreview && (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <RefreshCw className="h-6 w-6 animate-spin" />
          <span className="text-sm">Loading preview...</span>
        </div>
      )}

      {error && (
        <Alert className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="space-y-3">
            <div className="font-medium">Failed to load preview</div>
            <div className="text-xs text-muted-foreground">{error}</div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={handleRetry}>
                <RefreshCw className="h-3 w-3 mr-1" />
                Retry
              </Button>
              <Button size="sm" variant="outline" onClick={() => window.open(url, '_blank')}>
                <Share className="h-3 w-3 mr-1" />
                Open Direct
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {blobUrl && !isLoadingPreview && !error && (
        <>
          <img
            src={blobUrl}
            alt="Wave Animation"
            className="w-full h-auto max-w-full"
            style={{
              animationPlayState: isPlaying ? 'running' : 'paused',
              display: 'block'
            }}
            onError={(e) => {
              console.error('Image failed to display:', e)
              setError('Failed to display SVG')
            }}
            onLoad={() => {
              console.log('SVG image loaded and displayed successfully')
            }}
          />
          
          {/* Download button overlay */}
          <Button
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleDownload}
          >
            <Download className="h-3 w-3" />
          </Button>
        </>
      )}
      
      {/* Info overlay with theme awareness */}
      <div className={`absolute bottom-2 left-2 text-xs px-2 py-1 rounded backdrop-blur-sm ${
        theme === 'dark' 
          ? 'bg-black/70 text-white border border-white/20' 
          : 'bg-white/70 text-black border border-black/20'
      }`}>
        {config.width}×{config.height}
        {blobUrl && <span className="ml-1 text-green-400">●</span>}
      </div>

      {/* Debug info in development with theme awareness */}
      {process.env.NODE_ENV === 'development' && (
        <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded backdrop-blur-sm font-mono ${
          theme === 'dark' 
            ? 'bg-black/70 text-white border border-white/20' 
            : 'bg-white/70 text-black border border-black/20'
        }`}>
          {url.substring(0, 50)}...
        </div>
      )}
    </div>
  )
}

// README context preview component with theme awareness
function ReadmeContextPreview({ 
  url, 
  config, 
  showGrid 
}: { 
  url: string
  config: WaveConfig
  showGrid: boolean 
}) {
  const [blobUrl, setBlobUrl] = useState<string>('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)
  const { theme } = useTheme()

  // Fetch SVG as blob for README preview too
  useEffect(() => {
    if (!url) return

    const fetchSvgBlob = async () => {
      setIsLoadingPreview(true)
      try {
        const response = await fetch(url)
        if (response.ok) {
          const blob = await response.blob()
          const objectUrl = URL.createObjectURL(blob)
          setBlobUrl(objectUrl)
        }
      } catch (err) {
        console.error('Failed to fetch SVG for README preview:', err)
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
    <div className={`space-y-4 p-4 rounded-lg border transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Simulated GitHub README */}
      <div className="space-y-3">
        {/* Wave banner */}
        <div className="relative">
          {isLoadingPreview && (
            <div className={`flex items-center justify-center h-32 rounded ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-muted'
            }`}>
              <RefreshCw className="h-6 w-6 animate-spin" />
            </div>
          )}
          
          {blobUrl && !isLoadingPreview && (
            <img
              src={blobUrl}
              alt="Project Banner"
              className="w-full h-auto rounded"
            />
          )}
          
          {showGrid && blobUrl && (
            <div 
              className="absolute inset-0 opacity-20 rounded"
              style={{
                background: `repeating-linear-gradient(90deg, transparent, transparent 19px, ${
                  theme === 'dark' ? '#fff' : '#000'
                } 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, ${
                  theme === 'dark' ? '#fff' : '#000'
                } 20px)`
              }}
            />
          )}
        </div>
        
        {/* Simulated README content with theme awareness */}
        <div className="space-y-2">
          <h1 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Awesome Project
          </h1>
          <p className={`${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A fantastic project with an amazing wave banner generated by Waveify.
          </p>
          
          <div className="flex gap-2">
            <Badge variant="secondary">MIT License</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">React</Badge>
          </div>
          
          <div className="pt-2">
            <h2 className={`text-lg font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Installation
            </h2>
            <pre className={`p-2 rounded text-sm ${
              theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-muted text-gray-900'
            }`}>
              <code>npm install awesome-project</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
