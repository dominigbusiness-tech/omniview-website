export interface SiteContent {
  nav: {
    growth: string
    ai: string
    partners: string
    work: string
    about: string
    langLabel: string
    menuOpen: string
    menuClose: string
  }
  hero: {
    eyebrow: string
    words: [string, string, string]
    copy: string
    ticker: string[]
  }
  problem: {
    heading: string
    intro: string
    cards: { index: string; title: string; body: string }[]
    close: string
  }
  divisions: {
    eyebrow: string
    title: string
    lede: string
    items: {
      index: string
      name: string
      body: string
      tags: string[]
      price: string
      cta: string
    }[]
  }
  philosophy: {
    kicker: string
    rotating: [string, string, string]
    copy: string
  }
  signal: {
    eyebrow: string
    title: string
    rowOne: { body: string; tag: string }[]
    rowTwo: { body: string; tag: string }[]
  }
  ai: {
    eyebrow: string
    title: string
    lede: string
    priceLabel: string
    price: string
    nodes: { id: string; label: string }[]
  }
  partners: {
    eyebrow: string
    title: string
    lede: string
    items: { name: string; body: string }[]
  }
  process: {
    eyebrow: string
    title: string
    lede: string
    steps: { index: string; title: string; body: string }[]
  }
  finalCta: {
    kicker: string
    title: string
    body: string
  }
  footer: {
    tagline: string
    solutions: string
    solutionsLinks: { label: string; href: string }[]
    company: string
    aboutLabel: string
    startProject: string
    contactLabel: string
    connect: string
    emailLabel: string
    copyright: string
    privacy: string
    terms: string
    cookies: string
  }
  drawer: {
    title: string
    intro: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    serviceLabel: string
    serviceOptions: string[]
    budgetLabel: string
    budgetOptions: string[]
    descriptionLabel: string
    descriptionPlaceholder: string
    privacyNoteBefore: string
    privacyLinkLabel: string
    privacyNoteAfter: string
    submit: string
    sending: string
    successTitle: string
    successBody: string
    error: string
    retry: string
    validationError: string
    close: string
  }
  legal: {
    backLink: string
    langSwitchLabel: string
  }
}
