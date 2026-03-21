import './StatsBar.css'
const stats = [
  { num: '7', label: 'Floors', colour: '#ffffff' },
  { num: '48', label: 'Rooms', colour: '#ffffff' },
  { num: '180°', label: 'Sea View', colour: '#7dd3fc' },
  { num: '5★', label: 'Rating', colour: '#d4af37' },
]

export default function StatsBar() {
  return (
    <section className="home-stats-bar">
      <div className="home-stats-inner">
        {stats.map((s) => (
          <div key={s.label} className="home-stat-item">
            <div className="home-stat-num font-cormorant" style={{ color: s.colour }}>
              {s.num}
            </div>
            <div className="home-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
