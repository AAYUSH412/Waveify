import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Copy, Check, Heart, Star, Download, Play, Pause, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

// Loading states
export function PreviewSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

export function ConfigSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}

// Copy button component
interface CopyButtonProps {
  text: string
  onCopy?: () => void
  copied?: boolean
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  children?: React.ReactNode
}

export function CopyButton({ 
  text, 
  onCopy, 
  copied = false, 
  variant = 'outline',
  size = 'sm',
  className,
  children 
}: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      onCopy?.()
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={cn("gap-2", className)}
      disabled={copied}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          {children || 'Copied!'}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {children || 'Copy'}
        </>
      )}
    </Button>
  )
}

// Preview container
interface PreviewContainerProps {
  children: React.ReactNode
  title?: string
  description?: string
  isLoading?: boolean
  className?: string
  actions?: React.ReactNode
}

export function PreviewContainer({ 
  children, 
  title, 
  description, 
  isLoading = false,
  className,
  actions 
}: PreviewContainerProps) {
  return (
    <Card className={cn("w-full", className)}>
      {(title || description || actions) && (
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            {title && <CardTitle className="text-lg">{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {actions && <div className="flex gap-2">{actions}</div>}
        </CardHeader>
      )}
      <CardContent>
        {isLoading ? (
          <PreviewSkeleton />
        ) : (
          <div className="min-h-[150px] flex items-center justify-center bg-muted/50 rounded-lg border-2 border-dashed">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Color picker component
interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
  colors?: string[]
  label?: string
  className?: string
}

export function ColorPicker({ 
  value, 
  onChange, 
  colors = [
    '#007CF0', '#FF6B6B', '#51CF66', '#8B5CF6', '#FFD43B',
    '#00FFFF', '#FF0040', '#00FF41', '#EC4899', '#6B7280'
  ],
  label,
  className 
}: ColorPickerProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {label && <label className="text-sm font-medium">{label}</label>}
      
      {/* Custom color input */}
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 rounded border border-input cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#007CF0"
          className="flex-1 px-3 py-2 border border-input rounded text-sm font-mono"
        />
      </div>

      {/* Preset colors */}
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={cn(
              "w-8 h-8 rounded-full border-2 border-transparent transition-all hover:scale-110",
              value === color && "border-foreground ring-2 ring-ring"
            )}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  )
}

// Preset card component
interface PresetCardProps {
  id: string
  name: string
  description: string
  preview?: string
  tags?: string[]
  onSelect: () => void
  onFavorite?: () => void
  isFavorite?: boolean
  className?: string
}

export function PresetCard({ 
  id,
  name, 
  description, 
  preview, 
  tags = [], 
  onSelect, 
  onFavorite,
  isFavorite = false,
  className 
}: PresetCardProps) {
  return (
    <Card className={cn("cursor-pointer hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-4 space-y-3">
        {/* Preview */}
        {preview && (
          <div className="h-20 bg-muted rounded overflow-hidden flex items-center justify-center">
            <img src={preview} alt={name} className="max-w-full max-h-full object-contain" />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm">{name}</h3>
          {onFavorite && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onFavorite()
              }}
              className="h-6 w-6 p-0"
            >
              <Heart 
                className={cn(
                  "h-3 w-3",
                  isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
                )} 
              />
            </Button>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-1 py-0">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-1 py-0">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Select button */}
        <Button 
          onClick={onSelect}
          size="sm" 
          className="w-full"
        >
          Use Preset
        </Button>
      </CardContent>
    </Card>
  )
}

// Control group wrapper
interface ControlGroupProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function ControlGroup({ children, title, description, className }: ControlGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {(title || description) && (
        <div>
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

// Animation controls
interface AnimationControlsProps {
  isPlaying: boolean
  onToggle: () => void
  onReset?: () => void
  speed?: number
  onSpeedChange?: (speed: number) => void
  className?: string
}

export function AnimationControls({ 
  isPlaying, 
  onToggle, 
  onReset,
  speed,
  onSpeedChange,
  className 
}: AnimationControlsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={onToggle}
        className="gap-2"
      >
        {isPlaying ? (
          <>
            <Pause className="h-3 w-3" />
            Pause
          </>
        ) : (
          <>
            <Play className="h-3 w-3" />
            Play
          </>
        )}
      </Button>

      {onReset && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="gap-2"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </Button>
      )}

      {speed !== undefined && onSpeedChange && (
        <div className="flex items-center gap-2 text-sm">
          <span>Speed:</span>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.5"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-16"
          />
          <span className="text-xs text-muted-foreground">{speed}s</span>
        </div>
      )}
    </div>
  )
}

// Code output component
interface CodeOutputProps {
  code: string
  language?: string
  onCopy?: () => void
  copied?: boolean
  className?: string
}

export function CodeOutput({ 
  code, 
  language = 'markdown', 
  onCopy, 
  copied = false,
  className 
}: CodeOutputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium capitalize">{language} Code</span>
        <CopyButton text={code} onCopy={onCopy} copied={copied} />
      </div>
      
      <div className="relative">
        <pre className="bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

// Error boundary component
interface ErrorFallbackProps {
  error: Error
  resetError: () => void
}

export function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <Card className="border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive">Something went wrong</CardTitle>
        <CardDescription>
          An error occurred while generating the content.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <details className="text-sm">
          <summary className="cursor-pointer font-medium">Error Details</summary>
          <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-x-auto">
            {error.message}
          </pre>
        </details>
        
        <Button onClick={resetError} variant="outline">
          Try Again
        </Button>
      </CardContent>
    </Card>
  )
}
