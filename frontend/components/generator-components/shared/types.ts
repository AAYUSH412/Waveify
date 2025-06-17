// Shared types for all generator components
export interface BaseConfig {
  width?: number
  height?: number
  color?: string
  speed?: number
}

export interface WaveConfig extends BaseConfig {
  amplitude?: number
  frequency?: number
  pulseWidth?: number
  waveType?: WaveType
}

export interface TypingConfig extends BaseConfig {
  text?: string
  backgroundColor?: string
  fontSize?: number
  fontFamily?: string
  cursor?: boolean
  cursorColor?: string
  type?: TypingType
  prompt?: string
  gradientColors?: string
}

export interface BadgeConfig {
  label?: string
  message?: string
  color?: string
  labelColor?: string
  style?: BadgeStyle
  logo?: string
  logoWidth?: number
  animated?: boolean
  borderRadius?: number
  fontSize?: number
  fontWeight?: string
}

export interface TerminalConfig {
  commands?: string[] | string
  theme?: TerminalTheme
  speed?: number
  cursor?: boolean
  prompt?: string
  width?: number
  height?: number
  fontSize?: number
  showHeader?: boolean
  title?: string
  githubMode?: boolean
  commandType?: string
}

export interface LoaderConfig extends BaseConfig {
  type?: LoaderType
  size?: number
}

// Generator Types
export type GeneratorType = 'wave' | 'typing' | 'badge' | 'terminal' | 'loader'

export type WaveType = 
  | 'default' 
  | 'sine' 
  | 'square' 
  | 'sawtooth' 
  | 'pulse' 
  | 'triangle' 
  | 'fluid' 
  | 'glitch' 
  | 'plasma' 
  | 'neon'

export type TypingType = 
  | 'classic' 
  | 'neon' 
  | 'glitch' 
  | 'rainbow' 
  | 'wave' 
  | 'matrix' 
  | 'terminal' 
  | 'gradient'

export type BadgeStyle = 
  | 'modern' 
  | 'gradient' 
  | 'glass' 
  | 'shadow' 
  | 'neon' 
  | 'animated' 
  | 'outline' 
  | 'pill' 
  | 'large' 
  | 'classic'

export type TerminalTheme = 
  | 'modern' 
  | 'matrix' 
  | 'cyberpunk' 
  | 'retro' 
  | 'glass' 
  | 'neon' 
  | 'minimal' 
  | 'github-dark' 
  | 'github-light'

export type LoaderType = 
  | 'spinner' 
  | 'dots' 
  | 'bars' 
  | 'pulse' 
  | 'wave'

// Output formats
export type OutputFormat = 'markdown' | 'html' | 'url' | 'jsx'

// Configuration for each generator type
export type GeneratorConfig = 
  | WaveConfig 
  | TypingConfig 
  | BadgeConfig 
  | TerminalConfig 
  | LoaderConfig

// Preset templates
export interface Preset {
  id: string
  name: string
  description: string
  type: GeneratorType
  config: GeneratorConfig
  preview?: string
  tags?: string[]
}

// Color presets
export interface ColorPreset {
  id: string
  name: string
  colors: string[]
  primary: string
}

// Common color options
export const COMMON_COLORS = {
  // Status colors
  green: '#00D26A',
  red: '#FF4444',
  blue: '#007CF0',
  yellow: '#FFD700',
  orange: '#FF8C00',
  purple: '#8B5CF6',
  pink: '#EC4899',
  cyan: '#06B6D4',
  gray: '#6B7280',
  black: '#000000',
  white: '#FFFFFF',
  
  // Semantic colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Brand colors
  github: '#181717',
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  youtube: '#FF0000',
  discord: '#5865F2',
  
  // Custom gradients (as hex for primary)
  ocean: '#007CF0',
  sunset: '#FF6B6B',
  forest: '#51CF66',
  lavender: '#8B5CF6',
  gold: '#FFD43B'
} as const

// Default configurations
export const DEFAULT_WAVE_CONFIG: WaveConfig = {
  color: '#007CF0',
  height: 150,
  width: 1200,
  speed: 4,
  amplitude: 20,
  frequency: 2,
  waveType: 'default'
}

export const DEFAULT_TYPING_CONFIG: TypingConfig = {
  text: 'Welcome to my project',
  speed: 50,
  color: '#000000',
  backgroundColor: 'transparent',
  fontSize: 20,
  fontFamily: 'monospace',
  width: 400,
  height: 60,
  cursor: true,
  cursorColor: '#000000',
  type: 'classic'
}

export const DEFAULT_BADGE_CONFIG: BadgeConfig = {
  label: 'Build',
  message: 'Passing',
  color: 'green',
  labelColor: '#555',
  style: 'modern',
  fontSize: 11,
  borderRadius: 6,
  animated: false
}

export const DEFAULT_TERMINAL_CONFIG: TerminalConfig = {
  commands: ['npm install', 'npm run dev'],
  theme: 'modern',
  speed: 50,
  cursor: true,
  prompt: '$ ',
  width: 800,
  height: 400,
  fontSize: 14,
  showHeader: true,
  title: 'Terminal'
}

export const DEFAULT_LOADER_CONFIG: LoaderConfig = {
  type: 'spinner',
  color: '#007CF0',
  size: 40,
  speed: 1,
  width: 100,
  height: 100
}

// Utility functions
export function getDefaultConfig(type: GeneratorType): GeneratorConfig {
  switch (type) {
    case 'wave':
      return DEFAULT_WAVE_CONFIG
    case 'typing':
      return DEFAULT_TYPING_CONFIG
    case 'badge':
      return DEFAULT_BADGE_CONFIG
    case 'terminal':
      return DEFAULT_TERMINAL_CONFIG
    case 'loader':
      return DEFAULT_LOADER_CONFIG
    default:
      return DEFAULT_WAVE_CONFIG
  }
}

export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

export function generateRandomColor(): string {
  const colors = Object.values(COMMON_COLORS)
  return colors[Math.floor(Math.random() * colors.length)]
}

export function formatSpeed(speed: number): string {
  return `${speed}s`
}

export function formatSize(size: number, unit: string = 'px'): string {
  return `${size}${unit}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
