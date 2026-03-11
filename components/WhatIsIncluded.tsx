'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  Smartphone,
  Bot,
  Palette,
  Wrench,
  Rocket,
  Package,
  Bug,
  BadgeDollarSign,
} from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const CARDS = [
  { key: '1', Icon: Smartphone, color: 'text-cyan' },
  { key: '2', Icon: Bot, color: 'text-cyan' },
  { key: '3', Icon: Palette, color: 'text-gold' },
  { key: '4', Icon: Wrench, color: 'text-gold' },
  { key: '5', Icon: Rocket, color: 'text-cyan' },
  { key: '6', Icon: Package, color: 'text-gold' },
  { key: '7', Icon: Bug, color: 'text-muted' },
  { key: '8', Icon: BadgeDollarSign, color: 'text-gold' },
] as const

export default function WhatIsIncluded() {
  const t = useTranslations('included')

  return (
    <section id="included" className="section-padding bg-bg relative">
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map(({ key, Icon, color }, i) => (
            <motion.div
              key={key}
              variants={FADE}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
              }}
              className="glass rounded-2xl p-6 hover:border-white/[0.14] transition-colors cursor-default"
            >
              <div className={`mb-4 ${color}`}>
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                {t(`card${key}Title` as never)}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {t(`card${key}Desc` as never)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="inline-block px-6 py-3 rounded-full bg-cyan/[0.08] border border-cyan/20 text-cyan/90 text-sm font-medium">
            {t('note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
