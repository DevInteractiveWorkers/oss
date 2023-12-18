import { Button, Label, TextInput } from 'flowbite-react'
import React, { FormEvent } from 'react'

const ContactFormComponent = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {

  }
  return (
    <form className='py-8 md:py-32 w-5/6 mx-auto flex flex-col items-center' onSubmit={onSubmit}>
      <h2 className='text-center text-[#4F4E4F] text-4xl md:text-8xl font-bebas'>EMPLOYMENT APPLICATION FORM</h2>
      <fieldset className='my-16 w-11/12'>
        <div className='w-full flex flex-col md:flex-row justify-center gap-4'>
          <div className='md:w-4/12 flex-wrap'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="First name" required />
          </div>
          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="Lastname" required />
          </div>
          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="Phone Number" required />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 my-4'>

          <div className='md:w-6/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="email" sizing="lg" placeholder="Email" required />
          </div>

          <div className='md:w-6/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type='text' sizing="lg" placeholder="Address" required />
          </div>

        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4 my-4'>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="Phone Number" required />
          </div>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="Phone Number" required />
          </div>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' id="email1" type="text" sizing="lg" placeholder="Phone Number" required />
          </div>
        </div>
      </fieldset>
      <button className='py-2 px-8 rounded-xl text-3xl md:text-5xl font-bebas bg-[#F0B631]'> SEND </button>
    </form>
  )
}

export default ContactFormComponent