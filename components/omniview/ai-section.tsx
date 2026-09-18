import Image from "next/image"
import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

export function AiSection({ ai }: { ai: SiteContent["ai"] }) {
  return (
    <section className="block ai-section" id="ai">
      <div className="shell ai-wrap">
        <div>
          <Reveal as="div" className="eyebrow mono" style={{ color: "#9c9c9c" }}>
            {ai.eyebrow}
          </Reveal>
          <Reveal as="h2" className="section-title display">
            {ai.title}
          </Reveal>
          <Reveal as="p" className="section-lede">
            {ai.lede}
          </Reveal>

          <Reveal as="div" className="ai-price">
            <div>
              <div className="mono" style={{ color: "#8f8f8f" }}>
                {ai.priceLabel}
              </div>
              <strong>{ai.price}</strong>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" className="ai-system">
          <div className="pulse-ring r1" />
          <div className="pulse-ring r2" />
          {ai.nodes.map((node) => (
            <div className={`ai-node ${node.id}`} key={node.id}>
              {node.label}
            </div>
          ))}
          <Image
            className="center-iso"
            src="/omniview-isotype.png"
            alt="OmniView AI core"
            width={120}
            height={120}
          />
        </Reveal>
      </div>
    </section>
  )
}
