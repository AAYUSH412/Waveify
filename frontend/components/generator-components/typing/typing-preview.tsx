"use client"

import { useState, useEffect } from 'react'
import { Loader2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { TypingConfig } from '@/lib/api'

interface TypingPreviewProps {
  config: TypingConfig
  url: string
  isLoading: boolean
  onLoadingChange: (loading: boolean) => void
}

export function TypingPreview({ config, url, isLoading, onLoadingChange }: TypingPreviewProps) {
  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState(0)

  const handleImageLoad = () => {
    onLoadingChange(false)
    setError(null)
  }

  const handleImageError = () => {
    onLoadingChange(false)
    setError('Failed to load typing preview')
  }

  const refresh = () => {
    setKey(prev => prev + 1)
    setError(null)
    onLoadingChange(true)
  }

  useEffect(() => {
    onLoadingChange(true)
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

      <div className="relative min-h-[120px] border rounded-lg overflow-hidden bg-muted/50">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating typing animation...
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
          <div className="w-full overflow-auto p-4 flex items-center justify-center">
            <img
              key={`${key}-${url}`}
              src={url}
              alt="Typing Preview"
              className="max-w-full h-auto"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ minHeight: '60px' }}
            />
          </div>
        )}
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>• Typing animations show character-by-character text reveal</p>
        <p>• Different types provide unique visual styles and effects</p>
        <p>• Speed controls how fast characters appear</p>
        <p>• Cursor option adds a blinking cursor at the end</p>
      </div>
    </div>
  )
}
