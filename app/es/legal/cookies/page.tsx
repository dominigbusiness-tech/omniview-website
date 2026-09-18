import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getCookiesContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Política de Cookies — OmniView",
}

export default function Page() {
  return <LegalPage lang="es" data={getCookiesContent("es")} path="/legal/cookies" />
}
