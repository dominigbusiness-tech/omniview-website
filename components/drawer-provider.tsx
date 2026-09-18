"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

interface DrawerContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen)
    return () => document.body.classList.remove("no-scroll")
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, close])

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export function useDrawer() {
  const ctx = useContext(DrawerContext)
  if (!ctx) throw new Error("useDrawer must be used within a DrawerProvider")
  return ctx
}
