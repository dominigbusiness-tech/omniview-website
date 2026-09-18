export type Lang = "en" | "es"

export const LANG_COOKIE = "omniview_lang"
export const LOCALE_HEADER = "x-omniview-locale"

/**
 * ISO 3166-1 alpha-2 codes for countries where Spanish is an official or
 * primary language. Used for the automatic first-visit redirect only.
 * The United States is intentionally excluded — it defaults to English
 * per the approved bilingual architecture spec.
 */
export const SPANISH_SPEAKING_COUNTRIES = new Set([
  "AR", // Argentina
  "BO", // Bolivia
  "CL", // Chile
  "CO", // Colombia
  "CR", // Costa Rica
  "CU", // Cuba
  "DO", // Dominican Republic
  "EC", // Ecuador
  "SV", // El Salvador
  "GQ", // Equatorial Guinea
  "GT", // Guatemala
  "HN", // Honduras
  "MX", // Mexico
  "NI", // Nicaragua
  "PA", // Panama
  "PY", // Paraguay
  "PE", // Peru
  "PR", // Puerto Rico
  "ES", // Spain
  "UY", // Uruguay
  "VE", // Venezuela
])

export function localePathFor(lang: Lang, enPath: string): string {
  const normalized = enPath === "/" ? "" : enPath
  return lang === "es" ? `/es${normalized}` || "/es" : normalized || "/"
}
