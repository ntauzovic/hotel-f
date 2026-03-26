'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'

const FLOORS = [1, 2, 3, 4, 5, 6, 7]
const TYPES = [
  { value: 'single', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'suite', label: 'Suite' },
]
const STATUSES = [
  { value: 'available', label: 'Available' },
  { value: 'occupied', label: 'Occupied' },
  { value: 'maintenance', label: 'Maintenance' },
]

export default function RoomFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const getArray = (key: string) => searchParams.get(key)?.split(',').filter(Boolean) ?? []

  const [minPrice, setMinPrice] = useState(searchParams.get('min') ?? '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('max') ?? '')

  const toggleParam = useCallback(
    (key: string, value: string, checked: boolean) => {
      const params = new URLSearchParams(searchParams.toString())
      const current = params.get(key)?.split(',').filter(Boolean) ?? []

      if (checked) {
        current.push(value)
      } else {
        const idx = current.indexOf(value)
        if (idx > -1) current.splice(idx, 1)
      }

      if (current.length === 0) params.delete(key)
      else params.set(key, current.join(','))

      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  const applyPrice = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (minPrice) params.set('min', minPrice)
    else params.delete('min')
    if (maxPrice) params.set('max', maxPrice)
    else params.delete('max')
    router.push(`${pathname}?${params.toString()}`)
  }

  const clearAll = () => {
    setMinPrice('')
    setMaxPrice('')
    router.push(pathname)
  }

  const activeFloors = getArray('floor')
  const activeTypes = getArray('type')
  const activeStatuses = getArray('status')

  return (
    <aside className="bg-navy border-gold/[0.2] sticky top-[70px] max-h-[calc(100vh-70px)] min-h-[calc(100vh-70px)] w-[300px] shrink-0 self-start overflow-y-auto border-r px-[2.2rem] py-12 shadow-[4px_0_32px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="border-gold mb-[2.8rem] flex items-center justify-between border-b pb-[1.4rem]">
        <span className="font-cormorant text-2xl font-light tracking-[0.06em] text-white">
          Filters
        </span>
        <button
          onClick={clearAll}
          className="text-gold border-gold/[0.35] hover:bg-gold/[0.1] hover:border-gold cursor-pointer border bg-none px-3 py-[0.35rem] text-[0.68rem] font-bold tracking-[0.18em] uppercase transition-all duration-200"
        >
          Clear all
        </button>
      </div>

      {/* Floor */}
      <div className="mb-[2.2rem]">
        <p className="text-gold after:bg-gold/[0.2] mb-[1.3rem] flex items-center gap-[0.7rem] text-[0.68rem] font-[800] tracking-[0.3em] uppercase after:h-px after:flex-1">
          Floor
        </p>
        {FLOORS.map((f) => (
          <label
            key={f}
            className="mb-[0.9rem] flex cursor-pointer items-center gap-4 px-[0.6rem] py-[0.4rem] transition-colors duration-150 hover:bg-white/[0.04]"
          >
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={activeFloors.includes(String(f))}
              onChange={(e) => toggleParam('floor', String(f), e.target.checked)}
            />
            <span className="text-base font-normal text-slate-200 transition-colors duration-200 select-none">
              Floor {f}
            </span>
          </label>
        ))}
      </div>

      <div className="mb-[2.2rem] h-px bg-white/[0.06]" />

      {/* Type */}
      <div className="mb-[2.2rem]">
        <p className="text-gold after:bg-gold/[0.2] mb-[1.3rem] flex items-center gap-[0.7rem] text-[0.68rem] font-[800] tracking-[0.3em] uppercase after:h-px after:flex-1">
          Room Type
        </p>
        {TYPES.map((t) => (
          <label
            key={t.value}
            className="mb-[0.9rem] flex cursor-pointer items-center gap-4 px-[0.6rem] py-[0.4rem] transition-colors duration-150 hover:bg-white/[0.04]"
          >
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={activeTypes.includes(t.value)}
              onChange={(e) => toggleParam('type', t.value, e.target.checked)}
            />
            <span className="text-base font-normal text-slate-200 transition-colors duration-200 select-none">
              {t.label}
            </span>
          </label>
        ))}
      </div>

      <div className="mb-[2.2rem] h-px bg-white/[0.06]" />

      {/* Status */}
      <div className="mb-[2.2rem]">
        <p className="text-gold after:bg-gold/[0.2] mb-[1.3rem] flex items-center gap-[0.7rem] text-[0.68rem] font-[800] tracking-[0.3em] uppercase after:h-px after:flex-1">
          Status
        </p>
        {STATUSES.map((s) => (
          <label
            key={s.value}
            className="mb-[0.9rem] flex cursor-pointer items-center gap-4 px-[0.6rem] py-[0.4rem] transition-colors duration-150 hover:bg-white/[0.04]"
          >
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={activeStatuses.includes(s.value)}
              onChange={(e) => toggleParam('status', s.value, e.target.checked)}
            />
            <span className="text-base font-normal text-slate-200 transition-colors duration-200 select-none">
              {s.label}
            </span>
          </label>
        ))}
      </div>

      <div className="mb-[2.2rem] h-px bg-white/[0.06]" />

      {/* Price */}
      <div className="mb-[2.2rem]">
        <p className="text-gold after:bg-gold/[0.2] mb-[1.3rem] flex items-center gap-[0.7rem] text-[0.68rem] font-[800] tracking-[0.3em] uppercase after:h-px after:flex-1">
          Price per Night (€)
        </p>
        <div className="flex items-center gap-[0.8rem]">
          <div className="flex flex-1 flex-col gap-2">
            <span className="text-[0.68rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Min
            </span>
            <input
              type="number"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border-b-gold/[0.4] focus:border-b-gold w-full border border-b-2 border-white/[0.12] bg-white/[0.06] px-[0.85rem] py-[0.65rem] text-base text-white placeholder-white/25 transition-all duration-200 outline-none focus:bg-white/[0.09]"
            />
          </div>
          <span className="shrink-0 pt-[1.4rem] text-base text-white/30">—</span>
          <div className="flex flex-1 flex-col gap-2">
            <span className="text-[0.68rem] font-bold tracking-[0.18em] text-white/50 uppercase">
              Max
            </span>
            <input
              type="number"
              placeholder="∞"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border-b-gold/[0.4] focus:border-b-gold w-full border border-b-2 border-white/[0.12] bg-white/[0.06] px-[0.85rem] py-[0.65rem] text-base text-white placeholder-white/25 transition-all duration-200 outline-none focus:bg-white/[0.09]"
            />
          </div>
        </div>
        <button
          onClick={applyPrice}
          className="bg-gold text-navy hover:bg-gold-light mt-8 w-full cursor-pointer border-none py-4 text-[0.72rem] font-[800] tracking-[0.22em] uppercase transition-all duration-200 hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
        >
          Apply Price
        </button>
      </div>
    </aside>
  )
}
