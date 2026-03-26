import Link from 'next/link'
import { BedDouble, Users, CalendarCheck, Layers, ArrowRight } from 'lucide-react'

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
      <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {quickActions.map(({ icon: Icon, title, description, href }) => (
          <div
            key={title}
            className="border border-[#ede8df] bg-white p-12 text-left transition-all duration-[0.25s] hover:-translate-y-[5px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-8 inline-flex bg-[#f0f4f8] p-5">
              <Icon size={32} style={{ color: '#0c1a2e' }} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#0f0a04]">{title}</h3>
            <p className="mb-10 text-base leading-[1.7] text-[#666]">{description}</p>
            <Link
              href={href}
              className="text-navy border-navy inline-flex items-center gap-2 border-b pb-[2px] text-sm font-semibold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:border-sky-500 hover:text-sky-500"
            >
              Open <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
