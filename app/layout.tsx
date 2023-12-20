import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar/nav'
import { Suspense } from 'react'
import FooterComponent from './components/footer/footer'

const montserrat = Montserrat({subsets:['latin']})

export const metadata: Metadata = {
  title: 'On Service Security',
  description: 'Stay safe',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative ${montserrat.className} bg-[#231F20]`}>
        <Suspense>
          <NavBar className='relative'></NavBar>
        </Suspense>
        {children}
        <Suspense>
          <FooterComponent></FooterComponent>
        </Suspense>
      </body>
    </html>
  )
}
