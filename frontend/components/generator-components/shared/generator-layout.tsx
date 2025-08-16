"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
  Terminal, 
  Loader2, 
  Home, 
  BookOpen, 
  Github,
  Sparkles,
  Zap,
  PaintBucket,
  Code,
  Star,
  TrendingUp,
  Palette,
  Settings,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Activity,
  Globe,
  Rocket
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

interface GeneratorLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  breadcrumb?: Array<{ label: string; href?: string }>
  headerActions?: React.ReactNode
}

interface GeneratorStats {
  totalGenerations: number
  popularityScore: number
  lastUpdate: string
}

// Enhanced generator items with more metadata
const generatorItems = [
  {
    title: "Wave Generator",
    href: "/generator/wave",
    icon: Waves,
    description: "Professional animated wave SVGs",
    badge: "Popular",
    badgeVariant: "default" as const,
    category: "Visual Effects",
    stats: { totalGenerations: 15420, popularityScore: 95, lastUpdate: "2 days ago" },
    features: ["Multiple wave types", "Professional gradients", "60fps animations", "GitHub optimized"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Typing Animation",
    href: "/generator/typing", 
    icon: Type,
    description: "Dynamic typing text effects",
    badge: "Enhanced",
    badgeVariant: "secondary" as const,
    category: "Text Effects",
    stats: { totalGenerations: 8750, popularityScore: 88, lastUpdate: "1 day ago" },
    features: ["Multi-line support", "Custom prompts", "Gradient text", "Sound effects"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Terminal Demo",
    href: "/generator/terminal",
    icon: Terminal,
    description: "Interactive terminal simulations",
    badge: "Beta",
    badgeVariant: "destructive" as const,
    category: "Interactive",
    stats: { totalGenerations: 3940, popularityScore: 82, lastUpdate: "5 days ago" },
    features: ["Command sequences", "Realistic typing", "Multiple themes", "Copy protection"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Loading Spinner",
    href: "/generator/loader",
    icon: Loader2,
    description: "Elegant loading indicators",
    badge: "Stable",
    badgeVariant: "secondary" as const,
    category: "UI Elements",
    stats: { totalGenerations: 12100, popularityScore: 91, lastUpdate: "1 week ago" },
    features: ["Custom speeds", "Multiple styles", "Size variants", "Smooth animations"],
    color: "from-pink-500 to-rose-500"
  }
]

// Enhanced navigation with more options
const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    description: "Return to main page"
  },
  {
    title: "Documentation", 
    href: "/docs",
    icon: BookOpen,
    description: "Complete API reference"
  },
  {
    title: "Showcase",
    href: "/showcase",
    icon: Star,
    description: "Community examples"
  },
  {
    title: "GitHub",
    href: "https://github.com/AAYUSH412/Waveify",
    icon: Github,
    external: true,
    description: "View source code"
  }
]

// Quick action items
const quickActions = [
  {
    title: "Star on GitHub",
    href: "https://github.com/AAYUSH412/Waveify",
    icon: Star,
    variant: "outline" as const,
    external: true
  },
  {
    title: "Report Issue",
    href: "https://github.com/AAYUSH412/Waveify/issues",
    icon: HelpCircle,
    variant: "ghost" as const,
    external: true
  }
]

// Platform stats
const platformStats = {
  totalUsers: "25.4K",
  monthlyGenerations: "1.2M",
  uptime: "99.9%",
  avgResponseTime: "120ms"
}

export function GeneratorLayout({ 
  children, 
  title, 
  description, 
  breadcrumb = [],
  headerActions 
}: GeneratorLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every minute for live stats
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Get current generator stats
  const currentGenerator = generatorItems.find(item => pathname === item.href)

  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full bg-background">
          <Sidebar variant="inset" className="border-r bg-card/50 backdrop-blur-sm">
            <SidebarHeader className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
                    }}
                  />
                  <div className="absolute inset-1 rounded-lg bg-background flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-sm group-hover:blur-md transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                    Waveify
                  </h1>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">Animation Studio</p>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5">Pro</Badge>
                  </div>
                </div>
              </Link>
            </SidebarHeader>

            <SidebarContent className="px-3 py-4 space-y-6">
              {/* Platform Stats */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">Platform Status</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Users</p>
                    <p className="font-semibold">{platformStats.totalUsers}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Monthly</p>
                    <p className="font-semibold">{platformStats.monthlyGenerations}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Uptime</p>
                    <p className="font-semibold text-emerald-600">{platformStats.uptime}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Response</p>
                    <p className="font-semibold">{platformStats.avgResponseTime}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Section */}
              <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Navigation
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                isActive={pathname === item.href}
                                size="sm"
                                className="group relative overflow-hidden"
                              >
                                <Link 
                                  href={item.href}
                                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                  <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                  <span className="flex-1">{item.title}</span>
                                  {item.external && <ExternalLink className="h-3 w-3 opacity-60" />}
                                  {/* Hover effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="ml-2">
                              <p>{item.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator />

              {/* Generators Section */}
              <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Generators
                  <Badge variant="secondary" className="text-xs">5</Badge>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1">
                    {generatorItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton
                                asChild
                                isActive={pathname === item.href}
                                size="sm"
                                className="group relative overflow-hidden min-h-[2.5rem]"
                              >
                                <Link href={item.href}>
                                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="h-3.5 w-3.5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="truncate font-medium">{item.title}</span>
                                      <Badge 
                                        variant={item.badgeVariant} 
                                        className="text-xs h-4 px-1"
                                      >
                                        {item.badge}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">
                                      {item.description}
                                    </p>
                                  </div>
                                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {/* Popularity indicator */}
                                  {pathname === item.href && (
                                    <motion.div 
                                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary rounded-r"
                                      layoutId="active-indicator"
                                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                  )}
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="ml-2 max-w-xs">
                              <div className="space-y-2">
                                <p className="font-medium">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span>Popularity</span>
                                    <span>{item.stats.popularityScore}%</span>
                                  </div>
                                  <Progress value={item.stats.popularityScore} className="h-1" />
                                </div>
                                <div className="text-xs space-y-1">
                                  <p><strong>Generated:</strong> {item.stats.totalGenerations.toLocaleString()}</p>
                                  <p><strong>Updated:</strong> {item.stats.lastUpdate}</p>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator />

              {/* Quick Actions */}
              <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Quick Actions
                </SidebarGroupLabel>
                <SidebarGroupContent className="space-y-2">
                  {quickActions.map((action) => (
                    <Button 
                      key={action.href}
                      variant={action.variant} 
                      size="sm" 
                      className="w-full justify-start group" 
                      asChild
                    >
                      <Link 
                        href={action.href} 
                        {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <action.icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        {action.title}
                        {action.external && <ExternalLink className="h-3 w-3 ml-auto opacity-60" />}
                      </Link>
                    </Button>
                  ))}
                </SidebarGroupContent>
              </SidebarGroup>

              {/* Current Generator Info */}
              <AnimatePresence>
                {currentGenerator && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${currentGenerator.color}`}>
                        <currentGenerator.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{currentGenerator.title}</p>
                        <p className="text-xs text-muted-foreground">{currentGenerator.category}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Usage Score</span>
                        <span>{currentGenerator.stats.popularityScore}%</span>
                      </div>
                      <Progress value={currentGenerator.stats.popularityScore} className="h-1.5" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-medium">Key Features:</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5">
                        {currentGenerator.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-primary/60" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex flex-col">
            {/* Enhanced Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
                  <div className="flex items-center gap-3">
                    {breadcrumb.length > 0 && (
                      <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
                        {breadcrumb.map((item, index) => (
                          <React.Fragment key={index}>
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="hover:text-foreground transition-colors"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span className="text-foreground font-medium">{item.label}</span>
                            )}
                            {index < breadcrumb.length - 1 && (
                              <ChevronRight className="h-3 w-3" />
                            )}
                          </React.Fragment>
                        ))}
                      </nav>
                    )}
                    <div className="flex flex-col">
                      <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {headerActions}
                  
                  {/* Generator Status */}
                  {currentGenerator && (
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium">Active</span>
                    </div>
                  )}

                  {/* Live Stats */}
                  <div className="hidden lg:flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{platformStats.monthlyGenerations} monthly</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-emerald-600" />
                      <span>{platformStats.uptime} uptime</span>
                    </div>
                  </div>

                  <ThemeToggle />
                </div>
              </div>

              {/* Progress bar for current generator */}
              {currentGenerator && (
                <div className="h-1 w-full bg-muted">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${currentGenerator.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${currentGenerator.stats.popularityScore}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              )}
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto p-6">
                {children}
              </div>
            </main>

            {/* Enhanced Footer */}
            <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>Made with</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      >
                        ❤️
                      </motion.div>
                      <span>for developers</span>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      <span>Global CDN</span>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      <span>Fast API</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                      <Link 
                        href="https://github.com/AAYUSH412/Waveify" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">Star on GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/docs" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="hidden sm:inline">Documentation</span>
                      </Link>
                    </Button>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>API Status:</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-emerald-600 font-medium">Operational</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional footer info */}
                <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span>© 2024 Waveify. All rights reserved.</span>
                    <span>v2.1.0</span>
                    <span>Updated {currentTime.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                    <Link href="/status" className="hover:text-foreground transition-colors">Status</Link>
                  </div>
                </div>
              </div>
            </footer>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
