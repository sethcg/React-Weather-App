'use client'

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('../components/Map/MapWrapper'), { ssr: false })

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <h1 className="px-8 py-4 text-left text-3xl font-bold text-neutral-200">Weather App</h1>
        <Map />
      </div>
    </>
  )
}
