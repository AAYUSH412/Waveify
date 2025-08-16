// Enhanced shared types for all generator components with modern TypeScript support

// Enhanced interfaces with professional metadata
export interface ColorScheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  success: string
  warning: string
  error: string
}

export interface PresetConfig<T = any> {
  id: string
  name: string
  description: string
  category: string
  config: T
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  popularity: number
}

export interface ExportFormat {
  name: string
  extension: string
  mimeType: string
  description: string
}

export interface AnimationConfig {
  name: string
  type: string
  duration: number
  easing: string
  delay: number
}

// Base configuration interface that all generators extend
export interface BaseConfig {
  width?: number
  height?: number
  color?: string
  speed?: number
  backgroundColor?: string
}

// Enhanced wave configuration with professional features
export interface WaveConfig extends BaseConfig {
  text?: string
  font?: string
  fontSize?: number
  fontWeight?: number
  animation?: boolean
  duration?: number
  sections?: number
  waveHeight?: number
  waveLength?: number
  amplitude?: number
  frequency?: number
  pulseWidth?: number
  waveType?: WaveType
  // Enhanced professional features
  accessibilityMode?: boolean
  performanceMode?: 'standard' | 'optimized' | 'minimal'
  gradientStops?: number
  glowIntensity?: number
  ambientEffect?: boolean
  // Advanced visual features
  multiLayer?: boolean
  layerCount?: number
  layerOpacity?: number
  particleEffects?: boolean
  shadowIntensity?: number
  // Animation features
  easing?: EasingType
  direction?: 'left' | 'right' | 'bidirectional'
  phaseShift?: number
}

// Enhanced typing configuration with modern text effects
export interface TypingConfig extends BaseConfig {
  text?: string
  font?: string
  fontSize?: number
  fontWeight?: number
  cursor?: boolean
  cursorColor?: string
  loop?: boolean
  startDelay?: number
  type?: TypingType
  prompt?: string
  gradientColors?: string
  // Enhanced typing features
  multilineText?: boolean
  emojiSupport?: boolean
  gradientText?: boolean
  gradientTextColors?: string[]
  cursorStyle?: CursorStyle
  customBackground?: boolean
  textAlign?: TextAlign
  lineHeight?: number
  maxLines?: number
  // Advanced animation features
  repeat?: boolean
  pauseTime?: number
  glowEffect?: boolean
  soundEnabled?: boolean
  // Interactive features
  interactive?: boolean
  clickToType?: boolean
  pauseOnHover?: boolean
  // Additional properties used in controls
  fontFamily?: string
  easing?: EasingType
  accessibility?: AccessibilityConfig
}

// Enhanced loader configuration
export interface LoaderConfig extends BaseConfig {
  type?: LoaderType
  size?: number
  strokeWidth?: number
  count?: number
  spacing?: number
  thickness?: number
  gap?: number
  // Enhanced loader features
  gradient?: boolean
  gradientColors?: string[]
  shadowEffect?: boolean
  glowEffect?: boolean
  // Animation features
  duration?: number
  delay?: number
  easing?: EasingType
  // Shape variations
  shape?: 'circle' | 'square' | 'triangle' | 'diamond'
  strokeStyle?: 'solid' | 'dashed' | 'dotted'
  // Interactive features
  pauseOnHover?: boolean
  responsive?: boolean
  // Legacy compatibility
  shadowIntensity?: number
  theme?: LoaderTheme
  accessibility?: AccessibilityConfig
}

// Enhanced terminal configuration
export interface TerminalConfig extends BaseConfig {
  text?: string
  font?: string
  fontSize?: number
  fontWeight?: number
  borderRadius?: number
  padding?: number
  prompt?: string
  cursor?: boolean
  commands?: string[]
  theme?: TerminalTheme
  textColor?: string
  promptColor?: string
  commandSpeed?: number
  pauseBetweenCommands?: number
  // Enhanced terminal features
  showLineNumbers?: boolean
  showTimestamp?: boolean
  showDirectory?: boolean
  currentDirectory?: string
  userName?: string
  hostname?: string
  // Terminal behavior
  typewriterEffect?: boolean
  autoComplete?: boolean
  historySize?: number
  // Interactive features
  interactive?: boolean
  copyable?: boolean
  scrollable?: boolean
  maxLines?: number
  // Visual enhancements
  cursorBlink?: boolean
  promptIcon?: string
  customPS1?: string
  syntaxHighlighting?: boolean
  // Legacy compatibility
  backgroundImage?: string
  opacity?: number
  blur?: number
  scanLines?: boolean
  glitch?: boolean
  neonEffect?: boolean
  accessibility?: AccessibilityConfig
}

// Union type for all generator configurations
export type GeneratorConfig = WaveConfig | TypingConfig | LoaderConfig | TerminalConfig

// Type definitions for generator types and subtypes
export type WaveType = 'sine' | 'square' | 'triangle' | 'sawtooth' | 'pulse' | 'fluid' | 'noise' | 'default' | 'glitch' | 'plasma' | 'neon'
export type TypingType = 'typewriter' | 'fade' | 'slide' | 'bounce' | 'glitch' | 'matrix' | 'classic' | 'neon' | 'rainbow' | 'wave' | 'terminal' | 'gradient'
export type LoaderType = 'spinner' | 'dots' | 'bars' | 'pulse' | 'wave' | 'orbit' | 'grid' | 'text' | 'ring' | 'neon-pulse' | 'liquid'
export type TerminalTheme = 'modern' | 'retro' | 'matrix' | 'powershell' | 'classic' | 'cyberpunk'
export type GeneratorType = 'wave' | 'typing' | 'loader' | 'terminal'

