import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { clsx } from 'clsx'
import './index.css'

export const metadata: Metadata = {
  title: 'React Weather Application',
  description: 'Weather application',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={clsx('font-roboto m-0 p-0 antialiased', 'bg-neutral-900 text-neutral-300')}>{children}</body>
    </html>
  )
}
