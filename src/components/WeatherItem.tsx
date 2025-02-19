'use client';

interface WeatherItem {
    header: string
    value: string
    temp?: boolean
  }
  

export default function WeatherIcon({ header, value, temp }: WeatherItem) {
    return (
        <div className="flex flex-row w-full gap-2 text-2xl">
            <h1 className="">{`${header}:`}</h1>
            <h1 className="flex flex-row gap-1">{value}
                <span className="text-sm font-extrabold">{temp && value ? '°F' : ''}</span>
            </h1>
        </div>
    );
}