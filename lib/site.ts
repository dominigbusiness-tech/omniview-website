export const SITE = {
  name: "OmniView",
  operator: "Dominig Williams",
  location: "Quito, Ecuador",
  email: "dominig.business@gmail.com",
  phoneDisplay: "+1 (213) 636-4537",
  phoneHref: "tel:+12136364537",
  smsHref: "sms:+12136364537",
  whatsapp: "https://wa.me/12136364537",
  instagram: "https://www.instagram.com/omniview.us/",
  facebook: "https://www.facebook.com/profile.php?id=61593111227468",
} as const

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`

  return "http://localhost:3000"
}
