import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getTermsContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Términos de Servicio — OmniView",
}

export default function Page() {
  return <LegalPage lang="es" data={getTermsContent("es")} path="/legal/terms" />
}
