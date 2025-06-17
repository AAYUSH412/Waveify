"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, Zap, Code, Star } from "lucide-react"
import Link from "next/link"

export function DocsHero() {
  return (
    <section className="text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Complete API Documentation
          </Badge>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Waveify Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create beautiful animated SVG banners for your GitHub README files. 
            Learn how to use our powerful API to generate waves, typing animations, badges, and more.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            className="button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300"
          >
            <Link href="#quick-start">
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/generator/wave">
              <Waves className="w-4 h-4 mr-2" />
              Try Generator
            </Link>
          </Button>
        </div>

        {/* Live Demo */}
        <div className="pt-8">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <div className="bg-muted rounded-lg p-4 overflow-hidden">
              <img 
                src="https://waveify.onrender.com/api/wave?color=%23667eea&height=150&speed=3&amplitude=25&frequency=2"
                alt="Waveify Wave Animation"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Generated with: <code className="bg-muted px-1 rounded">?color=%23667eea&height=150&speed=3</code>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
