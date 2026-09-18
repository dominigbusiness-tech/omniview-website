import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

export function PartnersSection({ partners }: { partners: SiteContent["partners"] }) {
  return (
    <section className="block" id="partners">
      <div className="shell">
        <div className="section-top">
          <div>
            <Reveal as="div" className="eyebrow mono">
              {partners.eyebrow}
            </Reveal>
            <Reveal
              as="h2"
              className="section-title display"
              dangerouslySetInnerHTML={{ __html: partners.title }}
            />
          </div>
          <Reveal as="p" className="section-lede">
            {partners.lede}
          </Reveal>
        </div>

        <div className="partners-grid">
          {partners.items.map((item) => (
            <Reveal as="div" className="partner" key={item.name}>
              <strong>{item.name}</strong>
              <small>{item.body}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
