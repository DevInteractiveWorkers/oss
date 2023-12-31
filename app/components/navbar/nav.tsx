'use client'
import { Navbar } from 'flowbite-react'
import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { NavbarToggle } from 'flowbite-react/lib/esm/components/Navbar/NavbarToggle'
import { NavbarCollapse } from 'flowbite-react/lib/esm/components/Navbar/NavbarCollapse'
import NavLinks from '../../content/nav-items.json'
import { NavbarLink } from 'flowbite-react/lib/esm/components/Navbar/NavbarLink'

const NavBar = ({className}:{className?:string}) => {
    const content = NavLinks.content
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
      const scroll = window.scrollY
      scroll > 200 ? setIsScrolled(true) : setIsScrolled(false)
    }

    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    }, [])
    
    
    return (
        <Navbar className={`z-50 ${isScrolled ? 'bg-[#353535]' : 'bg-transparent'} ${className} transition-all duration-300 fixed w-full p-4`}>
            <NavbarBrand className='basis-3/12' as={Link} href='/'>
                <Image className=' max-w-[200px] md:max-w-none md:w-full' src={'/logo.webp'} width={457} height={106} alt='One Service Security Logo'></Image>
            </NavbarBrand>
            <NavbarToggle className='shrink-0' />
            <NavbarCollapse className='w-full transition-all duration-200'>
                {
                    content.map((item) => {
                        return (
                            <NavbarLink className='transition-all duration-300 inline-block font-bebas py-0 uppercase text-white text-xl xl:text-2xl mx-3 lg:mx-8 hover:bg-slate-600 md:hover:text-white dark:text-white dark:hover:text-white hover:ring-1 rounded-xl hover:ring-yellow-400 md:p-2.5' as={Link} href={item.link} key={item.title}>
                                {item.title}
                            </NavbarLink>
                        )
                    })
                }
            </NavbarCollapse>
        </Navbar>
    )
}

export default NavBar