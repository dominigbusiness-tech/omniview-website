import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { instrumentSans, instrumentSerif, jetbrainsMono } from '@/lib/fonts'
import { LOCALE_HEADER } from '@/lib/language'
import { DrawerProvider } from '@/components/drawer-provider'
import { ProjectDrawer } from '@/components/omniview/project-drawer'
import './omniview.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'OmniView — Build. Automate. Grow.',
    template: '%s · OmniView',
  },
  description:
    'OmniView connects digital presence, intelligent automation and growth services under one technology-driven brand.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f4f1',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const lang = headerList.get(LOCALE_HEADER) === 'es' ? 'es' : 'en'

  return (
    <html lang={lang} className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <DrawerProvider>
          {children}
          <ProjectDrawer lang={lang} />
        </DrawerProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
