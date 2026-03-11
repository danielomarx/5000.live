'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react'

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const TRUST_KEYS = ['badge1', 'badge2', 'badge3', 'badge4'] as const

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ── Background gradient mesh ──────────────────────────────────── */}
      <div className="absolute inset-0 bg-bg" />
      {/* Radial blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#0A1628] blur-[120px] opacity-80" />
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan/[0.04] blur-[80px]" />
      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0 opacity-100" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Live badge */}
        <motion.div
          custom={0}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          {t('badge')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.1}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="font-display font-black leading-[0.95] tracking-tight mb-8"
        >
          <span className="block text-[clamp(48px,8vw,96px)] text-white">
            {t('headlineLine1')}
          </span>
          <span className="block text-[clamp(48px,8vw,96px)]">
            <span className="text-white">{t('for')} </span>
            <span className="font-mono text-gold">$5,000.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.25}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="text-lg sm:text-xl text-muted max-w-2xl mb-4 leading-relaxed"
        >
          {t('sub')}
        </motion.p>

        <motion.p
          custom={0.3}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="text-sm text-muted/70 max-w-xl mb-10 leading-relaxed"
        >
          {t('micro')}
        </motion.p>

        {/* Trust badges */}
        <motion.div
          custom={0.4}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-3 mb-10"
        >
          {TRUST_KEYS.map((key) => (
            <div
              key={key}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
              {t(key)}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          custom={0.55}
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-bg font-bold text-lg transition-all duration-300 hover:brightness-110 glow-gold glow-gold-hover animate-pulse-glow"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm underline underline-offset-4 decoration-muted/40 hover:decoration-white/40"
          >
            {t('secondary')}
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
