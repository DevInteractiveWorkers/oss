import React from 'react'
import Quiz from '../icons/quiz'
import Image from 'next/image'

const CarText = () => {
  return (
    <section className='relative py-12 md:py-40 md:w-11/12 md:my-12 mx-auto flex justify-center items-center' style={{backgroundImage:"url('/quiz-bg.png')"}}>
        <h2 className='absolute z-0 top-[50%] -translate-y-[50%] md:left-[20%] text-[#F0B631] text-[200px] md:text-[400px] leading-tight md:leading-[70%] font-bebas'>QUIZ</h2>
        <h2 className='absolute z-20 top-[50%] -translate-y-[50%] md:left-[20%] outline-title text-transparent text-[200px] md:text-[400px] leading-tight md:leading-[70%] font-bebas'>QUIZ</h2>
{/*         <Quiz className='absolute z-0'></Quiz>
        <Quiz className='absolute p-2 z-20'></Quiz> */}
        <Image className='relative z-10 md:w-3/6 h-auto max-h-[558px] md:ml-[50%] xl:ml-[35%]' src={'/patrol.webp'} alt='On service guard' width={417} height={558} ></Image>
    </section>
  )
}

export default CarText