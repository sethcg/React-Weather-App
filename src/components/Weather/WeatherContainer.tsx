'use client'

import { FunctionComponent } from 'react'
import { WeatherIcon } from './WeatherIcon'
import { WeatherItem } from './WeatherItem'
import { CurrentWeather } from './WeatherType'

import * as countryJson from '../../app/lib/country.json'
const countries: Array<Country> = countryJson.data

interface Country {
  Name: string
  Code: string
}

const getLatitude = (weather: CurrentWeather | null): string => {
  return weather ? weather.coord.lat.toFixed(3) : ''
}

const getLongitude = (weather: CurrentWeather | null): string => {
  return weather ? weather.coord.lon.toFixed(3) : ''
}

const roundTemperature = (num: number | undefined): string => {
  return num ? Math.round(num).toString() : ''
}

const getDescription = (description: string | undefined): string => {
  // CAPITALIZE THE FIRST LETTER OF THE DESCRIPTION
  return description ? `${description[0].toUpperCase()}${description.slice(1)}` : ''
}

const getCountryName = (weather: CurrentWeather | null): string => {
  if (!weather) return ''
  const name: string | undefined = countries.find((data: Country) => data.Code == weather.sys.country)?.Name
  return name ?? ''
}

const getLocalityName = (weather: CurrentWeather | null): string => {
  return weather ? `${weather.name}` : ''
}

interface Props {
  weatherRef: CurrentWeather | null
}

export const WeatherContainer: FunctionComponent<Props> = ({ weatherRef }) => {
  return (
    <div className="flex w-full flex-grow flex-col items-center gap-2 p-2">
      <div className="flex min-h-[168px] items-center">
        <WeatherIcon iconId={weatherRef?.weather[0]?.id} iconCode={weatherRef?.weather[0]?.icon} />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-2">
        <WeatherItem header={'Country'} value={getCountryName(weatherRef)} />
        <WeatherItem header={'Locality'} value={getLocalityName(weatherRef)} />
        <WeatherItem header={'Latitude'} value={getLatitude(weatherRef)} />
        <WeatherItem header={'Longitude'} value={getLongitude(weatherRef)} />
        <WeatherItem header={'Description'} value={getDescription(weatherRef?.weather[0].description)} />
        <WeatherItem header={'Min Temperature'} value={roundTemperature(weatherRef?.main.temp_min)} isTemperature={true} />
        <WeatherItem header={'Max Temperature'} value={roundTemperature(weatherRef?.main.temp_max)} isTemperature={true} />
      </div>
    </div>
  )
}
