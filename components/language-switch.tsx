"use client"

import { useRouter } from "next/navigation"
import type { Lang } from "@/lib/language"
import { LANG_COOKIE } from "@/lib/language"

interface LanguageSwitchProps {
  lang: Lang
  label: string
  className?: string
  id?: string
  /** Optional explicit destination for the other language, e.g. equivalent legal page. */
  targetPath?: { en: string; es: string }
}

export function LanguageSwitch({ lang, label, className, id, targetPath }: LanguageSwitchProps) {
  const router = useRouter()

  const handleClick = () => {
    const nextLang: Lang = lang === "en" ? "es" : "en"
    document.cookie = `${LANG_COOKIE}=${nextLang}; path=/; max-age=31536000; samesite=lax`
    const destination = targetPath ? targetPath[nextLang] : nextLang === "es" ? "/es" : "/"
    router.push(destination)
  }

  return (
    <button type="button" className={className} id={id} onClick={handleClick}>
      {label}
    </button>
  )
}
