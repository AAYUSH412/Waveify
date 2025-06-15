"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function WaveAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 200
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // First wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.01 + offset) * 20 + canvas.height / 2
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient1.addColorStop(0, "rgba(79, 70, 229, 0.3)")
      gradient1.addColorStop(1, "rgba(147, 51, 234, 0.3)")
      ctx.fillStyle = gradient1
      ctx.fill()

      // Second wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.02 + offset * 1.5) * 15 + canvas.height / 2 + 10
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient2.addColorStop(0, "rgba(147, 51, 234, 0.3)")
      gradient2.addColorStop(1, "rgba(79, 70, 229, 0.3)")
      ctx.fillStyle = gradient2
      ctx.fill()

      // Third wave
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let i = 0; i < canvas.width; i++) {
        const x = i
        const y = Math.sin(i * 0.015 + offset * 0.8) * 12 + canvas.height / 2 - 5
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()

      const gradient3 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient3.addColorStop(0, "rgba(59, 130, 246, 0.3)")
      gradient3.addColorStop(1, "rgba(79, 70, 229, 0.3)")
      ctx.fillStyle = gradient3
      ctx.fill()

      offset += 0.01
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div ref={containerRef} style={{ opacity, y }} className="w-full overflow-hidden relative">
      <canvas ref={canvasRef} className="w-full h-[200px]" style={{ display: "block" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </motion.div>
  )
}
