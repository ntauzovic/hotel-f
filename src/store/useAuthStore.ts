import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: number
  name: string
  email: string
}

type AuthStore = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => void
  logout: () => void
}

// persist middleware — automatski čuva state u localStorage
const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user, token) => {
        localStorage.setItem('token', token)
        set({ user, token, isAuthenticated: true })
      },

      logout: () => {
        localStorage.removeItem('token')
        set({ user: null, token: null, isAuthenticated: false })
      },
    }),
    {
      name: 'auth-storage', // ključ u localStorage
    }
  )
)

export default useAuthStore
