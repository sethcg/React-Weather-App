import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
  title: 'React Weather Application',
  description: 'Weather application',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-primary font-roboto m-0 p-0 text-white antialiased">{children}</body>
    </html>
  )
}
