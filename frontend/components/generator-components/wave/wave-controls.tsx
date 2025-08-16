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
import { Separator } from '@/components/ui/separator'
import { RotateCcw, Waves, Palette, Settings } from 'lucide-react'
import { 
  WaveConfig, 
  WaveType
} from '../shared/types'
import { ControlGroup, ColorPicker } from '../shared/components'

interface WaveControlsProps {
  config: WaveConfig
  onUpdate: (updates: Partial<WaveConfig>) => void
  subtype?: string
  onSubtypeChange?: (subtype: string | undefined) => void
}

// Wave types grouped by category
const WAVE_TYPES_GROUPED = {
  'Basic': [
    { value: 'default', label: 'Default', icon: '〰️', description: 'Smooth curved wave' },
    { value: 'sine', label: 'Sine Wave', icon: '🌊', description: 'Classic mathematical sine wave' }
  ],
  'Geometric': [
    { value: 'square', label: 'Square Wave', icon: '⬜', description: 'Digital square wave pattern' },
    { value: 'triangle', label: 'Triangle', icon: '🔺', description: 'Triangular wave pattern' },
    { value: 'sawtooth', label: 'Sawtooth', icon: '📐', description: 'Sharp sawtooth pattern' }
  ],
  'Advanced': [
    { value: 'pulse', label: 'Pulse Wave', icon: '⚡', description: 'Pulse wave with adjustable width' },
    { value: 'fluid', label: 'Fluid Wave', icon: '💧', description: 'Dynamic fluid-like motion' }
  ],
  'Effects': [
    { value: 'neon', label: 'Neon', icon: '💡', description: 'Cyberpunk neon glow effect' },
    { value: 'glitch', label: 'Glitch', icon: '📺', description: 'Digital glitch distortion' },
    { value: 'plasma', label: 'Plasma', icon: '🔥', description: 'Energy plasma wave effect' }
  ]
} as const

// Wave type tips and recommendations
const WAVE_TYPE_TIPS: Record<string, string[]> = {
  sine: [
    "Perfect for smooth, natural-looking waves",
    "Great for ocean or water themes", 
    "Try lower frequencies (1-2) for gentler waves"
  ],
  square: [
    "Ideal for digital or tech themes",
    "Use higher frequencies for retro pixel art feel",
    "Lower amplitudes work best for readability"
  ],
  sawtooth: [
    "Sharp, aggressive look perfect for modern designs",
    "Great for energy or power themes",
    "Try medium frequencies (2-3) for best effect"
  ],
  pulse: [
    "Adjust pulse width for different effects",
    "Lower pulse widths (20-30%) create sharp spikes", 
    "Higher pulse widths (70-80%) create plateau effects"
  ],
  triangle: [
    "Balanced between sine and square waves",
    "Good for geometric or architectural themes",
    "Works well with higher frequencies"
  ],
  fluid: [
    "Dynamic, organic motion perfect for creative projects",
    "Try slower speeds (5-8s) for mesmerizing effects",
    "Higher amplitudes enhance the fluid motion"
  ],
  glitch: [
    "Perfect for cyberpunk or tech-error themes",
    "Faster speeds (1-2s) enhance the glitch effect",
    "Use bright, contrasting colors for maximum impact"
  ],
  plasma: [
    "Energy-themed projects love this effect",
    "Medium speeds (3-4s) work best",
    "Try neon colors: #ff0080, #00ffff, #ffff00"
  ],
  neon: [
    "Cyberpunk and retro themes are perfect",
    "Use glowing colors: #00ffff, #ff0080, #39ff14",
    "Darker backgrounds enhance the neon effect"
  ]
}

