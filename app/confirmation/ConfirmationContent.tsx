'use client'

import { ArrowRightIcon, CheckIcon, TriangleAlertIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ConfirmationPage() {
  const router = useRouter()
  const params = useSearchParams()

  const isCorrectArea = params.get('isCorrectArea')
  const assignedArea = params.get('assignedArea')
  const scannedArea = params.get('scannedArea')

  const isCorrect = 'true' === isCorrectArea

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white">
      <div className="mx-auto max-w-md">
        <section className="mt-14 text-center">
          <div
            className={`mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 ${isCorrect ? 'border-green-500/80 bg-green-500/15 text-green-400' : 'border-red-500/80 bg-red-500/15 text-red-400'} text-6xl shadow-[0_0_80px_rgba(239,68,68,0.25)]`}
          >
            {isCorrect ? (
              <CheckIcon className="h-14 w-14" />
            ) : (
              <TriangleAlertIcon className="h-14 w-14" />
            )}
          </div>

          <h1 className="mt-10 text-5xl font-black tracking-tight">
            {isCorrect ? 'Thank you!' : 'Wrong area'}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-white/55">
            {isCorrect
              ? "You've been awarded 5pts for your hard work!"
              : 'This wheelchair appears to be in the wrong location.'}
          </p>
        </section>

        {!isCorrect && (
          <section className="mt-6 rounded-2xl border border-red-500/70 bg-red-500/10 p-5">
            <p className="text-xl font-bold">
              You're at <span className="text-red-400">{scannedArea}</span>.
            </p>

            <p className="mt-1 text-lg text-white/80">
              This wheelchair belongs to{' '}
              <span className="font-bold text-red-400">{assignedArea}</span>.
            </p>
          </section>
        )}
        <button
          onClick={() =>
            router.replace(`${isCorrect ? '/scan-wheelchair' : '/scan-area'}`)
          }
          className={`mt-8 w-full rounded-2xl ${isCorrect ? 'bg-green-500' : 'bg-red-500'} px-6 py-5 text-xl font-bold text-white shadow-lg shadow-red-500/20`}
        >
          Scan another area
        </button>

        <button className="mt-4 w-full rounded-2xl border border-white/10 bg-white/4 px-6 py-5 text-xl font-bold text-white flex justify-center items-center gap-2">
          Report issue <ArrowRightIcon />
        </button>
      </div>
    </main>
  )
}
