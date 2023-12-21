'use client'
import React from 'react'
import { Footer } from 'flowbite-react'
import NavLinks from '../../content/nav-items.json'
import Image from 'next/image';

const FooterComponent = () => {
  const content = NavLinks.content
  return (
    <Footer container className='bg-[#231F20] rounded-none py-8'>
      <div className="md:w-11/12 xl:px-24 mx-auto text-center flex flex-col md:flex-row justify-center items-center">
        <Image className='w-3/6 md:w-1/6' src={'/isotype.webp'} width={214} height={192} alt='One Service Security Logo'></Image>
        <div className="w-8/12 mx-auto flex flex-col gap-5 py-12 justify-center sm:items-center sm:justify-center">
          <Footer.LinkGroup className='text-white font-bebas uppercase gap-4 text-center justify-center md:justify-between w-full'>
            {content.map((navlink) => {
              return (
                <Footer.Link className='text-lg md:text-xl lg:text-4xl' href={navlink.link} key={navlink.title}>{navlink.title}</Footer.Link>
              )
            })}
          </Footer.LinkGroup>
          <Footer.LinkGroup className='text-white lg:justify-between items-center justify-center w-full gap-4'>
            <div className='flex flex-col md:flex-row justify-evenly items-center text-xs md:text-base '>
              <Footer.Link className='' href={'#'}>Privacy Policy</Footer.Link>
              <span className='hidden md:inline md:mr-6'>•</span>
              <Footer.Link className='' href={'#'}>Security</Footer.Link>
              <span className='hidden md:inline md:mr-6'>•</span>
              <Footer.Link className='mr-0' href={'#'}>Terms and conditions</Footer.Link>
            </div>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  )
}

export default FooterComponent