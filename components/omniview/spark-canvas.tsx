"use client"

import { useEffect, useRef } from "react"

interface Spark {
  x: number
  y: number
  a: number
  t: number
}

/** Renders a small directional spark burst on click, matching the source site's micro-interaction. */
export function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let sparks: Spark[] = []
    let frame: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement | null)?.closest("input,textarea,select")) return
      const now = performance.now()
      for (let i = 0; i < 8; i++) {
        sparks.push({ x: e.clientX, y: e.clientY, a: (Math.PI * 2 * i) / 8, t: now })
      }
    }
    window.addEventListener("click", onClick)

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparks = sparks.filter((s) => now - s.t < 430)
      sparks.forEach((s) => {
        const p = (now - s.t) / 430
        const eased = p * (2 - p)
        const d = eased * 22
        const len = 10 * (1 - eased)
        const x1 = s.x + d * Math.cos(s.a)
        const y1 = s.y + d * Math.sin(s.a)
        const x2 = s.x + (d + len) * Math.cos(s.a)
        const y2 = s.y + (d + len) * Math.sin(s.a)
        const under = document.elementFromPoint(s.x, s.y)
        const dark = !!under?.closest(".philosophy,.ai-section,.final-cta,footer")
        ctx.strokeStyle = dark ? "rgba(255,255,255,.82)" : "rgba(20,20,20,.72)"
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })
      frame = requestAnimationFrame(draw)
    }
    frame = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("click", onClick)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas id="sparkCanvas" ref={canvasRef} aria-hidden="true" />
}
