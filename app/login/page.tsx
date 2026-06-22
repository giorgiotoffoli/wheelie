'use client'

import { useAuth } from '../provider'
import ScannerBox from '@/components/scannerbox'
import { ArrowUpRightIcon, IdCardLanyardIcon } from 'lucide-react'

export default function LoginPage() {
  const { login } = useAuth()
  function handleBadgeScan(badgeId: string) {
    login(badgeId)
  }

  return (
    <main className="flex flex-col max-h-screen bg-black px-5 text-white">
      <div className="mx-auto  max-w-md flex-col">
        <section className="mt-6 text-center">
          <h1 className="text-4xl font-black tracking-tight">Good morning</h1>
          <p className="mt-2 text-xl text-white/60">
            Scan your badge to log in
          </p>
        </section>

        <ScannerBox
          mode="barcode"
          onValue={(value) => handleBadgeScan(value)}
          className="mt-10 h-80 w-full"
        />

        <section className="mt-8 rounded-4xl border border-white/10 bg-white/4 p-6">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl">
              <IdCardLanyardIcon />
            </div>

            <div>
              <p className="font-semibold">Use your staff badge barcode</p>
              <p className="mt-1 text-white/45">
                Position the barcode within the frame to scan automatically.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-white/45">
          Having trouble scanning?{' '}
          <a href="#" className="hover:cursor-pointer">
            <span className="flex justify-center items-center text-red-400 gap-0.5">
              <span className="text-red-400">Tap here for help</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        </p>
      </div>
    </main>
  )
}
