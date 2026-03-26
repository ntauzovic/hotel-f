import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LiveStats from '@/components/LiveStats'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import QuickActions from '@/components/QuickActions'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="bg-[#0d0d08] text-white">
      <NavBar />
      <Hero />
      <StatsBar />
      <LiveStats />
      <Amenities />
      <Gallery />
      <QuickActions />
      <Footer />
    </div>
  )
}
