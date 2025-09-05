'use client'

import { FunctionComponent, MouseEvent } from 'react'

export const MapComponent: FunctionComponent = () => {
  return (
    <div className="relative min-h-[calc(100%-4rem)] w-full flex-grow">
      <div
        id="map"
        className="border-border pointer-events-auto size-full border-4"
        onContextMenu={(event: MouseEvent) => {
          // Disable left click context menu, so that left click can remove map markers
          event.preventDefault()
        }}
      />
    </div>
  )
}
