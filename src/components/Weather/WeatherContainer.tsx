'use client'

import { FunctionComponent } from 'react'
import { WeatherIcon } from './WeatherIcon'
import { WeatherItem } from './WeatherItem'
import { CurrentWeather, Weather } from '../../shared/WeatherType'

import { default as countryJson } from '../../app/lib/country.json'
const countries: Array<Country> = countryJson.data

interface Country {
  Name: string
  Code: string
}

const getLatitude = (weather: CurrentWeather | null): string => {
  let latitude = ''
  if (weather && weather.coord) latitude = weather.coord.lat.toFixed(3)
  return latitude
}

const getLongitude = (weather: CurrentWeather | null): string => {
  let longitude = ''
  if (weather && weather.coord) longitude = weather.coord.lon.toFixed(3)
  return longitude
}

const roundTemperature = (num: number | undefined): string => {
  return num ? Math.round(num).toString() : ''
}

const getDescription = (description: string | undefined): string => {
  // CAPITALIZE THE FIRST LETTER OF THE DESCRIPTION
  return description ? `${description[0].toUpperCase()}${description.slice(1)}` : ''
}

const getCountryName = (weather: CurrentWeather | null): string => {
  let name: string = ''
  if (weather && weather.sys) {
    const country = countries.find((data: Country) => data.Code == weather.sys.country)
    if (country) name = country.Name
  }
  return name
}

const getLocalityName = (weather: CurrentWeather | null): string => {
  return weather ? `${weather.name}` : ''
}

interface Props {
  weatherRef: CurrentWeather | null
  weather: Weather | null
}

export const WeatherContainer: FunctionComponent<Props> = ({ weatherRef, weather }) => {
  return (
    <div className="flex w-full flex-grow flex-col items-center gap-2 p-2">
      <div className="flex min-h-[168px] items-center">
        <WeatherIcon iconCode={weather?.icon} />
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-2">
        <WeatherItem header={'Country'} value={getCountryName(weatherRef)} />
        <WeatherItem header={'Locality'} value={getLocalityName(weatherRef)} />
        <WeatherItem header={'Latitude'} value={getLatitude(weatherRef)} />
        <WeatherItem header={'Longitude'} value={getLongitude(weatherRef)} />
        <WeatherItem header={'Description'} value={getDescription(weather?.description)} />
        <WeatherItem
          header={'Min Temperature'}
          value={roundTemperature(weatherRef?.main?.temp_min)}
          isTemperature={true}
        />
        <WeatherItem
          header={'Max Temperature'}
          value={roundTemperature(weatherRef?.main?.temp_max)}
          isTemperature={true}
        />
      </div>
    </div>
  )
}
