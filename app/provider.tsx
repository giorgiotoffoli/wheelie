'use client'

import { MOCK_USERS, User } from './mock-data'
import { useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

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
    const newUser = MOCK_USERS.find((mockUser) => mockUser.badgeId === badgeId)

    if (newUser) {
      setUser(newUser)
      sessionStorage.setItem('currentUser', JSON.stringify(newUser))
      router.push('/scan-wheelchair')
    } else {
      router.push('/')
      throw new Error(
        'No user found, please check that the user is in the database and that the badgeId is correct',
      )
    }
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
