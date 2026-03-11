'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export default function FinalCTA() {
  const t = useTranslations('cta')

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(245,166,35,0.07), transparent 70%), #07091A',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h2
          custom={0}
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight tracking-tight mb-4"
        >
          <span className="block text-white">{t('title')}</span>
          <span className="block text-gold">{t('title2')}</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          custom={0.12}
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          {t('sub')}
        </motion.p>

        {/* CTA button */}
        <motion.div
          custom={0.22}
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="mailto:contact@5000.live"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gold text-bg font-bold text-xl transition-all duration-300 hover:brightness-110 animate-pulse-glow hover:shadow-[0_0_60px_rgba(245,166,35,0.6)]"
          >
            {t('button')}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          custom={0.32}
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 text-sm text-muted/70"
        >
          {t('micro')}
        </motion.p>
      </div>
    </section>
  )
}
