'use client'
import React, { useEffect, useRef, useState } from 'react'
import QuizComponent from './quiz/index';
import { Answer, ContactForm } from '@/app/utils/types';
import FullDivider from '../icons/full-divider';
import ContactFormComponent from './contact-form';
import questions from '../../content/quiz-questions.json'
import { sendMail } from '@/app/utils/requests';



const FormsComponent = () => {
  const [quizAnswers, setQuizAnswers] = useState<Answer[]>([])
  const [questionNumber, setQuestionNumber] = useState(0)

  const [contactFormJson, setContactFormJson] = useState<ContactForm | null>(null)
  const [sent, setSent] = useState<number>(0)
  const quiz = useRef<HTMLFormElement>(null)
  const contact = useRef<HTMLFormElement>(null)
  
  const send = async ():Promise<boolean> =>{
    
    if (contactFormJson && quizAnswers.length === questions.length) {
      
      const res = await sendMail({ quiz: quizAnswers, contactInfo: contactFormJson })      
      if(res.status === 400){
        setSent(2)
      }else{
        setSent(1)
        if(quiz != null){quiz.current?.reset()}
        if(contact != null){contact.current?.reset()}
        setQuestionNumber(0)
        setContactFormJson(null)
        setQuizAnswers([])
      }
      return res
    }
    else{
      return false
    }
  }

  return (
    <article>
      <QuizComponent questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} quiz={quiz} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} ></QuizComponent>
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
        <ContactFormComponent contact={contact} contactFormJson={contactFormJson} setContactFormJson={setContactFormJson} sent={sent} setSent={setSent} send={send}></ContactFormComponent>
      </div>
    </article>
  )
}

export default FormsComponent