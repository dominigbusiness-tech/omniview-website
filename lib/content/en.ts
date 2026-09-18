import type { SiteContent } from "./types"

export const en: SiteContent = {
  nav: {
    growth: "Growth",
    ai: "AI",
    partners: "Partners",
    work: "Work",
    about: "About",
    langLabel: "EN / ES",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Digital systems for modern businesses",
    words: ["Build.", "Automate.", "Grow."],
    copy: "Digital experiences, growth systems and AI automation for modern businesses.",
    ticker: ["Web Design", "AI Systems", "Automation", "Landing Pages", "Growth", "SEO", "Paid Media", "Branding"],
  },
  problem: {
    heading:
      "Your business may be growing.<br>But it may also be losing opportunities without you noticing.",
    intro:
      "A digital presence that doesn't build trust, processes that rely too heavily on manual work, and tools that don't work together create friction exactly where your business needs to move forward.",
    cards: [
      {
        index: "01 — PRESENCE",
        title: "They find you, but they don't always choose you.",
        body:
          "If your digital presence doesn't reflect the quality of your business, a potential client may assume your competitor is the better option before ever speaking with you.",
      },
      {
        index: "02 — OPERATIONS",
        title: "Your team is still doing work a system could handle.",
        body:
          "Answering inquiries, moving information, coordinating schedules, following up and repeating manual tasks consumes time that could be spent selling, serving or growing.",
      },
      {
        index: "03 — GROWTH",
        title: "You have tools. But not necessarily a system.",
        body:
          "Web, WhatsApp, CRM, campaigns, calendars and separate providers can work individually and still create a fragmented experience for your team and your customers.",
      },
    ],
    close: "When these pieces don't work together, growth costs more than it should.",
  },
  divisions: {
    eyebrow: "One company. Three directions.",
    title: "One ecosystem.<br>Built to move.",
    lede: "OmniView connects digital presence, intelligent automation and growth services under one technology-driven brand.",
    items: [
      {
        index: "01 — OMNIVIEW GROWTH",
        name: "Growth",
        body: "Websites and landing pages designed to turn attention into business.",
        tags: ["Websites", "Landing Pages", "UX / UI"],
        price: "Starting at $2,000",
        cta: "Build my website ↗",
      },
      {
        index: "02 — OMNIVIEW AI",
        name: "AI",
        body: "Custom AI systems that automate repetitive work and connect business operations.",
        tags: ["AI Agents", "Automation", "Integrations"],
        price: "Starting at $5,000",
        cta: "Automate my business ↗",
      },
      {
        index: "03 — OMNIVIEW PARTNERS",
        name: "Partners",
        body: "Growth services, selected specialists and education that expand what your business can do next.",
        tags: ["Ads", "SEO", "Funnels", "Branding"],
        price: "Built around your next move",
        cta: "Grow my business ↗",
      },
    ],
  },
  philosophy: {
    kicker: "WHAT WE'LL DO FOR YOU",
    rotating: [
      "We identify what's holding your business back.",
      "We build the solution your business actually needs.",
      "We put it to work so you can grow.",
    ],
    copy: "We integrate design, technology and artificial intelligence to create solutions that work together, reduce friction and help your business move forward with greater clarity.",
  },
  signal: {
    eyebrow: "What the system is designed to improve",
    title: "Less friction. More leverage.",
    rowOne: [
      {
        body: "We design complete websites and landing pages, from structure and design to domain, hosting and launch.",
        tag: "GROWTH / WEB",
      },
      {
        body: "We build custom AI agents that can respond, qualify leads, schedule appointments and execute tasks.",
        tag: "AI / AGENTS",
      },
      {
        body: "We connect WhatsApp, calendars, CRM, email and other tools so they operate as one system.",
        tag: "AI / INTEGRATIONS",
      },
      {
        body: "We automate repetitive processes to reduce manual work across your operation.",
        tag: "AI / AUTOMATION",
      },
      {
        body: "We build funnels designed to turn traffic and opportunities into measurable commercial actions.",
        tag: "PARTNERS / FUNNELS",
      },
      {
        body: "We manage Meta Ads and Google Ads campaigns to attract qualified demand to your business.",
        tag: "PARTNERS / ADS",
      },
    ],
    rowTwo: [
      {
        body: "We work on SEO to improve your company's visibility in searches that matter to your business.",
        tag: "PARTNERS / SEO",
      },
      {
        body: "We develop visual identity and branding so your business has a coherent and professional presence.",
        tag: "PARTNERS / BRANDING",
      },
      {
        body: "We design bilingual systems in English and Spanish for businesses operating in the United States.",
        tag: "US / BILINGUAL",
      },
      {
        body: "We analyze your business to identify processes that can become automations or AI agents.",
        tag: "AI / DIAGNOSTIC",
      },
      {
        body: "We can build custom solutions when your business needs something that does not exist as a standard product.",
        tag: "OMNIVIEW / CUSTOM",
      },
      {
        body: "We bring design, automation, marketing and technology together so you do not need multiple disconnected providers.",
        tag: "OMNIVIEW / SYSTEM",
      },
    ],
  },
  ai: {
    eyebrow: "OMNIVIEW AI",
    title: "Your business shouldn't run manually.",
    lede: "We design custom AI systems around real business processes — not around a tool. The system can answer, qualify, schedule, route, update, notify and coordinate across the apps your team already uses.",
    priceLabel: "Custom AI Systems",
    price: "From $5,000",
    nodes: [
      { id: "n1", label: "LEADS" },
      { id: "n2", label: "CRM / CALENDAR" },
      { id: "n3", label: "SMS / EMAIL" },
      { id: "n4", label: "OPERATIONS" },
      { id: "n5", label: "BUSINESS LOGIC" },
    ],
  },
  partners: {
    eyebrow: "OMNIVIEW PARTNERS",
    title: "Growth doesn't stop<br>at the website.",
    lede: "Partners extends the system with acquisition, positioning and education — selected according to what the business actually needs next.",
    items: [
      { name: "Funnels", body: "Conversion architecture and campaign journeys." },
      { name: "Meta Ads", body: "Paid acquisition for qualified demand." },
      { name: "Google Ads", body: "Capture high-intent searches." },
      { name: "SEO", body: "Build compounding organic visibility." },
      { name: "Branding", body: "Sharper identity and market positioning." },
      { name: "Education", body: "Selected courses and practical learning." },
      { name: "Affiliates", body: "Curated products that complement the ecosystem." },
      { name: "Strategy", body: "A clear next move when the problem is not obvious." },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From problem<br>to operating system.",
    lede: "A simple process designed to keep the work focused on the business outcome, not the number of tools involved.",
    steps: [
      { index: "01", title: "Discover", body: "Map the problem, context and commercial objective." },
      { index: "02", title: "Design", body: "Define the experience, architecture and boundaries." },
      { index: "03", title: "Build", body: "Create the website, workflow or AI system." },
      { index: "04", title: "Integrate", body: "Connect the tools and validate real scenarios." },
      { index: "05", title: "Grow", body: "Optimize the system and add the next layer when it creates value." },
    ],
  },
  finalCta: {
    kicker: "READY FOR THE NEXT MOVE?",
    title: "Ready to stop operating like it's yesterday?",
    body: "Tell us what's holding your business back. We'll help you identify what to build, automate or improve.",
  },
  footer: {
    tagline: "Build. Automate. Grow.",
    solutions: "Solutions",
    solutionsLinks: [
      { label: "Growth", href: "#growth" },
      { label: "AI", href: "#ai" },
      { label: "Partners", href: "#partners" },
      { label: "How we work", href: "#process" },
    ],
    company: "Company",
    aboutLabel: "About",
    startProject: "Start a Project",
    contactLabel: "Contact",
    connect: "Connect",
    emailLabel: "Email ↗",
    copyright: "© 2026 OmniView. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
  },
  drawer: {
    title: "What should we build?",
    intro: "Tell us about your business and what you need. We'll get back to you shortly.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+1 (555) 000-0000",
    companyLabel: "Company (optional)",
    companyPlaceholder: "Your company",
    serviceLabel: "What do you need?",
    serviceOptions: ["OmniView Growth — Website / Landing", "OmniView AI — AI System / Automation", "OmniView Partners — Growth / Marketing", "Not sure yet"],
    budgetLabel: "Approximate budget",
    budgetOptions: ["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"],
    descriptionLabel: "Tell us about the project",
    descriptionPlaceholder: "What are you trying to build or improve?",
    privacyNoteBefore: "By submitting, you agree to our",
    privacyLinkLabel: "Privacy Policy",
    privacyNoteAfter: ". We only use this information to respond to your request.",
    submit: "Send ↗",
    sending: "Sending…",
  successTitle: "Request submitted.",
  successBody: "Thank you. We\u2019ve received your information and will review it before contacting you.",
  error: "Something went wrong sending your request. Please try again.",
    retry: "Try again ↗",
    validationError: "Please complete the required fields before submitting.",
    close: "Close",
  },
  legal: {
    backLink: "← Back to OmniView",
    langSwitchLabel: "EN / ES",
  },
}
