'use client'

import { useRouter } from 'next/navigation'
import { MOCK_WHEELCHAIR, MOCK_WRONG_AREA } from '../mock-data'
import WheelchairCard from '@/components/wheelchair/wheelchair-card'

export default function WrongPage() {
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

        <section className="mt-14 text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-500/80 bg-red-500/15 text-6xl text-red-400 shadow-[0_0_80px_rgba(239,68,68,0.25)]">
            !
          </div>

          <h1 className="mt-10 text-5xl font-black tracking-tight">
            Wrong area
          </h1>

          <p className="mt-4 text-xl leading-relaxed text-white/55">
            This wheelchair appears to be in the wrong location.
          </p>
        </section>

        <section className="mt-10 rounded-4xl border border-white/10 bg-white/4 p-6">
          <div className="flex items-center justify-between">
            <p className="text-white/50">Current area:</p>
            <p className="text-xl font-bold text-red-400">{MOCK_WRONG_AREA}</p>
          </div>

          <div className="my-5 h-px bg-white/10" />

          <div className="flex items-center justify-between">
            <p className="text-white/50">Expected area:</p>
            <p className="text-xl font-bold text-white">
              {MOCK_WHEELCHAIR.correctArea}
            </p>
          </div>
        </section>

        <section className="mt-6">
          <WheelchairCard
            wheelchairId={MOCK_WHEELCHAIR.id}
            correctArea={MOCK_WHEELCHAIR.correctArea}
          />
        </section>

        <section className="mt-6 rounded-2xl border border-red-500/70 bg-red-500/10 p-5">
          <p className="text-xl font-bold">
            You’re at <span className="text-red-400">{MOCK_WRONG_AREA}</span>.
          </p>
          <p className="mt-1 text-lg text-white/80">
            This wheelchair belongs to{' '}
            <span className="font-bold text-red-400">
              {MOCK_WHEELCHAIR.correctArea}
            </span>
            .
          </p>
        </section>

        <button
          onClick={() => router.replace('/area')}
          className="mt-8 w-full rounded-2xl bg-red-500 px-6 py-5 text-xl font-bold text-white shadow-lg shadow-red-500/20"
        >
          Scan another area
        </button>

        <button className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-xl font-bold text-white">
          Report issue ›
        </button>
      </div>
    </main>
  )
}
