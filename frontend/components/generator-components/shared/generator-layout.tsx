"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarProvider, 
  SidebarInset,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator
} from '@/components/ui/sidebar'
import { 
  Waves, 
  Type, 
  Shield, 
  Terminal, 
  Loader2, 
  Home, 
  BookOpen, 
  Github,
  Sparkles 
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GeneratorLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

const generatorItems = [
  {
    title: "Wave Generator",
    href: "/generator/wave",
    icon: Waves,
    description: "Create animated wave SVGs",
    badge: "Popular"
  },
  {
    title: "Typing Animation",
    href: "/generator/typing", 
    icon: Type,
    description: "Animated typing text effects",
    badge: "New"
  },
  {
    title: "Badge Generator",
    href: "/generator/badge",
    icon: Shield,
    description: "Custom animated badges",
  },
  {
    title: "Terminal Demo",
    href: "/generator/terminal",
    icon: Terminal,
    description: "Terminal command animations",
  },
  {
    title: "Loading Spinner",
    href: "/generator/loader",
    icon: Loader2,
    description: "Animated loading indicators",
  }
]

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Documentation", 
    href: "/docs",
    icon: BookOpen,
  },
  {
    title: "GitHub",
    href: "https://github.com/AAYUSH412/Waveify",
    icon: Github,
    external: true
  }
]

export function GeneratorLayout({ children, title, description }: GeneratorLayoutProps) {
  const pathname = usePathname()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar variant="inset" className="border-r">
          <SidebarHeader className="border-b p-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
                  }}
                />
                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Waveify
                </h1>
                <p className="text-xs text-muted-foreground">Animation Studio</p>
              </div>
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-2">
            {/* Navigation Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        size="sm"
                      >
                        <Link 
                          href={item.href}
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Generators Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Generators</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {generatorItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        size="sm"
                        className="group"
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === 'New' ? 'default' : 'secondary'} 
                              className="text-xs h-5 px-1.5"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            {/* Quick Actions */}
            <SidebarGroup>
              <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
              <SidebarGroupContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link href="/docs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Docs
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link href="https://github.com/AAYUSH412/Waveify" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Star on GitHub
                  </Link>
                </Button>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-semibold">{title}</h1>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              Made with ❤️ for the developer community • 
              <Link 
                href="https://github.com/AAYUSH412/Waveify" 
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
