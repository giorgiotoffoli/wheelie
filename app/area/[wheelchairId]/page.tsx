'use client'
import { Scanner } from '@yudiel/react-qr-scanner'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AreaPage() {
  const [here, setHere] = useState(false)

  const router = useRouter()

  const params = useParams()
  const wheelchairId = params.wheelchairId as string

  const area = 'A2'

  return (
    <div>
      <div className="w-full h-full text-center pt-24">
        <h1 className="font-bold text-3xl">
          {here ? 'Scan Area QR Code' : `Bring ${wheelchairId} to`}
        </h1>
        {here && (
          <p className="opacity-75 text-lg">
            Having trouble finding it? Refer to the{' '}
            <a href="#" className="underline">
              map
            </a>
          </p>
        )}
        <div className="flex justify-center align-middle pt-12">
          <div className="w-md h-md mx-12">
            {here ? (
              <Scanner
                onScan={(result) =>
                  result.forEach((code) => {
                    if (code.rawValue === area) {
                      router.push('/confirm')
                    } else {
                      router.push(
                        `/wrong?correctarea=${area}&currentarea=${code.rawValue}`,
                      )
                    }
                  })
                }
                onError={(error) => console.log(error?.message)}
              />
            ) : (
              <h2 className="text-7xl font-bold">{area}</h2>
            )}
          </div>
        </div>
        <button
          className="mt-12 p-2 border-2 border-white rounded-2xl bg-white text-black hover:bg-transparent transition duration-0.5s hover:text-white hover:cursor-pointer"
          onClick={() => setHere((here) => !here)}
        >
          <p>{here ? '← Go back' : "I'm here"}</p>
        </button>
      </div>
    </div>
  )
}
