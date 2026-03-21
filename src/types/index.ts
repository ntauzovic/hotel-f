// ─── API Response wrapper ────────────────────────────────────────────────────

export type ApiResponse<T> = {
  data: T
  message?: string
}

export type PaginatedResponse<T> = {
  data: T[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

// ─── Room ────────────────────────────────────────────────────────────────────

export type Room = {
  id: number
  number: string
  floor_id: number
  type: 'single' | 'double' | 'suite'
  status: 'available' | 'occupied' | 'maintenance'
  price_per_night: number
  images: RoomImage[]
  floor?: Floor
  created_at: string
  updated_at: string
}

export type RoomImage = {
  id: number
  room_id: number
  url: string
  is_primary: boolean
}

// ─── Floor ───────────────────────────────────────────────────────────────────

export type Floor = {
  id: number
  number: number
  name: string
  rooms?: Room[]
  created_at: string
  updated_at: string
}

// ─── Guest ───────────────────────────────────────────────────────────────────

export type Guest = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  date_of_birth?: string
  created_at: string
  updated_at: string
}

// ─── Reservation ─────────────────────────────────────────────────────────────

export type Reservation = {
  id: number
  guest_id: number
  room_id: number
  check_in: string
  check_out: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  total_price: number
  notes?: string
  guest?: Guest
  room?: Room
  created_at: string
  updated_at: string
}
