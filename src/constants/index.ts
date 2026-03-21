export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  ROOMS: '/dashboard/rooms',
  GUESTS: '/dashboard/guests',
  RESERVATIONS: '/dashboard/reservations',
  FLOORS: '/dashboard/floors',
} as const

export const QUERY_KEYS = {
  ROOMS: ['rooms'] as const,
  ROOM: (id: number) => ['rooms', id] as const,
  GUESTS: ['guests'] as const,
  GUEST: (id: number) => ['guests', id] as const,
  RESERVATIONS: ['reservations'] as const,
  RESERVATION: (id: number) => ['reservations', id] as const,
  FLOORS: ['floors'] as const,
  FLOOR: (id: number) => ['floors', id] as const,
} as const
