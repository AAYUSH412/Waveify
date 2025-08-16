"use client"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { RotateCcw, Type, Smile, Target } from 'lucide-react'
import { 
  TypingConfig, 
  TypingType
} from '../shared/types'
import {
  TYPING_TYPE_DESCRIPTIONS,
  EASING_FUNCTIONS
} from '../shared/constants'
import { ControlGroup, ColorPicker } from '../shared/components'

interface TypingControlsProps {
  config: TypingConfig
  onUpdate: (updates: Partial<TypingConfig>) => void
  onReset: () => void
}

// Enhanced typing styles with categories and descriptions
const TYPING_TYPES_GROUPED = {
  'Classic': [
    { value: 'classic', label: 'Classic', icon: '📝', description: 'Standard typewriter effect' },
    { value: 'terminal', label: 'Terminal', icon: '💻', description: 'Command line interface style' },
    { value: 'typewriter', label: 'Typewriter', icon: '⌨️', description: 'Vintage typewriter effect' }
  ],
  'Modern': [
    { value: 'neon', label: 'Neon', icon: '💡', description: 'Glowing neon text effect' },
    { value: 'gradient', label: 'Gradient', icon: '🎨', description: 'Colorful gradient text' },
    { value: 'rainbow', label: 'Rainbow', icon: '🌈', description: 'Multi-color animated text' }
  ],
  'Special Effects': [
    { value: 'glitch', label: 'Glitch', icon: '📺', description: 'Digital glitch effect' },
    { value: 'wave', label: 'Wave', icon: '🌊', description: 'Wave motion text' },
    { value: 'matrix', label: 'Matrix', icon: '🔢', description: 'Matrix digital rain style' }
  ],
  'Creative': [
    { value: 'flicker', label: 'Flicker', icon: '✨', description: 'Flickering text animation' },
    { value: 'glow', label: 'Glow', icon: '🔆', description: 'Soft glowing effect' },
    { value: 'cyber', label: 'Cyber', icon: '🤖', description: 'Cyberpunk aesthetic' }
  ]
} as const

// Font families optimized for typing animations
const FONT_FAMILIES = [
  { value: 'monospace', label: 'Monospace', description: 'System default monospace' },
  { value: 'Fira Code, monospace', label: 'Fira Code', description: 'Programming ligatures' },
  { value: 'JetBrains Mono, monospace', label: 'JetBrains Mono', description: 'Developer-focused' },
  { value: 'Source Code Pro, monospace', label: 'Source Code Pro', description: 'Adobe\'s coding font' },
  { value: 'Monaco, monospace', label: 'Monaco', description: 'macOS classic' },
  { value: 'Courier New, monospace', label: 'Courier New', description: 'Traditional typewriter' },
  { value: 'Ubuntu Mono, monospace', label: 'Ubuntu Mono', description: 'Ubuntu system font' },
  { value: 'Roboto Mono, monospace', label: 'Roboto Mono', description: 'Google\'s monospace' }
]

