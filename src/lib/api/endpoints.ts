import apiClient from './client'
import type { Room, Floor, Guest, Reservation, PaginatedRooms } from '@/types'

// ─── Rooms ───────────────────────────────────────────────────────────────────

export const getRooms = async (params?: Record<string, string>): Promise<PaginatedRooms> => {
  const query = params ? '?' + new URLSearchParams(params).toString() : ''
  const { data } = await apiClient.get(`/rooms${query}`)
  console.log(data)

  return data
}

export const getRoom = async (id: number): Promise<Room> => {
  const { data } = await apiClient.get(`/rooms/${id}`)
  return data.data ?? data
}

// ─── Floors ──────────────────────────────────────────────────────────────────

export const getFloors = async (): Promise<Floor[]> => {
  const { data } = await apiClient.get('/floors')
  return data.data ?? data
}

export const getFloor = async (id: number): Promise<Floor> => {
  const { data } = await apiClient.get(`/floors/${id}`)
  return data.data ?? data
}

// ─── Guests ──────────────────────────────────────────────────────────────────

export const getGuests = async (): Promise<Guest[]> => {
  const { data } = await apiClient.get('/guests')
  return data.data ?? data
}

// ─── Reservations ─────────────────────────────────────────────────────────────

export const getReservations = async (): Promise<Reservation[]> => {
  const { data } = await apiClient.get('/reservations')
  return data.data ?? data
}
