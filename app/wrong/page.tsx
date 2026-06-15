import { Suspense } from 'react'

export default function WrongAreaPage() {
  return (
    <Suspense
      fallback={<p className="text-center mt-24">Loading...</p>}
    ></Suspense>
  )
}
