import { Suspense } from 'react'
import NavBar from '@/components/NavBar'
import RoomCard from '@/components/RoomCard'
import RoomFilters from '@/components/RoomFilters'
import Pagination from '@/components/Pagination'
import StaggerGroup from '@/components/ui/StaggerGroup'
import { getRooms } from '@/lib/api/endpoints'

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const params = await searchParams

  const apiParams: Record<string, string> = {}
  if (params.page) apiParams.page = params.page
  if (params.floor) apiParams.floor = params.floor
  if (params.type) apiParams.type = params.type
  if (params.status) apiParams.status = params.status
  if (params.min) apiParams.min = params.min
  if (params.max) apiParams.max = params.max
  apiParams.per_page = '12'

  let result
  try {
    result = await getRooms(apiParams)
    console.log('Fetched rooms with params:', apiParams, 'Result:', result)
  } catch {
    result = { data: [], meta: { current_page: 1, last_page: 1, per_page: 12, total: 0 } }
  }

  console.log('RoomsPage - Final rooms data:', result)
  const { data: rooms, meta } = result

  const activeLabels = [
    ...(params.floor?.split(',').map((f) => `Floor ${f}`) ?? []),
    ...(params.type?.split(',').map((t) => t.charAt(0).toUpperCase() + t.slice(1)) ?? []),
    ...(params.status?.split(',').map((s) => s.charAt(0).toUpperCase() + s.slice(1)) ?? []),
    ...(params.min ? [`Min €${params.min}`] : []),
    ...(params.max ? [`Max €${params.max}`] : []),
  ]

  return (
    <>
      <NavBar />
      <div className="bg-cream flex min-h-screen pt-[70px]">
        <Suspense>
          <RoomFilters />
        </Suspense>

        <main className="min-w-0 flex-1 px-[3.2rem] py-12">
          <div className="border-cream-border mb-10 flex items-end justify-between border-b pb-[1.8rem]">
            <div>
              <h1 className="font-cormorant text-navy text-[clamp(2.4rem,4vw,3.4rem)] leading-[1.1] font-light">
                Our <em className="text-gold">Rooms</em>
              </h1>
              <p className="mt-[0.4rem] text-[0.88rem] tracking-[0.08em] text-slate-500 uppercase">
                {meta.total} room{meta.total !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {activeLabels.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {activeLabels.map((label) => (
                <span
                  key={label}
                  className="bg-navy text-gold inline-flex items-center gap-[0.4rem] px-[0.9rem] py-[0.4rem] text-[0.72rem] font-semibold tracking-[0.1em] uppercase"
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {rooms.length > 0 ? (
            <StaggerGroup className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </StaggerGroup>
          ) : (
            <div className="px-8 py-24 text-center">
              <p className="font-cormorant text-navy mb-3 text-[2rem] font-light">No rooms found</p>
              <p className="text-[0.95rem] text-slate-500">Try adjusting your filters.</p>
            </div>
          )}

          <Suspense>
            <Pagination currentPage={meta.current_page} lastPage={meta.last_page} />
          </Suspense>
        </main>
      </div>
    </>
  )
}
