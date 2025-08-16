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
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { RotateCcw, Plus, Trash2, Terminal, Code, GitBranch } from 'lucide-react'
import { 
  TerminalConfig, 
  TerminalTheme,
  ControlGroup,
  ColorPicker,
  TERMINAL_THEME_DESCRIPTIONS,
  EASING_FUNCTIONS
} from '../shared'

interface TerminalControlsProps {
  config: TerminalConfig
  onUpdate: (updates: Partial<TerminalConfig>) => void
  onReset: () => void
}

// Enhanced terminal themes with categories
const TERMINAL_THEMES_GROUPED = {
  'Professional': [
    { value: 'modern', label: 'Modern', icon: '💻', description: 'Clean, contemporary terminal design' },
    { value: 'professional', label: 'Professional', icon: '💼', description: 'Business-focused styling' },
    { value: 'minimal', label: 'Minimal', icon: '⚪', description: 'Minimalist interface' }
  ],
  'Developer': [
    { value: 'github-dark', label: 'GitHub Dark', icon: '🐙', description: 'GitHub-inspired dark theme' },
    { value: 'github-light', label: 'GitHub Light', icon: '☀️', description: 'GitHub-inspired light theme' },
    { value: 'vscode', label: 'VS Code', icon: '🔵', description: 'VS Code terminal styling' }
  ],
  'Creative': [
    { value: 'cyberpunk', label: 'Cyberpunk', icon: '🤖', description: 'Futuristic neon aesthetic' },
    { value: 'neon', label: 'Neon', icon: '💡', description: 'Bright glowing effects' },
    { value: 'matrix', label: 'Matrix', icon: '💻', description: 'Green matrix-style display' }
  ],
  'Vintage': [
    { value: 'retro', label: 'Retro', icon: '📺', description: 'Vintage computer terminal' },
    { value: 'amber', label: 'Amber', icon: '🟡', description: 'Classic amber monochrome' },
    { value: 'green', label: 'Green', icon: '🟢', description: 'Classic green phosphor' }
  ],
  'Effects': [
    { value: 'glass', label: 'Glass', icon: '🔍', description: 'Glassmorphism transparency' },
    { value: 'gradient', label: 'Gradient', icon: '🎨', description: 'Gradient background effects' },
    { value: 'hologram', label: 'Hologram', icon: '✨', description: 'Holographic display effect' }
  ]
} as const

// Command type categories with presets
const COMMAND_PRESETS = {
  'Development': [
    {
      name: 'React Setup',
      icon: '⚛️',
      commands: [
        'npx create-react-app my-app',
        'cd my-app',
        'npm start',
        '✓ React app running on http://localhost:3000'
      ]
    },
    {
      name: 'Next.js Setup',
      icon: '🔺',
      commands: [
        'npx create-next-app@latest my-next-app',
        'cd my-next-app',
        'npm run dev',
        '✓ Next.js ready on http://localhost:3000'
      ]
    },
    {
      name: 'Node.js Project',
      icon: '🟢',
      commands: [
        'npm init -y',
        'npm install express',
        'echo "const express = require(\'express\')" > index.js',
        '✓ Node.js project initialized'
      ]
    }
  ],
  'Git Operations': [
    {
      name: 'Clone & Setup',
      icon: '📥',
      commands: [
        'git clone https://github.com/user/repo.git',
        'cd repo',
        'npm install',
        '✓ Repository cloned and setup complete'
      ]
    },
    {
      name: 'Branch Workflow',
      icon: '🌿',
      commands: [
        'git checkout -b feature/new-feature',
        'git add .',
        'git commit -m "Add new feature"',
        'git push origin feature/new-feature',
        '✓ Feature branch pushed successfully'
      ]
    }
  ],
  'DevOps': [
    {
      name: 'Docker Build',
      icon: '🐳',
      commands: [
        'docker build -t my-app .',
        'docker run -d -p 3000:3000 my-app',
        'docker ps',
        '✓ Container running successfully'
      ]
    },
    {
      name: 'Deploy to Production',
      icon: '🚀',
      commands: [
        'npm run build',
        'npm run test',
        'npm run deploy',
        '✓ Successfully deployed to production'
      ]
    }
  ],
  'System': [
    {
      name: 'System Info',
      icon: '📊',
      commands: [
        'uname -a',
        'node --version',
        'npm --version',
        'git --version'
      ]
    },
    {
      name: 'Performance Check',
      icon: '⚡',
      commands: [
        'top -l 1 | head -n 10',
        'df -h',
        'free -h',
        '✓ System check complete'
      ]
    }
  ]
}

// Window styles for different terminal appearances
const WINDOW_STYLES = [
  { value: 'mac', label: 'macOS', description: 'macOS terminal window style' },
  { value: 'windows', label: 'Windows', description: 'Windows terminal style' },
  { value: 'linux', label: 'Linux', description: 'Linux terminal style' },
  { value: 'custom', label: 'Custom', description: 'Custom window styling' },
  { value: 'floating', label: 'Floating', description: 'Floating window effect' }
]

