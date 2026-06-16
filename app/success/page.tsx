'use client'

import { useRouter } from 'next/navigation'
import { MOCK_WHEELCHAIR } from '../mock-data'
import WheelchairCard from '@/components/wheelchair/wheelchair-card'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-red-500">♿</span>
            <p className="text-2xl font-bold">Wheelie</p>
          </div>
        </header>

        <section className="mt-20 text-center">
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-green-400/80 bg-green-500/15 text-7xl text-green-400 shadow-[0_0_80px_rgba(34,197,94,0.25)]">
            ✓
          </div>

          <h1 className="mt-12 text-5xl font-black tracking-tight">
            Wheelchair returned successfully
          </h1>

          <p className="mt-4 text-xl text-white/55">
            The wheelchair is in the correct area.
          </p>
        </section>

        <section className="mt-10">
          <WheelchairCard
            wheelchairId={MOCK_WHEELCHAIR.id}
            correctArea={MOCK_WHEELCHAIR.correctArea}
          />
        </section>

        <button
          onClick={() => router.replace('/wheelchair')}
          className="mt-10 w-full rounded-2xl bg-green-500 px-6 py-5 text-xl font-bold text-white shadow-lg shadow-green-500/20"
        >
          Scan another wheelchair
        </button>

        <button
          onClick={() => router.replace('/')}
          className="mt-4 w-full rounded-2xl border border-white/10 bg-white/4 px-6 py-5 text-xl font-bold text-white"
        >
          Back to home
        </button>
      </div>
    </main>
  )
}
