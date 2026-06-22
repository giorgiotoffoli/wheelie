'use client'

import { useAuth } from '@/app/provider'
import ScannerBox from '@/components/scannerbox'
import { CircleQuestionMarkIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MOCK_WHEELCHAIRS } from '../mock-data'

export default function ScanWheelchairPage() {
  const router = useRouter()
  const { user } = useAuth()

  const badgeEnding = user?.badgeId.slice(-4)

  function handleWheelchairScan(wheelchairId: string) {
    const wheelchair = MOCK_WHEELCHAIRS.find((wc) => wc.id === wheelchairId)
    if (wheelchair) {
      sessionStorage.setItem('currentWheelchair', JSON.stringify(wheelchair))

      console.log(
        `Wheelchair ${wheelchair?.name} belongs to ${wheelchair?.assignedArea}`,
      )
      router.push('/scan-area')
    } else {
      router.push('/scan-wheelchair')
      throw new Error(
        'This wheelchair could not be identified. Please try again',
      )
    }
  }

  return (
    <main className="h-full bg-black px-5 text-white">
      <div className="mx-auto max-w-md">
        <p className="text-center text-white/60 mt-2">
          Logged in as, •••{badgeEnding}
        </p>

        {/* Pulsing dot */}
        {/* <span className="relative flex size-3 left-51 top-12 z-10">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-500/80"></span>
        </span> */}

        <section>
          <ScannerBox
            mode="qr"
            onValue={handleWheelchairScan}
            className="mt-6 aspect-square w-5/6 mx-auto"
          />
        </section>

        <section className="mt-8">
          <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-red-400">
            Step 1 of 2
          </span>

          <h1 className="mt-6 text-3xl font-black tracking-tight">
            Scan wheelchair QR code
          </h1>

          <p className="mt-2 max-w-sm text-base leading-relaxed text-white/55">
            Point your camera at the QR label attached to the chair.
          </p>
        </section>

        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="text-red-400">
            <CircleQuestionMarkIcon className="h-4 w-4" />
          </span>

          <p className="text-base text-center text-white/40 ">
            Need help finding the QR code?
          </p>
        </div>
      </div>
    </main>
  )
}
