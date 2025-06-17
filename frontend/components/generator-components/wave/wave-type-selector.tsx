"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTheme } from 'next-themes'
import { WaveConfig } from '../shared'

interface WaveType {
  id: string
  name: string
  description: string
  icon: string
  category: 'basic' | 'geometric' | 'advanced' | 'effects'
  color: string
  tips: string[]
}

const WAVE_TYPES: WaveType[] = [
  // Basic Waves
  {
    id: 'default',
    name: 'Default Wave',
    description: 'Smooth curved wave perfect for any project',
    icon: '〰️',
    category: 'basic',
    color: '#007CF0',
    tips: [
      'Great starting point for any project',
      'Works well with all color schemes',
      'Perfect for professional documentation'
    ]
  },
  {
    id: 'sine',
    name: 'Sine Wave',
    description: 'Classic mathematical sine wave pattern',
    icon: '🌊',
    category: 'basic',
    color: '#0099ff',
    tips: [
      'Natural ocean-like movement',
      'Try lower frequencies (1-2) for gentle waves',
      'Perfect for water or nature themes'
    ]
  },

  // Geometric Waves
  {
    id: 'square',
    name: 'Square Wave',
    description: 'Digital square wave pattern',
    icon: '⬜',
    category: 'geometric',
    color: '#00ff41',
    tips: [
      'Ideal for tech and digital themes',
      'Use higher frequencies for retro pixel feel',
      'Lower amplitudes improve readability'
    ]
  },
  {
    id: 'triangle',
    name: 'Triangle Wave',
    description: 'Triangular geometric wave pattern',
    icon: '🔻',
    category: 'geometric',
    color: '#ff6b35',
    tips: [
      'Balanced between sine and square waves',
      'Great for architectural themes',
      'Works well with higher frequencies'
    ]
  },
  {
    id: 'sawtooth',
    name: 'Sawtooth Wave',
    description: 'Sharp sawtooth wave pattern',
    icon: '🔺',
    category: 'geometric',
    color: '#ff3366',
    tips: [
      'Sharp, aggressive modern look',
      'Perfect for energy or power themes',
      'Try medium frequencies (2-3) for best effect'
    ]
  },

  // Advanced Waves
  {
    id: 'pulse',
    name: 'Pulse Wave',
    description: 'Pulse wave with adjustable width',
    icon: '⚡',
    category: 'advanced',
    color: '#ff4757',
    tips: [
      'Adjust pulse width for different effects',
      'Lower pulse widths create sharp spikes',
      'Higher pulse widths create plateau effects'
    ]
  },
  {
    id: 'fluid',
    name: 'Fluid Wave',
    description: 'Dynamic fluid-like motion',
    icon: '💧',
    category: 'advanced',
    color: '#0099ff',
    tips: [
      'Organic motion perfect for creative projects',
      'Try slower speeds (5-8s) for mesmerizing effects',
      'Higher amplitudes enhance fluid motion'
    ]
  },

  // Effects
  {
    id: 'neon',
    name: 'Neon Wave',
    description: 'Cyberpunk neon glow effect',
    icon: '💫',
    category: 'effects',
    color: '#00ffff',
    tips: [
      'Perfect for cyberpunk themes',
      'Use glowing colors: #00ffff, #ff0080, #39ff14',
      'Darker backgrounds enhance the neon effect'
    ]
  },
  {
    id: 'glitch',
    name: 'Glitch Wave',
    description: 'Digital glitch distortion effect',
    icon: '📺',
    category: 'effects',
    color: '#ff0080',
    tips: [
      'Perfect for cyberpunk or tech-error themes',
      'Faster speeds (1-2s) enhance the effect',
      'Use bright, contrasting colors for impact'
    ]
  },
  {
    id: 'plasma',
    name: 'Plasma Wave',
    description: 'Energy plasma wave effect',
    icon: '🔥',
    category: 'effects',
    color: '#ff6600',
    tips: [
      'Great for energy-themed projects',
      'Medium speeds (3-4s) work best',
      'Try neon colors: #ff0080, #00ffff, #ffff00'
    ]
  }
]

const CATEGORIES = {
  basic: { name: 'Basic Waves', description: 'Simple, versatile wave patterns' },
  geometric: { name: 'Geometric', description: 'Mathematical and structured patterns' },
  advanced: { name: 'Advanced', description: 'Complex wave behaviors' },
  effects: { name: 'Effects', description: 'Special visual effects and styles' }
}

interface WaveTypeSelectorProps {
  selectedType?: string
  onTypeSelect: (type: string, color: string) => void
  onConfigUpdate?: (updates: Partial<WaveConfig>) => void
}

export function WaveTypeSelector({ 
  selectedType = 'default', 
  onTypeSelect,
  onConfigUpdate 
}: WaveTypeSelectorProps) {
  const [activeCategory, setActiveCategory] = useState<keyof typeof CATEGORIES>('basic')
  const { theme } = useTheme()

  const handleTypeSelect = (waveType: WaveType) => {
    onTypeSelect(waveType.id, waveType.color)
    
    // Apply recommended settings for this wave type
    if (onConfigUpdate) {
      const recommendedSettings: Partial<WaveConfig> = {
        color: waveType.color
      }

      // Type-specific optimizations
      switch (waveType.id) {
        case 'pulse':
          recommendedSettings.pulseWidth = 0.3
          break
        case 'glitch':
          recommendedSettings.speed = 1.5
          recommendedSettings.amplitude = 40
          break
        case 'fluid':
          recommendedSettings.speed = 6
          recommendedSettings.amplitude = 30
          break
        case 'neon':
          recommendedSettings.amplitude = 25
          recommendedSettings.frequency = 2.5
          break
        case 'plasma':
          recommendedSettings.speed = 3
          recommendedSettings.frequency = 3
          break
      }

      onConfigUpdate(recommendedSettings)
    }
  }

  const filteredTypes = WAVE_TYPES.filter(type => type.category === activeCategory)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Wave Types</span>
          <Badge variant="outline" className="text-xs">
            {WAVE_TYPES.length} types available
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as keyof typeof CATEGORIES)}>
          <TabsList className="grid w-full grid-cols-4">
            {Object.entries(CATEGORIES).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="text-xs"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(CATEGORIES).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  {category.description}
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {filteredTypes.map((waveType) => (
                    <WaveTypeCard
                      key={waveType.id}
                      waveType={waveType}
                      isSelected={selectedType === waveType.id}
                      onSelect={() => handleTypeSelect(waveType)}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface WaveTypeCardProps {
  waveType: WaveType
  isSelected: boolean
  onSelect: () => void
  theme?: string
}

function WaveTypeCard({ waveType, isSelected, onSelect, theme }: WaveTypeCardProps) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      onClick={onSelect}
      className={`h-auto p-4 justify-start text-left transition-all ${
        isSelected 
          ? 'ring-2 ring-primary ring-offset-2' 
          : 'hover:border-primary/50'
      }`}
    >
      <div className="flex items-start gap-3 w-full">
        <div className="text-2xl" style={{ color: waveType.color }}>
          {waveType.icon}
        </div>
        
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{waveType.name}</span>
            {isSelected && (
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            )}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {waveType.description}
          </div>
          
          {isSelected && (
            <div className="mt-2 space-y-1">
              {waveType.tips.slice(0, 2).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div 
          className="w-4 h-4 rounded-full border-2 border-current opacity-60"
          style={{ backgroundColor: waveType.color }}
        />
      </div>
    </Button>
  )
}
