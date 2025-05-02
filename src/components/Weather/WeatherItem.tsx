'use client'

import { FunctionComponent } from 'react'

interface Props {
  header: string
  value: string
  isTemperature?: boolean
}

export const WeatherItem: FunctionComponent<Props> = ({ header, value, isTemperature = false }) => {
  return (
    <div className="flex w-full flex-row gap-2 text-2xl">
      <h1 className="">{`${header}:`}</h1>
      <h1 className="flex flex-row gap-1">
        {value}
        <span className="text-sm font-extrabold">{isTemperature && value ? '°F' : ''}</span>
      </h1>
    </div>
  )
}
