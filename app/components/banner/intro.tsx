'use client'
import Image from 'next/image'
import React from 'react'

const IntroBanner = () => {
  return (
    <section className='relative w-full flex flex-col justify-end items-center min-h-screen intro-bg bg-no-repeat bg-cover bg-center md:bg-top'>
        <div className='p-8 py-32 md:p-20 text-center'>
            <h1 className='text-5xl md:text-8xl title font-bebas uppercase my-4'>Unmatched security solutions</h1>
            <h2 className='text-3xl md:text-5xl font-normal'>for all businesses throughout Oregon </h2>
        </div>
    </section>
  )
}

export default IntroBanner