"use client"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { RotateCcw } from 'lucide-react'
import type { LoaderConfig } from '@/lib/api'
import { ColorPicker } from '../shared/components'

interface LoaderControlsProps {
  config: LoaderConfig
  onUpdate: (updates: Partial<LoaderConfig>) => void
  onReset: () => void
}

const loaderTypes = [
  'spinner', 'dots', 'bars', 'pulse', 'wave'
]

const predefinedColors = {
  blue: '#007CF0',
  purple: '#8B5CF6',
  green: '#10B981',
  red: '#EF4444',
  yellow: '#F59E0B',
  pink: '#EC4899',
  cyan: '#06B6D4',
  orange: '#F97316',
  indigo: '#6366F1',
  teal: '#14B8A6',
  gray: '#6B7280',
  black: '#000000'
}

export function LoaderControls({ config, onUpdate, onReset }: LoaderControlsProps) {
  return (
    <div className="space-y-6">
      {/* Basic Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Settings</h3>
        
        <div className="space-y-2">
          <Label>Loader Type</Label>
          <Select
            value={config.type || 'spinner'}
            onValueChange={(value) => onUpdate({ type: value as any })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {loaderTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Color</Label>
          <div className="space-y-2">
            <ColorPicker
              value={config.color || '#007CF0'}
              onChange={(color) => onUpdate({ color })}
            />
            <Select
              value={Object.entries(predefinedColors).find(([_, hex]) => hex === config.color)?.[0] || 'custom'}
              onValueChange={(value) => {
                if (value !== 'custom') {
                  onUpdate({ color: predefinedColors[value as keyof typeof predefinedColors] })
                }
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom</SelectItem>
                {Object.entries(predefinedColors).map(([name, hex]) => (
                  <SelectItem key={name} value={name}>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded border"
                        style={{ backgroundColor: hex }}
                      />
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator />

      {/* Animation Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation</h3>
        
        <div className="space-y-2">
          <Label>Size: {config.size || 40}px</Label>
          <Slider
            value={[config.size || 40]}
            onValueChange={([value]) => onUpdate({ size: value })}
            min={16}
            max={120}
            step={4}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Speed: {config.speed || 1}x</Label>
          <Slider
            value={[config.speed || 1]}
            onValueChange={([value]) => onUpdate({ speed: value })}
            min={0.25}
            max={3}
            step={0.25}
            className="w-full"
          />
        </div>
      </div>

      <Separator />

      {/* Dimensions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Canvas Dimensions</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Width: {config.width || 100}px</Label>
            <Slider
              value={[config.width || 100]}
              onValueChange={([value]) => onUpdate({ width: value })}
              min={50}
              max={300}
              step={10}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Height: {config.height || 100}px</Label>
            <Slider
              value={[config.height || 100]}
              onValueChange={([value]) => onUpdate({ height: value })}
              min={50}
              max={300}
              step={10}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Loader Type Info */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">About This Loader</h3>
        
        <div className="text-sm text-muted-foreground space-y-2">
          {config.type === 'spinner' && (
            <div>
              <p><strong>Spinner:</strong> Classic rotating spinner loader</p>
              <p>• Smooth circular rotation animation</p>
              <p>• Perfect for general loading states</p>
            </div>
          )}
          
          {config.type === 'dots' && (
            <div>
              <p><strong>Dots:</strong> Three bouncing dots animation</p>
              <p>• Sequential bouncing effect</p>
              <p>• Great for indicating ongoing processes</p>
            </div>
          )}
          
          {config.type === 'bars' && (
            <div>
              <p><strong>Bars:</strong> Vertical bars scaling animation</p>
              <p>• Multiple bars with wave-like motion</p>
              <p>• Ideal for audio/data visualization context</p>
            </div>
          )}
          
          {config.type === 'pulse' && (
            <div>
              <p><strong>Pulse:</strong> Pulsing circle animation</p>
              <p>• Smooth scale and opacity changes</p>
              <p>• Subtle and non-distracting</p>
            </div>
          )}
          
          {config.type === 'wave' && (
            <div>
              <p><strong>Wave:</strong> Flowing wave animation</p>
              <p>• Smooth wave-like motion</p>
              <p>• Perfect for water/fluid related content</p>
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Reset Button */}
      <Button 
        onClick={onReset} 
        variant="outline" 
        className="w-full"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset to Defaults
      </Button>
    </div>
  )
}
