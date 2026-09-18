export interface LegalSection {
  id: string
  heading: string
  bodyHtml: string
}

export interface LegalPageData {
  kicker: string
  title: string
  intro: string
  meta: string
  tocLabel: string
  homeLabel: string
  sections: LegalSection[]
}

export interface LegalContent {
  en: LegalPageData
  es: LegalPageData
}
