'use client'

import './NavBar.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogIn, LogOut, User } from 'lucide-react'
import useAuthStore from '@/store/useAuthStore'
import { logoutApi } from '@/lib/api/endpoints'

export default function NavBar() {
  const router = useRouter()
  const { isAuthenticated, user, clearAuth } = useAuthStore()

  const handleLogout = async () => {
    try {
      await logoutApi()
    } catch {
      // ignore — clear local state regardless
    }
    clearAuth()
    router.replace('/login')
  }

  return (
    <nav className="home-nav">
      <Link href="/" className="home-nav-logo font-cormorant">
        Hotel <span className="home-nav-gold">Costa Dorada</span>
      </Link>
      <div className="home-nav-right">
        <div className="home-nav-links hidden md:flex">
          {['Rooms', 'Guests', 'Reservations', 'Floors'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="nav-lnk">
              {item}
            </Link>
          ))}
        </div>

        {isAuthenticated && user ? (
          <div className="nav-user-area">
            <div className="nav-user-info">
              <div className="nav-user-avatar">
                {user.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.avatar} alt={user.name} className="nav-avatar-img" />
                ) : (
                  <User size={14} />
                )}
              </div>
              <span className="nav-user-name">{user.name}</span>
            </div>
            <button type="button" className="logout-btn" onClick={handleLogout}>
              <LogOut size={12} /> Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="login-btn">
            <LogIn size={12} /> Login
          </Link>
        )}
      </div>
    </nav>
  )
}
