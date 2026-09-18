import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

export function ProblemSection({ problem }: { problem: SiteContent["problem"] }) {
  return (
    <section className="problem-section" id="problem">
      <div className="shell">
        <div className="problem-head">
          <Reveal as="h2" className="" dangerouslySetInnerHTML={{ __html: problem.heading }} />
          <Reveal as="p" className="problem-intro">
            {problem.intro}
          </Reveal>
        </div>

        <div className="problem-grid">
          {problem.cards.map((card) => (
            <Reveal as="article" className="problem-card" key={card.index}>
              <div>
                <div className="problem-index mono">{card.index}</div>
                <h3>{card.title}</h3>
              </div>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="problem-close">
          <p>{problem.close}</p>
        </Reveal>
      </div>
    </section>
  )
}
