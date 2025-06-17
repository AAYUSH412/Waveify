import React from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  WaveConfig, 
  WaveType,
  ControlGroup, 
  ColorPicker,
  api
} from '../shared'

interface WaveControlsProps {
  config: WaveConfig
  onUpdate: (updates: Partial<WaveConfig>) => void
  subtype?: string
  onSubtypeChange?: (subtype: string | undefined) => void
}

// Wave type tips component
function WaveTypeTips({ waveType }: { waveType: string }) {
  const tips: Record<string, string[]> = {
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

  const currentTips = tips[waveType] || []

  return (
    <div className="space-y-2">
      {currentTips.map((tip, index) => (
        <div key={index} className="flex items-start gap-2 text-xs">
          <span className="text-primary">•</span>
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
  const waveTypes = [
    { value: 'default', label: 'Default', description: 'Smooth curved wave', icon: '〰️' },
    { value: 'sine', label: 'Sine Wave', description: 'Classic mathematical sine wave', icon: '🌊' },
    { value: 'square', label: 'Square Wave', description: 'Digital square wave pattern', icon: '⬜' },
    { value: 'sawtooth', label: 'Sawtooth', description: 'Sharp sawtooth wave pattern', icon: '🔺' },
    { value: 'pulse', label: 'Pulse Wave', description: 'Pulse wave with adjustable width', icon: '⚡' },
    { value: 'triangle', label: 'Triangle', description: 'Triangular wave pattern', icon: '🔻' },
    { value: 'fluid', label: 'Fluid Wave', description: 'Dynamic fluid-like motion', icon: '💧' },
    { value: 'glitch', label: 'Glitch Wave', description: 'Digital glitch effect', icon: '⚡' },
    { value: 'plasma', label: 'Plasma Wave', description: 'Energy plasma effect', icon: '🔥' },
    { value: 'neon', label: 'Neon Wave', description: 'Cyberpunk neon glow', icon: '💫' }
  ]

  return (
    <div className="space-y-6">
      {/* Wave Type Selection */}
      <ControlGroup 
        title="Wave Type" 
        description="Choose the style of wave animation"
      >
        <Select value={subtype || 'default'} onValueChange={onSubtypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select wave type" />
          </SelectTrigger>
          <SelectContent className="max-h-80">
            {waveTypes.map((type) => (
              <SelectItem key={type.value} value={type.value} className="cursor-pointer">
                <div className="flex items-start gap-3 py-2">
                  <span className="text-lg">{type.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-medium">{type.label}</span>
                    <span className="text-xs text-muted-foreground">{type.description}</span>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Current Wave Type Badge */}
        {subtype && subtype !== 'default' && (
          <div className="mt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {waveTypes.find(t => t.value === subtype)?.icon} {waveTypes.find(t => t.value === subtype)?.label}
            </Badge>
          </div>
        )}
      </ControlGroup>

      {/* Color Control */}
      <ControlGroup 
        title="Color" 
        description="Choose the wave color or gradient"
      >
        <ColorPicker
          value={config.color || '#007CF0'}
          onChange={(color) => onUpdate({ color })}
          label="Wave Color"
        />
      </ControlGroup>

      {/* Dimensions */}
      <ControlGroup 
        title="Dimensions" 
        description="Set the size of the wave animation"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Width: {config.width || 1200}px</Label>
            <Slider
              value={[config.width || 1200]}
              onValueChange={([width]) => onUpdate({ width })}
              min={400}
              max={2000}
              step={50}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Recommended: 1200px for GitHub READMEs
            </p>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Height: {config.height || 150}px</Label>
            <Slider
              value={[config.height || 150]}
              onValueChange={([height]) => onUpdate({ height })}
              min={80}
              max={400}
              step={10}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Typical range: 120-200px for banners
            </p>
          </div>
        </div>
      </ControlGroup>

      {/* Wave Properties */}
      <ControlGroup 
        title="Wave Properties" 
        description="Adjust the wave characteristics"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Amplitude: {config.amplitude || 20}px</Label>
            <Slider
              value={[config.amplitude || 20]}
              onValueChange={([amplitude]) => onUpdate({ amplitude })}
              min={5}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Controls the height of the wave peaks
            </p>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Frequency: {config.frequency || 2}</Label>
            <Slider
              value={[config.frequency || 2]}
              onValueChange={([frequency]) => onUpdate({ frequency })}
              min={0.5}
              max={8}
              step={0.5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Number of wave cycles across the width
            </p>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Speed: {config.speed || 4}s</Label>
            <Slider
              value={[config.speed || 4]}
              onValueChange={([speed]) => onUpdate({ speed })}
              min={0.5}
              max={10}
              step={0.5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Animation duration for one complete cycle
            </p>
          </div>
          
          {/* Pulse Width Control - Only for pulse wave */}
          {subtype === 'pulse' && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Pulse Width: {((config.pulseWidth || 0.3) * 100).toFixed(0)}%</Label>
              <Slider
                value={[config.pulseWidth || 0.3]}
                onValueChange={([pulseWidth]) => onUpdate({ pulseWidth })}
                min={0.1}
                max={0.9}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Controls the width of the pulse relative to the period
              </p>
            </div>
          )}
        </div>
      </ControlGroup>

      {/* Wave Type Specific Tips */}
      {subtype && subtype !== 'default' && (
        <ControlGroup 
          title={`${waveTypes.find(t => t.value === subtype)?.label} Tips`}
          description="Optimization suggestions for this wave type"
        >
          <div className="p-3 rounded-lg bg-muted/50 dark:bg-muted/20 border border-border/50">
            <WaveTypeTips waveType={subtype} />
          </div>
        </ControlGroup>
      )}

      {/* Quick Presets */}
      <ControlGroup 
        title="Quick Settings" 
        description="Common wave configurations"
      >
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdate({ 
              width: 1200, 
              height: 150, 
              amplitude: 20, 
              frequency: 2, 
              speed: 4 
            })}
            className="justify-start text-xs h-auto p-3"
          >
            <div className="text-left">
              <div className="font-medium">GitHub Standard</div>
              <div className="text-muted-foreground">1200×150, Classic</div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdate({ 
              width: 800, 
              height: 120, 
              amplitude: 25, 
              frequency: 1.5, 
              speed: 3 
            })}
            className="justify-start text-xs h-auto p-3"
          >
            <div className="text-left">
              <div className="font-medium">Compact</div>
              <div className="text-muted-foreground">800×120, Small</div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdate({ 
              width: 1500, 
              height: 200, 
              amplitude: 40, 
              frequency: 2.5, 
              speed: 2 
            })}
            className="justify-start text-xs h-auto p-3"
          >
            <div className="text-left">
              <div className="font-medium">Hero Banner</div>
              <div className="text-muted-foreground">1500×200, Bold</div>
            </div>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdate({ 
              width: 600, 
              height: 80, 
              amplitude: 15, 
              frequency: 3, 
              speed: 5 
            })}
            className="justify-start text-xs h-auto p-3"
          >
            <div className="text-left">
              <div className="font-medium">Minimal</div>
              <div className="text-muted-foreground">600×80, Subtle</div>
            </div>
          </Button>
        </div>
      </ControlGroup>

      {/* Wave Type Showcase */}
      <ControlGroup 
        title="Popular Wave Types" 
        description="Quick access to popular configurations"
      >
        <div className="grid grid-cols-1 gap-2">
          {[
            { type: 'neon', label: '💫 Neon Cyberpunk', color: '#00ffff' },
            { type: 'glitch', label: '⚡ Digital Glitch', color: '#ff0080' },
            { type: 'plasma', label: '🔥 Energy Plasma', color: '#ff6600' },
            { type: 'fluid', label: '💧 Fluid Motion', color: '#0099ff' }
          ].map((item) => (
            <Button
              key={item.type}
              variant="ghost"
              size="sm"
              onClick={() => {
                onSubtypeChange?.(item.type)
                onUpdate({ color: item.color })
              }}
              className="justify-start text-xs h-auto p-3 border border-border/50 hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.label}</span>
              </div>
            </Button>
          ))}
        </div>
      </ControlGroup>
    </div>
  )
}


