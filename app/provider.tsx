'use client'

import { useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type User = {
  badgeId: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (badgeId: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedUser = sessionStorage.getItem('currentUser')

    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }

    setLoading(false)
  }, [])

  function login(badgeId: string) {
    const newUser = { badgeId }

    setUser(newUser)
    sessionStorage.setItem('currentUser', JSON.stringify(newUser))
  }

  function logout() {
    setUser(null)
    sessionStorage.removeItem('currentUser')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
