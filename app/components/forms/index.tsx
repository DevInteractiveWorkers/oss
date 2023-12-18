'use client'
import React, { useEffect, useState } from 'react'
import QuizComponent from './quiz/index';
import { Answer } from '@/app/utils/types';
import FullDivider from '../icons/full-divider';
import ContactFormComponent from './contact-form';

const FormsComponent = () => {
  const [quizAnswers, setQuizAnswers] = useState<Answer[]>([])

  return (
    <article>
      <QuizComponent quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} ></QuizComponent>
      <div className='relative bg-[#F0B631] text-black'>
        <p className='relative z-10 w-2/3 mx-auto text-justify text-base md:text-2xl py-24'>
          We are always looking for top security services workers. We choose security guards checking their criminal records, and do a thorough background check to make sure they comply with licensing standards according to what state government and local government agencies have as their training requirements.
          <br /><br />
          Federal agencies have a high turnout these days, and any capable security guard can perform their former duties in the private sector through a security agency.
        </p>
        <FullDivider className='absolute -right-52 top-0 h-full'></FullDivider>
        <FullDivider className='absolute -left-52 top-0 h-full'></FullDivider>
      </div>
      <div className='bg-white'>
        <ContactFormComponent></ContactFormComponent>
      </div>
    </article>
  )
}

export default FormsComponent