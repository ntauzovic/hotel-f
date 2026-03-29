'use client'

import { motion } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import StaggerGroup, { staggerItem } from '@/components/ui/StaggerGroup'

const amenities = [
  {
    icon: '🌊',
    title: 'Beachfront Access',
    desc: "Step directly onto the golden sands of Marbella's most exclusive stretch of coastline.",
  },
  {
    icon: '🍽️',
    title: 'Fine Dining',
    desc: 'Award-winning Mediterranean cuisine prepared by our Michelin-starred head chef.',
  },
  {
    icon: '♾️',
    title: 'Infinity Pool',
    desc: 'Two stunning infinity pools overlooking the Mediterranean — one heated year-round.',
  },
  {
    icon: '🧖',
    title: 'Spa & Wellness',
    desc: 'A 2,000 m² sanctuary offering treatments inspired by Andalusian traditions.',
  },
]

export default function Amenities() {
  return (
    <section className="bg-white px-8 py-32 text-center">
      <FadeInView>
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.3em] text-slate-500 uppercase">
          The Experience
        </p>
        <h2 className="font-cormorant mb-3 text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#0f0a04]">
          Crafted for <em className="text-navy">Discerning</em> Guests
        </h2>
        <div className="bg-gold mx-auto mb-6 h-px w-[50px]" />
        <p className="mx-auto mb-16 max-w-[500px] text-[0.85rem] leading-[1.8] text-[#555]">
          Every detail at Hotel Costa Dorada has been designed to offer an unparalleled stay on the
          Costa del Sol.
        </p>
      </FadeInView>

      <StaggerGroup className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[12px]">
        {amenities.map((f) => (
          <motion.div
            key={f.title}
            variants={staggerItem}
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
            className="bg-cream-light cursor-default px-10 py-16 text-center"
          >
            <motion.div
              className="mb-8 text-[3rem]"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {f.icon}
            </motion.div>
            <h3 className="font-cormorant mb-4 text-2xl font-semibold text-[#0f0a04]">{f.title}</h3>
            <p className="text-sm leading-[1.8] text-[#666]">{f.desc}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}
