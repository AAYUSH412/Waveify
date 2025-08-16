"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Loader, MoreHorizontal, BarChart3, Circle, Waves } from 'lucide-react'
import type { LoaderConfig } from '@/components/generator-components/shared/types'

interface LoaderPresetsProps {
  onSelect: (config: LoaderConfig) => void
}

const presets: Array<{
  id: string
  name: string
  description: string
  icon: React.ReactNode
  config: LoaderConfig
  tags: string[]
}> = [
  {
    id: 'classic-spinner',
    name: 'Classic Spinner',
    description: 'Traditional rotating spinner',
    icon: <Loader className="w-4 h-4" />,
    config: {
      type: 'spinner',
      color: '#007CF0',
      size: 40,
      speed: 1,
      width: 100,
      height: 100
    },
    tags: ['spinner', 'classic', 'blue']
  },
  {
    id: 'bouncing-dots',
    name: 'Bouncing Dots',
    description: 'Three dots bouncing animation',
    icon: <MoreHorizontal className="w-4 h-4" />,
    config: {
      type: 'dots',
      color: '#10B981',
      size: 12,
      speed: 1.5,
      width: 80,
      height: 40
    },
    tags: ['dots', 'bouncing', 'green']
  },
  {
    id: 'audio-bars',
    name: 'Audio Bars',
    description: 'Vertical bars like audio visualizer',
    icon: <BarChart3 className="w-4 h-4" />,
    config: {
      type: 'bars',
      color: '#8B5CF6',
      size: 32,
      speed: 1.2,
      width: 100,
      height: 60
    },
    tags: ['bars', 'audio', 'purple']
  },
  {
    id: 'pulsing-circle',
    name: 'Pulsing Circle',
    description: 'Smooth pulsing animation',
    icon: <Circle className="w-4 h-4" />,
    config: {
      type: 'pulse',
      color: '#EF4444',
      size: 50,
      speed: 0.8,
      width: 120,
      height: 120
    },
    tags: ['pulse', 'circle', 'red']
  },
  {
    id: 'flowing-wave',
    name: 'Flowing Wave',
    description: 'Smooth wave animation',
    icon: <Waves className="w-4 h-4" />,
    config: {
      type: 'wave',
      color: '#06B6D4',
      size: 60,
      speed: 1.5,
      width: 150,
      height: 80
    },
    tags: ['wave', 'flowing', 'cyan']
  },
  {
    id: 'fast-spinner',
    name: 'Fast Spinner',
    description: 'Quick rotating spinner',
    icon: <Loader className="w-4 h-4" />,
    config: {
      type: 'spinner',
      color: '#F59E0B',
      size: 36,
      speed: 2.5,
      width: 90,
      height: 90
    },
    tags: ['spinner', 'fast', 'yellow']
  },
  {
    id: 'large-dots',
    name: 'Large Dots',
    description: 'Bigger bouncing dots',
    icon: <MoreHorizontal className="w-4 h-4" />,
    config: {
      type: 'dots',
      color: '#EC4899',
      size: 20,
      speed: 1,
      width: 120,
      height: 60
    },
    tags: ['dots', 'large', 'pink']
  },
  {
    id: 'subtle-pulse',
    name: 'Subtle Pulse',
    description: 'Gentle pulsing effect',
    icon: <Circle className="w-4 h-4" />,
    config: {
      type: 'pulse',
      color: '#6B7280',
      size: 30,
      speed: 0.5,
      width: 80,
      height: 80
    },
    tags: ['pulse', 'subtle', 'gray']
  },
  {
    id: 'mini-spinner',
    name: 'Mini Spinner',
    description: 'Small compact spinner',
    icon: <Loader className="w-4 h-4" />,
    config: {
      type: 'spinner',
      color: '#14B8A6',
      size: 24,
      speed: 1.8,
      width: 60,
      height: 60
    },
    tags: ['spinner', 'mini', 'teal']
  },
  {
    id: 'tall-bars',
    name: 'Tall Bars',
    description: 'Taller bar animation',
    icon: <BarChart3 className="w-4 h-4" />,
    config: {
      type: 'bars',
      color: '#F97316',
      size: 48,
      speed: 1,
      width: 120,
      height: 80
    },
    tags: ['bars', 'tall', 'orange']
  }
]

export function LoaderPresets({ onSelect }: LoaderPresetsProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPresets = presets.filter(preset =>
    preset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    preset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    preset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search loader presets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {filteredPresets.map((preset) => (
          <Card 
            key={preset.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSelect(preset.config)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {preset.icon}
                  <CardTitle className="text-base">{preset.name}</CardTitle>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{preset.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1 mb-3">
                {preset.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong>Type:</strong> {preset.config.type}</p>
                <p><strong>Size:</strong> {preset.config.size}px</p>
                <p><strong>Speed:</strong> {preset.config.speed}x</p>
                <p><strong>Canvas:</strong> {preset.config.width}×{preset.config.height}px</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPresets.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Loader className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No loader presets found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}
