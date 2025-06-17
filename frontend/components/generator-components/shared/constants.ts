import { 
  WaveConfig, 
  TypingConfig, 
  BadgeConfig, 
  Preset, 
  ColorPreset,
  COMMON_COLORS
} from './types'

// Wave Presets
export const WAVE_PRESETS: Preset[] = [
  // Default/Sine Waves
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    description: 'Smooth blue waves like ocean',
    type: 'wave',
    config: {
      color: '#007CF0',
      height: 150,
      width: 1200,
      speed: 4,
      amplitude: 25,
      frequency: 2,
      waveType: 'sine'
    } as WaveConfig,
    tags: ['blue', 'smooth', 'professional', 'sine']
  },
  {
    id: 'sunset-waves',
    name: 'Sunset Waves',
    description: 'Warm orange sunset waves',
    type: 'wave',
    config: {
      color: '#ff6b35',
      height: 140,
      width: 1200,
      speed: 5,
      amplitude: 20,
      frequency: 1.5,
      waveType: 'sine'
    } as WaveConfig,
    tags: ['orange', 'warm', 'sunset', 'sine']
  },
  
  // Square Waves
  {
    id: 'pixel-wave',
    name: 'Pixel Wave',
    description: 'Retro 8-bit style square waves',
    type: 'wave',
    config: {
      color: '#00ff41',
      height: 120,
      width: 1200,
      speed: 3,
      amplitude: 30,
      frequency: 4,
      waveType: 'square'
    } as WaveConfig,
    tags: ['retro', 'pixel', 'gaming', 'square']
  },
  {
    id: 'digital-banner',
    name: 'Digital Banner',
    description: 'Clean digital square wave banner',
    type: 'wave',
    config: {
      color: '#0080ff',
      height: 160,
      width: 1200,
      speed: 4,
      amplitude: 25,
      frequency: 2,
      waveType: 'square'
    } as WaveConfig,
    tags: ['digital', 'tech', 'clean', 'square']
  },

  // Sawtooth Waves
  {
    id: 'sharp-edge',
    name: 'Sharp Edge',
    description: 'Aggressive sawtooth pattern',
    type: 'wave',
    config: {
      color: '#ff3366',
      height: 150,
      width: 1200,
      speed: 3,
      amplitude: 35,
      frequency: 2.5,
      waveType: 'sawtooth'
    } as WaveConfig,
    tags: ['sharp', 'aggressive', 'modern', 'sawtooth']
  },
  {
    id: 'mountain-range',
    name: 'Mountain Range',
    description: 'Mountain-like sawtooth waves',
    type: 'wave',
    config: {
      color: '#8b5a3c',
      height: 180,
      width: 1200,
      speed: 6,
      amplitude: 40,
      frequency: 1.5,
      waveType: 'sawtooth'
    } as WaveConfig,
    tags: ['nature', 'mountains', 'brown', 'sawtooth']
  },

  // Pulse Waves
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    description: 'Pulse wave like a heartbeat',
    type: 'wave',
    config: {
      color: '#ff4757',
      height: 140,
      width: 1200,
      speed: 2,
      amplitude: 30,
      frequency: 3,
      pulseWidth: 0.2,
      waveType: 'pulse'
    } as WaveConfig,
    tags: ['pulse', 'heartbeat', 'health', 'red']
  },
  {
    id: 'data-pulse',
    name: 'Data Pulse',
    description: 'Data transmission pulse pattern',
    type: 'wave',
    config: {
      color: '#00d4aa',
      height: 120,
      width: 1200,
      speed: 1.5,
      amplitude: 25,
      frequency: 4,
      pulseWidth: 0.3,
      waveType: 'pulse'
    } as WaveConfig,
    tags: ['data', 'tech', 'pulse', 'cyan']
  },

  // Triangle Waves
  {
    id: 'geometric-wave',
    name: 'Geometric Wave',
    description: 'Clean geometric triangle pattern',
    type: 'wave',
    config: {
      color: '#6c5ce7',
      height: 150,
      width: 1200,
      speed: 4,
      amplitude: 28,
      frequency: 2.5,
      waveType: 'triangle'
    } as WaveConfig,
    tags: ['geometric', 'clean', 'purple', 'triangle']
  },
  {
    id: 'architect-wave',
    name: 'Architect Wave',
    description: 'Architectural triangle design',
    type: 'wave',
    config: {
      color: '#2d3436',
      height: 170,
      width: 1200,
      speed: 5,
      amplitude: 35,
      frequency: 2,
      waveType: 'triangle'
    } as WaveConfig,
    tags: ['architecture', 'professional', 'dark', 'triangle']
  },

  // Fluid Waves
  {
    id: 'liquid-motion',
    name: 'Liquid Motion',
    description: 'Smooth flowing liquid animation',
    type: 'wave',
    config: {
      color: '#74b9ff',
      height: 160,
      width: 1200,
      speed: 6,
      amplitude: 30,
      frequency: 1.5,
      waveType: 'fluid'
    } as WaveConfig,
    tags: ['fluid', 'liquid', 'smooth', 'blue']
  },
  {
    id: 'organic-flow',
    name: 'Organic Flow',
    description: 'Natural organic fluid movement',
    type: 'wave',
    config: {
      color: '#00b894',
      height: 140,
      width: 1200,
      speed: 7,
      amplitude: 25,
      frequency: 2,
      waveType: 'fluid'
    } as WaveConfig,
    tags: ['organic', 'nature', 'green', 'fluid']
  },

  // Glitch Waves
  {
    id: 'glitch-error',
    name: 'Glitch Error',
    description: 'Digital glitch error effect',
    type: 'wave',
    config: {
      color: '#ff0040',
      height: 150,
      width: 1200,
      speed: 1,
      amplitude: 35,
      frequency: 3,
      waveType: 'glitch'
    } as WaveConfig,
    tags: ['glitch', 'error', 'digital', 'red']
  },
  {
    id: 'matrix-glitch',
    name: 'Matrix Glitch',
    description: 'Matrix-style digital distortion',
    type: 'wave',
    config: {
      color: '#00ff00',
      height: 140,
      width: 1200,
      speed: 0.8,
      amplitude: 40,
      frequency: 4,
      waveType: 'glitch'
    } as WaveConfig,
    tags: ['matrix', 'glitch', 'green', 'hacker']
  },

  // Plasma Waves
  {
    id: 'energy-plasma',
    name: 'Energy Plasma',
    description: 'High-energy plasma effect',
    type: 'wave',
    config: {
      color: '#ff6b00',
      height: 160,
      width: 1200,
      speed: 2.5,
      amplitude: 30,
      frequency: 2.5,
      waveType: 'plasma'
    } as WaveConfig,
    tags: ['energy', 'plasma', 'orange', 'power']
  },
  {
    id: 'lightning-plasma',
    name: 'Lightning Plasma',
    description: 'Electric lightning plasma',
    type: 'wave',
    config: {
      color: '#fd79a8',
      height: 150,
      width: 1200,
      speed: 1.5,
      amplitude: 35,
      frequency: 3,
      waveType: 'plasma'
    } as WaveConfig,
    tags: ['lightning', 'electric', 'pink', 'plasma']
  },

  // Neon Waves
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    description: 'Classic cyberpunk neon glow',
    type: 'wave',
    config: {
      color: '#00ffff',
      height: 180,
      width: 1200,
      speed: 2,
      amplitude: 30,
      frequency: 2.5,
      waveType: 'neon'
    } as WaveConfig,
    tags: ['cyberpunk', 'neon', 'cyan', 'futuristic']
  },
  {
    id: 'synthwave-neon',
    name: 'Synthwave Neon',
    description: 'Retro synthwave neon style',
    type: 'wave',
    config: {
      color: '#ff0080',
      height: 160,
      width: 1200,
      speed: 3,
      amplitude: 28,
      frequency: 2,
      waveType: 'neon'
    } as WaveConfig,
    tags: ['synthwave', 'retro', 'neon', 'pink']
  },
  {
    id: 'neon-city',
    name: 'Neon City',
    description: 'Urban neon city lights',
    type: 'wave',
    config: {
      color: '#39ff14',
      height: 170,
      width: 1200,
      speed: 2.5,
      amplitude: 32,
      frequency: 3,
      waveType: 'neon'
    } as WaveConfig,
    tags: ['city', 'urban', 'neon', 'green']
  }
]

