import Link from "next/link"
import type { Lang } from "@/lib/language"
import { localePathFor } from "@/lib/language"
import type { LegalPageData } from "@/lib/legal-content/types"

export function LegalPage({
  lang,
  data,
  path,
}: {
  lang: Lang
  data: LegalPageData
  path: string
}) {
  const homeHref = localePathFor(lang, "/")
  const otherLang: Lang = lang === "en" ? "es" : "en"
  const otherLangHref = localePathFor(otherLang, path)

  return (
    <div className="legal-page">
      <header className="legal-nav">
        <div className="shell legal-nav-inner">
          <Link className="legal-brand serif" href={homeHref}>
            OmniView
          </Link>
          <div className="legal-nav-actions">
            <Link href={homeHref}>{data.homeLabel}</Link>
            <Link href={otherLangHref}>{otherLang.toUpperCase()}</Link>
          </div>
        </div>
      </header>

      <main>
        <div className="legal-hero">
          <div className="shell">
            <div className="legal-kicker mono">{data.kicker}</div>
            <h1 className="serif">{data.title}</h1>
            <p className="legal-intro">{data.intro}</p>
            <div className="legal-meta mono">{data.meta}</div>
          </div>
        </div>

        <div className="shell legal-content">
          <aside className="legal-toc">
            <h2 className="mono">{data.tocLabel}</h2>
            {data.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="legal-article">
            {data.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="serif">{section.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="shell legal-footer-inner">
          <p>© 2026 OmniView · Dominig Williams · Quito, Ecuador</p>
          <a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}
