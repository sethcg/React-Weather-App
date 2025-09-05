'use client'

import { FunctionComponent } from 'react'
import { Marker } from 'leaflet'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { clsx } from 'clsx'

const roundCoordinate = (num: number): string => {
  return num.toFixed(3)
}

interface Props {
  handleProcess: () => Promise<void>
  mapMarker: Marker
}

export const WeatherButton: FunctionComponent<Props> = ({ handleProcess, mapMarker }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between px-2">
      <button
        aria-label="weather"
        className={clsx(
          'w-full cursor-pointer rounded-xl p-2',
          'bg-success text-black',
          'hover:bg-success/90 hover:drop-shadow-success/40 hover:drop-shadow-md',
        )}
        onClick={handleProcess}>
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
