import type { Metadata } from "next"
import { LegalPage } from "@/components/omniview/legal-page"
import { getPrivacyContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: "Privacy Policy — OmniView",
}

export default function Page() {
  return <LegalPage lang="en" data={getPrivacyContent("en")} path="/legal/privacy" />
}
