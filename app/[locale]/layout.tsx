import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
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

const BASE_URL = 'https://5000.live'

// ── Metadata (locale-aware for canonical & AI/Google) ────────────────────────
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const canonicalUrl = `${BASE_URL}/${locale}`
  const title =
    '5000.live — Native Mobile App in 4 Weeks for $5,000 | iOS & Android | UAE Dubai'
  const description =
    'Get your custom native iOS & Android mobile app built and launched on the App Store and Google Play in 4 weeks for $5,000. Full refund if we miss the deadline. Serving UAE, Dubai, Saudi Arabia, and the Gulf region.'

  return {
    title,
    description,
    keywords: [
      'mobile app development UAE',
      'app development Dubai',
      'native iOS Android app',
      'mobile app $5000',
      'app MVP Gulf',
      'affordable app development Saudi Arabia',
      'تطوير تطبيقات الإمارات',
      'تطبيق جوال 5000 دولار',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: 'Go Live in 4 Weeks for $5,000 — 5000.live',
      description: 'Your custom native mobile app. Built. Launched. Guaranteed.',
      url: canonicalUrl,
      siteName: '5000.live',
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      images: [
        {
          url: `${BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: '5000.live — Native Mobile App in 4 Weeks for $5,000',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Go Live in 4 Weeks for $5,000 — 5000.live',
      description: 'Your custom native mobile app. Built. Launched. Guaranteed.',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en`,
        ar: `${BASE_URL}/ar`,
      },
    },
    manifest: '/manifest.json',
    icons: { icon: '/icon.svg' },
    other: {
      'theme-color': '#07091A',
    },
  }
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: '5000.live',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    'Native mobile app development in 4 weeks for $5,000. iOS & Android. Full refund guarantee.',
  sameAs: ['https://wepioners.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic'],
    areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IQ', 'GB', 'US'],
    url: 'https://wa.me/905346639145',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '5000.live',
  url: BASE_URL,
  description:
    'Native mobile app development in 4 weeks for $5,000. iOS & Android. Full refund guarantee.',
  publisher: { '@id': `${BASE_URL}/#organization` } as { '@id': string },
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'ContactAction',
    target: 'https://wa.me/905346639145',
    'query-input': 'required name=subject',
  },
}

const serviceSchema = {
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
  url: BASE_URL,
}

// Tell Next.js which locale paths to pre-render (fixes 404 on /en and /ar)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function buildFaqSchema(faq: Record<string, string> | undefined) {
  if (!faq) return null
  const mainEntity = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    const q = faq[`q${i}`]
    const a = faq[`a${i}`]
    if (!q || !a) return null
    return {
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }
  }).filter(Boolean)
  if (mainEntity.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
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
  setRequestLocale(locale)

  const messages = await getMessages()
  const isRtl = locale === 'ar'

  const faqSchema = buildFaqSchema(messages?.faq as Record<string, string> | undefined)
  const jsonLdScripts = [
    organizationSchema,
    webSiteSchema,
    serviceSchema,
    ...(faqSchema ? [faqSchema] : []),
  ]

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        {jsonLdScripts.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
