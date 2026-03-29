'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const textReveal = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.18,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden text-center">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-[center_60%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=85&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,12,22,0.3)_0%,rgba(5,12,22,0.55)_50%,rgba(5,12,22,0.96)_100%)]" />

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-gold/60 absolute rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
            }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-[2] max-w-[960px] px-6">
        <div className="mb-6 overflow-hidden">
          <motion.p
            custom={0}
            variants={textReveal}
            initial="hidden"
            animate="show"
            className="text-[0.68rem] font-semibold tracking-[0.4em] text-white/60 uppercase"
          >
            Marbella · Costa del Sol · España
          </motion.p>
        </div>

        <h1 className="font-cormorant mb-[0.3em] text-[clamp(3.5rem,9vw,7.5rem)] leading-[1.0] font-light text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.4)]">
          <div className="overflow-hidden">
            <motion.span
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="show"
              className="block"
            >
              Where the Sea
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="show"
              className="text-gold block italic"
            >
              Meets Luxury
            </motion.span>
          </div>
        </h1>

        <motion.p
          custom={3}
          variants={textReveal}
          initial="hidden"
          animate="show"
          className="mb-10 text-[0.92rem] font-light tracking-[0.15em] text-white/75"
        >
          Beachfront elegance on the shores of the Mediterranean
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 55, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="bg-gold mx-auto mb-10 h-px"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/dashboard/reservations"
              className="group inline-flex items-center gap-[0.7rem] border border-sky-500 bg-sky-500 px-[2.8rem] py-[1rem] text-[0.7rem] font-bold tracking-[0.22em] text-white uppercase no-underline shadow-[0_8px_32px_rgba(14,165,233,0.3)] transition-all duration-300 hover:bg-sky-400 hover:shadow-[0_12px_40px_rgba(14,165,233,0.5)]"
            >
              View Reservations{' '}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/rooms"
              className="group inline-flex items-center gap-[0.7rem] border border-white/30 bg-white/5 px-[2.8rem] py-[1rem] text-[0.7rem] font-semibold tracking-[0.22em] text-slate-100 uppercase no-underline backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:text-white"
            >
              Browse Rooms{' '}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
