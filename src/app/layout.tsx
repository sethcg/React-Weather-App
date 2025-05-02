import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
  title: 'React Weather App',
  description: 'Uses a public weather API to display data relevant to the provided address.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const bodyClass = 'm-0 p-0 font-roboto bg-neutral-900 text-neutral-100 antialiased'

  return (
    <html lang="en">
      <body className={bodyClass}>{children}</body>
    </html>
  )
}
