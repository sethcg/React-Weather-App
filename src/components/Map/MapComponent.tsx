'use client'

import { FunctionComponent } from 'react'

export const MapComponent: FunctionComponent = () => (
  <div className="relative min-h-[calc(100%-4rem)] w-full flex-grow">
    <div id="map" className="size-full border-4 border-neutral-700" />
  </div>
)
