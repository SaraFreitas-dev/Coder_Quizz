import { useContext } from "react";
import { QuizzContext } from "../context/quizz";

import "./Options.css";

import React from 'react'

const Options = ({option, selectOption, answer}) => {
    const [quizzState, dispatch] = useContext(QuizzContext);

  return (
    <div className ={`option    
                    ${quizzState.answerSelected && option === answer ? "correct" : ""}
                    ${quizzState.answerSelected && option !== answer ? "wrong" : ""}`} 
                    id="options-container" 
                    onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Options