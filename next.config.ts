import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'standalone',
  env: {
    NEXT_PUBLIC_OPEN_WEATHER_API_KEY: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
  },
}

export default nextConfig
