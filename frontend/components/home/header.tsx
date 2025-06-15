"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
    { name: "GitHub", href: "#github" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass-effect" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 12h20" />
                  <path d="M5 12c.5-4.5 2.5-8 5-8s4.5 3.5 5 8c.5 4.5-2.5 8-5 8s-4.5-3.5-5-8Z" />
                  <path d="M9 12c.5-2.5 1.5-4 3-4s2.5 1.5 3 4c.5 2.5-1.5 4-3 4s-2.5-1.5-3-4Z" />
                </svg>
              </div>
            </div>
            <span className="font-bold text-xl text-gradient">Waveify</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle />
          <Button className="hidden md:inline-flex button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden glass-effect"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden glass-effect py-4 px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button className="w-full button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300">
                  Get Started
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
