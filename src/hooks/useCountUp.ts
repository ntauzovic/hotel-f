'use client'

import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(startOnMount ? 0 : target)
  const [started, setStarted] = useState(startOnMount)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!startOnMount) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true)
            observer.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [startOnMount])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}
