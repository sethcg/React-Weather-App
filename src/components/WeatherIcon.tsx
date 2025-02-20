'use client';

import { ElementType } from 'react';
import { IconType } from 'react-icons/lib';

import * as Icons from 'react-icons/wi';

interface WeatherIcon {
  iconId: number | undefined;
  iconCode: string | undefined;
}

export default function WeatherIcon({ iconId, iconCode }: WeatherIcon) {
  let Icon = <Icons.WiNa size={24 * 10} strokeWidth={0.01} />;

  if (!iconId || !iconCode) return Icon;
  const name = getIconName(iconId, iconCode);

  if (name && Icons[name as keyof IconType]) {
    const IconComponent = Icons[name as keyof IconType] as ElementType;
    Icon = <IconComponent size={24 * 10} strokeWidth={0.1} />;
  }

  return Icon;
}

type WeatherType = { DayIcon: string; NightIcon: string };

const WeatherCode: { [id: string]: WeatherType } = {
  // More Information Here: https://openweathermap.org/weather-conditions
  //
  // Day:     Night:      Description:
  // 01d 	    01n         Clear Skies
  // 02d 	    02n         Few Clouds
  // 03d 	    03n         Scattered Clouds
  // 04d 	    04n         Broken Clouds
  // 09d        09n         Shower Rain
  // 10d 	    10n         Rain
  // 11d 	    11n	        Thunderstorm
  // 13d 	    13n	        Snow
  // 50d 	    50n	        Mist
  '01': { DayIcon: 'WiDaySunny', NightIcon: 'WiMoonWaxingCrescent4' },
  '02': { DayIcon: 'WiCloud', NightIcon: 'WiCloud' },
  '03': { DayIcon: 'WiCloud', NightIcon: 'WiCloud' },
  '04': { DayIcon: 'WiCloudy', NightIcon: 'WiCloudy' },
  '09': { DayIcon: 'WiShowers', NightIcon: 'WiShowers' },
  '10': { DayIcon: 'WiRain', NightIcon: 'WiRain' },
  '11': { DayIcon: 'WiThunderstorm', NightIcon: 'WiThunderstorm ' },
  '13': { DayIcon: 'WiSnow', NightIcon: 'WiSnow' },
  '50': { DayIcon: 'WiFog', NightIcon: 'WiFog' },
};

function getIconName(_iconId: number, iconCode: string): string {
  const isDay = iconCode.slice(iconCode.length - 1).toUpperCase() === 'D';
  const code = iconCode.slice(0, iconCode.length - 1);

  if (!WeatherCode[code]) return 'WiNa';
  return isDay ? WeatherCode[code].DayIcon : WeatherCode[code].NightIcon;
}
