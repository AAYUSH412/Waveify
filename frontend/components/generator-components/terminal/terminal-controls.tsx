"use client"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { RotateCcw, Plus, Trash2 } from 'lucide-react'
import type { TerminalConfig } from '@/lib/api'

interface TerminalControlsProps {
  config: TerminalConfig
  onUpdate: (updates: Partial<TerminalConfig>) => void
  onReset: () => void
}

const terminalThemes = [
  'modern', 'matrix', 'cyberpunk', 'retro', 'glass', 
  'neon', 'minimal', 'github-dark', 'github-light'
]

const commandTypes = [
  'auto', 'npm', 'git', 'docker', 'development'
]

const presetCommands = {
  npm: ['npm install', 'npm run dev', 'npm run build'],
  git: ['git clone https://github.com/user/repo.git', 'cd repo', 'git status'],
  docker: ['docker build -t myapp .', 'docker run -p 3000:3000 myapp'],
  development: ['npm install', 'npm run dev', 'echo "Server running on http://localhost:3000"'],
  auto: ['npm install', 'npm run dev', 'echo "Hello World"']
}

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

  const handlePresetCommandsChange = (type: string) => {
    onUpdate({ commandType: type, commands: presetCommands[type as keyof typeof presetCommands] })
  }

  const commands = Array.isArray(config.commands) ? config.commands : []

  return (
    <div className="space-y-6">
      {/* Basic Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Settings</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select
              value={config.theme || 'modern'}
              onValueChange={(value) => onUpdate({ theme: value as any })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {terminalThemes.map((theme) => (
                  <SelectItem key={theme} value={theme}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1).replace('-', ' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Command Type</Label>
            <Select
              value={config.commandType || 'auto'}
              onValueChange={handlePresetCommandsChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {commandTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={config.title || 'Terminal'}
              onChange={(e) => onUpdate({ title: e.target.value })}
              placeholder="Enter terminal title"
            />
          </div>

          <div className="space-y-2">
            <Label>Prompt</Label>
            <Input
              value={config.prompt || '$ '}
              onChange={(e) => onUpdate({ prompt: e.target.value })}
              placeholder="$ "
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Commands */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Commands</h3>
          <Button
            onClick={addCommand}
            size="sm"
            variant="outline"
            className="h-8"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add Command
          </Button>
        </div>
        
        <div className="space-y-2">
          {commands.map((command, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={command}
                onChange={(e) => updateCommand(index, e.target.value)}
                placeholder="Enter command"
                className="flex-1"
              />
              {commands.length > 1 && (
                <Button
                  onClick={() => removeCommand(index)}
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Animation Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Typing Speed: {config.speed || 50}ms</Label>
            <Slider
              value={[config.speed || 50]}
              onValueChange={([value]) => onUpdate({ speed: value })}
              min={10}
              max={200}
              step={10}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Font Size: {config.fontSize || 14}px</Label>
            <Slider
              value={[config.fontSize || 14]}
              onValueChange={([value]) => onUpdate({ fontSize: value })}
              min={10}
              max={24}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="cursor">Show Cursor</Label>
          <Switch
            id="cursor"
            checked={config.cursor !== false}
            onCheckedChange={(checked) => onUpdate({ cursor: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="showHeader">Show Header</Label>
          <Switch
            id="showHeader"
            checked={config.showHeader !== false}
            onCheckedChange={(checked) => onUpdate({ showHeader: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="githubMode">GitHub Mode</Label>
          <Switch
            id="githubMode"
            checked={config.githubMode === true}
            onCheckedChange={(checked) => onUpdate({ githubMode: checked })}
          />
        </div>
      </div>

      <Separator />

      {/* Dimensions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Dimensions</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Width: {config.width || 800}px</Label>
            <Slider
              value={[config.width || 800]}
              onValueChange={([value]) => onUpdate({ width: value })}
              min={400}
              max={1200}
              step={50}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Height: {config.height || 400}px</Label>
            <Slider
              value={[config.height || 400]}
              onValueChange={([value]) => onUpdate({ height: value })}
              min={200}
              max={800}
              step={50}
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
