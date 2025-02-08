'use client';

import { LatLng, Marker } from 'leaflet';
import { RefObject, useState } from 'react';

// import { WiUmbrella } from 'react-icons/wi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CurrentWeather } from './WeatherType';

const iconClass =
  'bg-slate-500 hover:bg-slate-700 text-black text-lg font-extrabold p-2 rounded-xl';

interface Controls {
  markerRef: RefObject<Marker | null>;
}

export default function Controls({ markerRef }: Controls) {
  const lang = 'en';
  const units = 'imperial';

  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [previousLatLng, setPreviousLatLng] = useState<LatLng | null>(null);

  const handleProcess = async () => {
    if (!markerRef.current) return;
    const latLng = markerRef.current.getLatLng();

    // Fetch only if the Marker LatLng has changed
    if (
      !previousLatLng ||
      (previousLatLng.lat !== latLng.lat && previousLatLng.lng !== latLng.lng)
    ) {
      // Fetch weather data
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&units=${units}&lang=${lang}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(`[JSON]: ${JSON.stringify(json)}`);
          setWeather(json as CurrentWeather);
        })
        .then(() => {
          // Set previousLatLng to avoid duplicate fetching
          setPreviousLatLng(latLng);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-8 px-20">
        <button className={iconClass} onClick={handleProcess}>
          <FaMapMarkerAlt size={24} strokeWidth={2.5} />
        </button>
        <h1>Latitude: {weather?.coord.lat}</h1>
        <h1>Longitude: {weather?.coord.lon}</h1>
      </div>
    </>
  );
}
