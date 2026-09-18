import type { Lang } from "@/lib/language"
import { en } from "./en"
import { es } from "./es"
import type { SiteContent } from "./types"

export type { SiteContent }

const dictionaries: Record<Lang, SiteContent> = { en, es }

export function getContent(lang: Lang): SiteContent {
  return dictionaries[lang]
}
