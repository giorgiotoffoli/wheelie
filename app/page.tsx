'use client'
import { redirect } from 'next/navigation'
import { useAuth } from './provider'

export default function Home() {
  const { user } = useAuth()

  if (!user) {
    redirect('/login')
  } else {
    redirect('/wheelchair')
  }
}
