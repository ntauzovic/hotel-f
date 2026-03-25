'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/store/useAuthStore'
import { getMeApi } from '@/lib/api/endpoints'
import './callback.css'

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
    <div className="callback-page">
      <div className="callback-spinner" />
      <p className="callback-text">Logging in&hellip;</p>
    </div>
  )
}
