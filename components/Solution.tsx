'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { X, Check } from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const ROWS = ['row1', 'row2', 'row3', 'row4', 'row5'] as const

export default function Solution() {
  const t = useTranslations('solution')

  return (
    <section id="solution" className="section-padding bg-surface/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-4"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3">
            {t('tag')}
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          {/* Header row */}
          <div className="grid grid-cols-2 bg-surface">
            <div className="px-6 py-4 text-muted font-bold text-sm tracking-wide flex items-center gap-2 border-r border-white/[0.06]">
              <X className="w-4 h-4 text-red-400" />
              {t('oldWayTitle')}
            </div>
            <div className="px-6 py-4 text-gold font-bold text-sm tracking-wide flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan" />
              {t('newWayTitle')}
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-bg/60' : 'bg-surface/40'} hover:bg-surface/70 transition-colors`}
            >
              <div className="px-6 py-5 text-muted text-sm border-r border-white/[0.04] flex items-center">
                {t(`${row}Old`)}
              </div>
              <div className="px-6 py-5 text-white font-semibold text-sm flex items-center">
                <span className="text-gold font-mono">{t(`${row}New`)}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-muted text-base mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t('note')}
        </motion.p>
      </div>
    </section>
  )
}
