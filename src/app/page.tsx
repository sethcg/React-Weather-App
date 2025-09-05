'use client'

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('../components/Map/MapWrapper'), { ssr: false })

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <h1 className="px-8 py-4 text-3xl font-bold select-none">Weather App</h1>
        <Map />
      </div>
    </>
  )
}
