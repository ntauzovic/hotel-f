import './Amenities.css'
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
    <section className="home-amenities">
      <p className="home-section-eyebrow">The Experience</p>
      <h2 className="home-amenities-title font-cormorant">
        Crafted for <em>Discerning</em> Guests
      </h2>
      <div className="home-amenities-divider" />
      <p className="home-amenities-subtitle">
        Every detail at Hotel Costa Dorada has been designed to offer an unparalleled stay on the
        Costa del Sol.
      </p>
      <div className="home-amenities-grid">
        {amenities.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-card-icon">{f.icon}</div>
            <h3 className="feature-card-title font-cormorant">{f.title}</h3>
            <p className="feature-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
