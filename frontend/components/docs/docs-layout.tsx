"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Menu, 
  ArrowLeft, 
  Github, 
  BookOpen, 
  Code, 
  Waves, 
  Zap, 
  Tags, 
  Terminal, 
  FileText,
  ChevronRight,
  Sparkles,
  Search,
  ExternalLink,
  X,
  ArrowRight,
  Clock,
  Star,
  Users,
  Loader2,
  ChevronLeft,
  Home,
  CommandIcon,
  Hash
} from "lucide-react"
import { docsConfig } from "@/lib/docs"

interface DocsLayoutProps {
  children: React.ReactNode
  currentPath?: string
  tableOfContents?: Array<{
    id: string
    title: string
    level: number
  }>
}

// Search functionality
interface SearchResult {
  title: string
  slug: string
  section: string
  href: string
}

export function DocsLayout({ 
  children, 
  currentPath = "introduction",
  tableOfContents = []
}: DocsLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [activeHeading, setActiveHeading] = useState<string>('')
  
  const router = useRouter()
  const pathname = usePathname()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)

  // Effects and handlers
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Command/Ctrl + K for search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setShowSearch(true)
        setTimeout(() => searchInputRef.current?.focus(), 100)
      }
      
      // Escape to close search or mobile menu
      if (event.key === 'Escape') {
        setShowSearch(false)
        setIsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Search functionality
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    
    setIsSearching(true)
    
    // Simulate search - in real app, this would be an API call
    setTimeout(() => {
      const results: SearchResult[] = []
      
      docsConfig.navigation.forEach(section => {
        section.items.forEach(item => {
          if (item.title.toLowerCase().includes(query.toLowerCase()) ||
              section.title.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              title: item.title,
              slug: item.slug,
              section: section.title,
              href: item.href
            })
          }
        })
      })
      
      setSearchResults(results.slice(0, 8)) // Limit to 8 results
      setIsSearching(false)
    }, 300)
  }, [])

  useEffect(() => {
    performSearch(searchQuery)
  }, [searchQuery, performSearch])

  // Table of contents intersection observer
  useEffect(() => {
    if (tableOfContents.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { 
        rootMargin: '-20% 0% -80% 0%',
        threshold: 0
      }
    )

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [tableOfContents])

  // Get current page info
  const currentPageInfo = useMemo(() => {
    for (const section of docsConfig.navigation) {
      for (const item of section.items) {
        if (item.slug === currentPath) {
          return {
            ...item,
            section: section.title,
            sectionItems: section.items
          }
        }
      }
    }
    return null
  }, [currentPath])

  // Get navigation (prev/next)
  const navigation = useMemo(() => {
    const allItems = docsConfig.navigation.flatMap(section => section.items)
    const currentIndex = allItems.findIndex(item => item.slug === currentPath)
    
    return {
      prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
      next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null
    }
  }, [currentPath])

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <motion.div
              className="w-10 h-10 rounded-xl gradient-primary p-0.5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse opacity-80"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gradient group-hover:scale-105 transition-transform">
              Waveify
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs px-2 py-0.5 h-5">
                Docs
              </Badge>
              <Badge variant="outline" className="text-xs px-2 py-0.5 h-5">
                v2.0
              </Badge>
            </div>
          </div>
        </Link>
        
        {/* Quick Actions */}
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 text-xs h-8 justify-start"
            onClick={() => setShowSearch(true)}
          >
            <Search className="w-3 h-3 mr-2" />
            Search
            <Badge variant="secondary" className="ml-auto text-xs px-1.5">
              ⌘K
            </Badge>
          </Button>
          <Button variant="outline" size="sm" asChild className="h-8 px-2">
            <Link href="/generator/wave" title="Try Generator">
              <Code className="w-3 h-3" />
            </Link>
          </Button>
        </div>

        {/* Breadcrumb */}
        {currentPageInfo && (
          <div className="mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 truncate">
              <Home className="w-3 h-3 flex-shrink-0" />
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{currentPageInfo.section}</span>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="font-medium text-foreground truncate">
                {currentPageInfo.title}
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Navigation */}
      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="space-y-8">
          {docsConfig.navigation.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold text-foreground/90 flex items-center gap-2">
                {getSectionIcon(section.title)}
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const isActive = currentPath === item.slug
                  return (
                    <motion.li 
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 hover:bg-accent/50 relative overflow-hidden ${
                          isActive 
                            ? 'text-foreground bg-accent font-medium border-l-2 border-primary' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                            layoutId="activeTab"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative z-10 flex-1">{item.title}</span>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </motion.div>
                        )}
                        <ChevronRight className={`w-3 h-3 transition-transform group-hover:translate-x-0.5 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`} />
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border/50 space-y-3">
        <div className="flex gap-2">
          <Link href="https://github.com/AAYUSH412/Waveify" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" className="w-full justify-start text-xs h-8">
              <Github className="w-3 h-3 mr-2" />
              GitHub
              <div className="ml-auto flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>2.1k</span>
              </div>
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="h-8 px-2" title="Contributors">
            <Users className="w-3 h-3" />
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground text-center">
          Made with ❤️ by{" "}
          <Link 
            href="https://github.com/AAYUSH412" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium hover:text-foreground transition-colors"
          >
            AAYUSH412
          </Link>
        </div>
      </div>
    </div>
  )

  // Helper function to get section icons
  const getSectionIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'getting started':
        return <BookOpen className="w-3 h-3" />
      case 'wave api':
        return <Waves className="w-3 h-3" />
      case 'typing api':
        return <FileText className="w-3 h-3" />
      case 'terminal api':
        return <Terminal className="w-3 h-3" />
      case 'loader api':
        return <Zap className="w-3 h-3" />
      case 'resources':
        return <Tags className="w-3 h-3" />
      case 'advanced':
        return <Code className="w-3 h-3" />
      case 'integrations':
        return <ExternalLink className="w-3 h-3" />
      default:
        return <BookOpen className="w-3 h-3" />
    }
  }

  // Search Modal Component
  const SearchModal = () => (
    <AnimatePresence>
      {showSearch && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setShowSearch(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-lg bg-background border rounded-lg shadow-2xl z-50 mx-4"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0 text-sm"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
              
              {isSearching ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1 max-h-80 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <motion.div
                      key={result.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={result.href}
                        className="block p-3 rounded-md hover:bg-accent/50 transition-colors group"
                        onClick={() => setShowSearch(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {result.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {result.section}
                            </div>
                          </div>
                          <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : searchQuery && !isSearching ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  No results found for "{searchQuery}"
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Start typing to search documentation...
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4 pt-3 border-t text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border bg-muted">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded border bg-muted">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border bg-muted">↵</kbd>
                    to select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border bg-muted">ESC</kbd>
                  to close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Table of Contents Component
  const TableOfContents = () => {
    if (tableOfContents.length === 0) return null

    return (
      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-64">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto"
        >
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Hash className="w-3 h-3" />
            On This Page
          </h4>
          <nav className="space-y-1">
            {tableOfContents.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs py-1.5 px-2 rounded transition-colors ${
                  activeHeading === item.id
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
                style={{ 
                  paddingLeft: `${0.5 + (item.level - 1) * 0.75}rem` 
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Search Modal */}
      <SearchModal />
      
      {/* Header */}
      <motion.header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "glass-nav shadow-lg" : "bg-background/95 backdrop-blur-xl border-b border-border/50"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <SidebarContent />
                </SheetContent>
              </Sheet>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" size="sm" asChild className="hidden lg:inline-flex">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </motion.div>

              {/* Mobile breadcrumb */}
              {currentPageInfo && (
                <div className="lg:hidden text-sm text-muted-foreground">
                  <span className="font-medium">{currentPageInfo.title}</span>
                </div>
              )}
            </div>

            {/* Header Actions */}
            <nav className="flex items-center gap-3">
              {/* Desktop search trigger */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSearch(true)}
                className="hidden sm:inline-flex"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
                <Badge variant="secondary" className="ml-2 text-xs">
                  ⌘K
                </Badge>
              </Button>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="outline" size="sm" asChild>
                  <Link 
                    href="https://github.com/AAYUSH412/Waveify" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden md:inline">GitHub</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      2.1k
                    </Badge>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button size="sm" asChild className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group hidden sm:inline-flex">
                  <Link href="/generator/wave">
                    Try Now
                    <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </motion.header>

      <div className="flex relative">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 xl:w-80 h-[calc(100vh-4rem)] border-r border-border/50 flex-shrink-0 sticky top-16">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main ref={mainContentRef} className="flex-1 min-w-0 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none" />
          
          {/* Content Container */}
          <div className="relative w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12 w-full min-w-0"
            >
              <div className="w-full min-w-0 overflow-hidden">
                {children}
              </div>

              {/* Navigation (Prev/Next) */}
              {(navigation.prev || navigation.next) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between pt-12 mt-12 border-t border-border/50"
                >
                  <div className="flex-1">
                    {navigation.prev && (
                      <Link
                        href={navigation.prev.href}
                        className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors max-w-sm"
                      >
                        <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-x-1 transition-all" />
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground mb-1">Previous</div>
                          <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                            {navigation.prev.title}
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                  
                  <div className="flex-1 flex justify-end">
                    {navigation.next && (
                      <Link
                        href={navigation.next.href}
                        className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors max-w-sm text-right"
                      >
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground mb-1">Next</div>
                          <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                            {navigation.next.title}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </main>

        {/* Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  )
}
