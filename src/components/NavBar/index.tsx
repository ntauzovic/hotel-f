import './NavBar.css'
import Link from 'next/link'
import { LogIn } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="home-nav">
      <span className="home-nav-logo font-cormorant">
        Hotel <span className="home-nav-gold">Costa Dorada</span>
      </span>
      <div className="home-nav-right">
        <div className="home-nav-links hidden md:flex">
          {['Rooms', 'Guests', 'Reservations', 'Floors'].map((item) => (
            <Link key={item} href={`/dashboard/${item.toLowerCase()}`} className="nav-lnk">
              {item}
            </Link>
          ))}
        </div>
        <Link href="/login" className="login-btn">
          <LogIn size={12} /> Login
        </Link>
      </div>
    </nav>
  )
}
