"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function GridBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 -z-10 h-full w-full" aria-hidden="true">
      {/* Base dark background - ensure it's always dark in dark mode */}
      <div className={`absolute inset-0 ${isDark ? "bg-slate-900" : "bg-white"}`} />

      {/* Dark mode gradient backgrounds */}
      {isDark && (
        <>
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />

          {/* Secondary gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10" />

          {/* Radial gradients for ambient lighting */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/20 via-blue-600/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/20 via-purple-600/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-indigo-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl" />
        </>
      )}

      {/* Light mode gradient (subtle) */}
      {!isDark && <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />}

      {/* Grid Pattern with Dots */}
      <div
        className={`absolute inset-0 h-full w-full ${isDark ? "opacity-[0.3]" : "opacity-[0.5]"}`}
        style={{
          backgroundImage: `
            radial-gradient(circle, ${
              isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"
            } 1px, transparent 1px),
            linear-gradient(${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />

      {/* Subtle vignette effect for dark mode */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/20" />
      )}

      {/* Light mode radial fade overlay */}
      {!isDark && (
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, transparent 0%, rgba(255, 255, 255, 0.2) 100%)`,
          }}
        />
      )}
    </div>
  )
}
