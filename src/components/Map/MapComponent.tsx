'use client'

import { FunctionComponent, MouseEvent } from 'react'

export const MapComponent: FunctionComponent = () => {
  return (
    <div className="relative min-h-[calc(100%-4rem)] w-full flex-grow">
      <div
        id="map"
        className="pointer-events-auto size-full border-4 border-neutral-700"
        onContextMenu={(event: MouseEvent) => {
          // Disable left click context menu, so that left click can remove map markers
          event.preventDefault()
        }}
      />
    </div>
  )
}
