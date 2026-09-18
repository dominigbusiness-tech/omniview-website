import type { Lang } from "@/lib/language"
import { privacyContent } from "./privacy"
import { termsContent } from "./terms"
import { cookiesContent } from "./cookies"
import type { LegalPageData } from "./types"

export function getPrivacyContent(lang: Lang): LegalPageData {
  return privacyContent[lang]
}

export function getTermsContent(lang: Lang): LegalPageData {
  return termsContent[lang]
}

export function getCookiesContent(lang: Lang): LegalPageData {
  return cookiesContent[lang]
}
