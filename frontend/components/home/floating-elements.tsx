"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient blobs that move slightly with mouse */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02 - 400,
          y: mousePosition.y * 0.02 - 400,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 20 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          x: mousePosition.x * -0.01 + 300,
          y: mousePosition.y * -0.01 + 300,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 20 }}
      />

      {/* Wave-like elements */}
      <svg className="absolute bottom-0 left-0 w-full h-[200px] opacity-5" viewBox="0 0 1200 200">
        <motion.path
          d="M0,100 C300,150 600,50 1200,100 L1200,200 L0,200 Z"
          fill="url(#gradient1)"
          initial={{ y: 50 }}
          animate={{ y: [50, 30, 50] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,150 C300,100 600,200 1200,150 L1200,200 L0,200 Z"
          fill="url(#gradient2)"
          initial={{ y: 50 }}
          animate={{ y: [50, 70, 50] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
