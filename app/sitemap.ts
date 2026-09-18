import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const enPaths = ["/", "/legal/privacy", "/legal/terms", "/legal/cookies"]

  return enPaths.flatMap((path) => {
    const enUrl = `${base}${path}`
    const esUrl = path === "/" ? `${base}/es` : `${base}/es${path}`

    return [
      {
        url: enUrl,
        lastModified: new Date(),
        alternates: { languages: { en: enUrl, es: esUrl } },
      },
      {
        url: esUrl,
        lastModified: new Date(),
        alternates: { languages: { en: enUrl, es: esUrl } },
      },
    ]
  })
}
