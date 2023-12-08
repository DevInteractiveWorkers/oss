import React from 'react'
import ZebraPath from '../components/icons/zebra-path'
import CarText from '../components/banner/car-behind-text'

const ServicePage = () => {
  return (
    <div className='relative overflow-hidden'>
      <section className='relative bg-[#231F20] flex flex-col justify-end items-center text-center pt-28 md:pt-40'>
        <div className='absolute -left-[20%] top-0 aspect-square h-auto w-[40%] rounded-full mix-blend-lighten radialGradient slideLtoR'></div>
        <div className='absolute -right-[10%] md:-bottom-[70%] aspect-square h-auto w-[40%] rounded-full mix-blend-lighten radialGradient slideRtoL'></div>
        <h1 className='title text-4xl md:text-8xl font-bebas uppercase fadeInside'>Recuitment for <br /> on-service security</h1>
        <ZebraPath className=' mix-blend-soft-light drawPath'></ZebraPath>
      </section>
      <CarText></CarText>
    </div>
  )
}

export default ServicePage