// Style and visual type definitions
export type CursorStyle = 'block' | 'line' | 'underline' | 'hollow'
export type TextAlign = 'left' | 'center' | 'right' | 'justify'
export type BadgeStyle = 'flat' | 'rounded' | 'square' | 'pill' | 'diamond' | 'hexagon'
export type AnimationType = 'none' | 'fade-in' | 'slide-in' | 'bounce' | 'pulse' | 'shake' | 'glow'
export type IconType = 'check' | 'cross' | 'alert' | 'info' | 'star' | 'heart' | 'arrow' | 'custom'
export type EasingType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce' | 'elastic'
export type LoaderTheme = 'default' | 'neon' | 'minimal' | 'retro' | 'professional' | 'modern' | 'cyberpunk'

// Enhanced configuration interfaces for accessibility and advanced features
export interface AccessibilityConfig {
  reducedMotion?: boolean
  highContrast?: boolean
  screenReaderOptimized?: boolean
  keyboardNavigation?: boolean
  focusIndicator?: boolean
  ariaLabels?: Record<string, string>
  ariaLabel?: string
  semanticMarkup?: boolean
  colorBlindFriendly?: boolean
  respectSystemPreferences?: boolean
}

export interface ShadowConfig {
  x?: number
  y?: number
  blur?: number
  spread?: number
  color?: string
  inset?: boolean
}

// Utility types for better TypeScript support
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>

// Enhanced validation and utility functions
export function getDefaultConfig(type: GeneratorType): GeneratorConfig {
  switch (type) {
    case 'wave':
      return {
        text: "Sample Wave",
        font: "Arial",
        fontSize: 32,
        fontWeight: 500,
        color: "#0EA5E9",
        animation: true,
        duration: 2,
        height: 60,
        sections: 4,
        waveHeight: 20,
        waveLength: 100,
        speed: 1
      } as WaveConfig
    
    case 'typing':
      return {
        text: "Hello, World!",
        font: "Arial",
        fontSize: 24,
        fontWeight: 400,
        color: "#374151",
        speed: 100,
        cursor: true,
        cursorColor: "#374151",
        loop: false,
        startDelay: 0
      } as TypingConfig
    
    case 'terminal':
      return {
        text: "$ echo 'Hello World'",
        font: "Monaco",
        fontSize: 14,
        fontWeight: 400,
        color: "#00FF00",
        backgroundColor: "#000000",
        borderRadius: 4,
        padding: 16,
        prompt: "$ ",
        cursor: true
      } as TerminalConfig
    
    case 'loader':
      return {
        type: "dots",
        size: 40,
        color: "#0EA5E9",
        speed: 1,
        count: 3,
        spacing: 8
      } as LoaderConfig
    
    default:
      throw new Error(`Unknown generator type: ${type}`)
  }
}

export function validateConfig(type: GeneratorType, config: GeneratorConfig): string[] {
  const errors: string[] = []
  
  if (!config) {
    errors.push('Configuration is required')
    return errors
  }
  
  // Basic validation based on type
  switch (type) {
    case 'wave':
      const waveConfig = config as WaveConfig
      if (waveConfig.fontSize && (waveConfig.fontSize < 8 || waveConfig.fontSize > 200)) {
        errors.push('Font size must be between 8 and 200')
      }
      if (waveConfig.speed && (waveConfig.speed < 0.1 || waveConfig.speed > 10)) {
        errors.push('Speed must be between 0.1 and 10')
      }
      break
      
    case 'typing':
      const typingConfig = config as TypingConfig
      if (typingConfig.text && typingConfig.text.length > 1000) {
        errors.push('Text must be less than 1000 characters')
      }
      if (typingConfig.speed && (typingConfig.speed < 10 || typingConfig.speed > 1000)) {
        errors.push('Speed must be between 10 and 1000')
      }
      break
      
    case 'terminal':
      const terminalConfig = config as TerminalConfig
      if (terminalConfig.text && terminalConfig.text.length > 500) {
        errors.push('Terminal text must be less than 500 characters')
      }
      break
      
    case 'loader':
      const loaderConfig = config as LoaderConfig
      if (loaderConfig.size && (loaderConfig.size < 10 || loaderConfig.size > 200)) {
        errors.push('Loader size must be between 10 and 200')
      }
      break
  }
  
  return errors
}

// Utility functions
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

export function generateShareURL(config: GeneratorConfig, type: GeneratorType): string {
  const params = new URLSearchParams()
  params.append('type', type)
  params.append('config', JSON.stringify(config))
  return `${window.location.origin}/share?${params.toString()}`
}

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`
  const seconds = ms / 1000
  if (seconds < 60) return `${seconds.toFixed(1)}s`
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}m ${remainingSeconds.toFixed(0)}s`
}

export function parseColor(color: string): { r: number; g: number; b: number; a?: number } | null {
  if (color.startsWith('#')) {
    const hex = color.slice(1)
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16)
      }
    } else if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      }
    }
  }
  return null
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function downloadAsFile(content: string, filename: string, mimeType: string = 'text/plain'): void {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

// Type guards for better type safety
export function isWaveConfig(config: GeneratorConfig): config is WaveConfig {
  return 'waveHeight' in config || 'sections' in config
}

export function isTypingConfig(config: GeneratorConfig): config is TypingConfig {
  return 'cursor' in config || 'startDelay' in config
}

export function isTerminalConfig(config: GeneratorConfig): config is TerminalConfig {
  return 'prompt' in config || 'commands' in config
}

export function isLoaderConfig(config: GeneratorConfig): config is LoaderConfig {
  return 'type' in config && typeof (config as any).type === 'string'
}
