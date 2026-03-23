import { Suspense } from 'react'
import NavBar from '@/components/NavBar'
import RoomCard from '@/components/RoomCard'
import RoomFilters from '@/components/RoomFilters'
import Pagination from '@/components/Pagination'
import { getRooms } from '@/lib/api/endpoints'
import './rooms.css'

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const params = await searchParams

  // Build query params for API - remove undefined values
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
      <div className="rooms-page">
        <Suspense>
          <RoomFilters />
        </Suspense>

        <main className="rooms-main">
          <div className="rooms-top">
            <div>
              <h1 className="rooms-heading font-cormorant">
                Our <em>Rooms</em>
              </h1>
              <p className="rooms-count">
                {meta.total} room{meta.total !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {activeLabels.length > 0 && (
            <div className="rooms-active-filters">
              {activeLabels.map((label) => (
                <span key={label} className="filter-pill">
                  {label}
                </span>
              ))}
            </div>
          )}

          <div className="rooms-grid">
            {rooms.length > 0 ? (
              rooms.map((room) => <RoomCard key={room.id} room={room} />)
            ) : (
              <div className="rooms-empty">
                <p className="rooms-empty-title font-cormorant">No rooms found</p>
                <p className="rooms-empty-sub">Try adjusting your filters.</p>
              </div>
            )}
          </div>

          <Suspense>
            <Pagination currentPage={meta.current_page} lastPage={meta.last_page} />
          </Suspense>
        </main>
      </div>
    </>
  )
}
