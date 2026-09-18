"use client"

import { useEffect, useRef } from "react"
import type { ElementType, HTMLAttributes, ReactNode } from "react"

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children?: ReactNode
  delay?: number
}

/** Fades + slides an element in the first time it scrolls into view. */
export function Reveal({ as: Tag = "div", className = "", children, delay, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
