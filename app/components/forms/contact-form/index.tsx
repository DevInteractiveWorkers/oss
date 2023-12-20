"use client"
import { Answer, ContactForm } from '@/app/utils/types'
import { TextInput, Toast } from 'flowbite-react'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { sendMail } from '@/app/utils/requests';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';

const ContactFormComponent = ({ contact, contactFormJson, setContactFormJson, sent,  setSent, send }: { contact:React.RefObject<HTMLFormElement>, contactFormJson:ContactForm | null, setContactFormJson: Function, sent:number,  setSent:Function, send:Function }) => {

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const json = Object.fromEntries(data.entries())
    let checkIfEmpty: boolean = false
    for (const field in json) {
      field != '' ? '' : (checkIfEmpty = true)
    }    
    checkIfEmpty ? setContactFormJson(null) : setContactFormJson(json)
    const res = await send()
    if(res){}else{
      if(checkIfEmpty){
        setSent(2)
      }else{
        setSent(3)
      }
    }
  }
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(contactFormJson === null){
      setContactFormJson({name:'',lastName:'',phone:'',email:'',address:'',city:'',state:'',zip:''})
    }else{
      if(e.target){
        if(e.target.name){
          setContactFormJson({
            ...contactFormJson,
            [`${e.target.name}`]: e.target.value
          })
        }
      }
    }
  }


  return (
    <form ref={contact} className='relative py-8 md:py-32 w-5/6 mx-auto flex flex-col items-center' onSubmit={onSubmit} id='form'>
      <h2 className='text-center text-[#4F4E4F] text-4xl md:text-8xl font-bebas'>EMPLOYMENT APPLICATION FORM</h2>
      <fieldset  className=' my-4 md:my-16 w-11/12'>
        <div className='w-full flex flex-col md:flex-row justify-center gap-4'>
          <div className='md:w-4/12 flex-wrap'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='name' id="name" type="text" sizing="lg" placeholder="First name" required />
          </div>
          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='lastName' id="lastname" type="text" sizing="lg" placeholder="Lastname" required />
          </div>
          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='phone' id="phone" type="text" sizing="lg" placeholder="Phone Number" required />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 my-4'>

          <div className='md:w-6/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='email' id="email" type="email" sizing="lg" placeholder="Email" required />
          </div>

          <div className='md:w-6/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='address' id="address" type='text' sizing="lg" placeholder="Address" required />
          </div>

        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4 my-4'>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='city' id="city" type="text" sizing="lg" placeholder="City" required />
          </div>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='state' id="state" type="text" sizing="lg" placeholder="State" required />
          </div>

          <div className='md:w-4/12'>
            <TextInput className='bg-[#F0F0F0]' onChange={handleChange} name='zip' id="zip" type="text" sizing="lg" placeholder="Zip Code" required />
          </div>
        </div>
      </fieldset>
      <button className='py-2 px-8 rounded-xl text-3xl md:text-5xl font-bebas bg-[#F0B631]' type='submit'> SEND </button>

      <Toast className={`absolute right-0 bottom-12 ${sent === 1 ? '' : 'hidden'}`} onClick={()=>{setSent(0)}}>
        <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Email was sent successfully.</div>
        <Toast.Toggle />
      </Toast>

      <Toast className={`absolute right-0 bottom-12 ${sent === 2 ? '' : 'hidden'}`} onClick={()=>{setSent(0)}}>
        <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-green-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">There was an error. Check your email address and leave no empty fields.</div>
        <Toast.Toggle />
      </Toast>

      <Toast className={`absolute right-0 bottom-12 ${sent === 3 ? '' : 'hidden'}`} onClick={()=>{setSent(0)}}>
        <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-green-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Please fill the quiz above.</div>
        <Toast.Toggle />
      </Toast>
      
    </form>
  )
}

export default ContactFormComponent