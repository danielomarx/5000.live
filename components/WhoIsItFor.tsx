'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { CheckCircle2, XCircle } from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const GOOD_KEYS = ['good1', 'good2', 'good3', 'good4', 'good5', 'good6'] as const
const BAD_KEYS = ['bad1', 'bad2', 'bad3', 'bad4'] as const

export default function WhoIsItFor() {
  const t = useTranslations('audience')

  return (
    <section id="audience" className="section-padding bg-bg relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3">
            {t('tag')}
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Good column */}
          <motion.div
            variants={FADE}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="glass rounded-2xl p-8 border-cyan/20 hover:border-cyan/30 transition-colors"
          >
            <h3 className="font-display font-bold text-xl text-cyan mb-6">
              {t('goodTitle')}
            </h3>
            <ul className="space-y-4">
              {GOOD_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm leading-relaxed">{t(key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bad column */}
          <motion.div
            variants={FADE}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8 border-red-500/10 hover:border-red-500/20 transition-colors"
          >
            <h3 className="font-display font-bold text-xl text-red-400/80 mb-6">
              {t('badTitle')}
            </h3>
            <ul className="space-y-4">
              {BAD_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-muted text-sm leading-relaxed">{t(key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
