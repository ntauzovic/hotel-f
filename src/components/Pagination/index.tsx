'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

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

  const pages: number[] = []
  const start = Math.max(1, currentPage - 2)
  const end = Math.min(lastPage, start + 4)
  for (let i = start; i <= end; i++) pages.push(i)

  const btnBase =
    'min-w-[42px] h-[42px] inline-flex items-center justify-center bg-white border border-cream-border text-navy text-[0.88rem] font-semibold cursor-pointer px-[0.6rem] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-navy hover:not-disabled:text-white hover:not-disabled:border-navy'
  const btnActive = 'bg-navy text-gold border-navy font-bold'

  return (
    <div className="border-cream-border mt-14 flex items-center justify-center gap-[0.4rem] border-t pt-10">
      <button
        className={btnBase}
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {start > 1 && (
        <>
          <button className={btnBase} onClick={() => goTo(1)}>
            1
          </button>
          {start > 2 && <span className="px-[0.3rem] text-[0.9rem] text-slate-400">…</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          className={`${btnBase} ${p === currentPage ? btnActive : ''}`}
          onClick={() => goTo(p)}
        >
          {p}
        </button>
      ))}

      {end < lastPage && (
        <>
          {end < lastPage - 1 && (
            <span className="px-[0.3rem] text-[0.9rem] text-slate-400">…</span>
          )}
          <button className={btnBase} onClick={() => goTo(lastPage)}>
            {lastPage}
          </button>
        </>
      )}

      <button
        className={btnBase}
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        →
      </button>
    </div>
  )
}
