import './LiveStats.css'
import HotelStats from '@/components/common/HotelStats'

export default function LiveStats() {
  return (
    <section className="home-live-stats">
      <div className="home-section-inner">
        <div className="home-section-header">
          <p className="home-section-eyebrow">Live Data</p>
          <h2 className="home-section-title font-cormorant">
            Hotel at a <em>Glance</em>
          </h2>
          <div className="home-section-divider" />
        </div>
        <HotelStats />
      </div>
    </section>
  )
}
