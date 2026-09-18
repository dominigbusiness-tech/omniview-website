import Image from "next/image"
import Link from "next/link"
import type { SiteContent } from "@/lib/content/types"
import type { Lang } from "@/lib/language"
import { SITE } from "@/lib/site"
import { LanguageSwitch } from "@/components/language-switch"
import { OpenDrawerButton } from "@/components/omniview/open-drawer-button"

export function SiteFooter({ footer, lang }: { footer: SiteContent["footer"]; lang: Lang }) {
  const prefix = lang === "es" ? "/es" : ""

  const mailSubject = lang === "es" ? "Interesado en los servicios de OmniView" : "Interested in OmniView Services"
  const mailBody =
    lang === "es"
      ? "Hola, estoy interesado en conocer más sobre sus servicios y quisiera recibir información para evaluar un proyecto. Quedo atento a su respuesta."
      : "Hello, I am interested in learning more about your services and would like more information to evaluate a potential project. I look forward to hearing from you."
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`

  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand-lockup">
            <Image className="footer-iso" src="/omniview-isotype.png" alt="" width={42} height={42} />
            <span className="footer-wordmark">OmniView</span>
          </div>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>

        <div>
          <h4>{footer.solutions}</h4>
          <div className="footer-links">
            {footer.solutionsLinks.map((link) => (
              <a href={`${prefix}${link.href}`} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>{footer.company}</h4>
          <div className="footer-links">
            <a href={`${prefix}/#about`}>{footer.aboutLabel}</a>
            <OpenDrawerButton className="footer-link-button open-drawer">{footer.startProject}</OpenDrawerButton>
          </div>
        </div>

        <div>
          <h4>{footer.contactLabel}</h4>
          <div className="footer-links">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              {SITE.phoneDisplay}
            </a>
            <a href={mailtoHref}>{SITE.email}</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div className="footer-bottom-left">{footer.copyright}</div>
        <div className="footer-bottom-right">
          <Link className="footer-legal" href={`${prefix}/legal/privacy`}>
            {footer.privacy}
          </Link>
          <Link className="footer-legal" href={`${prefix}/legal/terms`}>
            {footer.terms}
          </Link>
          <Link className="footer-legal" href={`${prefix}/legal/cookies`}>
            {footer.cookies}
          </Link>
          <LanguageSwitch lang={lang} label="EN / ES" className="footer-lang-btn" />
        </div>
      </div>
    </footer>
  )
}
