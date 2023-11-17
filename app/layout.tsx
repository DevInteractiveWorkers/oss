import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar/nav'
import { Suspense } from 'react'

const montserrat = Montserrat({subsets:['latin']})

export const metadata: Metadata = {
  title: 'On Service Security',
  description: 'Guard up',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative ${montserrat.className}`}>
        <Suspense>
          <NavBar></NavBar>
        </Suspense>
        {children}
      </body>
    </html>
  )
}
