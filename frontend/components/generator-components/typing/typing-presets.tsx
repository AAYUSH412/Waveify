"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Type, Zap, Sparkles, Rainbow } from 'lucide-react'
import type { TypingConfig } from '@/components/generator-components/shared/types'

interface TypingPresetsProps {
  onSelect: (config: TypingConfig) => void
}

const presets: Array<{
  id: string
  name: string
  description: string
  icon: React.ReactNode
  config: TypingConfig
  tags: string[]
}> = [
  {
    id: 'classic-terminal',
    name: 'Classic Terminal',
    description: 'Traditional monospace typing',
    icon: <Type className="w-4 h-4" />,
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
    },
    tags: ['terminal', 'classic', 'monospace']
  },
  {
    id: 'neon-cyberpunk',
    name: 'Neon Cyberpunk',
    description: 'Futuristic neon typing effect',
    icon: <Zap className="w-4 h-4" />,
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
    },
    tags: ['neon', 'cyberpunk', 'futuristic']
  },
  {
    id: 'rainbow-magic',
    name: 'Rainbow Magic',
    description: 'Colorful rainbow text effect',
    icon: <Rainbow className="w-4 h-4" />,
    config: {
      text: 'Welcome to the rainbow!',
      speed: 70,
      color: '#ff0000',
      backgroundColor: '#ffffff',
      fontSize: 22,
      fontFamily: 'monospace',
      width: 500,
      height: 80,
      cursor: true,
      type: 'rainbow'
    },
    tags: ['rainbow', 'colorful', 'fun']
  },
  {
    id: 'matrix-code',
    name: 'Matrix Code',
    description: 'Matrix-style digital rain',
    icon: <Type className="w-4 h-4" />,
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
    },
    tags: ['matrix', 'green', 'movie']
  },
  {
    id: 'glitch-effect',
    name: 'Glitch Effect',
    description: 'Digital glitch typing animation',
    icon: <Sparkles className="w-4 h-4" />,
    config: {
      text: 'System compromised...',
      speed: 50,
      color: '#ff0088',
      backgroundColor: '#000000',
      fontSize: 18,
      fontFamily: 'monospace',
      width: 450,
      height: 70,
      cursor: true,
      type: 'glitch'
    },
    tags: ['glitch', 'digital', 'error']
  },
  {
    id: 'wave-text',
    name: 'Wave Text',
    description: 'Wavy text animation effect',
    icon: <Type className="w-4 h-4" />,
    config: {
      text: 'Riding the wave!',
      speed: 60,
      color: '#0066cc',
      backgroundColor: '#f0f8ff',
      fontSize: 20,
      fontFamily: 'monospace',
      width: 400,
      height: 80,
      cursor: true,
      type: 'wave'
    },
    tags: ['wave', 'animation', 'smooth']
  },
  {
    id: 'terminal-prompt',
    name: 'Terminal Prompt',
    description: 'Terminal-style with prompt',
    icon: <Type className="w-4 h-4" />,
    config: {
      text: 'npm install waveify',
      speed: 80,
      color: '#ffffff',
      backgroundColor: '#1e1e1e',
      fontSize: 16,
      fontFamily: 'Courier New, monospace',
      width: 500,
      height: 60,
      cursor: true,
      type: 'terminal',
      prompt: '$ '
    },
    tags: ['terminal', 'prompt', 'command']
  },
  {
    id: 'gradient-modern',
    name: 'Gradient Modern',
    description: 'Modern gradient text effect',
    icon: <Sparkles className="w-4 h-4" />,
    config: {
      text: 'Beautiful gradients',
      speed: 70,
      color: '#ff6b6b',
      backgroundColor: '#ffffff',
      fontSize: 24,
      fontFamily: 'monospace',
      width: 500,
      height: 80,
      cursor: true,
      type: 'gradient',
      gradientColors: '#ff6b6b,#4ecdc4,#45b7d1'
    },
    tags: ['gradient', 'modern', 'colorful']
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'Clean and minimal typing',
    icon: <Type className="w-4 h-4" />,
    config: {
      text: 'Less is more',
      speed: 60,
      color: '#333333',
      backgroundColor: '#ffffff',
      fontSize: 18,
      fontFamily: 'Roboto Mono, monospace',
      width: 350,
      height: 60,
      cursor: false,
      type: 'classic'
    },
    tags: ['minimal', 'clean', 'simple']
  }
]

export function TypingPresets({ onSelect }: TypingPresetsProps) {
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
          placeholder="Search typing presets..."
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
                <p><strong>Text:</strong> "{preset.config.text}"</p>
                <p><strong>Type:</strong> {preset.config.type}</p>
                <p><strong>Speed:</strong> {preset.config.speed}ms</p>
                <p><strong>Size:</strong> {preset.config.width}×{preset.config.height}px</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPresets.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Type className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No typing presets found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}
