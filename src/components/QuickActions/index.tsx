'use client'

import Link from 'next/link'
import { BedDouble, Users, CalendarCheck, Layers, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import StaggerGroup, { staggerItem } from '@/components/ui/StaggerGroup'

const quickActions = [
  {
    icon: BedDouble,
    title: 'Manage Rooms',
    description: 'View, add and update hotel rooms across all floors.',
    href: '/rooms',
  },
  {
    icon: Users,
    title: 'Manage Guests',
    description: 'Keep track of all registered guests and their details.',
    href: '/dashboard/guests',
  },
  {
    icon: CalendarCheck,
    title: 'New Reservation',
    description: 'Create a new reservation and assign a room to a guest.',
    href: '/dashboard/reservations',
  },
  {
    icon: Layers,
    title: 'View Floors',
    description: 'Browse the hotel floor plan and room availability.',
    href: '/dashboard/floors',
  },
]

export default function QuickActions() {
  return (
    <section className="bg-cream px-8 py-24 text-center">
      <FadeInView>
        <p className="mb-3 text-[0.75rem] font-bold tracking-[0.3em] text-slate-500 uppercase">
          Management
        </p>
        <h2 className="font-cormorant mb-3 text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#0f0a04]">
          Quick <em className="text-navy">Actions</em>
        </h2>
        <div className="bg-gold mx-auto mb-6 h-px w-[50px]" />
        <p className="mx-auto mb-14 max-w-[520px] text-[1.6rem] text-[#555]">
          Jump straight to what you need.
        </p>
      </FadeInView>

      <StaggerGroup className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {quickActions.map(({ icon: Icon, title, description, href }) => (
          <motion.div
            key={title}
            variants={staggerItem}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            className="cursor-default border border-[#ede8df] bg-white p-12 text-left"
          >
            <motion.div
              className="mb-8 inline-flex bg-[#f0f4f8] p-5"
              whileHover={{ backgroundColor: '#0c1a2e', scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div whileHover={{ color: '#d4af37' }}>
                <Icon size={32} style={{ color: '#0c1a2e' }} />
              </motion.div>
            </motion.div>
            <h3 className="mb-4 text-2xl font-bold text-[#0f0a04]">{title}</h3>
            <p className="mb-10 text-base leading-[1.7] text-[#666]">{description}</p>
            <Link
              href={href}
              className="text-navy border-navy group inline-flex items-center gap-2 border-b pb-[2px] text-sm font-semibold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:border-sky-500 hover:text-sky-500"
            >
              Open{' '}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}
