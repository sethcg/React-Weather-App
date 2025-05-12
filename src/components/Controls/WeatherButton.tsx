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
  const buttonClass = 'bg-emerald-600/80 hover:bg-emerald-500/80 p-2 rounded-xl'

  return (
    <div className="flex w-full flex-row items-center justify-between px-2">
      <button aria-label="weather" className={`${buttonClass} w-full cursor-pointer px-2`} onClick={handleProcess}>
        <div className="flex w-full flex-row items-center justify-between px-2">
          <FaMapMarkerAlt className="text-neutral-950" size={24} strokeWidth={2.5} />
          <div className="flex-grow text-xl font-bold text-neutral-950">
            <span>Lat: {roundCoordinate(mapMarker.getLatLng().lat)}</span>
          </div>
          <div className="flex-grow text-xl font-bold text-neutral-950">
            <span>Lon: {roundCoordinate(mapMarker.getLatLng().lng)}</span>
          </div>
        </div>
      </button>
    </div>
  )
}
