'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '../provider'
import { MOCK_USER, MOCK_WHEELCHAIR } from '../mock-data'
import ScannerBox from '@/components/scannerbox'
import WheelchairCard from '@/components/wheelchair/wheelchair-card'
import { InfoIcon } from 'lucide-react'

function normalize(value: string) {
  return value.trim().toLowerCase().replaceAll('-', ' ')
}

export default function AreaScanPage() {
  const router = useRouter()
  const { user } = useAuth()

  const badgeId = user?.badgeId ?? MOCK_USER.badgeId
  const badgeEnding = badgeId.slice(-4)

  function handleAreaScan(scannedArea: string) {
    console.log('Scanned area:', scannedArea)

    if (normalize(scannedArea) === normalize(MOCK_WHEELCHAIR.correctArea)) {
      router.replace('/success')
    } else {
      router.replace('/wrong')
    }
  }

  return (
    <main className="h-full bg-black px-5 text-white">
      <div className="mx-auto max-w-md">
        <p className="text-center text-white/60 mt-2">
          Logged in as Badge •••{badgeEnding}
        </p>

        <section>
          <ScannerBox
            mode="qr"
            onValue={handleAreaScan}
            className="mt-6 aspect-square w-5/6 mx-auto"
          />
        </section>

        <section className="mt-8">
          <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-red-400">
            Step 1 of 2
          </span>

          <h1 className="mt-6 text-3xl font-black tracking-tight">
            Scan area QR code
          </h1>

          <p className="mt-2 max-w-sm text-base leading-relaxed text-white/55">
            Now scan the QR code posted in the room or hallway.
          </p>
        </section>

        <section className="mt-4">
          <WheelchairCard
            wheelchairId={MOCK_WHEELCHAIR.name}
            correctArea={MOCK_WHEELCHAIR.modelNumber}
          />
        </section>

        <div className="mt-6">
          <p className="text-base text-center text-white/40 flex justify-center items-center gap-2">
            <span className="text-red-400 ">
              <InfoIcon className="h-4 w-4" />
            </span>
            <span className="gap-2 justify-center items-center">
              Having trouble?
            </span>
          </p>
        </div>
      </div>
    </main>
  )
}
