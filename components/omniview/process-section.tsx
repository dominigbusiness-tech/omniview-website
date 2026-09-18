import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

export function ProcessSection({ process }: { process: SiteContent["process"] }) {
  return (
    <section className="block" id="process">
      <div className="shell">
        <div className="section-top">
          <div>
            <Reveal as="div" className="eyebrow mono">
              {process.eyebrow}
            </Reveal>
            <Reveal
              as="h2"
              className="section-title display"
              dangerouslySetInnerHTML={{ __html: process.title }}
            />
          </div>
          <Reveal as="p" className="section-lede">
            {process.lede}
          </Reveal>
        </div>

        <div className="process">
          {process.steps.map((step) => (
            <Reveal as="div" className="process-row" key={step.index}>
              <div className="mono">{step.index}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
