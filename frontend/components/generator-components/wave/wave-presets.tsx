"use client"

import React, { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  WAVE_PRESETS, 
  COLOR_PRESETS,
  WaveConfig,
  PresetCard,
  useFavorites,
  ControlGroup
} from '../shared'
import { Search, Filter, Heart, Shuffle } from 'lucide-react'

interface WavePresetsProps {
  onSelect: (config: WaveConfig) => void
}

export function WavePresets({ onSelect }: WavePresetsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  
  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    WAVE_PRESETS.forEach(preset => {
      preset.tags?.forEach(tag => tags.add(tag))
    })
    return ['all', ...Array.from(tags).sort()]
  }, [])

  // Filter presets
  const filteredPresets = useMemo(() => {
    return WAVE_PRESETS.filter(preset => {
      // Search filter
      if (searchTerm && !preset.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !preset.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }

      // Tag filter
      if (selectedTag !== 'all' && !preset.tags?.includes(selectedTag)) {
        return false
      }

      // Favorites filter
      if (showFavoritesOnly && !isFavorite(preset.id)) {
        return false
      }

      return true
    })
  }, [searchTerm, selectedTag, showFavoritesOnly, isFavorite])

  // Generate random preset
  const selectRandomPreset = () => {
    const randomPreset = WAVE_PRESETS[Math.floor(Math.random() * WAVE_PRESETS.length)]
    onSelect(randomPreset.config as WaveConfig)
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
              key={colorPreset.id}
              onClick={() => onSelect({ color: colorPreset.primary } as WaveConfig)}
              className="p-3 rounded-lg border hover:shadow-sm transition-shadow text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: colorPreset.primary }}
                />
                <span className="text-sm font-medium">{colorPreset.name}</span>
              </div>
              <div className="flex gap-1">
                {colorPreset.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
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
