export type CurrentWeather = {
  coord: Coord // Latitude and Longitude
  weather: Weather[] // Weather details
  base: string // [Internal parameter]
  main: Main // Temperature, Pressure, Humidity, Sea and Ground level
  visibility: number // Average visibility, meters. (The maximum value of the visibility is 10 km)
  wind: Wind // Wind: Speed, Gust, and Direction
  rain?: Rain // Precipitation, mm/h
  snow?: Snow // Precipitation, mm/h
  clouds: Clouds // Cloudiness, %
  dt: number // Time of data calculation
  sys: Sys // System Information
  timezone: number // Shift in seconds from UTC
  id: number // City ID (*DEPRECATED*)
  name: string // City Name (*DEPRECATED*)
  cod: number // [Internal parameter]
}

export type Coord = {
  lat: number // Latitude
  lon: number // Longitude
}

export type Weather = {
  id: number // Weather Condition ID (https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
  main: string // Group of weather parameters (Rain, Snow etc.)
  description: string // Weather condition description
  icon: string // Weather icon ID (https://openweathermap.org/weather-conditions#How-to-get-icon-URL)
}

export type Main = {
  temp: number // Temperature (Default: kelvin, Metric: Celsius, Imperial: Fahrenheit)
  feels_like: number // "Feels Like" temperature (Default: kelvin, Metric: Celsius, Imperial: Fahrenheit)
  temp_min: number // Minimum Temperature (Default: kelvin, Metric: Celsius, Imperial: Fahrenheit)
  temp_max: number // Maximum Temperature (Default: kelvin, Metric: Celsius, Imperial: Fahrenheit)
  pressure: number // Atmospheric pressure on the sea level, hPa
  humidity: number // Humidity, %
  sea_level: number // Sea level
  grnd_level: number // Ground level
}

export type Wind = {
  wind_speed: number // Wind speed (Default: meter/sec, Metric: metre/sec, Imperial: miles/hour)
  wind_deg: number // Wind gust (Default: meter/sec, Metric: metre/sec, Imperial: miles/hour)
  wind_gust?: number // Wind direction, degrees
}

export type Clouds = {
  all: number // Cloudiness, %
}

export type Rain = {
  '1h': number // Precipitation, mm/h
}

export type Snow = {
  '1h': number // Precipitation, mm/h
}

export type Sys = {
  type: number // [Internal parameter]
  id: number // [Internal parameter]
  country: string // Country code (2-digit)
  sunrise: number // Sunrise time
  sunset: number // Sunset time
}
