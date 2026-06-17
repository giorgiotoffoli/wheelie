import { Suspense } from 'react'
import ConfirmationContet from './ConfirmationContent'

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmationContet />
    </Suspense>
  )
}
