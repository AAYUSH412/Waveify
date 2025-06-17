import React from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

// Theme-aware background component
interface ThemeAwareBackgroundProps {
  children: React.ReactNode
  showGrid?: boolean
  className?: string
}

export function ThemeAwareBackground({ 
  children, 
  showGrid = false, 
  className 
}: ThemeAwareBackgroundProps) {
  const { theme } = useTheme()
  
  const gridPattern = showGrid 
    ? theme === 'dark'
      ? 'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.1) 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.1) 20px)'
      : 'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px), repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px)'
    : undefined

  const backgroundGradient = theme === 'dark'
    ? 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)'
    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{
        background: gridPattern || backgroundGradient
      }}
    >
      {children}
    </div>
  )
}

// Theme-aware card with enhanced styling
interface ThemeAwareCardProps {
  children: React.ReactNode
  variant?: 'default' | 'preview' | 'control'
  className?: string
}

export function ThemeAwareCard({ 
  children, 
  variant = 'default', 
  className 
}: ThemeAwareCardProps) {
  const { theme } = useTheme()
  
  const variantStyles = {
    default: 'bg-card text-card-foreground',
    preview: cn(
      'bg-card/50 backdrop-blur-sm border-2',
      theme === 'dark' ? 'border-muted' : 'border-border'
    ),
    control: 'bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60'
  }

  return (
    <div className={cn(
      "rounded-lg border shadow-sm",
      variantStyles[variant],
      className
    )}>
      {children}
    </div>
  )
}

// Theme-aware loading indicator
export function ThemeAwareSpinner({ size = 'default' }: { size?: 'sm' | 'default' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn(
      "animate-spin rounded-full border-2 border-muted border-t-primary",
      sizeClasses[size]
    )} />
  )
}

// Theme-aware button with enhanced styling
interface ThemeAwareButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function ThemeAwareButton({ 
  children, 
  variant = 'default', 
  size = 'default',
  className,
  onClick,
  disabled = false
}: ThemeAwareButtonProps) {
  const { theme } = useTheme()
  
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    outline: cn(
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      theme === 'dark' ? 'border-muted' : 'border-border'
    )
  }

  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  )
}

// Theme-aware code block
interface ThemeAwareCodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function ThemeAwareCodeBlock({ 
  code, 
  language = 'text', 
  className 
}: ThemeAwareCodeBlockProps) {
  const { theme } = useTheme()
  
  return (
    <div className={cn(
      "relative rounded-lg p-4 font-mono text-sm overflow-x-auto",
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-100 border border-gray-800' 
        : 'bg-gray-50 text-gray-900 border border-gray-200',
      className
    )}>
      {language && (
        <div className={cn(
          "absolute top-2 right-2 text-xs px-2 py-1 rounded",
          theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'
        )}>
          {language}
        </div>
      )}
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

// Theme-aware preview container
interface ThemeAwarePreviewProps {
  children: React.ReactNode
  title?: string
  description?: string
  isLoading?: boolean
  showGrid?: boolean
  className?: string
  actions?: React.ReactNode
}

export function ThemeAwarePreview({ 
  children, 
  title, 
  description, 
  isLoading = false,
  showGrid = false,
  className,
  actions 
}: ThemeAwarePreviewProps) {
  const { theme } = useTheme()

  return (
    <ThemeAwareCard variant="preview" className={className}>
      {(title || description || actions) && (
        <div className="flex flex-row items-center justify-between p-4 pb-0">
          <div>
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}
      
      <div className="p-4">
        {isLoading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <ThemeAwareSpinner size="lg" />
              <p className="text-sm text-muted-foreground">Generating preview...</p>
            </div>
          </div>
        ) : (
          <ThemeAwareBackground showGrid={showGrid} className="min-h-[200px] rounded-lg">
            <div className="flex items-center justify-center h-full p-4">
              {children}
            </div>
          </ThemeAwareBackground>
        )}
      </div>
    </ThemeAwareCard>
  )
}
