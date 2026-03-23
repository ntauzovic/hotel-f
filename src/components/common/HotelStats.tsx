'use client'

import { useRooms } from '@/features/rooms/hooks/useRooms'
import { useFloors } from '@/features/floors/hooks/useFloors'
import { Building2, BedDouble, CheckCircle, XCircle } from 'lucide-react'

export default function HotelStats() {
  const { data: rooms, isLoading: roomsLoading, isError: roomsError } = useRooms()
  const { data: floors, isLoading: floorsLoading, isError: floorsError } = useFloors()

  const isLoading = roomsLoading || floorsLoading
  const isError = roomsError || floorsError

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-2xl bg-slate-200 p-6" />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-500">
        Could not load hotel data. Make sure the backend is running.
      </div>
    )
  }

  const roomList = rooms?.data ?? []
  const totalRooms = rooms?.meta?.total ?? roomList.length
  const totalFloors = floors?.length ?? 0
  const availableRooms = roomList.filter((r) => r.status === 'available').length
  const occupiedRooms = roomList.filter((r) => r.status === 'occupied').length

  const stats = [
    {
      icon: Building2,
      label: 'Total Floors',
      value: totalFloors,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: BedDouble,
      label: 'Total Rooms',
      value: totalRooms,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: CheckCircle,
      label: 'Available Rooms',
      value: availableRooms,
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: XCircle,
      label: 'Occupied Rooms',
      value: occupiedRooms,
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ icon: Icon, label, value, color, bg }) => (
        <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className={`mb-4 inline-flex rounded-xl p-3 ${bg}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          <p className="mt-1 text-sm text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  )
}
