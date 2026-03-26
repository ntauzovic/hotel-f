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
      <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[12px]">
        {amenities.map((f) => (
          <div
            key={f.title}
            className="bg-cream-light px-10 py-16 text-center transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-8 text-[3rem]">{f.icon}</div>
            <h3 className="font-cormorant mb-4 text-2xl font-semibold text-[#0f0a04]">{f.title}</h3>
            <p className="text-sm leading-[1.8] text-[#666]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
