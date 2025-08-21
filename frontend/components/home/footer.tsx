"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Sparkles, ExternalLink, Code, BookOpen, Users, Coffee, LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { LiquidButton } from "@/components/animate-ui/buttons/liquid"
import ShimmerText from "@/components/kokonutui/shimmer-text"

interface FooterLink {
  name: string
  href: string
  icon?: LucideIcon | string
  external?: boolean
}

interface FooterLinks {
  [key: string]: FooterLink[]
}

const footerLinks: FooterLinks = {
  Product: [
    { name: "Wave Generator", href: "/generator/wave", icon: "🌊" },
    { name: "Typing Effects", href: "/generator/typing", icon: "⌨️" },
    { name: "Terminal Themes", href: "/generator/terminal", icon: "💻" },
    { name: "Loader Animations", href: "/generator/loader", icon: "⏳" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "API Reference", href: "/docs/api", icon: Code },
    { name: "Examples", href: "/docs/examples", icon: "🎨" },
    { name: "Community", href: "https://github.com/AAYUSH412/Waveify/discussions", icon: Users, external: true },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "MIT License", href: "https://github.com/AAYUSH412/Waveify/blob/main/LICENSE", external: true },
    { name: "Status", href: "/status" },
  ],
}

interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
  description: string
}

const socialLinks: SocialLink[] = [
  { 
    name: "Waveify Repository", 
    icon: Github, 
    href: "https://github.com/AAYUSH412/Waveify", 
    description: "Star us on GitHub"
  },
  { 
    name: "Developer LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/aayush-vaghela/", 
    description: "Connect with the developer"
  },
  { 
    name: "Contact Email", 
    icon: Mail, 
    href: "mailto:aayushvaghela@gmail.com", 
    description: "Get in touch"
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 lg:py-24 overflow-hidden border-t border-border/50">
      {/* Dot Pattern Background */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-30 dark:opacity-20"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <ShimmerText 
                  text="Waveify" 
                  className="text-2xl font-bold !p-0"
                />
                <Badge variant="secondary" className="text-xs px-2 py-0.5 h-5 w-fit">
                  Open Source
                </Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Professional animated SVG components for GitHub READMEs. Create stunning banners, 
              typing effects, terminals, and loaders in seconds. Built by developers, for developers.
            </p>
            
            {/* Social Links with Liquid Buttons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.description}
                  >
                    <LiquidButton
                      variant="outline"
                      size="sm"
                      className="group flex items-center gap-2"
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="hidden sm:inline text-sm">{social.name.split(' ')[0]}</span>
                    </LiquidButton>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {typeof link.icon === 'string' ? (
                        <span className="text-sm">{link.icon}</span>
                      ) : link.icon ? (
                        <link.icon className="w-4 h-4" />
                      ) : null}
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.name}
                      </span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} Waveify. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
              by 
              <Link 
                href="https://www.linkedin.com/in/aayush-vaghela/" 
                className="font-medium text-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aayush Vaghela
              </Link>
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">All systems operational</span>
            </div>
            <Link 
              href="https://github.com/AAYUSH412/Waveify"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