// Preset color schemes
const COLOR_PRESETS = [
  { name: 'Ocean Blue', color: '#007CF0', description: 'Professional blue' },
  { name: 'Neon Cyan', color: '#00FFFF', description: 'Cyberpunk cyan' },
  { name: 'Electric Purple', color: '#8B5CF6', description: 'Vibrant purple' },
  { name: 'Sunset Orange', color: '#FF6B35', description: 'Warm orange' },
  { name: 'Forest Green', color: '#00FF41', description: 'Matrix green' },
  { name: 'Hot Pink', color: '#FF0080', description: 'Neon pink' },
  { name: 'Golden Yellow', color: '#FFD700', description: 'Bright gold' },
  { name: 'Deep Red', color: '#DC2626', description: 'Bold red' }
]

// Quick settings presets
const QUICK_PRESETS = [
  {
    name: 'GitHub Header',
    icon: '📁',
    config: { width: 1200, height: 150, amplitude: 20, frequency: 2, speed: 4 }
  },
  {
    name: 'Mobile Banner', 
    icon: '📱',
    config: { width: 800, height: 120, amplitude: 15, frequency: 2.5, speed: 3 }
  },
  {
    name: 'Social Media',
    icon: '📢', 
    config: { width: 1000, height: 200, amplitude: 30, frequency: 1.5, speed: 5 }
  },
  {
    name: 'Subtle Wave',
    icon: '💫',
    config: { width: 1200, height: 100, amplitude: 10, frequency: 3, speed: 6 }
  }
]

function WaveTypeTips({ waveType }: { waveType: string }) {
  const tips = WAVE_TYPE_TIPS[waveType] || []

  if (tips.length === 0) return null

  return (
    <div className="space-y-2">
      {tips.map((tip, index) => (
        <div key={index} className="flex items-start gap-2 text-xs">
          <span className="text-primary mt-1">•</span>
          <span className="text-muted-foreground">{tip}</span>
        </div>
      ))}
    </div>
  )
}

