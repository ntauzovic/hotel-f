'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import './Pagination.css'

type Props = {
  currentPage: number
  lastPage: number
}

export default function Pagination({ currentPage, lastPage }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (lastPage <= 1) return null

  const goTo = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  // Show max 5 page buttons
  const pages: number[] = []
  const start = Math.max(1, currentPage - 2)
  const end = Math.min(lastPage, start + 4)
  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {start > 1 && (
        <>
          <button className="pagination-btn" onClick={() => goTo(1)}>
            1
          </button>
          {start > 2 && <span className="pagination-ellipsis">…</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          className={`pagination-btn ${p === currentPage ? 'active' : ''}`}
          onClick={() => goTo(p)}
        >
          {p}
        </button>
      ))}

      {end < lastPage && (
        <>
          {end < lastPage - 1 && <span className="pagination-ellipsis">…</span>}
          <button className="pagination-btn" onClick={() => goTo(lastPage)}>
            {lastPage}
          </button>
        </>
      )}

      <button
        className="pagination-btn"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        →
      </button>
    </div>
  )
}
