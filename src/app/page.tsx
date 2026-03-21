'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      router.replace('/home')
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError(true)
    }
  }, [router])

  if (error) {
    return (
      <div
        style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}
      >
        <p style={{ color: '#ef4444', fontSize: '0.9rem' }}>
          Došlo je do greške pri učitavanju stranice.
        </p>
      </div>
    )
  }

  return null
}
