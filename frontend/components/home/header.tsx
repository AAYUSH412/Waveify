"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, ArrowRight, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { LiquidButton } from "@/components/animate-ui/buttons/liquid"
import ShimmerText from "@/components/kokonutui/shimmer-text"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Components", href: "#components" },
  { name: "Docs", href: "/docs/introduction" },
  { name: "API", href: "/generator/wave" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-nav shadow-xl backdrop-blur-xl border-b border-white/10 dark:border-violet-500/20" 
          : "bg-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2 
      }}
    >
      {/* Animated background gradient on scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 opacity-0"
        animate={{ 
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo with animations */}
          <motion.div
            className="flex items-center space-x-3 z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-20 blur-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <div className="w-10 h-10 rounded-xl gradient-primary p-0.5 relative overflow-hidden">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center relative z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  {/* Animated shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <AnimatedGradientText 
                  className="text-xl font-bold"
                  colorFrom="#8b5cf6"
                  colorTo="#ec4899"
                  speed={0.8}
                >
                  Waveify
                </AnimatedGradientText>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 z-10 pl-52">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1 + 0.4,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Link href={item.href}>
                  <LiquidButton
                    variant="outline"
                    size="sm"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group border-transparent hover:border-violet-300/30 bg-transparent hover:bg-violet-50/50 dark:hover:bg-violet-900/20"
                  >
                    {item.name}
                    <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </LiquidButton>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-3">
            {/* GitHub Stars Button */}
            <motion.div
              className="hidden sm:flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="https://github.com/AAYUSH412/Waveify" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LiquidButton 
                  variant="outline" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground group border-gray-200/50 dark:border-gray-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50 bg-white/50 dark:bg-slate-800/50"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden md:inline">Star</span>
                  <Star className="w-3 h-3 ml-1 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="secondary" className="ml-2 text-xs bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                    2.1k
                  </Badge>
                </LiquidButton>
              </Link>
            </motion.div>

            {/* Enhanced Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Enhanced Get Started Button */}
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="/generator/wave">
                <LiquidButton
                  className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700"
                  size="sm"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </LiquidButton>
              </Link>
            </motion.div>

            {/* Enhanced Mobile menu button */}
            <LiquidButton 
              variant="outline" 
              size="icon" 
              className="lg:hidden border-gray-200/50 dark:border-gray-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden glass-nav border-t border-white/10 dark:border-violet-500/20 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-violet-50/50 dark:hover:bg-violet-900/20 relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 space-y-3 border-t border-white/10 dark:border-violet-500/20"
                >
                  {/* Mobile GitHub Button */}
                  <Link href="https://github.com/AAYUSH412/Waveify" target="_blank" rel="noopener noreferrer">
                    <LiquidButton 
                      variant="outline" 
                      className="w-full justify-start bg-white/50 dark:bg-slate-800/50 border-gray-200/50 dark:border-gray-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <ShimmerText 
                        text="Star on GitHub" 
                        className="text-sm font-medium flex-1 text-left"
                      />
                      <Badge variant="secondary" className="ml-auto bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                        2.1k
                      </Badge>
                    </LiquidButton>
                  </Link>
                  
                  {/* Mobile Get Started Button */}
                  <Link href="/generator/wave">
                    <LiquidButton className="w-full gradient-primary text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 border-0">
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
                    </LiquidButton>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
