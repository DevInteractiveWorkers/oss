'use client'
import React, { useEffect, useState } from 'react'
import Lock from '../icons/lock'
import HandBg from '../icons/hand-bg'
import Image from 'next/image'

const HandLock = () => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [loadedlock, setLoadedLock] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(()=>{
            setLoaded(true)
            setTimeout(()=>{
                setLoadedLock(true)
            }, 500)
        },50)
      
    })
    
    return (
        <article className='relative mt-20 md:my-32'>
            <h1 className='title text-6xl md:text-8xl font-bebas text-center p-4'>Services</h1>
            {loadedlock && 
            <>
            <Lock className='absolute md:-top-[20%] lg:-top-[55%] left-[12.5%] w-1/6 max-w-[209px] hidden md:block mt-8 slideBottomUp'></Lock>
            <div className='absolute z-20 aspect-square hidden md:block md:left-[13%] lg:left-[12%] xl:left-[10%] md:-top-8 lg:-top-16 xl:-top-28 h-auto w-1/6 rounded-full mix-blend-lighten radialGradient slideBottomUp1 opacity-0'></div>
            </>
            }
            <div className='relative hidden md:block mt-8'>
                {loaded && <Image className='absolute w-1/3 z-10 slideBottomLefttoRightTop1' src={"/hand.png"} alt='oss hand' height={348} width={512}></Image>}
                <HandBg className='absolute lg:-left-8 lg:-top-2 w-4/12 lg:p-8 slideBottomLefttoRightTop0'></HandBg>
            </div>
        </article>
    )
}

export default HandLock