import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES =["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    maxQuestion: 11
}

const quizzReducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
                currentQuestion: 0,
                
            };
            // Randomize Questions on each quizz and limit of 10 question
            case "REORDER_QUESTIONS":
            const totalQuestions = state.questions.length;
            const shuffledQuestions = state.questions.sort(() => Math.random() - 0.5);
            const limitedQuestions = shuffledQuestions.slice(0, Math.min(totalQuestions, 10));
            return {
                ...state,
                questions: limitedQuestions,
            };
        
            case "CHANGE_QUESTION":
                const nextQuestion = state.currentQuestion + 1;
                
                return {
                  ...state,
                  currentQuestion: nextQuestion,
                
                };
              
   
    

    default:
        return state;        
    }
}

export const QuizzContext = createContext();

export const QuizzProvider = ({children}) => {
const value = useReducer(quizzReducer, initialState);

    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}

