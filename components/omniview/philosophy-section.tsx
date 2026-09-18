"use client"

import { useEffect, useMemo, useRef } from "react"
import type { SiteContent } from "@/lib/content/types"

export function PhilosophySection({ philosophy }: { philosophy: SiteContent["philosophy"] }) {
  const stageRef = useRef<HTMLDivElement>(null)
  const titleRefs = useRef<HTMLDivElement[]>([])
  const copyRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  const words = useMemo(() => philosophy.copy.split(/\s+/), [philosophy.copy])

  useEffect(() => {
    let ticking = false

    const updatePhilosophy = () => {
      const stage = stageRef.current
      if (!stage) return
      const rect = stage.getBoundingClientRect()
      const range = stage.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, range)))
      const titles = titleRefs.current

      titles.forEach((el, i) => {
        const seg = 1 / titles.length
        const start = i * seg
        const end = (i + 1) * seg
        let opacity = 0
        let rot = 90
        if (progress >= start && progress < end) {
          const local = (progress - start) / seg
          rot = (1 - local) * 90
          opacity = Math.min(1, local * 1.6)
        } else if (progress >= end) {
          if (i === titles.length - 1) {
            rot = 0
            opacity = 1
          } else {
            rot = -90
            opacity = 0
          }
        }
        el.style.transform = `rotateX(${rot}deg) translateZ(0)`
        el.style.opacity = String(opacity)
      })
    }

    const updateCopyWords = () => {
      const copy = copyRef.current
      if (!copy) return
      const rect = copy.getBoundingClientRect()
      const start = window.innerHeight * 0.82
      const end = window.innerHeight * 0.22
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)))
      const spans = wordRefs.current
      spans.forEach((w, i) => {
        const wp = Math.max(0, Math.min(1, progress * spans.length - i))
        w.style.opacity = String(wp)
        w.style.filter = `blur(${(1 - wp) * 24}px)`
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updatePhilosophy()
        updateCopyWords()
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    updatePhilosophy()
    updateCopyWords()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="philosophy" id="about">
      <div className="philosophy-stage" ref={stageRef}>
        <div className="philosophy-sticky">
          <div className="philo-inner">
            <div className="mono philo-kicker">{philosophy.kicker}</div>
            <div className="rotate-stage">
              {philosophy.rotating.map((title, i) => (
                <div
                  className="rotate-title"
                  key={title}
                  ref={(el) => {
                    if (el) titleRefs.current[i] = el
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy-copy" ref={copyRef}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            ref={(el) => {
              if (el) wordRefs.current[i] = el
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  )
}
