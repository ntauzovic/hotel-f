import HotelStats from '@/components/common/HotelStats'

export default function LiveStats() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[0.65rem] font-bold tracking-[0.3em] text-slate-500 uppercase">
            Live Data
          </p>
          <h2 className="font-cormorant mb-3 text-[clamp(1.8rem,3.5vw,3rem)] font-normal text-[#0f0a04]">
            Hotel at a <em className="text-navy">Glance</em>
          </h2>
          <div className="bg-gold mx-auto h-px w-[50px]" />
        </div>
        <HotelStats />
      </div>
    </section>
  )
}
