import Image from 'next/image';
import IntroBanner from './components/banner/intro';
import Divider from './components/icons/divider';
import FullDivider from './components/icons/full-divider';
import ServiceBanner from './components/banner/service';
import serviceContent from './content/services.json'
import OSSIcon from './components/icons/oss';

export default async function Home() {
  const content = serviceContent.content
  return (
    <main className="flex flex-col items-center justify-between" >
      <IntroBanner></IntroBanner>

      <section className='overflow-hidden relative  z-0'>
        <Image className='absolute object-cover w-full h-auto -z-10' src={'/top-ranked.png'} width={1440} height={770} alt='Top ranked security guard background'></Image>
        <article className='text-center w-10/12 lg:w-3/4 mx-auto py-12 md:py-32 relative '>
          <h2 className='title font-bebas text-4xl md:text-7xl my-6 md:px-28'>TOP RANKED SECURITY GUARD SERVICES PORTLAND</h2>
          <p className='text-justify text-black text-base md:text-2xl md:px-24'>
            On service security carefully protects our customer’s assets. <em className='title not-italic font-bold'>Our greatest priority is to satisfy our customers just by searching “security services near me”.</em> We assess each client’s security requirements and match proficient expert security officers to accommodate your own requirements. <br /> <br />
            Our well-trained team aims to make all of Oregon a safer and better place for its residents. We have effective protection solutions for any situation that can potentially harm you or damage your premises. From providing professional, armed security to protecting our clients from fire accidents and evacuations, we are ready for anything.
          </p>
        </article>
      </section>

      <section className='relative flex flex-col-reverse items-center md:flex-row bg-[#F0B631] w-full justify-between md:justify-end  md:py-36 z-30 overflow-hidden md:overflow-visible'>
        <div className='max-h-full max-w-full overflow-hidden'>
          <Divider className='absolute hidden md:block right-0 bottom-0 h-full w-auto'></Divider>
          <FullDivider className='absolute lg:block rotate-180 -left-[35%] lg:left-[18%] bottom-0 h-full w-auto'></FullDivider>
          <FullDivider className='absolute hidden md:block rotate-180 left-[0%] bottom-0 h-full w-auto'></FullDivider>
          <FullDivider className='absolute hidden md:block rotate-180 -left-[18%] bottom-0 h-full w-auto'></FullDivider>
        </div>
        <div className='relative order-2 z-10 flex flex-col items-center justify-center basis-[65%] text-center md:text-start pt-8 px-2 md:py-0'>
          <h2 className='text-white text-3xl md:text-5xl xl:text-7xl font-bebas uppercase'>What our clients can expect</h2>
          <h3 className='px-4 py-2 md:p-4 ring-1 ring-white rounded-3xl text-lg md:text-2xl xl:text-4xl'>Highly trained security guards</h3>
        </div>
        <Image className='md:absolute left-0 bottom-[0%] order-1 object-bottom md:h-[110%] w-auto mx-auto md:mx-0 z-10' src={'/guard.png'} width={546} height={483} alt='On service security guard'></Image>
      </section>

      <section className='overflow-hidden flex items-center bg-cover bg-no-repeat' style={{ backgroundImage: "url('/p-bg.png')" }}>
        {/*         <Image className='absolute z-0 w-full h-auto' src={'/p-bg.png'} alt='paragraph background' width={1440} height={701}></Image> */}
        <p className='relative z-10 md:w-2/3 text-sm xl:text-2xl text-justify mx-auto py-12 px-6 md:px-24 md:py-28'>
          On Service Security is determined to put our client’s safety above all else. Our security guard services are highly trusted and reliable, which makes us a market-dominating security guard company in Portland, Oregon. <em className='title not-italic font-bold'>OSS will make you and your employees feel safe and protected during days as well as nights because we serve 24/7. </em>

          <strong className=' font-extrabold'>We have different approaches for different situations because we know that a single safety solution won’t always be efficient enough to secure your premises. If you want exceptional security protection for your domestic and residential area, you can connect to our team now.</strong>
        </p>
      </section>


      <section className='overflow-hidden relative md:pt-24 z-0'>
        <article className='text-center text-[#353535] w-10/12 lg:w-3/4 mx-auto pt-16 relative'>
          <h2 className='title font-bebas text-4xl md:text-8xl md:px-28 uppercase'>Our security services</h2>
          <h3 className=' text-xl md:text-5xl text-[#353535] font-medium uppercase leading-[20px]'>What we offer</h3>
          <p className='text-justify text-sm md:text-2xl md:px-28 mt-12'>
            <span className='block text-black font-bold my-4'>We give you the ability to focus on your family and your business.</span>
            As our new client, OSS will offer you security guard services along with a complimentary on-site security evaluation. Our security guard services have won the trust of Portland, Oregon’s residents and we have grown our client base with unbeatable service quality.
            <br /> <br />
            Our journey has been phenomenal as we have helped so many people feel safe while providing guards in their residential and commercial areas. Get in touch with us to elevate the security of your premises and keep yourself and your loved ones safe and protected.
          </p>
        </article>
        <Image className=' w-full grayscale-[75%] mix-blend-luminosity' src={'/building.jpg'} width={1440} height={793} alt='Buildings'></Image>
      </section>

      <ServiceBanner image='/unarmed-guard.png' direction={false} content={content[0]}></ServiceBanner>
      <ServiceBanner image='/armed-guard.png' direction={true} content={content[1]}></ServiceBanner>
      <ServiceBanner image='/unarmed-guard.png' direction={false} content={content[2]}></ServiceBanner>

      <section className='bg-black'>
        <article className='flex flex-col sm:flex-row justify-evenly items-center gap-8 p-8 lg:py-36 lg:px-12'>
          <div className=' lg:basis-3/6'>
            <h3 className=' text-2xl lg:text-6xl font-bebas'>SECURITY GUARD COMPANY portland, oregon</h3>
            <p className=' text-sm lg:text-2xl'> <span className='title font-bold'>On Service Security (OSS)</span> is a full-service security guard company in Portland providing services using uniformed armed and unarmed security officers for residential, retail, industrial, and commercial properties.

OSS also offers solutions in implementing additional security measures and processes such as security patrols, loss prevention, fire watch, and executive protection.</p>
          </div>
          <OSSIcon className='w-1/3' fill='#fff'></OSSIcon>
        </article>
      </section>
    </main>
  )
}
