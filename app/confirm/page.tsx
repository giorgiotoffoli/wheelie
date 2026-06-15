'use client'

import { redirect } from 'next/navigation'

export default function ConfirmPage() {
  return (
    <div>
      <div className="w-full h-full text-center pt-24 flex align-middle flex-col">
        <h1 className="font-bold text-3xl">Thank you!</h1>

        <p className="opacity-75 text-lg">
          You have been awarded <span className="font-bold">5 $UR</span>. See
          your{' '}
          <a href="#" className="underline">
            balance
          </a>
        </p>

        <button
          className="mt-12 p-2 border-2 border-white rounded-2xl bg-white text-black hover:bg-transparent transition duration-0.5s hover:text-white hover:cursor-pointer mx-12"
          onClick={() => redirect('/wheelchair')}
        >
          <p>Scan another</p>
        </button>
      </div>
    </div>
  )
}
