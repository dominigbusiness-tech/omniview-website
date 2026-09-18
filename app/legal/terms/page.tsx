import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getTermsContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Terms of Service — OmniView",
}

export default function Page() {
  return <LegalPage lang="en" data={getTermsContent("en")} path="/legal/terms" />
}
