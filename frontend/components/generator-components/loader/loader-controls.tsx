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
import { RotateCcw } from 'lucide-react'
import { 
  LoaderConfig, 
  LoaderType, 
  LoaderTheme,
  ControlGroup,
  ColorPicker,
  LOADER_TYPE_DESCRIPTIONS,
  EASING_FUNCTIONS
} from '../shared'

interface LoaderControlsProps {
  config: LoaderConfig
  onUpdate: (updates: Partial<LoaderConfig>) => void
  onReset: () => void
}

// Enhanced loader types with categories and descriptions
const LOADER_TYPES_GROUPED = {
  'Basic': [
    { value: 'spinner', label: 'Spinner', icon: '🔄', description: 'Classic spinning loader' },
    { value: 'dots', label: 'Dots', icon: '⚪', description: 'Animated dots sequence' },
    { value: 'bars', label: 'Bars', icon: '📊', description: 'Animated progress bars' },
    { value: 'pulse', label: 'Pulse', icon: '💗', description: 'Pulsing circle animation' },
    { value: 'wave', label: 'Wave', icon: '🌊', description: 'Wave motion loader' }
  ],
  'Advanced': [
    { value: 'gradient', label: 'Gradient', icon: '🎨', description: 'Gradient animation loader' },
    { value: 'orbit', label: 'Orbit', icon: '🪐', description: 'Orbital motion loader' },
    { value: 'ripple', label: 'Ripple', icon: '💫', description: 'Ripple effect animation' },
    { value: 'triangles', label: 'Triangles', icon: '🔺', description: 'Animated triangles' },
    { value: 'neon-pulse', label: 'Neon Pulse', icon: '💡', description: 'Neon pulsing effect' }
  ],
  'Specialized': [
    { value: 'skeleton', label: 'Skeleton', icon: '🦴', description: 'Skeleton loading animation' },
    { value: 'dna-helix', label: 'DNA Helix', icon: '🧬', description: 'DNA helix rotation' },
    { value: 'matrix-rain', label: 'Matrix Rain', icon: '💻', description: 'Matrix-style falling text' },
    { value: 'liquid', label: 'Liquid', icon: '💧', description: 'Liquid motion effect' },
    { value: 'glassmorphism', label: 'Glass', icon: '🔍', description: 'Glass morphism style' }
  ],
  'Creative': [
    { value: 'particle-system', label: 'Particles', icon: '✨', description: 'Particle system animation' },
    { value: 'typewriter', label: 'Typewriter', icon: '⌨️', description: 'Typewriter text effect' },
    { value: 'heart-beat', label: 'Heart Beat', icon: '❤️', description: 'Heart beat animation' },
    { value: 'breathing', label: 'Breathing', icon: '😮‍💨', description: 'Breathing animation' }
  ],
  'Status': [
    { value: 'coming-soon', label: 'Coming Soon', icon: '🚀', description: 'Coming soon indicator' },
    { value: 'building', label: 'Building', icon: '🏗️', description: 'Building progress' },
    { value: 'work-in-progress', label: 'Work in Progress', icon: '🚧', description: 'Work in progress' },
    { value: 'loading-text', label: 'Loading Text', icon: '📝', description: 'Loading text animation' }
  ]
} as const

// Loader theme options
const LOADER_THEMES = [
  { value: 'modern', label: 'Modern', description: 'Clean, contemporary design' },
  { value: 'classic', label: 'Classic', description: 'Traditional loader style' },
  { value: 'minimal', label: 'Minimal', description: 'Minimalist approach' },
  { value: 'professional', label: 'Professional', description: 'Business-focused design' },
  { value: 'cyberpunk', label: 'Cyberpunk', description: 'Futuristic neon style' },
  { value: 'neon', label: 'Neon', description: 'Bright glowing effects' }
] as const

