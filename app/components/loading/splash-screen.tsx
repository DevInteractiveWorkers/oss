'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const SplashScreen = () => {
  useEffect(() => {
    const animationInterval = setInterval(()=>{
    },1500)
    
    return () => {
      clearInterval(animationInterval)  
    }
  }, [])
  
  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-[#505456] animate-pulse'>
        <Image className=' animate-pulse' src={'/logo.webp'} alt='on service security logo' width={320} height={75}></Image>
    </div>
  )
}

export default SplashScreen

