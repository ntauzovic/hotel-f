'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import './RoomFilters.css'

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
    <aside className="filters-sidebar">
      <div className="filters-header">
        <span className="filters-title font-cormorant">Filters</span>
        <button className="filters-clear" onClick={clearAll}>
          Clear all
        </button>
      </div>

      {/* Floor */}
      <div className="filters-section">
        <p className="filters-section-title">Floor</p>
        {FLOORS.map((f) => (
          <label key={f} className="filter-option">
            <input
              type="checkbox"
              checked={activeFloors.includes(String(f))}
              onChange={(e) => toggleParam('floor', String(f), e.target.checked)}
            />
            <span className="filter-option-label">Floor {f}</span>
          </label>
        ))}
      </div>

      <div className="filters-divider" />

      {/* Type */}
      <div className="filters-section">
        <p className="filters-section-title">Room Type</p>
        {TYPES.map((t) => (
          <label key={t.value} className="filter-option">
            <input
              type="checkbox"
              checked={activeTypes.includes(t.value)}
              onChange={(e) => toggleParam('type', t.value, e.target.checked)}
            />
            <span className="filter-option-label">{t.label}</span>
          </label>
        ))}
      </div>

      <div className="filters-divider" />

      {/* Status */}
      <div className="filters-section">
        <p className="filters-section-title">Status</p>
        {STATUSES.map((s) => (
          <label key={s.value} className="filter-option">
            <input
              type="checkbox"
              checked={activeStatuses.includes(s.value)}
              onChange={(e) => toggleParam('status', s.value, e.target.checked)}
            />
            <span className="filter-option-label">{s.label}</span>
          </label>
        ))}
      </div>

      <div className="filters-divider" />

      {/* Price */}
      <div className="filters-section">
        <p className="filters-section-title">Price per Night (€)</p>
        <div className="price-inputs">
          <div className="price-input-wrap">
            <span className="price-input-label">Min</span>
            <input
              className="price-input"
              type="number"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <span className="price-separator">—</span>
          <div className="price-input-wrap">
            <span className="price-input-label">Max</span>
            <input
              className="price-input"
              type="number"
              placeholder="∞"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <button className="filters-apply" onClick={applyPrice}>
          Apply Price
        </button>
      </div>
    </aside>
  )
}
