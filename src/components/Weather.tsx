'use client';

import { WiDayRain } from 'react-icons/wi';
import { CurrentWeather } from './WeatherType';

interface Weather {
  weatherRef: CurrentWeather | null;
}

function roundCoordinate(num: number | undefined): string {
  return num ? num.toFixed(3) : '';
}

function roundTemperature(num: number | undefined): string {
  return num ? Math.round(num).toString() : '';
}

function formatDescription(description: string | undefined): string {
  // Capitalize the first letter of the description
  return description ? `${description[0].toUpperCase()}${description.slice(1)}` : '';
}

export default function Weather({ weatherRef }: Weather) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 px-2">
      <WiDayRain size={168} strokeWidth={0.1} />
      <div className="flex w-full flex-col items-start gap-4 px-8">
        <div>
          <h1>Latitude: {roundCoordinate(weatherRef?.coord.lat)}</h1>
        </div>
        <div>
          <h1>Longitude: {roundCoordinate(weatherRef?.coord.lon)}</h1>
        </div>
        <div>
          <h1>Description: {formatDescription(weatherRef?.weather[0].description)}</h1>
        </div>
        <div>
          <h1>Min Temp: {`${roundTemperature(weatherRef?.main.temp_min)} °F`}</h1>
        </div>
        <div>
          <h1>Max Temp: {`${roundTemperature(weatherRef?.main.temp_max)} °F`}</h1>
        </div>
      </div>
    </div>
  );
}
