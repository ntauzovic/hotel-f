'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/store/useAuthStore'
import { getMeApi } from '@/lib/api/endpoints'

export default function AuthCallback() {
  const router = useRouter()
  const { setAuth } = useAuthStore()

  useEffect(() => {
    getMeApi()
      .then((user) => {
        setAuth(user)
        router.replace('/home')
      })
      .catch(() => {
        router.replace('/login')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-cream flex h-screen flex-col items-center justify-center gap-4">
      <div className="callback-spinner" />
      <p className="text-navy text-[0.9rem] tracking-[0.08em]">Logging in&hellip;</p>
    </div>
  )
}
