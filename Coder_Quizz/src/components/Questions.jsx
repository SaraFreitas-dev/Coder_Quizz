import React from 'react'
import { useContext } from 'react'
import { QuizzContext } from '../context/quizz'
import "./Questions.css"

const Question = () => {
    const [quizzState, dispatch] = useContext(QuizzContext);
const currentQuestion= quizzState.questions[quizzState.currentQuestion]

  return (
    <div id="questions">
    <p>Question {quizzState.currentQuestion +1} of {quizzState.maxQuestion -1}</p>
    <h2>{currentQuestion.question}</h2>

    <div className="options-container">
        <p>Options</p>
    </div>
    <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
    </div>
  )
}

export default Question