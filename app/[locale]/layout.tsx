import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google'
import { notFound } from 'next/navigation'
import '@/app/globals.css'

const locales = ['en', 'ar']

// ── Fonts ──────────────────────────────────────────────────────────────────
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

// ── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: '5000.live — Native Mobile App in 4 Weeks for $5,000 | iOS & Android',
  description:
    'Get your custom native iOS & Android mobile app built and launched on the App Store and Google Play in 4 weeks for $5,000. Full refund if we miss the deadline. Serving UAE, Dubai, Saudi Arabia, and the Gulf region.',
  keywords:
    'mobile app development UAE, app development Dubai, native iOS Android $5000, mobile app MVP Gulf, affordable app development Saudi Arabia, تطوير تطبيقات الإمارات',
  openGraph: {
    title: 'Go Live in 4 Weeks for $5,000 — 5000.live',
    description: 'Your custom native mobile app. Built. Launched. Guaranteed.',
    url: 'https://5000.live',
    siteName: '5000.live',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Live in 4 Weeks for $5,000 — 5000.live',
  },
  alternates: {
    canonical: 'https://5000.live',
    languages: {
      en: 'https://5000.live/en',
      ar: 'https://5000.live/ar',
    },
  },
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '5000.live — Native Mobile App Development',
  description:
    'Custom native iOS and Android mobile apps. 4 weeks. $5,000. Full refund guarantee.',
  provider: {
    '@type': 'Organization',
    name: 'We Pioners LTD',
    url: 'https://wepioners.com',
  },
  offers: {
    '@type': 'Offer',
    price: '5000',
    priceCurrency: 'USD',
  },
  areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IQ', 'GB', 'US'],
  url: 'https://5000.live',
}

// ── Layout ─────────────────────────────────────────────────────────────────
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()
  const isRtl = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-body bg-bg text-white antialiased ${isRtl ? 'font-[var(--font-arabic)]' : ''}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
