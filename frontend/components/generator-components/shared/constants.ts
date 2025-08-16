import type { 
  WaveConfig, 
  TypingConfig, 
  BadgeConfig, 
  LoaderConfig, 
  TerminalConfig,
  ColorScheme, 
  PresetConfig,
  ExportFormat,
  AnimationConfig,
  GeneratorType
} from './types'

// Professional color schemes for modern design
export const PROFESSIONAL_COLOR_SCHEMES: ColorScheme[] = [
  {
    name: "Ocean Breeze",
    primary: "#0EA5E9",
    secondary: "#0F172A", 
    accent: "#06B6D4",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    text: "#1E293B",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  {
    name: "Sunset Gradient",
    primary: "#F97316",
    secondary: "#1C1917",
    accent: "#FBBF24",
    background: "#FEF3C7",
    surface: "#FFFBEB",
    text: "#78350F",
    success: "#65A30D",
    warning: "#D97706",
    error: "#DC2626"
  },
  {
    name: "Forest Green",
    primary: "#059669",
    secondary: "#064E3B",
    accent: "#34D399",
    background: "#ECFDF5",
    surface: "#F0FDF4",
    text: "#064E3B",
    success: "#10B981",
    warning: "#D97706",
    error: "#DC2626"
  },
  {
    name: "Royal Purple",
    primary: "#7C3AED",
    secondary: "#3C1E78",
    accent: "#A855F7",
    background: "#F3F4F6",
    surface: "#FFFFFF",
    text: "#374151",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  },
  {
    name: "Midnight Dark",
    primary: "#6366F1",
    secondary: "#1E1B4B",
    accent: "#8B5CF6",
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F1F5F9",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#F87171"
  },
  {
    name: "Cherry Blossom",
    primary: "#EC4899",
    secondary: "#831843",
    accent: "#F472B6",
    background: "#FDF2F8",
    surface: "#FFFFFF",
    text: "#831843",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444"
  }
]

// Enhanced wave presets with metadata
export const WAVE_PRESETS: PresetConfig<WaveConfig>[] = [
  {
    id: "gentle-waves",
    name: "Gentle Waves",
    description: "Soft, flowing waves perfect for backgrounds",
    category: "Nature",
    config: {
      text: "Gentle Waves",
      font: "Arial",
      fontSize: 40,
      fontWeight: 500,
      color: "#0EA5E9",
      animation: true,
      duration: 3,
      height: 60,
      sections: 4,
      waveHeight: 20,
      waveLength: 100,
      speed: 1
    },
    tags: ["gentle", "background", "nature", "blue"],
    difficulty: "beginner",
    popularity: 95
  },
  {
    id: "dynamic-waves",
    name: "Dynamic Waves",
    description: "High-energy waves with dynamic movement",
    category: "Energy",
    config: {
      text: "Dynamic Energy",
      font: "Arial Black",
      fontSize: 48,
      fontWeight: 700,
      color: "#F97316",
      animation: true,
      duration: 1.5,
      height: 80,
      sections: 6,
      waveHeight: 35,
      waveLength: 80,
      speed: 2
    },
    tags: ["dynamic", "energy", "fast", "orange"],
    difficulty: "intermediate",
    popularity: 87
  },
  {
    id: "ocean-depths",
    name: "Ocean Depths",
    description: "Deep, mysterious ocean-inspired waves",
    category: "Nature",
    config: {
      text: "Ocean Depths",
      font: "Georgia",
      fontSize: 36,
      fontWeight: 400,
      color: "#1E40AF",
      animation: true,
      duration: 4,
      height: 100,
      sections: 3,
      waveHeight: 45,
      waveLength: 120,
      speed: 0.8
    },
    tags: ["ocean", "deep", "mysterious", "blue"],
    difficulty: "advanced",
    popularity: 72
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    description: "Futuristic neon waves with electric energy",
    category: "Tech",
    config: {
      text: "NEON PULSE",
      font: "Courier New",
      fontSize: 32,
      fontWeight: 600,
      color: "#8B5CF6",
      animation: true,
      duration: 2,
      height: 70,
      sections: 8,
      waveHeight: 25,
      waveLength: 60,
      speed: 1.5
    },
    tags: ["neon", "futuristic", "tech", "purple"],
    difficulty: "intermediate",
    popularity: 81
  }
]

// Enhanced typing presets
export const TYPING_PRESETS: PresetConfig<TypingConfig>[] = [
  {
    id: "typewriter-classic",
    name: "Classic Typewriter",
    description: "Traditional typewriter effect with cursor",
    category: "Retro",
    config: {
      text: "Hello, World!",
      font: "Courier New",
      fontSize: 24,
      fontWeight: 400,
      color: "#374151",
      speed: 100,
      cursor: true,
      cursorColor: "#374151",
      loop: false,
      startDelay: 0
    },
    tags: ["classic", "typewriter", "cursor", "retro"],
    difficulty: "beginner",
    popularity: 92
  },
  {
    id: "code-typing",
    name: "Code Typing",
    description: "Programming-style typing animation",
    category: "Tech",
    config: {
      text: "const message = 'Hello, World!';",
      font: "JetBrains Mono",
      fontSize: 18,
      fontWeight: 500,
      color: "#059669",
      speed: 80,
      cursor: true,
      cursorColor: "#059669",
      loop: true,
      startDelay: 500
    },
    tags: ["code", "programming", "tech", "monospace"],
    difficulty: "intermediate",
    popularity: 88
  },
  {
    id: "elegant-script",
    name: "Elegant Script",
    description: "Smooth, elegant typing for formal content",
    category: "Elegant",
    config: {
      text: "Welcome to our journey",
      font: "Georgia",
      fontSize: 32,
      fontWeight: 300,
      color: "#7C3AED",
      speed: 120,
      cursor: false,
      cursorColor: "#7C3AED",
      loop: false,
      startDelay: 1000
    },
    tags: ["elegant", "formal", "smooth", "purple"],
    difficulty: "beginner",
    popularity: 76
  }
]

// Terminal presets
export const TERMINAL_PRESETS: PresetConfig<TerminalConfig>[] = [
  {
    id: "ubuntu-terminal",
    name: "Ubuntu Terminal",
    description: "Classic Ubuntu terminal appearance",
    category: "Linux",
    config: {
      text: "user@ubuntu:~$ echo 'Hello World'",
      font: "Ubuntu Mono",
      fontSize: 14,
      fontWeight: 400,
      color: "#00FF00",
      backgroundColor: "#300A24",
      borderRadius: 6,
      padding: 20,
      prompt: "user@ubuntu:~$ ",
      cursor: true
    },
    tags: ["ubuntu", "linux", "terminal", "green"],
    difficulty: "beginner",
    popularity: 94
  },
  {
    id: "macos-terminal",
    name: "macOS Terminal",
    description: "Clean macOS terminal style",
    category: "macOS",
    config: {
      text: "MacBook-Pro:~ user$ ls -la",
      font: "SF Mono",
      fontSize: 13,
      fontWeight: 400,
      color: "#FFFFFF",
      backgroundColor: "#1C1C1C",
      borderRadius: 8,
      padding: 16,
      prompt: "MacBook-Pro:~ user$ ",
      cursor: true
    },
    tags: ["macos", "clean", "terminal", "white"],
    difficulty: "beginner",
    popularity: 89
  }
]

// Loader presets
export const LOADER_PRESETS: PresetConfig<LoaderConfig>[] = [
  {
    id: "spinning-dots",
    name: "Spinning Dots",
    description: "Three dots spinning in a circle",
    category: "Minimal",
    config: {
      type: "dots",
      size: 40,
      color: "#0EA5E9",
      speed: 1,
      count: 3,
      spacing: 10
    },
    tags: ["dots", "spinning", "minimal", "blue"],
    difficulty: "beginner",
    popularity: 91
  },
  {
    id: "pulse-ring",
    name: "Pulse Ring",
    description: "Pulsing ring loader animation",
    category: "Modern",
    config: {
      type: "ring",
      size: 60,
      color: "#8B5CF6",
      speed: 1.2,
      thickness: 4,
      gap: 30
    },
    tags: ["ring", "pulse", "modern", "purple"],
    difficulty: "intermediate",
    popularity: 85
  }
]

// Badge presets
export const BADGE_PRESETS: PresetConfig<BadgeConfig>[] = [
  {
    id: "status-success",
    name: "Success Status",
    description: "Green success badge",
    category: "Status",
    config: {
      text: "Success",
      style: "flat",
      color: "#10B981",
      textColor: "#FFFFFF",
      fontSize: 12,
      padding: 8
    },
    tags: ["success", "green", "status", "flat"],
    difficulty: "beginner",
    popularity: 96
  },
  {
    id: "version-badge",
    name: "Version Badge",
    description: "Software version indicator",
    category: "Software",
    config: {
      text: "v2.1.0",
      style: "rounded",
      color: "#6366F1",
      textColor: "#FFFFFF",
      fontSize: 11,
      padding: 6
    },
    tags: ["version", "software", "blue", "rounded"],
    difficulty: "beginner",
    popularity: 88
  }
]

// Animation presets
export const ANIMATION_PRESETS: AnimationConfig[] = [
  {
    name: "Smooth Fade",
    type: "fade",
    duration: 1000,
    easing: "ease-in-out",
    delay: 0
  },
  {
    name: "Bounce In",
    type: "bounce",
    duration: 800,
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    delay: 200
  },
  {
    name: "Slide Up",
    type: "slide",
    duration: 600,
    easing: "ease-out",
    delay: 0
  }
]

// Layout presets
export const LAYOUT_PRESETS = {
  SIDEBAR_WIDTHS: {
    compact: 240,
    normal: 280,
    wide: 320
  },
  BREAKPOINTS: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },
  SPACING: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48
  }
}

