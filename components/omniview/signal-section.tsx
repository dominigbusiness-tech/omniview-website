import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

function SignalGroup({
  items,
  duplicate = false,
}: {
  items: SiteContent["signal"]["rowOne"]
  duplicate?: boolean
}) {
  return (
    <div className="signal-row-group" aria-hidden={duplicate || undefined}>
      {items.map((item, i) => (
        <div className="signal-card" key={`${duplicate ? "duplicate" : "original"}-${item.tag}-${i}`}>
          <p>{item.body}</p>
          <div className="mono">{item.tag}</div>
        </div>
      ))}
    </div>
  )
}

function SignalRow({ items, reverse }: { items: SiteContent["signal"]["rowOne"]; reverse?: boolean }) {
  return (
    <div className="signal-row-wrap">
      <div className={`signal-row ${reverse ? "reverse" : ""}`.trim()}>
        <SignalGroup items={items} />
        <SignalGroup items={items} duplicate />
      </div>
    </div>
  )
}

export function SignalSection({ signal }: { signal: SiteContent["signal"] }) {
  return (
    <section className="block signal-section" id="work">
      <div className="signal-title shell">
        <Reveal as="div" className="eyebrow mono">
          {signal.eyebrow}
        </Reveal>
        <Reveal as="h2">{signal.title}</Reveal>
      </div>

      <SignalRow items={signal.rowOne} />
      <SignalRow items={signal.rowTwo} reverse />
    </section>
  )
}
