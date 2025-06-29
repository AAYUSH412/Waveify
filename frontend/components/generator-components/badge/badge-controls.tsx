"use client"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { RotateCcw } from 'lucide-react'
import type { BadgeConfig } from '@/lib/api'

interface BadgeControlsProps {
  config: BadgeConfig
  onUpdate: (updates: Partial<BadgeConfig>) => void
  onReset: () => void
}

const badgeStyles = [
  'modern', 'gradient', 'glass', 'shadow', 'neon', 
  'animated', 'outline', 'pill', 'large', 'classic'
]

const badgeColors = {
  // Status colors
  brightgreen: '#4C1',
  green: '#97CA00',
  yellowgreen: '#A4A61D',
  yellow: '#DFB317',
  orange: '#FE7D37',
  red: '#E05D44',
  lightgrey: '#9F9F9F',
  blue: '#007EC6',
  success: '#10B981',
  important: '#EF4444',
  critical: '#DC2626',
  informational: '#3B82F6',
  inactive: '#6B7280',
}

const fontWeights = ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']

export function BadgeControls({ config, onUpdate, onReset }: BadgeControlsProps) {
  return (
    <div className="space-y-6">
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Content</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="label">Label</Label>
            <Input
              id="label"
              value={config.label || ''}
              onChange={(e) => onUpdate({ label: e.target.value })}
              placeholder="Status"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              value={config.message || ''}
              onChange={(e) => onUpdate({ message: e.target.value })}
              placeholder="Awesome"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Style */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Style</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Style</Label>
            <Select
              value={config.style || 'modern'}
              onValueChange={(value) => onUpdate({ style: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {badgeStyles.map((style) => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Badge Color</Label>
              <Select
                value={config.color || 'brightgreen'}
                onValueChange={(value) => onUpdate({ color: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(badgeColors).map(([name, hex]) => (
                    <SelectItem key={name} value={name}>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded border"
                          style={{ backgroundColor: hex }}
                        />
                        {name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Label Color</Label>
              <Select
                value={config.labelColor || 'lightgrey'}
                onValueChange={(value) => onUpdate({ labelColor: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(badgeColors).map(([name, hex]) => (
                    <SelectItem key={name} value={name}>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded border"
                          style={{ backgroundColor: hex }}
                        />
                        {name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Typography</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Font Size: {config.fontSize || 11}px</Label>
            <Slider
              value={[config.fontSize || 11]}
              onValueChange={([value]) => onUpdate({ fontSize: value })}
              min={8}
              max={20}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Font Weight</Label>
            <Select
              value={config.fontWeight || 'normal'}
              onValueChange={(value) => onUpdate({ fontWeight: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontWeights.map((weight) => (
                  <SelectItem key={weight} value={weight}>
                    {weight.charAt(0).toUpperCase() + weight.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      {/* Advanced Options */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Advanced Options</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="animated">Animated</Label>
            <Switch
              id="animated"
              checked={config.animated || false}
              onCheckedChange={(checked) => onUpdate({ animated: checked })}
            />
          </div>

          <div className="space-y-2">
            <Label>Border Radius: {config.borderRadius || 3}px</Label>
            <Slider
              value={[config.borderRadius || 3]}
              onValueChange={([value]) => onUpdate({ borderRadius: value })}
              min={0}
              max={15}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo (optional)</Label>
            <Input
              id="logo"
              value={config.logo || ''}
              onChange={(e) => onUpdate({ logo: e.target.value })}
              placeholder="e.g., github, npm, docker"
            />
          </div>

          {config.logo && (
            <div className="space-y-2">
              <Label>Logo Width: {config.logoWidth || 14}px</Label>
              <Slider
                value={[config.logoWidth || 14]}
                onValueChange={([value]) => onUpdate({ logoWidth: value })}
                min={10}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Reset Button */}
      <Button
        variant="outline"
        onClick={onReset}
        className="w-full"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset to Defaults
      </Button>
    </div>
  )
}