// Default configurations for each generator type
export const DEFAULT_CONFIGURATIONS = {
  wave: {
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
  } as WaveConfig,
  
  typing: {
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
  } as TypingConfig,
  
  badge: {
    text: "Badge",
    style: "flat",
    color: "#6366F1",
    textColor: "#FFFFFF",
    fontSize: 12,
    padding: 8
  } as BadgeConfig,
  
  terminal: {
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
  } as TerminalConfig,
  
  loader: {
    type: "dots",
    size: 40,
    color: "#0EA5E9",
    speed: 1,
    count: 3,
    spacing: 8
  } as LoaderConfig
}

// Platform-specific styles
export const PLATFORM_STYLES = {
  github: {
    backgroundColor: "#0D1117",
    textColor: "#C9D1D9",
    accentColor: "#58A6FF"
  },
  discord: {
    backgroundColor: "#36393F",
    textColor: "#DCDDDE",
    accentColor: "#5865F2"
  },
  slack: {
    backgroundColor: "#FFFFFF",
    textColor: "#1D1C1D",
    accentColor: "#4A154B"
  },
  notion: {
    backgroundColor: "#FFFFFF",
    textColor: "#37352F",
    accentColor: "#2383E2"
  }
}

// Export formats
export const EXPORT_FORMATS: ExportFormat[] = [
  {
    name: "SVG",
    extension: "svg",
    mimeType: "image/svg+xml",
    description: "Scalable Vector Graphics - best for web"
  },
  {
    name: "PNG",
    extension: "png", 
    mimeType: "image/png",
    description: "Portable Network Graphics - great for presentations"
  },
  {
    name: "GIF",
    extension: "gif",
    mimeType: "image/gif", 
    description: "Graphics Interchange Format - perfect for animations"
  },
  {
    name: "MP4",
    extension: "mp4",
    mimeType: "video/mp4",
    description: "Video format - ideal for high-quality animations"
  }
]

