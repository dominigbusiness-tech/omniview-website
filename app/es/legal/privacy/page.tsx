import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getPrivacyContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Política de Privacidad — OmniView",
}

export default function Page() {
  return <LegalPage lang="es" data={getPrivacyContent("es")} path="/legal/privacy" />
}
