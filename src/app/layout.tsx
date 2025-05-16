import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
  title: 'React Weather Application',
  description: 'Weather application',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const bodyClass = 'm-0 p-0 font-roboto text-neutral-300 antialiased'

  return (
    <html lang="en">
      <body className={`bg-neutral-900 ${bodyClass}`}>{children}</body>
    </html>
  )
}