// Emoji categories for enhanced text support
const EMOJI_CATEGORIES = [
  { label: 'Common', emojis: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇'] },
  { label: 'Tech', emojis: ['💻', '🖥️', '⌨️', '🖱️', '💾', '📱', '⚡', '🔋', '🛠️', '⚙️'] },
  { label: 'Symbols', emojis: ['✨', '⭐', '🌟', '💫', '🔥', '💎', '🚀', '🎯', '💡', '🔔'] },
  { label: 'Nature', emojis: ['🌊', '🌈', '☀️', '🌙', '⭐', '🌍', '🌳', '🌸', '🍃', '🌺'] }
]

// Preset configurations for common use cases
const TYPING_PRESETS = [
  {
    name: 'Code Demo',
    icon: '💻',
    config: {
      type: 'terminal' as TypingType,
      text: 'npm install awesome-package\n✓ Package installed successfully!',
      speed: 30,
      fontFamily: 'Fira Code, monospace',
      color: '#00ff00',
      backgroundColor: '#000000',
      prompt: '$ '
    }
  },
  {
    name: 'Hero Text',
    icon: '🌟',
    config: {
      type: 'gradient' as TypingType,
      text: 'Welcome to the Future',
      speed: 60,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 32,
      cursor: true
    }
  },
  {
    name: 'Retro Terminal',
    icon: '📺',
    config: {
      type: 'matrix' as TypingType,
      text: 'SYSTEM INITIALIZED...\nACCESS GRANTED',
      speed: 40,
      fontFamily: 'Monaco, monospace',
      color: '#00ff41',
      backgroundColor: '#000000'
    }
  },
  {
    name: 'Cyberpunk',
    icon: '🤖',
    config: {
      type: 'cyber' as TypingType,
      text: 'NEURAL LINK ESTABLISHED',
      speed: 50,
      glowEffect: true,
      color: '#ff0080',
      backgroundColor: '#0a0a0a'
    }
  }
]

export function TypingControls({ config, onUpdate, onReset }: TypingControlsProps) {
  const insertEmoji = (emoji: string) => {
    const currentText = config.text || ''
    onUpdate({ text: currentText + emoji })
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="animation">Animation</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {/* Text Content */}
          <ControlGroup title="Text Content" description="What text should be typed out">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Text to Type</Label>
                <Textarea
                  value={config.text || 'Welcome to my project'}
                  onChange={(e) => onUpdate({ text: e.target.value })}
                  placeholder="Enter the text to animate..."
                  rows={4}
                  className="resize-none font-mono"
                />
                <div className="text-xs text-muted-foreground">
                  Characters: {(config.text || 'Welcome to my project').length}
                  {(config.text || '').includes('\n') && (
                    <span className="ml-2">
                      Lines: {(config.text || '').split('\n').length}
                    </span>
                  )}
                </div>
              </div>

              {/* Emoji Picker */}
              <div className="space-y-2">
                <Label>Quick Emojis</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {EMOJI_CATEGORIES.map((category) => (
                    <div key={category.label}>
                      <div className="text-xs font-medium text-muted-foreground mb-1">
                        {category.label}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.emojis.map((emoji) => (
                          <Button
                            key={emoji}
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => insertEmoji(emoji)}
                          >
                            {emoji}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prompt */}
              <div className="space-y-2">
                <Label>Command Prompt (optional)</Label>
                <Input
                  value={config.prompt || ''}
                  onChange={(e) => onUpdate({ prompt: e.target.value })}
                  placeholder="$ "
                  className="font-mono"
                />
              </div>
            </div>
          </ControlGroup>

          {/* Quick Presets */}
          <ControlGroup title="Quick Presets" description="Common typing configurations">
            <div className="grid grid-cols-2 gap-2">
              {TYPING_PRESETS.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdate(preset.config)}
                  className="justify-start text-xs h-auto p-3"
                >
                  <div className="text-left">
                    <div className="font-medium">{preset.icon} {preset.name}</div>
                    <div className="text-muted-foreground truncate">
                      {preset.config.text.split('\n')[0].substring(0, 20)}...
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="style" className="space-y-6">
          {/* Typing Style */}
          <ControlGroup title="Typing Style" description="Visual appearance and effect">
            <div className="space-y-4">
              <Select
                value={config.type || 'classic'}
                onValueChange={(value) => onUpdate({ type: value as TypingType })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select typing style" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {Object.entries(TYPING_TYPES_GROUPED).map(([category, types]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {types.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <span>{type.icon}</span>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                                {type.description}
                              </div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>

              {/* Current Style Badge */}
              {config.type && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {Object.values(TYPING_TYPES_GROUPED)
                      .flat()
                      .find(t => t.value === config.type)?.icon} {config.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {TYPING_TYPE_DESCRIPTIONS[config.type as keyof typeof TYPING_TYPE_DESCRIPTIONS]}
                  </span>
                </div>
              )}
            </div>
          </ControlGroup>

          {/* Typography */}
          <ControlGroup title="Typography" description="Font and text styling">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Font Family</Label>
                <Select
                  value={config.fontFamily || 'monospace'}
                  onValueChange={(value) => onUpdate({ fontFamily: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FONT_FAMILIES.map((font) => (
                      <SelectItem key={font.value} value={font.value}>
                        <div>
                          <div className="font-medium" style={{ fontFamily: font.value }}>
                            {font.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {font.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Font Size</Label>
                <Slider
                  value={[config.fontSize || 16]}
                  onValueChange={([value]) => onUpdate({ fontSize: value })}
                  min={10}
                  max={72}
                  step={2}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.fontSize || 16}px
                </div>
              </div>
            </div>
          </ControlGroup>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <ControlGroup title="Text Color" description="Main text color">
              <ColorPicker
                value={config.color || '#000000'}
                onChange={(color) => onUpdate({ color })}
                colors={[
                  '#000000', '#ffffff', '#00ff00', '#ff0000', '#0000ff',
                  '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#8800ff'
                ]}
              />
            </ControlGroup>

            <ControlGroup title="Background" description="Background color">
              <div className="space-y-2">
                <ColorPicker
                  value={config.backgroundColor || 'transparent'}
                  onChange={(color) => onUpdate({ backgroundColor: color })}
                  colors={[
                    '#000000', '#ffffff', '#1a1a1a', '#2d2d2d', '#f8f8f8',
                    'transparent'
                  ]}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdate({ backgroundColor: 'transparent' })}
                  className="w-full"
                >
                  Make Transparent
                </Button>
              </div>
            </ControlGroup>
          </div>
        </TabsContent>

        <TabsContent value="animation" className="space-y-6">
          {/* Animation Settings */}
          <ControlGroup title="Animation Settings" description="Control typing behavior">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Typing Speed</Label>
                <Slider
                  value={[config.speed || 50]}
                  onValueChange={([value]) => onUpdate({ speed: value })}
                  min={10}
                  max={200}
                  step={5}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.speed || 50}ms per character
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Show Cursor</Label>
                  <p className="text-sm text-muted-foreground">Display blinking cursor</p>
                </div>
                <Switch
                  checked={config.cursor !== false}
                  onCheckedChange={(checked) => onUpdate({ cursor: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Repeat</Label>
                  <p className="text-sm text-muted-foreground">Loop the animation</p>
                </div>
                <Switch
                  checked={config.repeat === true}
                  onCheckedChange={(checked) => onUpdate({ repeat: checked })}
                />
              </div>

              {config.repeat && (
                <div className="space-y-2">
                  <Label>Pause Between Loops</Label>
                  <Slider
                    value={[config.pauseTime || 1000]}
                    onValueChange={([value]) => onUpdate({ pauseTime: value })}
                    min={500}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <div className="text-center text-sm text-muted-foreground">
                    {config.pauseTime || 1000}ms
                  </div>
                </div>
              )}
            </div>
          </ControlGroup>

          {/* Visual Effects */}
          <ControlGroup title="Visual Effects" description="Enhance the typing animation">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Glow Effect</Label>
                  <p className="text-sm text-muted-foreground">Add text glow</p>
                </div>
                <Switch
                  checked={config.glowEffect === true}
                  onCheckedChange={(checked) => onUpdate({ glowEffect: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Sound Effects</Label>
                  <p className="text-sm text-muted-foreground">Typing sound</p>
                </div>
                <Switch
                  checked={config.soundEnabled === true}
                  onCheckedChange={(checked) => onUpdate({ soundEnabled: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label>Animation Easing</Label>
                <Select
                  value={config.easing || 'linear'}
                  onValueChange={(value) => onUpdate({ 
                    easing: value as 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'
                  })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(EASING_FUNCTIONS).slice(0, 4).map((easing) => (
                      <SelectItem key={easing} value={easing}>
                        <span className="capitalize">{easing}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {/* Accessibility */}
          <ControlGroup title="Accessibility" description="Accessibility and user preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Reduced Motion</Label>
                  <p className="text-sm text-muted-foreground">Respect motion preferences</p>
                </div>
                <Switch
                  checked={config.accessibility?.reducedMotion === true}
                  onCheckedChange={(checked) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      reducedMotion: checked 
                    } 
                  })}
                />
              </div>

              <div className="space-y-2">
                <Label>ARIA Label</Label>
                <Input
                  value={config.accessibility?.ariaLabel || 'Typing animation'}
                  onChange={(e) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      ariaLabel: e.target.value 
                    } 
                  })}
                  placeholder="Describe the animation for screen readers"
                />
              </div>
            </div>
          </ControlGroup>

          {/* Canvas Dimensions */}
          <ControlGroup title="Canvas Dimensions" description="SVG container size">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Width</Label>
                <Slider
                  value={[config.width || 400]}
                  onValueChange={([value]) => onUpdate({ width: value })}
                  min={200}
                  max={1200}
                  step={20}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.width || 400}px
                </div>
              </div>

              <div className="space-y-2">
                <Label>Height</Label>
                <Slider
                  value={[config.height || 100]}
                  onValueChange={([value]) => onUpdate({ height: value })}
                  min={50}
                  max={400}
                  step={10}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.height || 100}px
                </div>
              </div>
            </div>
          </ControlGroup>

          {/* Technical Info */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-sm">Technical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Typing Style:</span>
                <Badge variant="outline">{config.type || 'classic'}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Text Length:</span>
                <span>{(config.text || 'Welcome to my project').length} chars</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span>
                  ~{Math.round(((config.text || 'Welcome to my project').length * (config.speed || 50)) / 1000)}s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Performance:</span>
                <span className="text-green-600">Optimized</span>
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
