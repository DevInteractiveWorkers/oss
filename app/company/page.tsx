import React from 'react'
import Image from 'next/image';

const CompanyPage = () => {
  return (
    <section className=' md:pt-8'>
      <div className=' flex justify-center items-center bg-no-repeat bg-cover bg-right-bottom min-h-[520px]' style={{ backgroundImage: "url('/city.png')" }}>
        <h1 className='title text-6xl md:text-8xl font-bebas'>Company</h1></div>
      <article className='bg-no-repeat bg-cover bg-white security-company'>
        <div className='relative z-10 md:ml-[15%] mx-auto md:mx-0 w-11/12 md:w-7/12 py-8 md:py-24 text-[#353535] text-base md:text-2xl font-medium'>
          <h2 className='title text-3xl md:text-6xl font-bold'>Feel free to get in touch with us. <br /> We are here for you!</h2>
          <p className='w-2/3 mt-4 md:mt-12'>
            General Inquiries <br />
            A current security needs <br />
            Get a quote so you can plan a future budget. <br />
            <span className=' font-extrabold'>We are available 24 hours a day, 7 days a week, 365 days a year. <br /></span>
          </p>
          <address className='flex flex-col gap-2 md:gap-6 md:w-2/3 uppercase mt-2 md:mt-8 not-italic'>
            <div>
              <h3>OR PPO #000000</h3>
            </div>
            <div>
              <h3 className='font-bold'>Phone numbers</h3>
              (000) 000-0000
            </div>
            <div>
              <h3 className='font-bold'>Email</h3>
              Info@OSS.com
            </div>
            <div>
              <h3 className='font-bold'>Website</h3>
              onservicesecurity.com

            </div>
          </address>

        </div>
        <Image className='relative z-0 md:hidden object-cover w-full -mt-32' src={'/company-security.png'} alt='Security On service security' width={534} height={1047}></Image>
      </article>
    </section>
  )
}

export default CompanyPage