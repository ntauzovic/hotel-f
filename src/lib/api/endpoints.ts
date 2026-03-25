import axios from 'axios'
import apiClient from './client'
import type { Room, Floor, Guest, Reservation, PaginatedRooms, User } from '@/types'

const getCsrfCookie = () =>
  axios.get(`${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}/sanctum/csrf-cookie`, {
    withCredentials: true,
  })

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const loginApi = async (email: string, password: string): Promise<User> => {
  await getCsrfCookie()
  const { data } = await apiClient.post('/auth/login', { email, password })
  return data
}

export const registerApi = async (name: string, email: string, password: string): Promise<User> => {
  await getCsrfCookie()
  const { data } = await apiClient.post('/auth/register', { name, email, password })
  return data
}

export const logoutApi = async (): Promise<void> => {
  await apiClient.post('/auth/logout')
}

export const getMeApi = async (): Promise<User> => {
  const { data } = await apiClient.get('/auth/me')
  return data
}

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
