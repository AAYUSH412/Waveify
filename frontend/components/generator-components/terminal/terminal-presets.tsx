"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Terminal, Code, GitBranch, Package } from 'lucide-react'
import type { TerminalConfig } from '@/lib/api'

interface TerminalPresetsProps {
  onSelect: (config: TerminalConfig) => void
}

const presets: Array<{
  id: string
  name: string
  description: string
  icon: React.ReactNode
  config: TerminalConfig
  tags: string[]
}> = [
  {
    id: 'modern-dev',
    name: 'Modern Development',
    description: 'Modern terminal with development commands',
    icon: <Code className="w-4 h-4" />,
    config: {
      commands: ['npm install', 'npm run dev', 'echo "Server running on http://localhost:3000"'],
      theme: 'modern',
      speed: 50,
      cursor: true,
      prompt: '$ ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: true,
      title: 'Development Server',
      githubMode: false
    },
    tags: ['development', 'modern', 'npm']
  },
  {
    id: 'matrix-hacker',
    name: 'Matrix Hacker',
    description: 'Green matrix-style terminal',
    icon: <Terminal className="w-4 h-4" />,
    config: {
      commands: ['whoami', 'ls -la', 'cat secret.txt', 'echo "Access granted"'],
      theme: 'matrix',
      speed: 30,
      cursor: true,
      prompt: 'root@matrix:~# ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: false,
      title: 'Matrix Terminal',
      githubMode: false
    },
    tags: ['matrix', 'hacker', 'green']
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Futuristic neon cyberpunk terminal',
    icon: <Terminal className="w-4 h-4" />,
    config: {
      commands: ['boot --system', 'connect neural-link', 'echo "Welcome to 2077"'],
      theme: 'cyberpunk',
      speed: 40,
      cursor: true,
      prompt: 'cyber@2077:~$ ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: true,
      title: 'CyberTerminal v2.0',
      githubMode: false
    },
    tags: ['cyberpunk', 'futuristic', 'neon']
  },
  {
    id: 'git-workflow',
    name: 'Git Workflow',
    description: 'Common git commands showcase',
    icon: <GitBranch className="w-4 h-4" />,
    config: {
      commands: ['git clone https://github.com/user/repo.git', 'cd repo', 'git status', 'git add .', 'git commit -m "Initial commit"'],
      theme: 'modern',
      speed: 60,
      cursor: true,
      prompt: '$ ',
      width: 800,
      height: 450,
      fontSize: 14,
      showHeader: true,
      title: 'Git Workflow',
      githubMode: true
    },
    tags: ['git', 'workflow', 'github']
  },
  {
    id: 'docker-build',
    name: 'Docker Build',
    description: 'Docker containerization demo',
    icon: <Package className="w-4 h-4" />,
    config: {
      commands: ['docker build -t myapp .', 'docker run -p 3000:3000 myapp', 'echo "Container running on port 3000"'],
      theme: 'modern',
      speed: 70,
      cursor: true,
      prompt: '$ ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: true,
      title: 'Docker Build',
      githubMode: false
    },
    tags: ['docker', 'container', 'build']
  },
  {
    id: 'retro-amber',
    name: 'Retro Amber',
    description: 'Vintage amber terminal style',
    icon: <Terminal className="w-4 h-4" />,
    config: {
      commands: ['login user', 'dir', 'type readme.txt', 'echo "System ready"'],
      theme: 'retro',
      speed: 80,
      cursor: true,
      prompt: 'C:\\> ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: false,
      title: 'AMBER TERMINAL',
      githubMode: false
    },
    tags: ['retro', 'vintage', 'amber']
  },
  {
    id: 'glass-modern',
    name: 'Glass Modern',
    description: 'Modern glassmorphism terminal',
    icon: <Terminal className="w-4 h-4" />,
    config: {
      commands: ['npm create next-app@latest', 'cd my-app', 'npm run dev'],
      theme: 'glass',
      speed: 50,
      cursor: true,
      prompt: '➜ ',
      width: 800,
      height: 400,
      fontSize: 14,
      showHeader: true,
      title: 'Glass Terminal',
      githubMode: false
    },
    tags: ['glass', 'modern', 'nextjs']
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'Clean minimal terminal design',
    icon: <Terminal className="w-4 h-4" />,
    config: {
      commands: ['ls', 'cat package.json', 'npm start'],
      theme: 'minimal',
      speed: 40,
      cursor: true,
      prompt: '$ ',
      width: 800,
      height: 350,
      fontSize: 14,
      showHeader: false,
      title: 'Terminal',
      githubMode: false
    },
    tags: ['minimal', 'clean', 'simple']
  }
]

export function TerminalPresets({ onSelect }: TerminalPresetsProps) {
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
          placeholder="Search terminal presets..."
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
              <div className="flex flex-wrap gap-1">
                {preset.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-3 text-xs text-muted-foreground">
                <p><strong>Commands:</strong> {Array.isArray(preset.config.commands) ? preset.config.commands.length : 1} commands</p>
                <p><strong>Theme:</strong> {preset.config.theme}</p>
                <p><strong>Size:</strong> {preset.config.width}×{preset.config.height}px</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPresets.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No terminal presets found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}
