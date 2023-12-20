'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import questions from '../../../content/quiz-questions.json'
import QuizQuestions from './select'
import { Answer } from '@/app/utils/types'
import Link from 'next/link'


const QuizComponent = ({ questionNumber, setQuestionNumber, quiz, quizAnswers, setQuizAnswers }: { questionNumber:number, setQuestionNumber:Function, quiz:React.RefObject<HTMLFormElement>, quizAnswers: Answer[], setQuizAnswers: Function }) => {
 
  //Answer selected
  const [questionSelected, setQuestionSelected] = useState(0)

  const [completed, setCompleted] = useState<boolean>(false)

  //De-structure quiz section
  const question = questions[questionNumber]

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Handled as in FormData just in case some of this changes in the future
    //In the mean time, a cookies approach has been chosen
    const formData = new FormData(e.currentTarget)

    //Get answer with the Radio field name from QuizQuestions Component
    const answer = formData.get(`answers${questionSelected}`)?.toString()
    
    if (answer) {
      if (quizAnswers) {
        const quiz = quizAnswers
        quiz.push({ question: question.question, answer: answer })
        setQuizAnswers(quiz)
        //Answer can be Yes or No based on a boolean value, thus we have to handle the case since storeQuizSection JSON is expecting a string
      } else {
        setQuizAnswers([{ question: question.question, answer: answer }])
        //Answer can be Yes or No based on a boolean value, thus we have to handle the case since storeQuizSection JSON is expecting a string
      }
      if (questionNumber <= (questions.length - 1)) {
        setQuestionNumber(questionNumber + 1)
      }
    }
  }

  const onComplete = (e: FormEvent<HTMLFormElement>)=>{

    e.preventDefault()
    //Handled as in FormData just in case some of this changes in the future
    //In the mean time, a cookies approach has been chosen
    const formData = new FormData(e.currentTarget)

    //Get answer with the Radio field name from QuizQuestions Component
    const answer = formData.get(`answers${questionSelected}`)?.toString()

    if (answer) {
      if (quizAnswers) {
        const quiz = quizAnswers
        quiz.push({ question: question.question, answer: answer })
        setQuizAnswers(quiz)
        //Answer can be Yes or No based on a boolean value, thus we have to handle the case since storeQuizSection JSON is expecting a string
      } else {
        setQuizAnswers([{ question: question.question, answer: answer }])
        //Answer can be Yes or No based on a boolean value, thus we have to handle the case since storeQuizSection JSON is expecting a string
      }
      setCompleted(true)
    }
  }

  return (
    <article className=' -mt-8 mb-16 md:-mt-32 md:mb-36 w-11/12 md:w-2/3 mx-auto'>
      <h2 className='uppercase flex items-center justify-center gap-8 p-4 mx-auto '> <span className='text-5xl md:text-9xl title font-extrabold'>{questionNumber + 1}/{questions.length}</span> <legend className='text-2xl md:text-5xl font-semibold '>{question.question}</legend></h2>
      <form ref={quiz} className='bg-white rounded-3xl' onSubmit={(e) => { questions.length - 1 > questionNumber ? onSubmit(e) : onComplete(e) }}>
        <fieldset className='flex flex-col items-start justify-center p-16 my-8 gap-12' disabled={completed}>
          {
            typeof (question.answers) === "boolean" ?
              (<div className='flex w-full justify-evenly'>
                <div className="flex items-center gap-2" key={0}><QuizQuestions answer={"Yes"} section={0} answerNumber={0} selectedAnswer={questionSelected} setSelectedAnswer={setQuestionSelected}></QuizQuestions></div>
                <div className="flex items-center gap-2" key={1}><QuizQuestions answer={"No"} section={1} answerNumber={1} selectedAnswer={questionSelected} setSelectedAnswer={setQuestionSelected}></QuizQuestions></div>
              </div>) :
              (question.answers.map((answer, i) => {
                return (
                  <div className="flex items-center gap-2" key={i}>
                    <QuizQuestions answer={answer} section={i} answerNumber={i} selectedAnswer={questionSelected} setSelectedAnswer={setQuestionSelected}></QuizQuestions>
                  </div>
                )
              }))
          }
          <button className='p-2 px-16 bg-[#F0B631] disabled:bg-slate-500 uppercase text-4xl self-end rounded-lg font-bebas' type='submit' disabled={completed}> {!(completed) ? 'Next' : <Link href={'#form'}>Complete contact form</Link>} </button>
        </fieldset>
      </form>
      <div className='w-5/6 bg-[#F0B631]'></div>
    </article>
  )
}

export default QuizComponent