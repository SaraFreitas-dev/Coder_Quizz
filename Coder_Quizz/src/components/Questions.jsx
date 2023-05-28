
import { useContext } from 'react'
import { QuizzContext } from '../context/quizz'
import "./Questions.css"
import Option from './Options'


const Question = () => {
    const [quizzState, dispatch] = useContext(QuizzContext);
const currentQuestion = quizzState.questions[quizzState.currentQuestion]

const onSelectOption = (option) =>{
    dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option},
    })
}

  return (
    <div id="questions">
    <p>Question {quizzState.currentQuestion +1} of {quizzState.maxQuestion}</p>
    <h2>{currentQuestion.question}</h2>

    <div className="options-container">
        {currentQuestion.options.map((option) =>(
            <Option option={option} 
                    key={option} 
                    answer={currentQuestion.answer}
                    selectOption={() => onSelectOption(option)}/>
        ))}
    </div>
    {quizzState.answerSelected && (
                        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>)}
    </div>
  )
}

export default Question