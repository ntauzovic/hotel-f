'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogIn, LogOut, User } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import useAuthStore from '@/store/useAuthStore'
import { logoutApi } from '@/lib/api/endpoints'

export default function NavBar() {
  const router = useRouter()
  const { isAuthenticated, user, clearAuth } = useAuthStore()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

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
    <motion.nav
      className="border-gold/[0.18] fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b backdrop-blur-[14px]"
      animate={{
        paddingTop: scrolled ? '0.6rem' : '1.1rem',
        paddingBottom: scrolled ? '0.6rem' : '1.1rem',
        backgroundColor: scrolled ? 'rgba(12,26,46,0.99)' : 'rgba(12,26,46,0.92)',
      }}
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Link
        href="/"
        className="font-cormorant text-2xl font-normal tracking-[0.08em] text-white no-underline"
      >
        Hotel <span className="text-gold">Costa Dorada</span>
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden gap-10 md:flex">
          {['Rooms', 'Guests', 'Reservations', 'Floors'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="group relative text-[0.75rem] font-semibold tracking-[0.2em] text-slate-300 uppercase no-underline transition-colors duration-200 hover:text-white"
            >
              {item}
              <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {isAuthenticated && user ? (
          <div className="flex items-center gap-[0.8rem]">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border-gold/[0.45] bg-gold/[0.18] text-gold flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border"
              >
                {user.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <User size={14} />
                )}
              </motion.div>
              <span className="max-w-[120px] overflow-hidden text-[0.72rem] font-semibold tracking-[0.06em] text-ellipsis whitespace-nowrap text-slate-300">
                {user.name}
              </span>
            </div>
            <motion.button
              type="button"
              onClick={handleLogout}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border-gold/[0.35] hover:border-gold hover:bg-gold/[0.08] hover:text-gold inline-flex cursor-pointer items-center gap-2 border bg-transparent px-[1.3rem] py-2 text-[0.65rem] font-bold tracking-[0.15em] text-slate-300 uppercase transition-all duration-200"
            >
              <LogOut size={12} /> Logout
            </motion.button>
          </div>
        ) : (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-sky-500 px-[1.3rem] py-2 text-[0.65rem] font-bold tracking-[0.15em] text-white uppercase no-underline transition-colors duration-200 hover:bg-sky-600"
            >
              <LogIn size={12} /> Login
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
