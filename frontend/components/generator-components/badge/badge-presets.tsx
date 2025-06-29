"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { BadgeConfig } from '@/lib/api'

interface BadgePresetsProps {
  onSelect: (config: BadgeConfig) => void
}

const presets: Array<{ name: string; description: string; config: BadgeConfig }> = [
  {
    name: "Status Badge",
    description: "Classic status indicator",
    config: {
      label: "Status",
      message: "Passing",
      color: "brightgreen",
      style: "modern"
    }
  },
  {
    name: "Version Badge",
    description: "Version display with gradient",
    config: {
      label: "Version",
      message: "v1.0.0",
      color: "blue",
      style: "gradient"
    }
  },
  {
    name: "Build Badge",
    description: "CI/CD build status",
    config: {
      label: "Build",
      message: "Passing",
      color: "success",
      style: "modern",
      animated: true
    }
  },
  {
    name: "Coverage Badge",
    description: "Test coverage indicator",
    config: {
      label: "Coverage",
      message: "95%",
      color: "brightgreen",
      style: "modern"
    }
  },
  {
    name: "License Badge",
    description: "Software license",
    config: {
      label: "License",
      message: "MIT",
      color: "blue",
      style: "modern"
    }
  },
  {
    name: "Downloads Badge",
    description: "Package downloads",
    config: {
      label: "Downloads",
      message: "1M+",
      color: "orange",
      style: "gradient"
    }
  },
  {
    name: "Stars Badge",
    description: "GitHub stars with logo",
    config: {
      label: "Stars",
      message: "2.1k",
      color: "yellow",
      style: "modern",
      logo: "github"
    }
  },
  {
    name: "Neon Badge",
    description: "Cyberpunk style",
    config: {
      label: "Powered by",
      message: "AI",
      color: "purple",
      style: "neon",
      animated: true
    }
  },
  {
    name: "Glass Badge",
    description: "Modern glass effect",
    config: {
      label: "Made with",
      message: "❤️",
      color: "red",
      style: "glass"
    }
  },
  {
    name: "Large Badge",
    description: "Bigger size for headers",
    config: {
      label: "Premium",
      message: "Quality",
      color: "purple",
      style: "large",
      fontSize: 14,
      fontWeight: "bold"
    }
  },
  {
    name: "Pill Badge",
    description: "Rounded pill style",
    config: {
      label: "Status",
      message: "Online",
      color: "brightgreen",
      style: "pill"
    }
  },
  {
    name: "Outline Badge",
    description: "Minimal outline style",
    config: {
      label: "Type",
      message: "Beta",
      color: "blue",
      style: "outline"
    }
  }
]

export function BadgePresets({ onSelect }: BadgePresetsProps) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Choose from popular badge configurations to get started quickly.
      </div>
      
      <div className="grid gap-3">
        {presets.map((preset, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            onClick={() => onSelect(preset.config)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium">{preset.name}</h4>
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      {preset.config.style}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {preset.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <span>Label: {preset.config.label}</span>
                    <span>•</span>
                    <span>Message: {preset.config.message}</span>
                    {preset.config.animated && (
                      <>
                        <span>•</span>
                        <span className="text-green-600">Animated</span>
                      </>
                    )}
                  </div>
                </div>
                
                <Button variant="ghost" size="sm">
                  Use This
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
