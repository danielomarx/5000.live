// Root layout — intentionally minimal.
// The [locale]/layout.tsx nested layout handles <html>, <body>, fonts, and metadata.
// This file is required by Next.js App Router but delegates everything to the locale layout.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
