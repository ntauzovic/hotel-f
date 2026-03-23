import { useQuery } from '@tanstack/react-query'
import { getRooms, getRoom } from '@/lib/api/endpoints'
import { QUERY_KEYS } from '@/constants'

export function useRooms() {
  return useQuery({
    queryKey: QUERY_KEYS.ROOMS,
    queryFn: () => getRooms(),
  })
}

export function useRoom(id: number) {
  return useQuery({
    queryKey: QUERY_KEYS.ROOM(id),
    queryFn: () => getRoom(id),
    enabled: !!id,
  })
}
