import React, { useState } from 'react'
import { Label, Radio } from 'flowbite-react';

const QuizQuestions = ({ answer, section, answerNumber, selectedAnswer, setSelectedAnswer }: { answer: string, section: number, answerNumber: number, selectedAnswer: number, setSelectedAnswer: Function }) => {
    const handleChange = () => {
        setSelectedAnswer(answerNumber);
    }

    return (
        <>
            <Radio className='h-8 w-8 appearance-none border-black checked:border-transparent checked:bg-yellow-400' id={answer} name={`answers${section}`} value={answer} checked={selectedAnswer === answerNumber} onChange={handleChange} />
            <Label className='text-4xl text-[#676868] capitalize px-4' htmlFor={answer}> {answer} </Label>
        </>
    )
}

export default QuizQuestions
