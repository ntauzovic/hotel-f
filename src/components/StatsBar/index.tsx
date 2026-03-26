const stats = [
  { num: '7', label: 'Floors', colour: '#ffffff' },
  { num: '48', label: 'Rooms', colour: '#ffffff' },
  { num: '180°', label: 'Sea View', colour: '#7dd3fc' },
  { num: '5★', label: 'Rating', colour: '#d4af37' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy border-gold/[0.15] flex justify-center border-b">
      <div className="flex w-full max-w-[880px] flex-wrap">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex-[1_1_120px] border-r border-white/[0.07] px-6 py-8 text-center last:border-r-0"
          >
            <div
              className="font-cormorant mb-[0.3rem] text-[2.8rem] leading-none font-light"
              style={{ color: s.colour }}
            >
              {s.num}
            </div>
            <div className="text-[0.6rem] font-bold tracking-[0.2em] text-white/[0.55] uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
