'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '../provider'
import ScannerBox from '@/components/scannerbox'
import { InfoIcon, MapPinIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Wheelchair } from '../mock-data'

export default function ScanAreaPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [wheelchair, setWheelchair] = useState<Wheelchair | null>(null)
  const [here, setHere] = useState(false)

  useEffect(() => {
    const currentWheelchair = sessionStorage.getItem('currentWheelchair')
    if (currentWheelchair) {
      setWheelchair(JSON.parse(currentWheelchair))
    }
  }, [])

  const badgeEnding = user?.badgeId.slice(-4)

  function handleAreaScan(scannedArea: string) {
    console.log('Scanned area:', scannedArea)

    const isCorrectArea = scannedArea === wheelchair?.assignedArea
    router.push(
      `/confirmation?isCorrectArea=${isCorrectArea}&assignedArea=${wheelchair?.assignedArea}&scannedArea=${scannedArea}`,
    )
  }

  return (
    <main className="h-full bg-black px-5 text-white">
      <div className="mx-auto max-w-md">
        <p className="text-center text-white/60 mt-2">
          Logged in as Badge •••{badgeEnding}
        </p>
        {here ? (
          <>
            <section className="mt-8">
              <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-red-400">
                Step 2 of 2
              </span>

              <h1 className="mt-6 text-3xl font-black tracking-tight">
                Scan area QR code
              </h1>

              <p className="mt-2 max-w-sm text-base leading-relaxed text-white/55">
                Now scan the QR code posted in the room or hallway.
              </p>
            </section>

            <section>
              <ScannerBox
                mode="qr"
                onValue={handleAreaScan}
                className="mt-6 aspect-square w-5/6 mx-auto"
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
          </>
        ) : (
          <div className="flex flex-col items-center justify-between gap-3 text-center mt-24">
            <MapPinIcon className="h-36 w-36 text-red-500/65 " />
            <p className="text-2xl">
              Please make your way to{' '}
              <span className="text-red-500 font-bold whitespace-nowrap">
                {wheelchair?.assignedArea}
              </span>
            </p>
            <button
              onClick={() => setHere((here) => !here)}
              className="outline-2 outline-white p-4 rounded-4xl mt-12 bg-white text-black"
            >
              I'm Here
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
