import { useQuery } from '@tanstack/react-query'
import { getFloors, getFloor } from '@/lib/api/endpoints'
import { QUERY_KEYS } from '@/constants'

export function useFloors() {
  return useQuery({
    queryKey: QUERY_KEYS.FLOORS,
    queryFn: getFloors,
  })
}

export function useFloor(id: number) {
  return useQuery({
    queryKey: QUERY_KEYS.FLOOR(id),
    queryFn: () => getFloor(id),
    enabled: !!id,
  })
}
