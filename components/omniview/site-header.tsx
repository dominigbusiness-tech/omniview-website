"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import type { Lang } from "@/lib/language"
import type { SiteContent } from "@/lib/content/types"
import { LanguageSwitch } from "@/components/language-switch"

export function SiteHeader({ lang, nav }: { lang: Lang; nav: SiteContent["nav"] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const links = [
    { href: "#growth", label: nav.growth },
    { href: "#ai", label: nav.ai },
    { href: "#partners", label: nav.partners },
    { href: "#work", label: nav.work },
    { href: "#about", label: nav.about },
  ]

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`.trim()}>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="OmniView home">
          <Image src="/omniview-isotype.png" alt="" width={28} height={28} priority />
          <span className="brand-word">OmniView</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <LanguageSwitch lang={lang} label={nav.langLabel} className="lang" />
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? nav.menuClose : nav.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`.trim()} aria-hidden={!menuOpen}>
        <div className="mobile-menu-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <LanguageSwitch lang={lang} label={nav.langLabel} className="lang mobile-menu-lang" />
      </div>
    </header>
  )
}
