"use client"

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, Heart, Shuffle, Filter, Sparkles } from 'lucide-react'
import { WaveConfig, WaveType } from '../shared/types'
import { ControlGroup } from '../shared/components'

// PresetCard Component
interface PresetCardProps {
  id: string
  name: string
  description: string
  tags: string[]
  onSelect: () => void
  onFavorite: () => void
  isFavorite: boolean
}

const PresetCard: React.FC<PresetCardProps> = ({
  id,
  name,
  description,
  tags,
  onSelect,
  onFavorite,
  isFavorite
}) => {
  return (
    <div className="p-4 rounded-lg border hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onFavorite}
            className="h-8 w-8 p-0"
          >
            <Heart className={`h-3 w-3 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        <Button size="sm" onClick={onSelect} className="h-8">
          <Sparkles className="h-3 w-3 mr-1" />
          Apply
        </Button>
      </div>
    </div>
  )
}

// Wave presets with comprehensive configurations
const WAVE_PRESETS: Array<{
  id: string
  name: string
  description: string
  tags: string[]
  config: WaveConfig
}> = [
  // Classic waves
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Calm and flowing like ocean waves',
    tags: ['blue', 'calm', 'professional'],
    config: {
      waveType: 'sine' as WaveType,
      color: '#007CF0',
      width: 800,
      height: 200,
      amplitude: 40,
      frequency: 1.5,
      speed: 3
    }
  },
  {
    id: 'neon-pulse',
    name: 'Neon Pulse',
    description: 'Cyberpunk-style glowing waves',
    tags: ['neon', 'cyberpunk', 'animated'],
    config: {
      waveType: 'pulse' as WaveType,
      color: '#00FFFF',
      width: 800,
      height: 150,
      amplitude: 30,
      frequency: 2,
      speed: 6,
      pulseWidth: 25
    }
  },
  {
    id: 'smooth-gradient',
    name: 'Smooth Gradient',
    description: 'Elegant waves with smooth transitions',
    tags: ['purple', 'elegant', 'smooth'],
    config: {
      waveType: 'sine' as WaveType,
      color: '#8B5CF6',
      width: 1000,
      height: 180,
      amplitude: 35,
      frequency: 1.2,
      speed: 2
    }
  },
  {
    id: 'electric-saw',
    name: 'Electric Saw',
    description: 'Sharp sawtooth waves with electric feel',
    tags: ['yellow', 'electric', 'sharp'],
    config: {
      waveType: 'sawtooth' as WaveType,
      color: '#FFD700',
      width: 800,
      height: 120,
      amplitude: 25,
      frequency: 3,
      speed: 8
    }
  },
  {
    id: 'digital-square',
    name: 'Digital Square',
    description: 'Clean digital square waves',
    tags: ['green', 'digital', 'clean'],
    config: {
      waveType: 'square' as WaveType,
      color: '#00FF41',
      width: 800,
      height: 100,
      amplitude: 20,
      frequency: 2.5,
      speed: 4
    }
  },
  {
    id: 'triangle-flow',
    name: 'Triangle Flow',
    description: 'Geometric triangle wave patterns',
    tags: ['orange', 'geometric', 'modern'],
    config: {
      waveType: 'triangle' as WaveType,
      color: '#FF6B35',
      width: 900,
      height: 160,
      amplitude: 32,
      frequency: 1.8,
      speed: 5
    }
  },
  // Advanced/artistic waves
  {
    id: 'fluid-motion',
    name: 'Fluid Motion',
    description: 'Organic fluid-like wave movements',
    tags: ['blue', 'fluid', 'organic'],
    config: {
      waveType: 'fluid' as WaveType,
      color: '#0EA5E9',
      width: 1000,
      height: 220,
      amplitude: 45,
      frequency: 1.3,
      speed: 3
    }
  },
  {
    id: 'glitch-effect',
    name: 'Glitch Effect',
    description: 'Distorted glitch-style waves',
    tags: ['red', 'glitch', 'distorted'],
    config: {
      waveType: 'glitch' as WaveType,
      color: '#EF4444',
      width: 800,
      height: 140,
      amplitude: 28,
      frequency: 2.2,
      speed: 7,
      glowIntensity: 0.6
    }
  },
  {
    id: 'plasma-energy',
    name: 'Plasma Energy',
    description: 'High-energy plasma wave effects',
    tags: ['magenta', 'energy', 'plasma'],
    config: {
      waveType: 'plasma' as WaveType,
      color: '#EC4899',
      width: 900,
      height: 180,
      amplitude: 38,
      frequency: 1.7,
      speed: 9,
      glowIntensity: 0.9
    }
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    description: 'Bright neon waves with glow effects',
    tags: ['cyan', 'neon', 'glow'],
    config: {
      waveType: 'neon' as WaveType,
      color: '#06B6D4',
      width: 800,
      height: 150,
      amplitude: 30,
      frequency: 2,
      speed: 5,
      glowIntensity: 0.8
    }
  },
  // Practical/usage-specific presets
  {
    id: 'header-banner',
    name: 'Header Banner',
    description: 'Perfect for website headers',
    tags: ['blue', 'header', 'professional'],
    config: {
      waveType: 'sine' as WaveType,
      color: '#1E40AF',
      width: 1200,
      height: 120,
      amplitude: 20,
      frequency: 2,
      speed: 3
    }
  },
  {
    id: 'footer-wave',
    name: 'Footer Wave',
    description: 'Subtle footer decoration',
    tags: ['gray', 'footer', 'subtle'],
    config: {
      waveType: 'sine' as WaveType,
      color: '#6B7280',
      width: 1000,
      height: 80,
      amplitude: 15,
      frequency: 1.5,
      speed: 2
    }
  },
  {
    id: 'loading-animation',
    name: 'Loading Animation',
    description: 'Animated loading indicator',
    tags: ['blue', 'loading', 'animated'],
    config: {
      waveType: 'pulse' as WaveType,
      color: '#3B82F6',
      width: 600,
      height: 60,
      amplitude: 12,
      frequency: 3,
      speed: 10,
      pulseWidth: 30
    }
  },
  // Mobile-optimized presets
  {
    id: 'mobile-compact',
    name: 'Mobile Compact',
    description: 'Optimized for mobile viewing',
    tags: ['mobile', 'compact', 'blue'],
    config: {
      waveType: 'default' as WaveType,
      color: '#007CF0',
      width: 800,
      height: 100,
      amplitude: 15,
      frequency: 2,
      speed: 4
    }
  },
  {
    id: 'social-banner',
    name: 'Social Banner',
    description: 'Perfect for social media',
    tags: ['social', 'banner', 'gradient'],
    config: {
      waveType: 'sine' as WaveType,
      color: '#FF6B35',
      width: 1000,
      height: 200,
      amplitude: 30,
      frequency: 1.8,
      speed: 5
    }
  }
]

// Color scheme presets
const COLOR_PRESETS = [
  { name: 'Ocean Blue', color: '#007CF0', description: 'Professional blue' },
  { name: 'Neon Cyan', color: '#00FFFF', description: 'Cyberpunk cyan' },
  { name: 'Electric Purple', color: '#8B5CF6', description: 'Vibrant purple' },
  { name: 'Sunset Orange', color: '#FF6B35', description: 'Warm orange' },
  { name: 'Matrix Green', color: '#00FF41', description: 'Matrix green' },
  { name: 'Hot Pink', color: '#FF0080', description: 'Neon pink' }
]

interface WavePresetsProps {
  onSelect: (config: WaveConfig) => void
}

export const WavePresets: React.FC<WavePresetsProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>(['all'])
    WAVE_PRESETS.forEach(preset => {
      preset.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

  // Filter presets based on search and selected tag
  const filteredPresets = useMemo(() => {
    return WAVE_PRESETS.filter(preset => {
      const matchesSearch = preset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          preset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          preset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesTag = selectedTag === 'all' || preset.tags.includes(selectedTag)
      const matchesFavorites = !showFavoritesOnly || favorites.has(preset.id)
      
      return matchesSearch && matchesTag && matchesFavorites
    })
  }, [searchTerm, selectedTag, showFavoritesOnly, favorites])

  const toggleFavorite = (presetId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(presetId)) {
        newFavorites.delete(presetId)
      } else {
        newFavorites.add(presetId)
      }
      return newFavorites
    })
  }

  const isFavorite = (presetId: string) => favorites.has(presetId)

  const selectRandomPreset = () => {
    const randomIndex = Math.floor(Math.random() * filteredPresets.length)
    const randomPreset = filteredPresets[randomIndex]
    if (randomPreset) {
      onSelect(randomPreset.config)
    }
  }

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <ControlGroup>
        <div className="space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search presets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tag Filter */}
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent>
              {allTags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  <div className="flex items-center gap-2">
                    <Filter className="h-3 w-3" />
                    <span className="capitalize">{tag}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant={showFavoritesOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className="gap-2"
            >
              <Heart className={`h-3 w-3 ${showFavoritesOnly ? 'fill-current' : ''}`} />
              Favorites
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={selectRandomPreset}
              className="gap-2"
            >
              <Shuffle className="h-3 w-3" />
              Random
            </Button>
          </div>
        </div>
      </ControlGroup>

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{filteredPresets.length} presets found</span>
        {(searchTerm || selectedTag !== 'all' || showFavoritesOnly) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchTerm('')
              setSelectedTag('all')
              setShowFavoritesOnly(false)
            }}
          >
            Clear filters
          </Button>
        )}
      </div>

      {/* Color Presets */}
      <ControlGroup 
        title="Color Presets" 
        description="Quick color schemes for your waves"
      >
        <div className="grid grid-cols-2 gap-2">
          {COLOR_PRESETS.slice(0, 6).map(colorPreset => (
            <button
              key={colorPreset.name}
              onClick={() => onSelect({ color: colorPreset.color } as WaveConfig)}
              className="p-3 rounded-lg border hover:shadow-sm transition-shadow text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: colorPreset.color }}
                />
                <span className="text-sm font-medium">{colorPreset.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{colorPreset.description}</span>
            </button>
          ))}
        </div>
      </ControlGroup>

      {/* Wave Presets Grid */}
      <ControlGroup title="Wave Presets" description="Pre-configured wave animations">
        {filteredPresets.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No presets found matching your criteria.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('all')
                setShowFavoritesOnly(false)
              }}
              className="mt-2"
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filteredPresets.map(preset => (
              <PresetCard
                key={preset.id}
                id={preset.id}
                name={preset.name}
                description={preset.description}
                tags={preset.tags}
                onSelect={() => onSelect(preset.config as WaveConfig)}
                onFavorite={() => toggleFavorite(preset.id)}
                isFavorite={isFavorite(preset.id)}
              />
            ))}
          </div>
        )}
      </ControlGroup>

      {/* Popular Tags */}
      {!searchTerm && selectedTag === 'all' && (
        <ControlGroup title="Popular Tags">
          <div className="flex flex-wrap gap-2">
            {['blue', 'professional', 'neon', 'smooth', 'animated', 'modern'].map(tag => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-muted"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </ControlGroup>
      )}
    </div>
  )
}
