'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    // Replace current locale prefix in pathname
    const stripped = pathname.replace(new RegExp(`^/${locale}`), '') || '/'
    router.push(`/${newLocale}${stripped}`)
  }

  const navLinks = [
    { key: 'howItWorks', href: '#how-it-works', external: false },
    { key: 'whatsIncluded', href: '#included', external: false },
    { key: 'faq', href: '#faq', external: false },
    { key: 'contact', href: 'https://wa.me/905346639145', external: true },
  ] as const

  return (
    <nav
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-black text-xl tracking-tight select-none"
            aria-label="5000.live home"
          >
            5000<span className="text-gold">.live</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ key, href, external }) => (
              <li key={key}>
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center text-sm font-semibold gap-1">
              {(['en', 'ar'] as const).map((lang, i) => (
                <span key={lang} className="flex items-center gap-1">
                  {i > 0 && <span className="text-white/20 select-none">|</span>}
                  <button
                    onClick={() => switchLocale(lang)}
                    className={clsx(
                      'px-2 py-1 rounded transition-colors duration-200',
                      locale === lang
                        ? 'text-gold'
                        : 'text-muted hover:text-white'
                    )}
                  >
                    {lang.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/905346639145"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-bg font-bold text-sm transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(245,166,35,0.25)] hover:shadow-[0_0_35px_rgba(245,166,35,0.45)]"
            >
              {t('cta')}
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-muted hover:text-white transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06]">
            {navLinks.map(({ key, href, external }) => (
              <a
                key={key}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm text-muted hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            ))}
            <a
              href="https://wa.me/905346639145"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-bg font-bold text-sm"
            >
              {t('cta')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
