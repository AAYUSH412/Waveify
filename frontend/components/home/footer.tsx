"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Heart, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Components", href: "#components" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "#api" },
  ],
  Resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Blog", href: "#blog" },
    { name: "Community", href: "#community" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Press", href: "#press" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Status", href: "#status" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/AAYUSH412/Waveify", color: "hover:text-gray-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/waveify_dev", color: "hover:text-blue-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/waveify", color: "hover:text-blue-600" },
  { name: "Email", icon: Mail, href: "mailto:hello@waveify.dev", color: "hover:text-green-500" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-card border-border/50">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="outline" className="glass-card border-primary/20 mb-4">
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    Stay Updated
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Get the Latest <span className="text-gradient">Updates</span>
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    New components, features, and exclusive tips delivered to your inbox.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="glass-card border-border/50 focus:border-primary flex-1"
                    />
                    <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary p-0.5">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">Waveify</span>
                <Badge variant="secondary" className="text-xs px-1 py-0 h-4 w-fit">
                  v2.0
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional animated SVG components for GitHub READMEs. Create stunning banners, typing effects,
              terminals, and loaders in seconds.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl glass-card hover:bg-muted/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center">
            © {currentYear} Waveify. Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> for
            developers worldwide.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
