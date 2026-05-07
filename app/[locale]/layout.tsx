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

// ── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const canonicalUrl = `${BASE_URL}/${locale}`
  const isArabic = locale === 'ar'

  const title = isArabic
    ? '5000.live — تطبيق جوال أصيل في 4 أسابيع بـ $5,000 | iOS وAndroid | الإمارات دبي'
    : '5000.live — Native Mobile App in 4 Weeks for $5,000 | iOS & Android | UAE Dubai'

  const description = isArabic
    ? 'احصل على تطبيق جوال أصيل لـ iOS وAndroid مُبنى ومُطلق في 4 أسابيع بـ $5,000. ضمان استرداد كامل إذا تأخرنا. نخدم الإمارات ودبي والسعودية وقطر والكويت والخليج. React Native وFlutter.'
    : 'Get your custom native iOS & Android mobile app built and launched on the App Store and Google Play in 4 weeks for $5,000. Full refund if we miss the deadline. Serving UAE, Dubai, Saudi Arabia, Qatar, Kuwait & the Gulf region.'

  const keywords = isArabic
    ? [
        'تطوير تطبيقات الإمارات',
        'تطوير تطبيقات دبي',
        'تطبيق جوال 5000 دولار',
        'تطوير تطبيقات iOS Android',
        'تطوير تطبيقات السعودية',
        'تطوير تطبيقات الخليج',
        'تطبيق جوال 4 أسابيع',
        'تطوير تطبيقات بسعر ثابت',
        'MVP تطبيق جوال',
        'شركة تطوير تطبيقات',
        'React Native Flutter',
        'نشر تطبيق App Store Google Play',
        'تطوير تطبيقات قطر',
        'تطوير تطبيقات الكويت',
        'تطوير تطبيقات البحرين',
        'بناء تطبيق جوال سريع',
        'تطوير تطبيق جوال رخيص',
        'ضمان استرداد تطبيق',
        'تطبيق جوال للشركات الناشئة',
      ]
    : [
        'mobile app development UAE',
        'app development Dubai',
        'mobile app development $5000',
        'native iOS Android app development',
        'app development 4 weeks',
        'MVP mobile app Gulf',
        'affordable app development Saudi Arabia',
        'mobile app development agency Dubai',
        'React Native Flutter development',
        'App Store Google Play publishing',
        'mobile app development Qatar',
        'mobile app development Kuwait',
        'startup app development Middle East',
        'fixed price app development',
        'rapid mobile app development',
        'app development money back guarantee',
        'mobile app MVP launch',
        'custom mobile app UAE',
        'cheap app development agency',
        'how much does an app cost',
        'build an app in 4 weeks',
        'app development with refund guarantee',
      ]

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: isArabic
        ? 'أطلق تطبيقك في 4 أسابيع بـ $5,000 — 5000.live'
        : 'Go Live in 4 Weeks for $5,000 — 5000.live',
      description: isArabic
        ? 'تطبيق جوال أصيل. مبني. مطلق. مضمون.'
        : 'Your custom native mobile app. Built. Launched. Guaranteed.',
      url: canonicalUrl,
      siteName: '5000.live',
      type: 'website',
      locale: isArabic ? 'ar_AE' : 'en_US',
      images: [
        {
          url: `${BASE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? '5000.live — تطبيق جوال أصيل في 4 أسابيع بـ $5,000'
            : '5000.live — Native Mobile App in 4 Weeks for $5,000',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic
        ? 'أطلق تطبيقك في 4 أسابيع بـ $5,000 — 5000.live'
        : 'Go Live in 4 Weeks for $5,000 — 5000.live',
      description: isArabic
        ? 'تطبيق جوال أصيل. مبني. مطلق. مضمون.'
        : 'Your custom native mobile app. Built. Launched. Guaranteed.',
      images: [`${BASE_URL}/og.png`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en`,
        ar: `${BASE_URL}/ar`,
        'x-default': `${BASE_URL}/en`,
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
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/icon.svg`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/og.png`,
  description:
    'Native mobile app development in 4 weeks for $5,000. iOS & Android. Full refund guarantee. Serving UAE, Dubai, Saudi Arabia and the Gulf.',
  sameAs: ['https://wepioners.com'],
  foundingDate: '2024',
  knowsAbout: [
    'React Native',
    'Flutter',
    'iOS App Development',
    'Android App Development',
    'Mobile App Development',
    'UI/UX Design',
    'Firebase',
    'Node.js',
    'App Store Optimization',
    'Google Play Publishing',
    'Mobile MVP Development',
    'Mobile App for Startups',
  ],
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
  '@id': `${BASE_URL}/#website`,
  name: '5000.live',
  url: BASE_URL,
  description:
    'Native mobile app development in 4 weeks for $5,000. iOS & Android. Full refund guarantee.',
  publisher: { '@id': `${BASE_URL}/#organization` } as { '@id': string },
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/en`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#service`,
  name: '5000.live — Native Mobile App Development',
  alternateName: '5000 live app development',
  description:
    'Custom native iOS and Android mobile apps built and launched in 4 weeks for $5,000. Full refund if we miss the deadline. Serving UAE, Dubai, Saudi Arabia, Qatar, Kuwait and the Gulf region.',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  image: `${BASE_URL}/og.png`,
  priceRange: '$5,000',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Bank Transfer',
  areaServed: [
    { '@type': 'Country', 'name': 'United Arab Emirates' },
    { '@type': 'Country', 'name': 'Saudi Arabia' },
    { '@type': 'Country', 'name': 'Qatar' },
    { '@type': 'Country', 'name': 'Kuwait' },
    { '@type': 'Country', 'name': 'Bahrain' },
    { '@type': 'Country', 'name': 'Oman' },
    { '@type': 'Country', 'name': 'United Kingdom' },
    { '@type': 'Country', 'name': 'United States' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mobile App Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Native Mobile App MVP — $5,000',
        description:
          'Custom native iOS & Android app built in 4 weeks for a fixed price of $5,000. Includes UI/UX design, backend & API, App Store and Google Play publishing, APK delivery in week 3, and 2 weeks post-launch bug-fix support.',
        price: '5000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: BASE_URL,
        seller: { '@id': `${BASE_URL}/#organization` },
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          value: 4,
          unitCode: 'WEE',
        },
      },
    ],
  },
  sameAs: ['https://wepioners.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic'],
    url: 'https://wa.me/905346639145',
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get your mobile app built and launched in 4 weeks for $5,000',
  description:
    'A step-by-step process to get a custom native iOS & Android mobile app built and published on the App Store and Google Play in 4 weeks.',
  totalTime: 'P4W',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '5000',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'App idea or concept' },
    { '@type': 'HowToSupply', name: 'Apple Developer account (optional — we can guide you)' },
    { '@type': 'HowToSupply', name: 'Google Play Developer account (optional — we can guide you)' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'React Native or Flutter' },
    { '@type': 'HowToTool', name: 'Firebase or Node.js backend' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discovery & Specification (Day 1–2)',
      text: '30-minute free discovery call followed by a 1-hour specification session. We define your app together and confirm it fits the 4-week model.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Contract & Payment (Day 3)',
      text: 'Fixed-price contract signed. Secure payment of $5,000 processed. The 4-week clock starts.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'UI/UX Design (Week 1)',
      text: 'Every screen and wireframe is designed by our team. You review and approve before a single line of code is written.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Development Sprint (Weeks 2–3)',
      text: 'Core features are built, integrated, and tested in focused daily sprints. You receive progress updates throughout.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'APK Delivered (Week 3)',
      text: 'You receive the Android APK and test the real, working app on your own phone before the official launch.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'App Store & Google Play Submission (Week 4)',
      text: 'We submit to both the App Store and Google Play, handle review responses, and manage the full launch.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: "You're Live (End of Week 4)",
      text: 'Your app is live on both stores. Real users can download it. 2 weeks of post-launch bug-fix support included at no extra cost.',
    },
  ],
}

// Tell Next.js which locale paths to pre-render
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

function buildWebPageSchema(locale: string) {
  const isArabic = locale === 'ar'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}/${locale}#webpage`,
    url: `${BASE_URL}/${locale}`,
    name: isArabic
      ? '5000.live — تطبيق جوال أصيل في 4 أسابيع بـ $5,000 | الإمارات دبي'
      : '5000.live — Native Mobile App in 4 Weeks for $5,000 | UAE Dubai',
    description: isArabic
      ? 'خدمة تطوير تطبيقات جوال أصيلة لـ iOS وAndroid في 4 أسابيع بـ $5,000 مع ضمان استرداد كامل.'
      : 'Native mobile app development service for iOS & Android in 4 weeks for $5,000 with a full refund guarantee.',
    inLanguage: isArabic ? 'ar' : 'en',
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '5000.live',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: isArabic ? 'الرئيسية' : 'Home',
          item: `${BASE_URL}/${locale}`,
        },
      ],
    },
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
  const webPageSchema = buildWebPageSchema(locale)

  const jsonLdScripts = [
    organizationSchema,
    webSiteSchema,
    professionalServiceSchema,
    howToSchema,
    webPageSchema,
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
