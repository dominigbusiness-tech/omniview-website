import type { Lang } from "@/lib/language"
import { getContent } from "@/lib/content"
import { SiteHeader } from "@/components/omniview/site-header"
import { HeroSection } from "@/components/omniview/hero-section"
import { ProblemSection } from "@/components/omniview/problem-section"
import { DivisionsSection } from "@/components/omniview/divisions-section"
import { PhilosophySection } from "@/components/omniview/philosophy-section"
import { SignalSection } from "@/components/omniview/signal-section"
import { AiSection } from "@/components/omniview/ai-section"
import { PartnersSection } from "@/components/omniview/partners-section"
import { ProcessSection } from "@/components/omniview/process-section"
import { FinalCtaSection } from "@/components/omniview/final-cta-section"
import { SiteFooter } from "@/components/omniview/site-footer"
import { SparkCanvas } from "@/components/omniview/spark-canvas"

export function HomePage({ lang }: { lang: Lang }) {
  const content = getContent(lang)

  return (
    <>
      <SiteHeader lang={lang} nav={content.nav} />
      <main id="top">
        <HeroSection hero={content.hero} />
        <ProblemSection problem={content.problem} />
        <DivisionsSection divisions={content.divisions} />
        <PhilosophySection philosophy={content.philosophy} />
        <SignalSection signal={content.signal} />
        <AiSection ai={content.ai} />
        <PartnersSection partners={content.partners} />
        <ProcessSection process={content.process} />
        <FinalCtaSection finalCta={content.finalCta} />
      </main>
      <SiteFooter footer={content.footer} lang={lang} />
      <SparkCanvas />
    </>
  )
}
