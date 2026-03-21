import './QuickActions.css'
import Link from 'next/link'
import { BedDouble, Users, CalendarCheck, Layers, ArrowRight } from 'lucide-react'

const quickActions = [
  {
    icon: BedDouble,
    title: 'Manage Rooms',
    description: 'View, add and update hotel rooms across all floors.',
    href: '/dashboard/rooms',
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
    <section className="home-actions">
      <p className="home-section-eyebrow">Management</p>
      <h2 className="home-actions-title font-cormorant">
        Quick <em>Actions</em>
      </h2>
      <div className="home-actions-divider" />
      <p className="home-actions-subtitle">Jump straight to what you need.</p>
      <div className="home-actions-grid">
        {quickActions.map(({ icon: Icon, title, description, href }) => (
          <div key={title} className="action-card">
            <div className="action-card-icon">
              <Icon size={22} style={{ color: '#0c1a2e' }} />
            </div>
            <h3 className="action-card-title">{title}</h3>
            <p className="action-card-desc">{description}</p>
            <Link href={href} className="act-link">
              Open <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
