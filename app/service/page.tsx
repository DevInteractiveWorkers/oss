import React from 'react'
import ZebraPath from '../components/icons/zebra-path'

const ServicePage = () => {
  return (
    <div className='relative overflow-hidden'>
      <section className='bg-[#231F20] min-h-[60vh] flex flex-col justify-end items-center text-center md:pt-40'>
        <div className='absolute -left-[20%] top-0 h-[633px] w-[633px] rounded-full mix-blend-lighten radialGradient slideLtoR'></div>
        <div className='absolute right-0 -bottom-[70%] h-[633px] w-[633px] rounded-full mix-blend-lighten radialGradient slideRtoL'></div>
        <h1 className='title text-8xl font-bebas uppercase '>Recuitment for <br /> on-service security</h1>
        <ZebraPath className=' mix-blend-soft-light'></ZebraPath>
      </section>
    </div>
  )
}

export default ServicePage