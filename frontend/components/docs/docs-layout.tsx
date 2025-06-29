"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, ArrowLeft, Github, BookOpen, Code, Waves, Zap, Tags, Terminal, FileText } from "lucide-react"

interface DocsLayoutProps {
  children: React.ReactNode
}

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction", icon: BookOpen },
      { title: "Quick Start", href: "#quick-start", icon: Zap },
      { title: "API Overview", href: "#api-overview", icon: Code },
    ]
  },
  {
    title: "Wave API",
    items: [
      { title: "Basic Waves", href: "#wave-basic", icon: Waves },
      { title: "Wave Types", href: "#wave-types", icon: Waves },
      { title: "Customization", href: "#wave-customization", icon: Waves },
      { title: "Examples", href: "#wave-examples", icon: Waves },
    ]
  },
  {
    title: "Typing API",
    items: [
      { title: "Typing Animations", href: "#typing-animations", icon: Terminal },
      { title: "Styling Options", href: "#typing-styling", icon: Terminal },
      { title: "Advanced Effects", href: "#typing-effects", icon: Terminal },
    ]
  },
  {
    title: "Terminal API",
    items: [
      { title: "Terminal Themes", href: "#terminal-api", icon: Terminal },
      { title: "Parameters", href: "#terminal-parameters", icon: Terminal },
      { title: "Command Types", href: "#terminal-commands", icon: Terminal },
      { title: "Examples", href: "#terminal-examples", icon: Terminal },
    ]
  },
  {
    title: "Loader API",
    items: [
      { title: "Loader Types", href: "#loader-api", icon: Zap },
      { title: "Customization", href: "#loader-customization", icon: Zap },
      { title: "Examples", href: "#loader-examples", icon: Zap },
    ]
  },
  {
    title: "Badge API",
    items: [
      { title: "Custom Badges", href: "#badge-custom", icon: Tags },
      { title: "Badge Styles", href: "#badge-styles", icon: Tags },
      { title: "Parameters", href: "#badge-parameters", icon: Tags },
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Examples", href: "#examples", icon: FileText },
      { title: "Best Practices", href: "#best-practices", icon: FileText },
      { title: "Troubleshooting", href: "#troubleshooting", icon: FileText },
    ]
  },
]

export function DocsLayout({ children }: DocsLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  const SidebarContent = () => (
    <div className="h-full">
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center gap-2">
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
              <Waves className="w-4 h-4 text-primary" />
            </div>
          </div>
          <span className="font-bold text-xl text-gradient">Waveify</span>
        </Link>
        <p className="text-sm text-muted-foreground mt-2">Documentation</p>
      </div>
      
      <ScrollArea className="h-full px-6 py-4">
        <nav className="space-y-6">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            
            <Button variant="outline" size="sm" asChild className="hidden lg:inline-flex">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <nav className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link 
                href="https://github.com/AAYUSH412/Waveify" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 h-[calc(100vh-4rem)] border-r">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}
