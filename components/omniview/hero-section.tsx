import type { SiteContent } from "@/lib/content/types"
import { Reveal } from "@/components/omniview/reveal"

export function HeroSection({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="hero">
      <div className="hero-grid-lines" />

      <div className="shell">
        <div className="hero-head">
          <Reveal as="div" className="eyebrow mono">
            {hero.eyebrow}
          </Reveal>
          <h1 className="display">
            {hero.words.map((word, i) => (
              <Reveal
                as="span"
                key={word}
                className={`word ${i === 1 ? "underline" : ""}`.trim()}
                delay={i * 90}
              >
                {word}
              </Reveal>
            ))}
          </h1>

          <Reveal as="div" className="hero-bottom">
            <p className="hero-copy">{hero.copy}</p>
          </Reveal>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          <div className="ticker-group">
            {hero.ticker.map((item) => (
              <span key={`a-${item}`}>{item}</span>
            ))}
          </div>
          <div className="ticker-group" aria-hidden="true">
            {hero.ticker.map((item) => (
              <span key={`b-${item}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
