"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -top-64 -right-64 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        {/* Newsletter Section */}
        <motion.div
          className="glass-card rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="glass-effect border-white/10 focus:border-violet-500"
                />
                <Button className="button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
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
            </div>
            <p className="text-sm text-muted-foreground">
              Beautiful animated SVG banners for your GitHub README. Make your projects stand out with dynamic,
              eye-catching waves.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-400 transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-400 transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-violet-400 transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 text-lg">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 text-lg">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Waveify. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by the Waveify
            team.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link href="#" className="hover:text-violet-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