// Common dimensions
export const COMMON_DIMENSIONS = {
  social: {
    "Instagram Post": { width: 1080, height: 1080 },
    "Instagram Story": { width: 1080, height: 1920 },
    "Twitter Header": { width: 1500, height: 500 },
    "Facebook Cover": { width: 1200, height: 630 },
    "LinkedIn Banner": { width: 1584, height: 396 }
  },
  web: {
    "Blog Header": { width: 1200, height: 400 },
    "Hero Banner": { width: 1920, height: 600 },
    "Card Image": { width: 400, height: 300 },
    "Avatar": { width: 128, height: 128 }
  },
  print: {
    "Business Card": { width: 350, height: 200 },
    "Poster A4": { width: 2480, height: 3508 },
    "Flyer": { width: 1240, height: 1754 }
  }
}

// Generator categories for organization
export const GENERATOR_CATEGORIES = {
  text: ["wave", "typing"],
  ui: ["badge", "loader"],
  terminal: ["terminal"],
  all: ["wave", "typing", "badge", "loader", "terminal"]
} as const

// Quality presets for export
export const QUALITY_PRESETS = {
  draft: { scale: 1, quality: 0.7 },
  standard: { scale: 2, quality: 0.8 },
  high: { scale: 3, quality: 0.9 },
  ultra: { scale: 4, quality: 1.0 }
}

// Additional constants for backward compatibility
export const LOADER_TYPE_DESCRIPTIONS = {
  spinner: "Classic spinning circle loader",
  dots: "Three dots bouncing animation",
  bars: "Animated loading bars",
  pulse: "Pulsing circle effect",
  wave: "Wave-like animation",
  orbit: "Orbiting elements",
  grid: "Grid-based loading pattern",
  text: "Text-based loading indicator",
  ring: "Ring loading animation"
}

export const TERMINAL_THEME_DESCRIPTIONS = {
  modern: "Clean, modern terminal appearance",
  retro: "Classic vintage terminal style",
  matrix: "Matrix-inspired green on black",
  powershell: "Windows PowerShell theme",
  classic: "Traditional terminal styling",
  cyberpunk: "Futuristic neon-themed terminal"
}

export const TYPING_TYPE_DESCRIPTIONS = {
  typewriter: "Classic typewriter effect",
  fade: "Fade-in character animation",
  slide: "Slide-in text animation",
  bounce: "Bouncing character effect",
  glitch: "Digital glitch-style typing",
  matrix: "Matrix rain effect",
  classic: "Simple classic typing",
  neon: "Neon glow effect",
  rainbow: "Rainbow color transition",
  wave: "Wave-like character animation",
  terminal: "Terminal-style typing",
  gradient: "Gradient color effect"
}

export const EASING_FUNCTIONS = {
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
}