// Typing Presets
export const TYPING_PRESETS: Preset[] = [
  {
    id: 'classic-terminal',
    name: 'Classic Terminal',
    description: 'Traditional monospace typing',
    type: 'typing',
    config: {
      text: 'Hello, World!',
      speed: 80,
      color: '#00ff00',
      backgroundColor: '#000000',
      fontSize: 16,
      fontFamily: 'monospace',
      width: 400,
      height: 60,
      cursor: true,
      type: 'classic'
    } as TypingConfig,
    tags: ['terminal', 'classic', 'monospace']
  },
  {
    id: 'neon-cyberpunk',
    name: 'Neon Cyberpunk',
    description: 'Futuristic neon typing effect',
    type: 'typing',
    config: {
      text: 'SYSTEM ONLINE',
      speed: 60,
      color: '#00ffff',
      backgroundColor: '#000011',
      fontSize: 20,
      fontFamily: 'monospace',
      width: 450,
      height: 70,
      cursor: true,
      type: 'neon'
    } as TypingConfig,
    tags: ['neon', 'cyberpunk', 'futuristic']
  },
  {
    id: 'glitch-error',
    name: 'Glitch Error',
    description: 'Glitchy error message style',
    type: 'typing',
    config: {
      text: 'ERROR: SYSTEM CORRUPTED',
      speed: 40,
      color: '#ff0040',
      backgroundColor: '#000000',
      fontSize: 18,
      fontFamily: 'monospace',
      width: 500,
      height: 65,
      cursor: true,
      type: 'glitch'
    } as TypingConfig,
    tags: ['glitch', 'error', 'dramatic']
  },
  {
    id: 'rainbow-magic',
    name: 'Rainbow Magic',
    description: 'Colorful rainbow text animation',
    type: 'typing',
    config: {
      text: 'Welcome to the Rainbow',
      speed: 70,
      fontSize: 22,
      width: 600,
      height: 75,
      cursor: true,
      type: 'rainbow'
    } as TypingConfig,
    tags: ['rainbow', 'colorful', 'fun']
  },
  {
    id: 'matrix-code',
    name: 'Matrix Code',
    description: 'Matrix-style digital rain',
    type: 'typing',
    config: {
      text: 'Wake up, Neo...',
      speed: 90,
      color: '#00ff41',
      backgroundColor: '#000000',
      fontSize: 16,
      fontFamily: 'monospace',
      width: 400,
      height: 60,
      cursor: true,
      type: 'matrix'
    } as TypingConfig,
    tags: ['matrix', 'green', 'movie']
  }
]

