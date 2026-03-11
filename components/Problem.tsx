'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const SECTION_FADE = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const CARDS = [
  { key: '1', emoji: '💸' },
  { key: '2', emoji: '👻' },
  { key: '3', emoji: '⏳' },
  { key: '4', emoji: '😰' },
] as const

export default function Problem() {
  const t = useTranslations('problem')

  return (
    <section id="problem" className="section-padding bg-bg relative">
      {/* Subtle top separator gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={SECTION_FADE}
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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map(({ key, emoji }, i) => (
            <motion.div
              key={key}
              variants={SECTION_FADE}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
              }}
              className="glass rounded-2xl p-8 cursor-default transition-colors hover:border-gold/20"
            >
              <span className="text-4xl mb-5 block" role="img" aria-hidden>
                {emoji}
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-3 leading-snug">
                {t(`card${key}Title` as `card${typeof key}Title`)}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t(`card${key}Desc` as `card${typeof key}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom hook */}
        <motion.p
          variants={SECTION_FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-xl font-semibold text-white/70 mt-14"
        >
          {t('bottom')}
        </motion.p>
      </div>
    </section>
  )
}
