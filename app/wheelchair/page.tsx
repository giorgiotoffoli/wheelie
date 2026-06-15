'use client'
import { Scanner } from '@yudiel/react-qr-scanner'
import { useRouter } from 'next/navigation'
import { useAuth } from '../provider'
import LogoutButton from '@/components/logout-button'

export default function WheelchairPage() {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <div className="w-full h-full text-center pt-24">
      <h2 className="text-lg">Hello, Badge#{user?.badgeId} </h2>
      <h1 className="font-bold text-3xl">Scan Wheelchair QR Code</h1>
      <p className="opacity-75 text-lg">Found behind the back strap</p>
      <div className="flex justify-center align-middle pt-12">
        <div className="w-md h-md mx-12">
          <Scanner
            onScan={(result) =>
              result.forEach((code) => router.push(`/area/${code.rawValue}`))
            }
            onError={(error) => console.log(error?.message)}
          />
        </div>
      </div>
      <LogoutButton />
    </div>
  )
}
