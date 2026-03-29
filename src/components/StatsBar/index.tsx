'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

type StatItem = { num: string; label: string; colour: string; numericVal?: number; suffix?: string }

const stats: StatItem[] = [
  { num: '7', label: 'Floors', colour: '#ffffff', numericVal: 7 },
  { num: '48', label: 'Rooms', colour: '#ffffff', numericVal: 48 },
  { num: '180', label: 'Sea View', colour: '#7dd3fc', numericVal: 180, suffix: '°' },
  { num: '5', label: 'Rating', colour: '#d4af37', numericVal: 5, suffix: '★' },
]

function AnimatedStat({ item, index }: { item: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const { count } = useCountUp(item.numericVal ?? 0, 1800)

  return (
    <motion.div
      ref={ref}
      className="flex-[1_1_120px] border-r border-white/[0.07] px-6 py-10 text-center last:border-r-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="font-cormorant mb-[0.3rem] text-[3rem] leading-none font-light"
        style={{ color: item.colour }}
      >
        {item.numericVal ? (inView ? count : 0) : item.num}
        {item.suffix && inView ? item.suffix : ''}
      </div>
      <div className="text-[0.6rem] font-bold tracking-[0.22em] text-white/[0.5] uppercase">
        {item.label}
      </div>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-navy border-gold/[0.15] flex justify-center border-b">
      <div className="flex w-full max-w-[880px] flex-wrap">
        {stats.map((s, i) => (
          <AnimatedStat key={s.label} item={s} index={i} />
        ))}
      </div>
    </section>
  )
}
