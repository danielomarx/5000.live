'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const STEPS = [
  { key: '1', week: 'step1', color: 'border-cyan/40 bg-cyan/5', dot: 'bg-cyan' },
  { key: '2', week: 'step2', color: 'border-cyan/20 bg-cyan/5', dot: 'bg-cyan/60' },
  { key: '3', week: 'step3', color: 'border-gold/30 bg-gold/5', dot: 'bg-gold' },
  { key: '4', week: 'step4', color: 'border-gold/20 bg-gold/5', dot: 'bg-gold/70' },
  { key: '5', week: 'step5', color: 'border-gold/30 bg-gold/5', dot: 'bg-gold' },
  { key: '6', week: 'step6', color: 'border-white/10 bg-white/[0.03]', dot: 'bg-white/40' },
  { key: '7', week: 'step7', color: 'border-cyan/40 bg-cyan/5', dot: 'bg-cyan' },
] as const

export default function HowItWorks() {
  const t = useTranslations('process')

  return (
    <section id="how-it-works" className="section-padding bg-surface/20 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3">
            {t('tag')}
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {t('title')}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan via-gold to-cyan/20 rtl:left-auto rtl:right-[19px]" />

          <div className="space-y-5">
            {STEPS.map(({ key, week, color, dot }, i) => (
              <motion.div
                key={key}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-6 rtl:flex-row-reverse"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-4">
                  <div className={`w-10 h-10 rounded-full ${dot} border-2 border-bg flex items-center justify-center`}>
                    <span className="font-mono text-xs font-bold text-bg">{key}</span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 border ${color} rounded-xl px-6 py-5 hover:border-opacity-60 transition-colors`}
                >
                  <p className="font-mono text-xs text-muted mb-1 uppercase tracking-wider">
                    {t(`${week}Label` as never)}
                  </p>
                  <h3 className="font-display font-bold text-base text-white mb-1">
                    {t(`${week}Title` as never)}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {t(`${week}Desc` as never)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
