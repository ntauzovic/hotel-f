import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,12,22,0.4)_0%,rgba(5,12,22,0.58)_50%,rgba(5,12,22,0.94)_100%)]" />

      <div className="relative z-[2] max-w-[900px] px-6">
        <p className="anim-1 mb-6 text-[0.68rem] font-semibold tracking-[0.35em] text-white/70 uppercase">
          Marbella · Costa del Sol · España
        </p>
        <h1 className="font-cormorant anim-2 mb-[0.3em] text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] font-light text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
          Where the Sea
          <br />
          <em className="text-gold">Meets Luxury</em>
        </h1>
        <p className="anim-3 mb-10 text-[0.88rem] font-normal tracking-[0.12em] text-white/[0.88]">
          Beachfront elegance on the shores of the Mediterranean
        </p>
        <div className="bg-gold anim-4 mx-auto mb-10 h-px w-[55px]" />
        <div className="anim-5 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard/reservations"
            className="group inline-flex items-center gap-[0.7rem] border border-sky-500 bg-sky-500 px-[2.4rem] py-[0.9rem] text-[0.68rem] font-bold tracking-[0.2em] text-white uppercase no-underline transition-all duration-[0.25s] hover:border-sky-600 hover:bg-sky-600"
          >
            View Reservations{' '}
            <ArrowRight
              size={14}
              className="transition-transform duration-[0.25s] group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-[0.7rem] border border-white/[0.35] bg-transparent px-[2.4rem] py-[0.9rem] text-[0.68rem] font-semibold tracking-[0.2em] text-slate-100 uppercase no-underline transition-all duration-[0.25s] hover:border-white hover:text-white"
          >
            Browse Rooms{' '}
            <ArrowRight
              size={14}
              className="transition-transform duration-[0.25s] group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="anim-6 absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[0.58rem] tracking-[0.25em] text-white/[0.35] uppercase">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
