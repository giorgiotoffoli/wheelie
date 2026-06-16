'use client'

import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import type { BarcodeFormat } from 'barcode-detector'

type ScannerBoxProps = {
  mode?: 'qr' | 'barcode'
  onValue: (value: string) => void
  className?: string
}

const QR_FORMATS: BarcodeFormat[] = ['qr_code']

const BARCODE_FORMATS: BarcodeFormat[] = [
  'code_128',
  'code_39',
  'code_93',
  'ean_13',
  'ean_8',
  'upc_a',
  'upc_e',
]

export default function ScannerBox({
  mode = 'qr',
  onValue,
  className = '',
}: ScannerBoxProps) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-2xl ${className}`}
    >
      <Scanner
        paused={paused}
        formats={mode === 'barcode' ? BARCODE_FORMATS : QR_FORMATS}
        constraints={{
          facingMode: 'environment',
        }}
        onScan={(codes) => {
          const value = codes[0]?.rawValue
          if (!value) return

          setPaused(true)
          onValue(value)
        }}
        onError={(error) => {
          console.log('Scanner error:', error)
        }}
        styles={{
          container: {
            width: '100%',
            height: '100%',
          },
          video: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      />
    </div>
  )
}
