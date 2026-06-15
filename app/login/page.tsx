'use client'

import { BarcodeScanner } from '@thewirv/react-barcode-scanner'
import { useEffect } from 'react'
import { useAuth } from '../provider'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { user, login } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user, router])

  return (
    <div className="flex flex-col justify-between mx-4 mt-24">
      <h1 className="text-2xl font-bold text-center">
        Good morning, please scan your badge to log in
      </h1>
      <BarcodeScanner
        onSuccess={(badgeId) => login(badgeId)}
        onError={() => console.log("Can't read it")}
      />
    </div>
  )
}
