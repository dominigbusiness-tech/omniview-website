import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getCookiesContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Cookie Policy — OmniView",
}

export default function Page() {
  return <LegalPage lang="en" data={getCookiesContent("en")} path="/legal/cookies" />
}
