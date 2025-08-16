"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Copy, 
  Check, 
  Heart, 
  Star, 
  Download, 
  Play, 
  Pause, 
  RotateCcw, 
  Eye,
  EyeOff,
  Zap,
  Sparkles,
  TrendingUp,
  Activity,
  Clock,
  RefreshCw,
  ExternalLink,
  Share2,
  Code,
  Image,
  FileText,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Enhanced loading states with animations
export function PreviewSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-20" />
      </div>
      <div className="relative">
        <Skeleton className="h-48 w-full rounded-lg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: [-300, 300] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  )
}

export function ConfigSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>
          <Skeleton className="h-10 w-full" />
          {i === 1 && <Skeleton className="h-20 w-full" />}
        </div>
      ))}
    </div>
  )
}

// Enhanced copy button with better animations and feedback
interface CopyButtonProps {
  text: string
  onCopy?: () => void
  copied?: boolean
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  children?: React.ReactNode
  showText?: boolean
  tooltip?: string
}

export function CopyButton({ 
  text, 
  onCopy, 
  copied = false, 
  variant = 'outline', 
  size = 'sm',
  className,
  children,
  showText = true,
  tooltip = "Copy to clipboard"
}: CopyButtonProps) {
  const [localCopied, setLocalCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isCopied = copied || localCopied

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setLocalCopied(true)
      onCopy?.()
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Reset after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setLocalCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "group relative overflow-hidden transition-all duration-200",
              isCopied && "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300",
              className
            )}
          >
            <AnimatePresence mode="wait">
              {isCopied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  {showText && <span>Copied!</span>}
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Copy className={cn(
                    "h-4 w-4 transition-transform",
                    isHovered && "scale-110"
                  )} />
                  {showText && <span>{children || "Copy"}</span>}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCopied ? "Copied to clipboard!" : tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

// Enhanced preview card with better visuals and interactions
interface PreviewCardProps {
  title: string
  description?: string
  children: React.ReactNode
  isLoading?: boolean
  error?: string
  actions?: React.ReactNode
  stats?: {
    views?: number
    generations?: number
    lastUpdated?: string
  }
  className?: string
}

export function PreviewCard({ 
  title, 
  description, 
  children, 
  isLoading = false,
  error,
  actions,
  stats,
  className 
}: PreviewCardProps) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="flex items-center gap-2 text-lg">
              {title}
              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              )}
            </CardTitle>
            {description && (
              <CardDescription className="text-sm">{description}</CardDescription>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(!isVisible)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            {actions}
          </div>
        </div>

        {/* Stats bar */}
        {stats && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
            {stats.views && (
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{stats.views.toLocaleString()} views</span>
              </div>
            )}
            {stats.generations && (
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>{stats.generations.toLocaleString()} generated</span>
              </div>
            )}
            {stats.lastUpdated && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Updated {stats.lastUpdated}</span>
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          ) : isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PreviewSkeleton />
            </motion.div>
          ) : isVisible ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              key="hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-32 text-muted-foreground"
            >
              <div className="text-center space-y-2">
                <EyeOff className="h-8 w-8 mx-auto" />
                <p className="text-sm">Preview hidden</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// Enhanced generator controls with better UX
interface GeneratorControlsProps {
  isGenerating?: boolean
  onGenerate?: () => void
  onReset?: () => void
  onCopy?: () => void
  onDownload?: () => void
  onShare?: () => void
  copied?: boolean
  className?: string
  generationCount?: number
  estimatedTime?: string
}

export function GeneratorControls({
  isGenerating = false,
  onGenerate,
  onReset,
  onCopy,
  onDownload,
  onShare,
  copied = false,
  className,
  generationCount = 0,
  estimatedTime = "~1s"
}: GeneratorControlsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <div className="flex items-center gap-2">
        <Button
          onClick={onGenerate}
          disabled={isGenerating}
          className="relative overflow-hidden group"
        >
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                key="generating"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
                <span>Generating...</span>
              </motion.div>
            ) : (
              <motion.div
                key="generate"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Generate</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {onReset && (
          <Button variant="outline" onClick={onReset} disabled={isGenerating}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        )}
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex items-center gap-2">
        {onCopy && (
          <CopyButton
            text=""
            onCopy={onCopy}
            copied={copied}
            tooltip="Copy SVG code"
          >
            <Code className="h-4 w-4 mr-2" />
            Copy SVG
          </CopyButton>
        )}

        {onDownload && (
          <Button variant="outline" onClick={onDownload} disabled={isGenerating}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        )}

        {onShare && (
          <Button variant="outline" onClick={onShare} disabled={isGenerating}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        )}
      </div>

      {/* Generation stats */}
      {generationCount > 0 && (
        <>
          <Separator orientation="vertical" className="h-8" />
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>{generationCount.toLocaleString()} generated</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{estimatedTime}</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Enhanced code block with syntax highlighting placeholder
interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  copyable?: boolean
  maxHeight?: string
  className?: string
}

export function CodeBlock({
  code,
  language = "html",
  title,
  copyable = true,
  maxHeight = "400px",
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code: ', err)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">{title}</span>
            <Badge variant="secondary" className="text-xs">
              {language}
            </Badge>
          </div>
          {copyable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}
      
      <div 
        className="p-4 bg-muted/50 font-mono text-sm overflow-auto"
        style={{ maxHeight }}
      >
        <pre className="whitespace-pre-wrap break-all">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

// Progress indicator for long operations
interface ProgressIndicatorProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  className?: string
}

export function ProgressIndicator({
  value,
  max = 100,
  label,
  showPercentage = true,
  className
}: ProgressIndicatorProps) {
  const percentage = Math.round((value / max) * 100)

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showPercentage && (
            <span className="font-medium">{percentage}%</span>
          )}
        </div>
      )}
      <Progress value={percentage} className="h-2" />
    </div>
  )
}// Preview container
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