export function WaveControls({ 
  config, 
  onUpdate, 
  subtype, 
  onSubtypeChange 
}: WaveControlsProps) {
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="type" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="type">Type</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="animation">Animation</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="type" className="space-y-6">
          {/* Wave Type Selection */}
          <ControlGroup title="Wave Type" description="Choose the style of wave animation">
            <Select 
              value={subtype || 'default'} 
              onValueChange={onSubtypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select wave type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(WAVE_TYPES_GROUPED).map(([category, types]) => (
                  <div key={category}>
                    <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                      {category}
                    </div>
                    {types.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <span>{type.icon}</span>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                    <Separator className="my-1" />
                  </div>
                ))}
              </SelectContent>
            </Select>
            
            {/* Wave Type Tips */}
            {subtype && subtype !== 'default' && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm font-medium mb-2">💡 Tips for {subtype} waves:</div>
                <WaveTypeTips waveType={subtype} />
              </div>
            )}
          </ControlGroup>

          {/* Quick Presets */}
          <ControlGroup title="Quick Presets" description="Common wave configurations">
            <div className="grid grid-cols-2 gap-2">
              {QUICK_PRESETS.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  onClick={() => onUpdate(preset.config)}
                  className="justify-start gap-2 h-auto p-3"
                >
                  <span className="text-lg">{preset.icon}</span>
                  <div className="text-left">
                    <div className="font-medium text-xs">{preset.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {preset.config.width}×{preset.config.height}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="style" className="space-y-6">
          {/* Color Selection */}
          <ControlGroup title="Color" description="Choose the wave color">
            <ColorPicker
              value={config.color || '#007CF0'}
              onChange={(color) => onUpdate({ color })}
              label="Wave Color"
            />
            
            {/* Color Presets */}
            <div className="mt-4">
              <Label className="text-sm">Color Presets</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {COLOR_PRESETS.map((preset) => (
                  <Button
                    key={preset.name}
                    variant="outline"
                    onClick={() => onUpdate({ color: preset.color })}
                    className="justify-start gap-2 h-auto p-2"
                  >
                    <div 
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: preset.color }}
                    />
                    <div className="text-left">
                      <div className="font-medium text-xs">{preset.name}</div>
                      <div className="text-xs text-muted-foreground">{preset.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </ControlGroup>

          {/* Dimensions */}
          <ControlGroup title="Dimensions" description="Set the size of the wave animation">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Width: {config.width || 1200}px</Label>
                <Slider
                  value={[config.width || 1200]}
                  onValueChange={([width]) => onUpdate({ width })}
                  min={400}
                  max={2000}
                  step={50}
                />
              </div>
              <div className="space-y-2">
                <Label>Height: {config.height || 150}px</Label>
                <Slider
                  value={[config.height || 150]}
                  onValueChange={([height]) => onUpdate({ height })}
                  min={50}
                  max={500}
                  step={10}
                />
              </div>
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="animation" className="space-y-6">
          {/* Wave Properties */}
          <ControlGroup title="Wave Properties" description="Adjust the wave characteristics">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Amplitude: {config.amplitude || 20}px</Label>
                <Slider
                  value={[config.amplitude || 20]}
                  onValueChange={([amplitude]) => onUpdate({ amplitude })}
                  min={5}
                  max={100}
                  step={5}
                />
              </div>
              <div className="space-y-2">
                <Label>Frequency: {config.frequency || 2}</Label>
                <Slider
                  value={[config.frequency || 2]}
                  onValueChange={([frequency]) => onUpdate({ frequency })}
                  min={0.5}
                  max={5}
                  step={0.1}
                />
              </div>
              <div className="space-y-2">
                <Label>Speed: {config.speed || 4}s</Label>
                <Slider
                  value={[config.speed || 4]}
                  onValueChange={([speed]) => onUpdate({ speed })}
                  min={0.5}
                  max={10}
                  step={0.5}
                />
              </div>
              
              {/* Pulse Width - only for pulse waves */}
              {subtype === 'pulse' && (
                <div className="space-y-2">
                  <Label>Pulse Width: {config.pulseWidth || 50}%</Label>
                  <Slider
                    value={[config.pulseWidth || 50]}
                    onValueChange={([pulseWidth]) => onUpdate({ pulseWidth })}
                    min={10}
                    max={90}
                    step={5}
                  />
                </div>
              )}
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {/* Advanced Features */}
          <ControlGroup title="Advanced Features" description="Professional enhancements">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Accessibility Mode</Label>
                  <div className="text-xs text-muted-foreground">
                    Respects user's motion preferences
                  </div>
                </div>
                <Switch
                  checked={config.accessibilityMode || false}
                  onCheckedChange={(accessibilityMode) => onUpdate({ accessibilityMode })}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Ambient Effect</Label>
                  <div className="text-xs text-muted-foreground">
                    Adds background glow effects
                  </div>
                </div>
                <Switch
                  checked={config.ambientEffect || false}
                  onCheckedChange={(ambientEffect) => onUpdate({ ambientEffect })}
                />
              </div>

              {/* Performance Mode */}
              <div className="space-y-2">
                <Label>Performance Mode</Label>
                <Select
                  value={config.performanceMode || 'standard'}
                  onValueChange={(performanceMode: 'standard' | 'optimized' | 'minimal') => 
                    onUpdate({ performanceMode })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="optimized">Optimized</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gradient Stops */}
              <div className="space-y-2">
                <Label>Gradient Stops: {config.gradientStops || 4}</Label>
                <Slider
                  value={[config.gradientStops || 4]}
                  onValueChange={([gradientStops]) => onUpdate({ gradientStops })}
                  min={2}
                  max={10}
                  step={1}
                />
              </div>

              {/* Glow Intensity */}
              <div className="space-y-2">
                <Label>Glow Intensity: {config.glowIntensity || 1}</Label>
                <Slider
                  value={[config.glowIntensity || 1]}
                  onValueChange={([glowIntensity]) => onUpdate({ glowIntensity })}
                  min={0}
                  max={3}
                  step={0.1}
                />
              </div>
            </div>
          </ControlGroup>
        </TabsContent>
      </Tabs>
    </div>
  )
}


