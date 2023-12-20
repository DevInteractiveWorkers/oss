import React from 'react'
import Lock from '../components/icons/lock'
import Image from 'next/image'
import HandBg from '../components/icons/hand-bg'

const ServicesPage = () => {
  return (
    <section className='pt-16'>
      <article className='relative mt-20 md:my-32'>
        <h1 className='title text-6xl md:text-8xl font-bebas text-center p-4'>Services</h1>
        <Lock className='absolute md:-top-[20%] lg:-top-[55%] left-[12.5%] w-1/6 max-w-[209px] hidden md:block mt-8'></Lock>
        <div className='relative hidden md:block mt-8'>
          <Image className='absolute w-1/3 z-10' src={"/hand.png"} alt='oss hand' height={348} width={512}></Image>
          <HandBg className='absolute lg:-left-8 lg:-top-2 w-4/12 lg:p-8'></HandBg>
        </div>
      </article>

      <article className='mx-auto text-black bg-no-repeat bg-cover' style={{ backgroundImage: "url('/services-bg.png')"}}>
        <p className='md:w-4/6 mx-auto p-8 md:p-20 md:pt-32 text-justify text-white text-xs md:text-xl font'>
          On Service Security provides the best security guards. We work 24/7, all year round. They are trained in every requirement that may present themselves and are committed to ensuring the well-being of the locations we serve. Before calling the police, employers might benefit from identification screening by a person identified with the department within your office buildings. <br /><br />

          <span className='font-semibold text-lg md:text-3xl inline-block pt-4'>Armed Security Guard</span> <br /><br />
          We offer professional, licensed, and highly trained armed guards to guard the locations our clients ask us to. Our officers understand the responsibility that carrying firearms entails, and serve exclusively as a deterrent for possible threats. Our security guards don&apos;t have a criminal record and have permission to carry weapons. They wear security uniforms and are authorized and typically work in the security industry after being law enforcement personnel.

          On the rare occasions our officers are forced to use their firearms, they will prioritize neutralizing threats with the least amount of violence possible to protect other persons from criminal activity. The federal government agency keeps data on the expiration date of the licenses required to be a security guard. <br /><br />

          <span className='font-semibold text-lg md:text-3xl inline-block pt-4'>Standing Security Guards</span> <br /><br />
          Our unarmed security guards offer detailed-oriented surveillance that makes our locations safer. They provide attentiveness and highly advanced camera systems a feeling of safety and security. Military personnel look for jobs being officers.
          They prioritize creating ties with the community as part of their job and integrating themselves into the workforce of the locations that contract our officers.  <br /><br />

          <span className='font-semibold text-lg md:text-3xl inline-block pt-4'>Patrol Services</span> <br /><br />
          Our team has guards that operate vehicles (also provided by us) that can better cover the properties whose size requires officers to patrol throughout the premises on the lookout for any potential threats. They will always be driven by someone with a driver&apos;s license. <br /><br />
          <span className='font-semibold text-lg md:text-3xl inline-block pt-4'>Fire Watch </span> <br /><br />
          Accidents can happen at any moment, and you need the right professionals to be vigilant for the emergency protocols necessary to minimize human damage. They will also be ready to prevent this potential threat to the property by careful examination of the precinct to ensure this kind of tragedy doesn&apos;t strike your business.

        </p>
      </article>

      <article className='bg-yellow-400 py-8' style={{backgroundImage:"url('/services-1-bg.png')"}}>
        <div className='w-2/3 mx-auto'>
        <div className='relative  pt-12'>
          <div className='absolute w-20 h-12 mt-5 bg-[#676868] rounded-lg'></div>
          <h3 className='relative ml-10 z-20 bg-[#353535] font-semibold text-lg md:text-2xl inline-block px-6 py-2 rounded-lg'>Commercial</h3><br />
          <h4 className='relative -mt-2.5 ml-8 z-10 bg-white font-bold text-black text-sm md:text-xl md:px-12 px-4 py-3 md:py-2 inline-block rounded-lg'>Reception and Lobby Security</h4>
        </div>
        <p className='mb-8 py-4 md:py-8 md:px-20 text-justify text-white text-xs md:text-2xl'>
          Apart from providing security to your facility, our reception, and lobby security will make the best first impression. They can also screen the people that come into the office to make sure no strangers enter your facilities.

          While being polite and welcoming to visitors, the professionalism and seriousness of our staff would integrate into the work dynamic of any location, making you feel safe.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-white font-bold text-black text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Shopping Center Security</h4>
        <p className='mb-8 py-4 md:py-8 md:px-20 text-justify text-white text-xs md:text-2xl'>

With thousands of people coming and going in every which way at all business hours, security is the key to having your clients feel safe while they go shopping. Our shopping center security guards are trained to give indications, patrol the building and make sure no vandalism or shoplifting occurs. We protect every vehicle and search for any wrongdoing.

We will not only make your clients feel safer, but everyone who works at the shopping center will know that they have someone to count on daily. Making sure that communication improves the service we provide is a priority for us at On Service Security. 
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-white font-bold text-black text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Hospital and Healthcare Facilities Security</h4>
        <p className='mb-8 py-4 md:py-8 md:px-20 text-justify text-white text-xs md:text-xl'>
        Our Hospital and Healthcare Facilities Security are trained to not only provide patrolling and surveillance to the building but also to manage the seriousness and weight of their role of being there while people are feeling very strong emotions. 
        </p>
        </div>
      </article>

      <article className='bg-yellow-400 py-8 bg-no-repeat bg-cover' style={{backgroundImage:"url('/services-2-bg.png')"}}>
        <div className='w-2/3 mx-auto'>
        <div className='relative  pt-12'>
          <div className='absolute w-20 h-12 mt-5 bg-[#231F20] rounded-lg'></div>
          <h3 className='relative ml-10 z-20 bg-[#353535] text-[#F0B631] font-semibold text-lg md:text-2xl inline-block px-6 py-2 rounded-lg'>Industrial</h3><br />
          <h4 className='relative -mt-2.5 ml-8 z-10 bg-[#E6A50F] font-bold text-white text-sm md:text-xl md:px-12 px-4 py-3 md:py-2 inline-block rounded-lg'>Construction Sites Security</h4>
        </div>
        <p className='mb-8 py-8 md:px-20 text-justify text-black text-xs md:text-xl'>
        Before, during, and after the work day, a construction site is a very sensible facility that needs to be well-guarded to protect your workers, equipment, and materials. Any loss can be detrimental to the project and can cost you money. That&apos;s why construction security is key.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-[#E6A50F] font-bold text-white text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Manufacturing Facilities Security</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-black text-xs md:text-xl'>
        Theft, vandalism, and labor disputes are common in all manufacturing facilities, and tight security is the best way to deter this sort of activity as well as control the situation if they present itself. Security guards will be there to make sure that video surveillance helps with the duties performed in person. The data of everything that happens will be stored.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-[#E6A50F] font-bold text-white text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Transportation and Logistic Facilities Security</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-black text-xs md:text-xl'>
        Vehicles are the backbones of transportation services, and having them damaged or stolen would cripple any business that relies on them. Vandalism and theft are unpredictable tragedies that can hit anyone at any moment. Evidence will always be available to law enforcement thanks to our monitoring of security camera data. <br /> <br />

That&apos;s why our transportation and logistic facilities security guards will exercise their rigorous training to make sure that nothing of the sort affects your workers and facilities. We will check anything that comes in or goes out, and nothing will ever pass our eyes and affect your workers&apos; compensation. 
        </p>
        </div>
      </article>

      <article className=' py-8 bg-no-repeat bg-cover bg-[#231F20]' style={{backgroundImage:"url('/services-3-bg.png')"}}>
        <div className='w-2/3 mx-auto'>
        <div className='relative  pt-12'>
          <div className='absolute w-20 h-12 mt-5 bg-white rounded-lg'></div>
          <h3 className='relative ml-10 z-20 bg-[#353535] text-[#F0B631] font-semibold text-lg md:text-2xl inline-block px-6 py-2 rounded-lg'>Residential</h3><br />
          <h4 className='relative -mt-2.5 ml-8 z-10 bg-[#E6A50F] font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Hotel Security Services</h4>
        </div>
        <p className='mb-8 py-8 md:px-20 text-justify text-white text-xs md:text-xl'>
        Staying night outside your home can be frightening. That&apos;s why our hotel security services officers will make sure that your guests can feel safe staying in your hotel for a night or a whole week. Through 24/7 coverage, our officers will be there to give your guests directions, guard the premises, make sure no damage comes to the establishment, and protect the property against outside threats. Law enforcement can get in the way of a person in your hotel, that&apos;s why hiring a security agency is the safest way to go.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-[#E6A50F] font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Apartments and Residential Areas Services Private Security Guards</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-white text-xs md:text-xl'>
        Anything that makes you feel safer at home is welcome, that&apos;s why our apartments and residential areas security guards find their purpose in making your life feel easier. They understand the importance of their assignment and will use their training to become a part of your daily life, someone you won&apos;t notice except for when you need them, and when that happens, they&apos;ll be there for you.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-[#E6A50F] font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Private Home Security Services</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-white text-xs md:text-xl'>
        You can never be too safe! Even at your own house you never know when something bad will happen to you. That&apos;s why private home security guards will make a great improvement to your home life. Not only will they be there to defend you and your family against any outside threats, but also assist you in your day-to-day routine as an employer.
        </p>
        </div>
      </article>

      <article className=' py-8 bg-no-repeat bg-cover bg-[#F0B631]' style={{backgroundImage:"url('/services-1-bg.png')"}}>
        <div className='w-2/3 mx-auto'>
        <div className='relative  pt-12'>
          <div className='absolute w-20 h-12 mt-5 bg-[#676868] rounded-lg'></div>
          <h3 className='relative ml-10 z-20 bg-[#353535] text-[#F0B631] font-semibold text-lg md:text-2xl inline-block px-6 py-2 rounded-lg'>Other</h3><br />
          <h4 className='relative -mt-2.5 ml-8 z-10 bg-white font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Car Dealership Security Services</h4>
        </div>
        <p className='mb-8 py-8 md:px-20 text-justify text-[#353535] text-xs md:text-xl'>
        Car dealership agencies form part of the backbone of the American transportation industry. This is why making sure vehicles are taken care of, and that no outside threat comes in the way of these vital businesses. 
Through 24/7 surveillance and a capable security guard, you can be sure that nothing and no one will come in or out without us noticing it and informing you. Security cameras and regular inspections by our guards will make your concerns a thing of the past. 
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-white font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>Public Area Security Services</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-[#353535] text-xs md:text-xl'>
        That&apos;s why our public areas security guard will be specially trained to handle all these sorts of situations. With consideration and human decency at the forefront of what the harmless individuals that wander into your property deserve, and the firmness and decisiveness required to deal with criminals and actual threats. Most states require a security guard to go through annual training to serve as officers.
        </p>
        <h4 className='relative -mt-2.5 md:ml-8 z-10 bg-white font-bold text-[#4F4E4F] text-sm md:text-xl px-4 md:px-12  py-2 inline-block rounded-lg'>
Colleges, Universities, and Schools Security Services</h4>
        <p className='mb-8 py-8 md:px-20 text-justify text-[#353535] text-xs md:text-xl'>
        Students are young and reckless, and there are too many of them! That&apos;s why private security for education centers is ideal. Instead of creating tensions by bringing in law enforcement. You have to call our education center security officers. They are trained to merge into the atmosphere of the place they guard, and your facility will thank you for making this call.
        </p>
        </div>
      </article>

    </section>
  )
}

export default ServicesPage