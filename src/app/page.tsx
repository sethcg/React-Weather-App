'use client';

import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/MapWrapper'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <h1 className="ps-12 pt-8 text-left text-3xl font-bold">Weather App</h1>
        <Map />
      </div>
    </>
  );
}
