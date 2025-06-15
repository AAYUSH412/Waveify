"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GridBackgroundProps {
  className?: string
}

export function GridBackground({ className = "" }: GridBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 grid-bg"></div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)"
            : "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.05) 0%, transparent 40%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "0% 0%",
        }}
      />

      {/* Glowing accent points */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? "rgba(139, 92, 246, 0.6)" : "rgba(236, 72, 153, 0.6)",
            boxShadow: i % 2 === 0 ? "0 0 10px 2px rgba(139, 92, 246, 0.3)" : "0 0 10px 2px rgba(236, 72, 153, 0.3)",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
