import React from 'react'
import Lock from '../components/icons/lock'
import Image from 'next/image'
import HandBg from '../components/icons/hand-bg'

const ServicesPage = () => {
  return (
    <section className='pt-16'>
        <article className='my-32'>
            <h1 className='title text-8xl font-bebas text-center p-4'>Services</h1>
            <div className='relative'>
              <Image className='absolute w-1/3 z-10' src={"/hand.png"} alt='oss hand' height={348} width={512}></Image>
              <HandBg className='absolute lg:-left-8 lg:-top-2 w-4/12 lg:p-8'></HandBg>
            </div>
        </article>

        <article className='mx-auto bg-white text-black min-h-[50vh]'>
            <p className='w-2/3 mx-auto p-16 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, libero quibusdam non dolorum atque voluptates nisi magni fuga omnis sapiente aliquam deleniti. Iste, officiis perspiciatis aspernatur assumenda eos quia molestiae?
            </p>
        </article>
    </section>
  )
}

export default ServicesPage