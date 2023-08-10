import * as React from 'react'
import { Metadata } from 'next'

import Oops from '@/assets/Oops.svg'

export const metadata: Metadata = {
  title: 'Not Found'
}

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center text-center">
      <Oops className="max-h-[40rem] max-w-[40rem]" />
      <h1 className="mb-4 text-xl md:text-2xl">Page Not Found</h1>
      <a className="text-blue-500" href="/">
        Back to home
      </a>
    </div>
  )
}
