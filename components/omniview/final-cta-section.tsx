import type { SiteContent } from "@/lib/content/types"
import { OpenDrawerButton } from "@/components/omniview/open-drawer-button"

export function FinalCtaSection({ finalCta }: { finalCta: SiteContent["finalCta"] }) {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <div className="mono" style={{ color: "#8d8d8d" }}>
          {finalCta.kicker}
        </div>
        <h2>{finalCta.title}</h2>
        <p>{finalCta.body}</p>
        <div className="final-cta-actions">
          <OpenDrawerButton className="pill open-drawer">{finalCta.kicker}</OpenDrawerButton>
        </div>
      </div>
    </section>
  )
}