// Badge Presets
export const BADGE_PRESETS: Preset[] = [
  {
    id: 'build-status',
    name: 'Build Status',
    description: 'Standard build status badge',
    type: 'badge',
    config: {
      label: 'Build',
      message: 'Passing',
      color: 'green',
      style: 'modern'
    } as BadgeConfig,
    tags: ['build', 'status', 'ci/cd']
  },
  {
    id: 'version-badge',
    name: 'Version Badge',
    description: 'Version information badge',
    type: 'badge',
    config: {
      label: 'Version',
      message: 'v2.1.0',
      color: 'blue',
      style: 'gradient'
    } as BadgeConfig,
    tags: ['version', 'release', 'info']
  },
  {
    id: 'license-badge',
    name: 'License Badge',
    description: 'Open source license badge',
    type: 'badge',
    config: {
      label: 'License',
      message: 'MIT',
      color: 'success',
      style: 'pill'
    } as BadgeConfig,
    tags: ['license', 'legal', 'open-source']
  },
  {
    id: 'neon-status',
    name: 'Neon Status',
    description: 'Futuristic neon status badge',
    type: 'badge',
    config: {
      label: 'Status',
      message: 'ONLINE',
      color: 'cyan',
      style: 'neon',
      animated: true
    } as BadgeConfig,
    tags: ['neon', 'status', 'animated']
  },
  {
    id: 'glass-modern',
    name: 'Glass Modern',
    description: 'Modern glassmorphism badge',
    type: 'badge',
    config: {
      label: 'UI',
      message: 'Modern',
      color: 'purple',
      style: 'glass',
      borderRadius: 12
    } as BadgeConfig,
    tags: ['glass', 'modern', 'ui']
  }
]

