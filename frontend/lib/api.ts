// API client for Waveify backend
export interface WaveConfig {
  color?: string
  height?: number
  speed?: number
  width?: number
  amplitude?: number
  frequency?: number
  pulseWidth?: number
}

export interface TypingConfig {
  text?: string
  speed?: number
  color?: string
  backgroundColor?: string
  fontSize?: number
  fontFamily?: string
  width?: number
  height?: number
  cursor?: boolean
  cursorColor?: string
  type?: string
  prompt?: string
  gradientColors?: string
}

export interface BadgeConfig {
  label?: string
  message?: string
  color?: string
  labelColor?: string
  style?: string
  logo?: string
  logoWidth?: number
  animated?: boolean
  borderRadius?: number
  fontSize?: number
  fontWeight?: string
}

export interface TerminalConfig {
  commands?: string[] | string
  theme?: string
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

export interface LoaderConfig {
  type?: string
  color?: string
  size?: number
  speed?: number
  width?: number
  height?: number
}

export type GeneratorType = 'wave' | 'typing' | 'badge' | 'terminal' | 'loader'

export class WaveifyAPI {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
  }

  private buildUrl(endpoint: string, params: Record<string, any>): string {
    const url = new URL(`${this.baseUrl}/api/${endpoint}`)
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
    
    return url.toString()
  }

  // Wave Generator APIs
  generateWave(config: WaveConfig = {}, subtype?: string): string {
    const endpoint = subtype ? `wave/${subtype}` : 'wave'
    return this.buildUrl(endpoint, config)
  }

  generateWaveSine(config: WaveConfig = {}): string {
    return this.buildUrl('wave/sine', config)
  }

  generateWaveSquare(config: WaveConfig = {}): string {
    return this.buildUrl('wave/square', config)
  }

  generateWaveSawtooth(config: WaveConfig = {}): string {
    return this.buildUrl('wave/sawtooth', config)
  }

  generateWavePulse(config: WaveConfig = {}): string {
    return this.buildUrl('wave/pulse', config)
  }

  generateWaveTriangle(config: WaveConfig = {}): string {
    return this.buildUrl('wave/triangle', config)
  }

  generateWaveFluid(config: WaveConfig = {}): string {
    return this.buildUrl('wave/fluid', config)
  }

  generateWaveGlitch(config: WaveConfig = {}): string {
    return this.buildUrl('wave/glitch', config)
  }

  generateWavePlasma(config: WaveConfig = {}): string {
    return this.buildUrl('wave/plasma', config)
  }

  generateWaveNeon(config: WaveConfig = {}): string {
    return this.buildUrl('wave/neon', config)
  }

  // Typing Generator APIs
  generateTyping(config: TypingConfig = {}, subtype?: string): string {
    const endpoint = subtype ? `typing/${subtype}` : 'typing'
    return this.buildUrl(endpoint, config)
  }

  generateTypingClassic(config: TypingConfig = {}): string {
    return this.buildUrl('typing/classic', config)
  }

  generateTypingNeon(config: TypingConfig = {}): string {
    return this.buildUrl('typing/neon', config)
  }

  generateTypingGlitch(config: TypingConfig = {}): string {
    return this.buildUrl('typing/glitch', config)
  }

  generateTypingRainbow(config: TypingConfig = {}): string {
    return this.buildUrl('typing/rainbow', config)
  }

  generateTypingWave(config: TypingConfig = {}): string {
    return this.buildUrl('typing/wave', config)
  }

  generateTypingMatrix(config: TypingConfig = {}): string {
    return this.buildUrl('typing/matrix', config)
  }

  generateTypingTerminal(config: TypingConfig = {}): string {
    return this.buildUrl('typing/terminal', config)
  }

  generateTypingGradient(config: TypingConfig = {}): string {
    return this.buildUrl('typing/gradient', config)
  }

  // Badge Generator APIs
  generateBadge(config: BadgeConfig = {}): string {
    return this.buildUrl('badge', config)
  }

  // Terminal Generator APIs
  generateTerminal(config: TerminalConfig = {}, subtype?: string): string {
    const endpoint = subtype ? `terminal/${subtype}` : 'terminal'
    
    // Handle commands array
    const params = { ...config }
    if (params.commands && Array.isArray(params.commands)) {
      params.commands = params.commands.join(',')
    }
    
    return this.buildUrl(endpoint, params)
  }

  // Loader Generator APIs
  generateLoader(config: LoaderConfig = {}, subtype?: string): string {
    const endpoint = subtype ? `loader/${subtype}` : 'loader'
    return this.buildUrl(endpoint, config)
  }

  // Utility methods
  async checkHealth(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/health`)
      return await response.json()
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }

  // Generate markdown code for GitHub README
  generateMarkdown(type: GeneratorType, url: string, alt: string = 'Waveify'): string {
    return `![${alt}](${url})`
  }

  // Generate HTML code
  generateHTML(url: string, alt: string = 'Waveify', className?: string): string {
    const classAttr = className ? ` class="${className}"` : ''
    return `<img src="${url}" alt="${alt}"${classAttr}>`
  }

  // Copy URL to clipboard
  async copyToClipboard(url: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(url)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }

  // Get all wave types
  getWaveTypes(): string[] {
    return [
      'default',
      'sine',
      'square',
      'sawtooth',
      'pulse',
      'triangle',
      'fluid',
      'glitch',
      'plasma',
      'neon'
    ]
  }

  // Get all typing types
  getTypingTypes(): string[] {
    return [
      'classic',
      'neon',
      'glitch',
      'rainbow',
      'wave',
      'matrix',
      'terminal',
      'gradient'
    ]
  }

  // Get all badge styles
  getBadgeStyles(): string[] {
    return [
      'modern',
      'gradient',
      'glass',
      'shadow',
      'neon',
      'animated',
      'outline',
      'pill',
      'large',
      'classic'
    ]
  }

  // Get available colors
  getColors(): Record<string, string> {
    return {
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
      discord: '#5865F2'
    }
  }
}

// Export a singleton instance
export const api = new WaveifyAPI()

// Export default
export default api
