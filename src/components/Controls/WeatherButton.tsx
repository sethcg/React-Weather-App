'use client'

import { FunctionComponent } from 'react'
import { Marker } from 'leaflet'
import { FaMapMarkerAlt } from 'react-icons/fa'

const roundCoordinate = (num: number): string => {
  return num.toFixed(3)
}

interface Props {
  handleProcess: () => Promise<void>
  mapMarker: Marker
}

export const WeatherButton: FunctionComponent<Props> = ({ handleProcess, mapMarker }) => {
  const buttonClass = 'w-full rounded-xl cursor-pointer p-2'
  const buttonHoverClass = 'bg-emerald-700 hover:bg-emerald-600 hover:drop-shadow-md hover:drop-shadow-emerald-500/50 '

  return (
    <div className="flex w-full flex-row items-center justify-between px-2">
      <button aria-label="weather" className={`${buttonClass} ${buttonHoverClass} text-neutral-950`} onClick={handleProcess}>
        <div className="flex w-full flex-row items-center justify-between px-2">
          <FaMapMarkerAlt size={24} strokeWidth={2.5} />
          <div className="flex-grow text-xl font-bold">
            <span>Lat: {roundCoordinate(mapMarker.getLatLng().lat)}</span>
          </div>
          <div className="flex-grow text-xl font-bold">
            <span>Lon: {roundCoordinate(mapMarker.getLatLng().lng)}</span>
          </div>
        </div>
      </button>
    </div>
  )
}
