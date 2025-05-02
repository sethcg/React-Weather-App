'use client'

import { FunctionComponent, useState } from 'react'
import { LatLng, Marker } from 'leaflet'
import { Weather } from '../Weather/Weather'
import { CurrentWeather } from '../Weather/WeatherType'
import { WeatherButton } from '../Controls/WeatherButton'
import { RemoveButton } from '../Controls/RemoveButton'

interface Props {
  mapMarker: Marker
  removeMarker: () => Promise<void>
  zoomToMarker: (latLng: LatLng) => Promise<void>
}

export const MapData: FunctionComponent<Props> = ({ mapMarker, removeMarker, zoomToMarker }) => {
  const lang = 'en'
  const units = 'imperial'

  const [weather, setWeather] = useState<CurrentWeather | null>(null)
  const [previousLatLng, setPreviousLatLng] = useState<LatLng | null>(null)

  const handleProcess = async () => {
    if (!mapMarker) return
    const latLng = mapMarker.getLatLng()

    // Fetch only if the Marker LatLng has changed
    if (!previousLatLng || (previousLatLng.lat !== latLng.lat && previousLatLng.lng !== latLng.lng)) {
      // Fetch weather data
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&units=${units}&lang=${lang}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
      )
        .then(response => response.json())
        .then(json => {
          // console.log(`[JSON]: ${JSON.stringify(json)}`);
          setWeather(json as CurrentWeather)
        })
        .then(() => {
          // Set previousLatLng to avoid duplicate fetching
          setPreviousLatLng(latLng)
          zoomToMarker(latLng)
        })
        .catch(error => console.error(error))
    }
  }

  const handleRemove = async () => {
    removeMarker()
    setWeather(null)
  }

  return (
    <div className="w-full max-w-[23rem] flex-grow">
      <div className="flex size-full flex-col items-end justify-between border-4 border-neutral-700 py-2">
        <WeatherButton handleProcess={handleProcess} mapMarker={mapMarker} />
        <Weather weatherRef={weather} />
        <RemoveButton handleRemove={handleRemove} />
      </div>
    </div>
  )
}
