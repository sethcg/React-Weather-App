'use client';

import WeatherIcon from './WeatherIcon';
import WeatherItem from './WeatherItem';
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
    <div className="flex flex-grow w-full flex-col items-center gap-2 p-2">
      <div className="flex min-h-[168px] items-center">
        <WeatherIcon iconId={weatherRef?.weather[0]?.id} iconCode={weatherRef?.weather[0]?.icon} />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-2">
        <WeatherItem header={"Latitude"} value={getLatitude(weatherRef)} />
        <WeatherItem header={"Longitude"} value={getLongitude(weatherRef)} />
        <WeatherItem header={"Description"} value={formatDescription(weatherRef?.weather[0].description)} />
        <WeatherItem header={"Min Temperature"} value={roundTemperature(weatherRef?.main.temp_min)} temp={true} />
        <WeatherItem header={"Max Temperature"} value={roundTemperature(weatherRef?.main.temp_max)} temp={true} />
      </div>
    </div>
  );
}
