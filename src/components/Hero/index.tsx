import './Hero.css'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="home-hero">
      <div
        className="home-hero-bg hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=85&auto=format&fit=crop')",
        }}
      />
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <p className="home-hero-eyebrow anim-1">Marbella · Costa del Sol · España</p>
        <h1 className="home-hero-title font-cormorant anim-2">
          Where the Sea
          <br />
          <em>Meets Luxury</em>
        </h1>
        <p className="home-hero-subtitle anim-3">
          Beachfront elegance on the shores of the Mediterranean
        </p>
        <div className="home-hero-divider anim-4" />
        <div className="home-hero-cta anim-5">
          <Link href="/dashboard/reservations" className="btn-primary">
            View Reservations <ArrowRight size={14} className="btn-arrow" />
          </Link>
          <Link href="/dashboard/rooms" className="btn-outline">
            Browse Rooms <ArrowRight size={14} className="btn-arrow" />
          </Link>
        </div>
      </div>
      <div className="home-hero-scroll anim-6">
        <span className="home-hero-scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
