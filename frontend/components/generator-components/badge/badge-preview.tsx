"use client"

import { useState, useEffect } from 'react'
import { Loader2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { BadgeConfig } from '@/lib/api'

interface BadgePreviewProps {
  config: BadgeConfig
  url: string
  isLoading: boolean
  onLoadingChange: (loading: boolean) => void
}

export function BadgePreview({ config, url, isLoading, onLoadingChange }: BadgePreviewProps) {
  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState(0)

  const handleImageLoad = () => {
    onLoadingChange(false)
    setError(null)
  }

  const handleImageError = () => {
    onLoadingChange(false)
    setError('Failed to load badge preview')
  }

  const refresh = () => {
    setKey(prev => prev + 1)
    setError(null)
    onLoadingChange(false)
  }

  useEffect(() => {
    setError(null)
  }, [config, onLoadingChange])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">Live Preview</h4>
        <Button
          onClick={refresh}
          size="sm"
          variant="outline"
          disabled={isLoading}
        >
          <RefreshCw className={`w-3 h-3 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="relative min-h-[150px] border rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating badge...
            </div>
          </div>
        )}
        
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <Alert variant="destructive" className="max-w-sm">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4">
            <img
              key={`${key}-${url}`}
              src={url}
              alt="Badge Preview"
              className="max-w-full h-auto"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        )}
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <div className="flex items-center justify-between">
          <span>Label: {config.label || 'Status'}</span>
          <span>Message: {config.message || 'Awesome'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Style: {config.style || 'modern'}</span>
          <span>Color: {config.color || 'brightgreen'}</span>
        </div>
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>💡 <strong>Tip:</strong> This badge will display properly in GitHub README files, documentation,</p>
        <p>and any platform that supports SVG images.</p>
      </div>
    </div>
  )
}