export function TerminalControls({ config, onUpdate, onReset }: TerminalControlsProps) {
  const handleCommandsChange = (commands: string[]) => {
    onUpdate({ commands })
  }

  const addCommand = () => {
    const currentCommands = Array.isArray(config.commands) ? config.commands : []
    handleCommandsChange([...currentCommands, 'echo "New command"'])
  }

  const removeCommand = (index: number) => {
    const currentCommands = Array.isArray(config.commands) ? config.commands : []
    handleCommandsChange(currentCommands.filter((_, i) => i !== index))
  }

  const updateCommand = (index: number, command: string) => {
    const currentCommands = Array.isArray(config.commands) ? config.commands : []
    const newCommands = [...currentCommands]
    newCommands[index] = command
    handleCommandsChange(newCommands)
  }

  const applyPreset = (preset: any) => {
    onUpdate({ commands: preset.commands })
  }

  const commands = Array.isArray(config.commands) ? config.commands : []

  return (
    <div className="space-y-6">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {/* Commands */}
          <ControlGroup title="Terminal Commands" description="Commands to display in sequence">
            <div className="space-y-4">
              {commands.map((command, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={command}
                    onChange={(e) => updateCommand(index, e.target.value)}
                    placeholder="Enter command..."
                    className="font-mono"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeCommand(index)}
                    className="px-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              
              <Button
                variant="outline"
                onClick={addCommand}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Command
              </Button>
            </div>
          </ControlGroup>

          {/* Quick Presets */}
          <ControlGroup title="Quick Presets" description="Common command sequences">
            <div className="space-y-4">
              {Object.entries(COMMAND_PRESETS).map(([category, presets]) => (
                <div key={category}>
                  <Label className="text-sm font-medium text-muted-foreground">
                    {category}
                  </Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {presets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        size="sm"
                        onClick={() => applyPreset(preset)}
                        className="justify-start text-xs h-auto p-3"
                      >
                        <div className="text-left">
                          <div className="font-medium">{preset.icon} {preset.name}</div>
                          <div className="text-muted-foreground truncate">
                            {preset.commands[0].substring(0, 20)}...
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ControlGroup>

          {/* Terminal Prompt */}
          <ControlGroup title="Terminal Prompt" description="Customize the command prompt">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Prompt Text</Label>
                <Input
                  value={config.prompt || '$'}
                  onChange={(e) => onUpdate({ prompt: e.target.value })}
                  placeholder="$ "
                  className="font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label>Username</Label>
                <Input
                  value={config.username || 'user'}
                  onChange={(e) => onUpdate({ username: e.target.value })}
                  placeholder="user"
                  className="font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label>Hostname</Label>
                <Input
                  value={config.hostname || 'localhost'}
                  onChange={(e) => onUpdate({ hostname: e.target.value })}
                  placeholder="localhost"
                  className="font-mono"
                />
              </div>
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="theme" className="space-y-6">
          {/* Theme Selection */}
          <ControlGroup title="Terminal Theme" description="Visual appearance and color scheme">
            <div className="space-y-4">
              <Select
                value={config.theme || 'modern'}
                onValueChange={(value) => onUpdate({ theme: value as TerminalTheme })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select terminal theme" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {Object.entries(TERMINAL_THEMES_GROUPED).map(([category, themes]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {themes.map((theme) => (
                        <SelectItem key={theme.value} value={theme.value}>
                          <div className="flex items-center gap-2">
                            <span>{theme.icon}</span>
                            <div>
                              <div className="font-medium">{theme.label}</div>
                              <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                                {theme.description}
                              </div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>

              {/* Current Theme Badge */}
              {config.theme && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {Object.values(TERMINAL_THEMES_GROUPED)
                      .flat()
                      .find(t => t.value === config.theme)?.icon} {config.theme}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {TERMINAL_THEME_DESCRIPTIONS[config.theme as keyof typeof TERMINAL_THEME_DESCRIPTIONS]}
                  </span>
                </div>
              )}
            </div>
          </ControlGroup>

          {/* Window Style */}
          <ControlGroup title="Window Style" description="Terminal window appearance">
            <Select
              value={config.windowStyle || 'mac'}
              onValueChange={(value) => onUpdate({ windowStyle: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {WINDOW_STYLES.map((style) => (
                  <SelectItem key={style.value} value={style.value}>
                    <div>
                      <div className="font-medium">{style.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {style.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ControlGroup>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <ControlGroup title="Text Color" description="Terminal text color">
              <ColorPicker
                value={config.color || '#00ff00'}
                onChange={(color) => onUpdate({ color })}
                colors={[
                  '#00ff00', '#ffffff', '#ffff00', '#ff0000', '#00ffff',
                  '#ff00ff', '#ffa500', '#00ff41', '#0080ff', '#ff6b6b'
                ]}
              />
            </ControlGroup>

            <ControlGroup title="Background" description="Terminal background">
              <ColorPicker
                value={config.backgroundColor || '#000000'}
                onChange={(color) => onUpdate({ backgroundColor: color })}
                colors={[
                  '#000000', '#1a1a1a', '#2d2d2d', '#1e1e1e', '#0d1117',
                  '#161b22', '#0c0c0c', '#1c1c1c'
                ]}
              />
            </ControlGroup>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          {/* Animation Settings */}
          <ControlGroup title="Animation Settings" description="Control terminal behavior">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Typing Speed</Label>
                <Slider
                  value={[config.speed || 50]}
                  onValueChange={([value]) => onUpdate({ speed: value })}
                  min={10}
                  max={200}
                  step={5}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.speed || 50}ms per character
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Show Cursor</Label>
                  <p className="text-sm text-muted-foreground">Display blinking cursor</p>
                </div>
                <Switch
                  checked={config.cursor !== false}
                  onCheckedChange={(checked) => onUpdate({ cursor: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Scroll</Label>
                  <p className="text-sm text-muted-foreground">Scroll as commands execute</p>
                </div>
                <Switch
                  checked={config.autoScroll !== false}
                  onCheckedChange={(checked) => onUpdate({ autoScroll: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Sound Effects</Label>
                  <p className="text-sm text-muted-foreground">Terminal typing sounds</p>
                </div>
                <Switch
                  checked={config.soundEnabled === true}
                  onCheckedChange={(checked) => onUpdate({ soundEnabled: checked })}
                />
              </div>
            </div>
          </ControlGroup>

          {/* Visual Effects */}
          <ControlGroup title="Visual Effects" description="Enhance terminal appearance">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Glow Effect</Label>
                  <p className="text-sm text-muted-foreground">Add screen glow</p>
                </div>
                <Switch
                  checked={config.glowEffect === true}
                  onCheckedChange={(checked) => onUpdate({ glowEffect: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Scanlines</Label>
                  <p className="text-sm text-muted-foreground">Retro CRT effect</p>
                </div>
                <Switch
                  checked={config.scanlines === true}
                  onCheckedChange={(checked) => onUpdate({ scanlines: checked })}
                />
              </div>

              <div className="space-y-2">
                <Label>Border Radius</Label>
                <Slider
                  value={[config.borderRadius || 8]}
                  onValueChange={([value]) => onUpdate({ borderRadius: value })}
                  min={0}
                  max={20}
                  step={1}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.borderRadius || 8}px
                </div>
              </div>
            </div>
          </ControlGroup>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {/* Accessibility */}
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

              <div className="space-y-2">
                <Label>ARIA Label</Label>
                <Input
                  value={config.accessibility?.ariaLabel || 'Terminal animation'}
                  onChange={(e) => onUpdate({ 
                    accessibility: { 
                      ...config.accessibility, 
                      ariaLabel: e.target.value 
                    } 
                  })}
                  placeholder="Describe the terminal for screen readers"
                />
              </div>
            </div>
          </ControlGroup>

          {/* Dimensions */}
          <ControlGroup title="Terminal Dimensions" description="Size and layout settings">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Width</Label>
                <Slider
                  value={[config.width || 600]}
                  onValueChange={([value]) => onUpdate({ width: value })}
                  min={300}
                  max={1200}
                  step={20}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.width || 600}px
                </div>
              </div>

              <div className="space-y-2">
                <Label>Height</Label>
                <Slider
                  value={[config.height || 400]}
                  onValueChange={([value]) => onUpdate({ height: value })}
                  min={200}
                  max={800}
                  step={20}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.height || 400}px
                </div>
              </div>

              <div className="space-y-2">
                <Label>Font Size</Label>
                <Slider
                  value={[config.fontSize || 14]}
                  onValueChange={([value]) => onUpdate({ fontSize: value })}
                  min={10}
                  max={24}
                  step={1}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.fontSize || 14}px
                </div>
              </div>

              <div className="space-y-2">
                <Label>Line Height</Label>
                <Slider
                  value={[config.lineHeight || 1.5]}
                  onValueChange={([value]) => onUpdate({ lineHeight: value })}
                  min={1}
                  max={2.5}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {config.lineHeight || 1.5}
                </div>
              </div>
            </div>
          </ControlGroup>

          {/* Technical Info */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-sm">Technical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Theme:</span>
                <Badge variant="outline">{config.theme || 'modern'}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Commands:</span>
                <span>{commands.length} lines</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Duration:</span>
                <span>
                  ~{Math.round((commands.join('').length * (config.speed || 50)) / 1000)}s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Performance:</span>
                <span className="text-green-600">Optimized</span>
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
