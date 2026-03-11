'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ShieldCheck } from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Guarantee() {
  const t = useTranslations('guarantee')

  return (
    <section
      id="guarantee"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,166,35,0.05), transparent), #07091A',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Tag */}
        <motion.p
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-gold mb-6"
        >
          {t('tag')}
        </motion.p>

        {/* Shield icon */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full" />
            <ShieldCheck
              className="relative w-20 h-20 text-gold"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight tracking-tight mb-6"
        >
          <span className="block text-white">{t('title')}</span>
          <span className="block text-gold">{t('title2')}</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {t('body')}
        </motion.p>

        {/* Badges */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {(['badge1', 'badge2', 'badge3'] as const).map((key) => (
            <span
              key={key}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/25 text-gold font-semibold text-sm"
            >
              {t(key)}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
