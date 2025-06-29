"use client"

import { useState, useEffect } from 'react'
import { Loader2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { TerminalConfig } from '@/lib/api'

interface TerminalPreviewProps {
  config: TerminalConfig
  url: string
  isLoading: boolean
  onLoadingChange: (loading: boolean) => void
}

export function TerminalPreview({ config, url, isLoading, onLoadingChange }: TerminalPreviewProps) {
  const [error, setError] = useState<string | null>(null)
  const [key, setKey] = useState(0)

  const handleImageLoad = () => {
    onLoadingChange(false)
    setError(null)
  }

  const handleImageError = () => {
    onLoadingChange(false)
    setError('Failed to load terminal preview')
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

      <div className="relative min-h-[200px] border rounded-lg overflow-hidden bg-muted/50">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating terminal...
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
          <div className="w-full overflow-auto">
            <img
              key={`${key}-${url}`}
              src={url}
              alt="Terminal Preview"
              className="w-full h-auto"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ minHeight: '200px' }}
            />
          </div>
        )}
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>• Terminal animations show command execution with realistic timing</p>
        <p>• Use different themes for various styles and color schemes</p>
        <p>• GitHub mode adapts to light/dark theme preferences</p>
        <p>• Commands support npm, git, docker, and custom operations</p>
      </div>
    </div>
  )
}
