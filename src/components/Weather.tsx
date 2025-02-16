'use client';

import WeatherIcon from './WeatherIcon';
import { CurrentWeather } from './WeatherType';

interface Weather {
  weatherRef: CurrentWeather | null;
}

function getLatitude(weather: CurrentWeather | null): string {
  return weather ? weather.coord.lat.toFixed(3) : '';
}

function getLongitude(weather: CurrentWeather | null): string {
  return weather ? weather.coord.lon.toFixed(3) : '';
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
    <div className="flex w-full flex-col items-center justify-between gap-8 p-2">
      <div className="flex min-h-[168px] items-center">
        <WeatherIcon iconId={weatherRef?.weather[0]?.id} iconCode={weatherRef?.weather[0]?.icon} />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-8">
        <div>
          <h1>Latitude: {getLatitude(weatherRef)}</h1>
        </div>
        <div>
          <h1>Longitude: {getLongitude(weatherRef)}</h1>
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
