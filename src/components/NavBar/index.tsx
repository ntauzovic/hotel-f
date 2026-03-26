'use client'

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
    <nav className="bg-navy/97 border-gold/[0.18] fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b px-12 py-[1.1rem] backdrop-blur-[14px]">
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
              className="text-[0.75rem] font-semibold tracking-[0.2em] text-slate-300 uppercase no-underline transition-colors duration-200 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        {isAuthenticated && user ? (
          <div className="flex items-center gap-[0.8rem]">
            <div className="flex items-center gap-2">
              <div className="bg-gold/[0.18] border-gold/[0.45] text-gold flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border">
                {user.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <User size={14} />
                )}
              </div>
              <span className="max-w-[120px] overflow-hidden text-[0.72rem] font-semibold tracking-[0.06em] text-ellipsis whitespace-nowrap text-slate-300">
                {user.name}
              </span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="border-gold/[0.35] hover:bg-gold/[0.08] hover:text-gold hover:border-gold inline-flex cursor-pointer items-center gap-2 border bg-transparent px-[1.3rem] py-2 text-[0.65rem] font-bold tracking-[0.15em] text-slate-300 uppercase transition-all duration-200"
            >
              <LogOut size={12} /> Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-sky-500 px-[1.3rem] py-2 text-[0.65rem] font-bold tracking-[0.15em] text-white uppercase no-underline transition-colors duration-200 hover:bg-sky-600"
          >
            <LogIn size={12} /> Login
          </Link>
        )}
      </div>
    </nav>
  )
}
