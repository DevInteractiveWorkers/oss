import React from 'react'
import ZebraPath from '../components/icons/zebra-path'
import CarText from '../components/banner/car-behind-text'
import FullDivider from './../components/icons/full-divider';

const RecruitmentPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <article className='relative bg-[#231F20] flex flex-col justify-end items-center text-center pt-28 md:pt-40'>
        <div className='absolute -left-[20%] top-0 aspect-square h-auto w-[40%] rounded-full mix-blend-lighten radialGradient slideLtoR'></div>
        <div className='absolute -right-[10%] md:-bottom-[70%] z-20 aspect-square h-auto w-[40%] rounded-full mix-blend-lighten radialGradient slideRtoL'></div>
        <h1 className='title text-4xl md:text-8xl font-bebas uppercase fadeInside'>Recuitment for <br /> on-service security</h1>
        <ZebraPath className=' mix-blend-soft-light drawPath'></ZebraPath>
      </article>
      <CarText></CarText>
      <article className='relative bg-[#F0B631] text-black'>
        <p className='w-2/3 mx-auto text-justify text-2xl py-24'>
          We are always looking for top security services workers. We choose security guards checking their criminal records, and do a thorough background check to make sure they comply with licensing standards according to what state government and local government agencies have as their training requirements.
          <br /><br />
          Federal agencies have a high turnout these days, and any capable security guard can perform their former duties in the private sector through a security agency.
        </p>
        <FullDivider className='absolute -right-52 top-0 h-full'></FullDivider>
        <FullDivider className='absolute -left-52 top-0 h-full'></FullDivider>
      </article>
    </section>
  )
}

export default RecruitmentPage