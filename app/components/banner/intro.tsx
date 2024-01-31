'use client'
import Image from 'next/image'
import React from 'react'

const IntroBanner = () => {
  return (
    <section className='relative w-full flex flex-col justify-end items-center min-h-[400px] md:min-h-[1000px] home bg-no-repeat bg-cover slideBgLtoR overflow-hidden'>
        <Image className='hidden' priority={true} quality={100} src={'/intro-bg.png'} alt='on service security home background' width={1440} height={943}></Image>
        <Image className='absolute bottom-0 right-0 z-0 slideGuardRtoL object-cover object-left-top h-full w-10/12 xl:w-7/12 max-h-full' priority={true} src={'/intro.png'} alt='On service intro guard' width={1440} height={943}></Image>
        <div className='relative z-10 p-8 pt-64 md:py-32 md:p-20 text-center'>
            <h1 className='text-2xl md:text-8xl title font-bebas uppercase my-4'>Professional security services</h1>
            <h2 className='text-xl md:text-5xl font-normal'>that ensure the well-beign of private property across Oregon</h2>
        </div>
    </section>
  )
}

export default IntroBanner