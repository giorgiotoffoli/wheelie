'use client'

import { Scanner } from '@yudiel/react-qr-scanner'
import { useEffect, useState } from 'react'
import { useAuth } from '../provider'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { user, login } = useAuth()
  const router = useRouter()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user, router])

  return (
    <div className="flex flex-col items-center mx-4 mt-24">
      <h1 className="text-2xl font-bold text-center">
        Good morning, please scan your badge to log in
      </h1>

      <div className="mt-12 w-full max-w-xl h-40 overflow-hidden rounded-2xl">
        <Scanner
          formats={[
            'code_128',
            'code_39',
            'code_93',
            'ean_13',
            'ean_8',
            'upc_a',
            'upc_e',
          ]}
          constraints={{
            facingMode: 'environment',
          }}
          paused={paused}
          onScan={(results) => {
            const badgeId = results[0]?.rawValue

            if (!badgeId) return

            setPaused(true)
            login(badgeId)
            router.replace('/')
          }}
          onError={(error) => {
            console.log("Can't read it", error)
          }}
          styles={{
            container: {
              width: '100%',
              height: '100%',
            },
            video: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          }}
        />
      </div>
    </div>
  )
}