export function LoaderControls({ config, onUpdate, onReset }: LoaderControlsProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          {/* Loader Type Selection */}
          <ControlGroup title="Loader Type" description="Choose your loading animation style">
            <div className="space-y-4">
              <Select
                value={config.type || 'spinner'}
                onValueChange={(value) => onUpdate({ type: value as LoaderType })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select loader type" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {Object.entries(LOADER_TYPES_GROUPED).map(([category, types]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {types.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <span>{type.icon}</span>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                                {type.description}
                              </div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>

              {/* Current Loader Type Badge */}
              {config.type && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {Object.values(LOADER_TYPES_GROUPED)
                      .flat()
                      .find(t => t.value === config.type)?.icon} {config.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {LOADER_TYPE_DESCRIPTIONS[config.type as keyof typeof LOADER_TYPE_DESCRIPTIONS]}
                  </span>
                </div>
              )}
            </div>
          </ControlGroup>

          {/* Color Control */}
          <ControlGroup title="Color" description="Primary loader color">
            <ColorPicker
              value={config.color || '#007CF0'}
              onChange={(color) => onUpdate({ color })}
              colors={[
                '#007CF0', '#8B5CF6', '#10B981', '#EF4444', '#F59E0B',
                '#EC4899', '#06B6D4', '#F97316', '#6366F1', '#14B8A6'
              ]}
            />
          </ControlGroup>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <ControlGroup title="Size" description="Loader size">
              <Slider
                value={[config.size || 40]}
                onValueChange={([value]) => onUpdate({ size: value })}
                min={10}
                max={200}
                step={5}
                className="w-full"
              />
              <div className="text-center text-sm text-muted-foreground">
                {config.size || 40}px
              </div>
            </ControlGroup>

            <ControlGroup title="Speed" description="Animation speed">
              <Slider
                value={[config.speed || 1]}
                onValueChange={([value]) => onUpdate({ speed: value })}
                min={0.1}
                max={5}
                step={0.1}
                className="w-full"
              />
              <div className="text-center text-sm text-muted-foreground">
                {config.speed || 1}s
              </div>
            </ControlGroup>
          </div>

          {/* Container Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <ControlGroup title="Width" description="Container width">
              <Slider
                value={[config.width || 100]}
                onValueChange={([value]) => onUpdate({ width: value })}
                min={50}
                max={500}
                step={10}
                className="w-full"
              />
              <div className="text-center text-sm text-muted-foreground">
                {config.width || 100}px
              </div>
            </ControlGroup>

            <ControlGroup title="Height" description="Container height">
              <Slider
                value={[config.height || 100]}
                onValueChange={([value]) => onUpdate({ height: value })}
                min={20}
                max={300}
                step={10}
                className="w-full"
              />
              <div className="text-center text-sm text-muted-foreground">
                {config.height || 100}px
              </div>
            </ControlGroup>
          </div>
        </TabsContent>

        <TabsContent value="style" className="space-y-6">
          {/* Theme Selection */}
          <ControlGroup title="Theme" description="Visual style theme">
            <Select
              value={config.theme || 'modern'}
              onValueChange={(value) => onUpdate({ theme: value as LoaderTheme })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LOADER_THEMES.map((theme) => (
                  <SelectItem key={theme.value} value={theme.value}>
                    <div>
                      <div className="font-medium">{theme.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {theme.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ControlGroup>

          {/* Animation Easing */}
          <ControlGroup title="Animation Easing" description="Easing function for animations">
            <Select
              value={config.easing || 'easeInOut'}
              onValueChange={(value) => onUpdate({ 
                easing: value as 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce' | 'elastic'
              })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(EASING_FUNCTIONS).map((easing) => (
                  <SelectItem key={easing} value={easing}>
                    <div className="flex items-center gap-2">
                      <span className="capitalize">{easing}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ControlGroup>

          {/* Visual Effects */}
          <ControlGroup title="Visual Effects" description="Enhance your loader appearance">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Glow Effect</Label>
                  <p className="text-sm text-muted-foreground">Add glowing aura</p>
                </div>
                <Switch
                  checked={config.glowEffect === true}
                  onCheckedChange={(checked) => onUpdate({ glowEffect: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label>Shadow Intensity</Label>
                <Slider
                  value={[config.shadowIntensity || 0.3]}
                  onValueChange={([value]) => onUpdate({ shadowIntensity: value })}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {Math.round((config.shadowIntensity || 0.3) * 100)}%
                </div>
              </div>

              <div className="space-y-2">
                <Label>Background Color</Label>
                <Input
                  type="color"
                  value={config.backgroundColor || 'transparent'}
                  onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                  className="h-10"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdate({ backgroundColor: 'transparent' })}
                  className="w-full"
                >
                  Make Transparent
                </Button>
              </div>
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {/* Accessibility Settings */}
          <ControlGroup title="Accessibility" description="Accessibility and user preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Reduced Motion</Label>
                  <p className="text-sm text-muted-foreground">Respect motion preferences</p>
                </div>
                <Switch
                  checked={config.accessibility?.reducedMotion === true}
                  onCheckedChange={(checked) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      reducedMotion: checked 
                    } 
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>High Contrast</Label>
                  <p className="text-sm text-muted-foreground">Enhanced visibility</p>
                </div>
                <Switch
                  checked={config.accessibility?.highContrast === true}
                  onCheckedChange={(checked) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      highContrast: checked 
                    } 
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Respect System Preferences</Label>
                  <p className="text-sm text-muted-foreground">Follow OS settings</p>
                </div>
                <Switch
                  checked={config.accessibility?.respectSystemPreferences !== false}
                  onCheckedChange={(checked) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      respectSystemPreferences: checked 
                    } 
                  })}
                />
              </div>

              <div className="space-y-2">
                <Label>ARIA Label</Label>
                <Input
                  value={config.accessibility?.ariaLabel || 'Loading animation'}
                  onChange={(e) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      ariaLabel: e.target.value 
                    } 
                  })}
                  placeholder="Describe the loader for screen readers"
                />
              </div>
            </div>
          </ControlGroup>

          {/* Quick Presets */}
          <ControlGroup title="Quick Presets" description="Common loader configurations">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdate({ 
                  type: 'spinner',
                  size: 40,
                  speed: 1.5,
                  theme: 'modern',
                  glowEffect: false
                })}
                className="justify-start text-xs h-auto p-3"
              >
                <div className="text-left">
                  <div className="font-medium">🔄 Classic</div>
                  <div className="text-muted-foreground">Standard spinner</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdate({ 
                  type: 'neon-pulse',
                  size: 60,
                  speed: 1,
                  theme: 'cyberpunk',
                  glowEffect: true,
                  color: '#00ffff'
                })}
                className="justify-start text-xs h-auto p-3"
              >
                <div className="text-left">
                  <div className="font-medium">💡 Neon</div>
                  <div className="text-muted-foreground">Cyberpunk style</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdate({ 
                  type: 'dots',
                  size: 50,
                  speed: 0.8,
                  theme: 'minimal',
                  easing: 'bounce'
                })}
                className="justify-start text-xs h-auto p-3"
              >
                <div className="text-left">
                  <div className="font-medium">⚪ Dots</div>
                  <div className="text-muted-foreground">Bouncy dots</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdate({ 
                  type: 'liquid',
                  size: 80,
                  speed: 2,
                  theme: 'modern',
                  shadowIntensity: 0.7,
                  color: '#3b82f6'
                })}
                className="justify-start text-xs h-auto p-3"
              >
                <div className="text-left">
                  <div className="font-medium">💧 Liquid</div>
                  <div className="text-muted-foreground">Fluid motion</div>
                </div>
              </Button>
            </div>
          </ControlGroup>

          {/* Technical Info */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-sm">Technical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Loader Type:</span>
                <Badge variant="outline">{config.type || 'spinner'}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Theme:</span>
                <span>{config.theme || 'modern'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Performance:</span>
                <span className="text-green-600">Optimized</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Accessibility:</span>
                <span className="text-green-600">Compliant</span>
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
