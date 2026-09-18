import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"
import { OpenDrawerButton } from "@/components/omniview/open-drawer-button"

export function DivisionsSection({ divisions }: { divisions: SiteContent["divisions"] }) {
  return (
    <section className="block" id="growth">
      <div className="shell">
        <div className="section-top">
          <div>
            <Reveal as="div" className="eyebrow mono">
              {divisions.eyebrow}
            </Reveal>
            <Reveal
              as="h2"
              className="section-title display"
              dangerouslySetInnerHTML={{ __html: divisions.title }}
            />
          </div>
          <Reveal as="p" className="section-lede">
            {divisions.lede}
          </Reveal>
        </div>

        <div className="divisions">
          {divisions.items.map((item) => (
            <Reveal as="article" className="division" key={item.index}>
              <div>
                <div className="division-index mono">{item.index}</div>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <div className="division-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="division-footer">
                <span className="mono">{item.price}</span>
                <OpenDrawerButton className="division-cta open-drawer">{item.cta}</OpenDrawerButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
