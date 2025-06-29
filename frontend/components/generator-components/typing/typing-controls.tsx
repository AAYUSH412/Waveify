"use client"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { RotateCcw } from 'lucide-react'
import type { TypingConfig } from '@/lib/api'
import { ColorPicker } from '../shared/components'

interface TypingControlsProps {
  config: TypingConfig
  onUpdate: (updates: Partial<TypingConfig>) => void
  onReset: () => void
}

const typingTypes = [
  'classic', 'neon', 'glitch', 'rainbow', 'wave', 'matrix', 'terminal', 'gradient'
]

const fontFamilies = [
  'monospace',
  'Courier New, monospace',
  'Monaco, monospace',
  'Fira Code, monospace',
  'JetBrains Mono, monospace',
  'Source Code Pro, monospace',
  'Ubuntu Mono, monospace',
  'Roboto Mono, monospace'
]

const predefinedColors = {
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  cyan: '#00ffff',
  magenta: '#ff00ff',
  yellow: '#ffff00',
  orange: '#ff8800',
  purple: '#8800ff',
  pink: '#ff0088',
  lime: '#88ff00'
}

export function TypingControls({ config, onUpdate, onReset }: TypingControlsProps) {
  return (
    <div className="space-y-6">
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Content</h3>
        
        <div className="space-y-2">
          <Label>Text to Type</Label>
          <Textarea
            value={config.text || 'Welcome to my project'}
            onChange={(e) => onUpdate({ text: e.target.value })}
            placeholder="Enter the text to animate..."
            rows={3}
            className="resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Type</Label>
            <Select
              value={config.type || 'classic'}
              onValueChange={(value) => onUpdate({ type: value as any })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {typingTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Prompt (optional)</Label>
            <Input
              value={config.prompt || ''}
              onChange={(e) => onUpdate({ prompt: e.target.value })}
              placeholder="$ "
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Animation */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation</h3>
        
        <div className="space-y-2">
          <Label>Typing Speed: {config.speed || 50}ms per character</Label>
          <Slider
            value={[config.speed || 50]}
            onValueChange={([value]) => onUpdate({ speed: value })}
            min={10}
            max={200}
            step={10}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="cursor">Show Cursor</Label>
          <Switch
            id="cursor"
            checked={config.cursor !== false}
            onCheckedChange={(checked) => onUpdate({ cursor: checked })}
          />
        </div>
      </div>

      <Separator />

      {/* Styling */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Styling</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Text Color</Label>
            <div className="space-y-2">
              <ColorPicker
                value={config.color || '#000000'}
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
                        {name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Background Color</Label>
            <div className="space-y-2">
              <ColorPicker
                value={config.backgroundColor || '#ffffff'}
                onChange={(color) => onUpdate({ backgroundColor: color })}
              />
              <Select
                value={Object.entries(predefinedColors).find(([_, hex]) => hex === config.backgroundColor)?.[0] || 'custom'}
                onValueChange={(value) => {
                  if (value !== 'custom') {
                    onUpdate({ backgroundColor: predefinedColors[value as keyof typeof predefinedColors] })
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
                        {name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {config.cursor && (
          <div className="space-y-2">
            <Label>Cursor Color</Label>
            <ColorPicker
              value={config.cursorColor || config.color || '#000000'}
              onChange={(color) => onUpdate({ cursorColor: color })}
            />
          </div>
        )}

        {(config.type === 'gradient' || config.type === 'rainbow') && (
          <div className="space-y-2">
            <Label>Gradient Colors (comma-separated hex codes)</Label>
            <Input
              value={config.gradientColors || '#ff0000,#00ff00,#0000ff'}
              onChange={(e) => onUpdate({ gradientColors: e.target.value })}
              placeholder="#ff0000,#00ff00,#0000ff"
            />
          </div>
        )}
      </div>

      <Separator />

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Typography</h3>
        
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
              {fontFamilies.map((font) => (
                <SelectItem key={font} value={font}>
                  <span style={{ fontFamily: font }}>
                    {font.split(',')[0]}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Font Size: {config.fontSize || 20}px</Label>
          <Slider
            value={[config.fontSize || 20]}
            onValueChange={([value]) => onUpdate({ fontSize: value })}
            min={12}
            max={48}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <Separator />

      {/* Dimensions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Dimensions</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Width: {config.width || 400}px</Label>
            <Slider
              value={[config.width || 400]}
              onValueChange={([value]) => onUpdate({ width: value })}
              min={200}
              max={1000}
              step={50}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Height: {config.height || 60}px</Label>
            <Slider
              value={[config.height || 60]}
              onValueChange={([value]) => onUpdate({ height: value })}
              min={40}
              max={200}
              step={10}
              className="w-full"
            />
          </div>
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