// Color Presets
export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    colors: ['#007CF0', '#0051A5', '#00D4FF'],
    primary: '#007CF0'
  },
  {
    id: 'sunset-orange',
    name: 'Sunset Orange',
    colors: ['#FF6B6B', '#FF8E53', '#FFD93D'],
    primary: '#FF6B6B'
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    colors: ['#51CF66', '#40C057', '#37B24D'],
    primary: '#51CF66'
  },
  {
    id: 'purple-magic',
    name: 'Purple Magic',
    colors: ['#8B5CF6', '#A855F7', '#C084FC'],
    primary: '#8B5CF6'
  },
  {
    id: 'neon-cyan',
    name: 'Neon Cyan',
    colors: ['#00FFFF', '#00D4FF', '#0099CC'],
    primary: '#00FFFF'
  },
  {
    id: 'hot-pink',
    name: 'Hot Pink',
    colors: ['#EC4899', '#F472B6', '#FBCFE8'],
    primary: '#EC4899'
  },
  {
    id: 'golden-yellow',
    name: 'Golden Yellow',
    colors: ['#FFD43B', '#FCC419', '#FAB005'],
    primary: '#FFD43B'
  },
  {
    id: 'cyber-red',
    name: 'Cyber Red',
    colors: ['#FF0040', '#FF1744', '#FF5252'],
    primary: '#FF0040'
  }
]

// Generator type descriptions
export const GENERATOR_DESCRIPTIONS = {
  wave: 'Create beautiful animated wave patterns for your GitHub README headers',
  typing: 'Generate realistic typing animations with various text effects',
  badge: 'Design modern status badges with multiple styles and effects',
  terminal: 'Simulate terminal interfaces with command sequences',
  loader: 'Create loading animations and spinners'
}

// Example use cases
export const USE_CASES = [
  {
    title: 'Project Headers',
    description: 'Use wave animations as eye-catching headers for your GitHub repositories',
    generators: ['wave'],
    example: 'Add a fluid wave animation to make your project stand out'
  },
  {
    title: 'Demo Sections',
    description: 'Show typing animations to demonstrate your CLI tools or APIs',
    generators: ['typing', 'terminal'],
    example: 'Display installation commands with realistic typing effects'
  },
  {
    title: 'Status Indicators',
    description: 'Create dynamic badges to show build status, version info, and metrics',
    generators: ['badge'],
    example: 'Modern animated badges for CI/CD status and project metrics'
  },
  {
    title: 'Loading States',
    description: 'Add loading animations for documentation or demo purposes',
    generators: ['loader'],
    example: 'Show progress indicators for long-running processes'
  },
  {
    title: 'Interactive Demos',
    description: 'Combine multiple generators to create engaging project showcases',
    generators: ['wave', 'typing', 'terminal', 'badge'],
    example: 'Create a complete demo with header, commands, and status badges'
  }
]

// Common dimensions for different use cases
export const COMMON_DIMENSIONS = {
  // GitHub README standard widths
  github: {
    full: { width: 1200, height: 150 },
    half: { width: 600, height: 120 },
    compact: { width: 400, height: 80 }
  },
  // Social media banners
  social: {
    twitter: { width: 1500, height: 500 },
    linkedin: { width: 1200, height: 627 },
    facebook: { width: 1200, height: 630 }
  },
  // Documentation sizes
  docs: {
    header: { width: 800, height: 120 },
    section: { width: 600, height: 80 },
    inline: { width: 300, height: 50 }
  }
}

// Export all presets by type
export const ALL_PRESETS = {
  wave: WAVE_PRESETS,
  typing: TYPING_PRESETS,
  badge: BADGE_PRESETS,
  terminal: [],
  loader: []
}

// Get presets by generator type
export function getPresetsByType(type: string): Preset[] {
  return ALL_PRESETS[type as keyof typeof ALL_PRESETS] || []
}

// Get preset by ID
export function getPresetById(id: string): Preset | undefined {
  const allPresets = Object.values(ALL_PRESETS).flat()
  return allPresets.find(preset => preset.id === id)
}

// Search presets by tag
export function searchPresetsByTag(tag: string): Preset[] {
  const allPresets = Object.values(ALL_PRESETS).flat()
  return allPresets.filter(preset => 
    preset.tags?.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  )
}
