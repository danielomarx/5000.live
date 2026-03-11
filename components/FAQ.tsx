'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Plus, Minus } from 'lucide-react'

const FADE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const FAQ_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8'] as const

export default function FAQ() {
  const t = useTranslations('faq')
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => setOpenKey((k) => (k === key ? null : key))

  return (
    <section id="faq" className="section-padding bg-bg relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3">
            {t('tag')}
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            {t('title')}
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          {FAQ_KEYS.map((key) => {
            const isOpen = openKey === key
            return (
              <div
                key={key}
                className={`glass rounded-xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-gold/25' : 'hover:border-white/12'}`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(key)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-semibold text-base leading-snug transition-colors ${isOpen ? 'text-gold' : 'text-white'}`}
                  >
                    {t(`q${key}` as never)}
                  </span>
                  <span className={`flex-shrink-0 transition-colors ${isOpen ? 'text-gold' : 'text-muted'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Answer — AnimatePresence for smooth height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted text-sm leading-relaxed">
                        {t(`a${key}` as never)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
