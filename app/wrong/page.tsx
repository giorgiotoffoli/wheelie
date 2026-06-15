'use client'
import { useRouter } from 'next/navigation'

export default function WrongAreaPage() {
  const router = useRouter()
  return (
    <div>
      <div className="h-full text-center pt-24 flex align-middle flex-col">
        <h1 className="font-bold text-3xl">Oops, wrong area!</h1>

        <p className="opacity-75 text-lg mx-4">
          Please check the wheelchair area to ensure it is correct.{' '}
          <a href="#" className="underline">
            Need help?
          </a>
        </p>

        <button
          className="mt-12 p-2 border-2 border-white rounded-2xl bg-white text-black hover:bg-transparent transition duration-0.5s hover:text-white hover:cursor-pointer mx-12"
          onClick={() => router.push('/wheelchair')}
        >
          <p>Scan another</p>
        </button>
      </div>
    </div>
  )
}
