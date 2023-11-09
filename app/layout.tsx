import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar/nav'
import { Suspense } from 'react'

const montserrat = Montserrat({subsets:['latin']})

export const metadata: Metadata = {
  title: 'One Service Security',
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
        <div className='relative min-h-[3vh] bg-[#231F20]'></div>
        <Suspense>
          <NavBar></NavBar>
        </Suspense>
        {children}
      </body>
    </html>
  )
}
