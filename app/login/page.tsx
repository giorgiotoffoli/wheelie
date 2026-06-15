'use client'

import { BarcodeScanner } from '@thewirv/react-barcode-scanner'
import { useEffect } from 'react'
import { useAuth } from '../provider'
import { useRouter } from 'next/navigation'

const scannerStyle: React.CSSProperties = {
  height: '12px',
  width: '100%',
}

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
      <div className="mt-24">
        <BarcodeScanner
          onSuccess={(badgeId) => login(badgeId)}
          onError={() => console.log("Can't read it")}
          // Styling
          containerStyle={{
            width: '100%',
            maxWidth: '350px',
            height: '150px',
            margin: '0 auto',
            overflow: 'hidden',
          }}
          videoContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          videoStyle={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}
