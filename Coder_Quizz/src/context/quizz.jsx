import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES =["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    maxQuestion: 10,
    currentQuestion: 0,
    score: 0,
    answerSelected: false //to only continue if user has selected an answer
}

const quizzReducer = (state, action) => {

    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
            // Randomize Questions on each quizz and limit of 10 question
            case "REORDER_QUESTIONS":
                const totalQuestions = state.questions.length;
                const shuffledQuestions = state.questions.map((question) => ({ ...question }));
              
                // Fisher-Yates shuffle algorithm
                for (let i = totalQuestions - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
                }
              
                const limitedQuestions = shuffledQuestions.slice(0, Math.min(totalQuestions, 10));
              
                return {
                  ...state,
                  questions: limitedQuestions,
                };
              
              

        
            case "CHANGE_QUESTION":
                const nextQuestion = state.currentQuestion + 1;
                let endGame = false;

                if (nextQuestion >= state.maxQuestion) {
                    endGame = true;
                  }
                return {
                  ...state,
                  currentQuestion: nextQuestion,
                  gameStage: endGame ? STAGES[2] : state.gameStage,
                  answerSelected: false,               
                };

            case "CHECK_ANSWER":
                //check if answer was already selected
                if(state.answerSelected) return state;

                const answer = action.payload.answer;
                const option = action.payload.option;
                let correctAnswer = 0;

                if(answer == option) correctAnswer = 1;

                return {
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelected: option, //shows the continue button
                }
                case "NEW_GAME":
                    return initialState;
                
    default:
        return state;        
    }
}

export const QuizzContext = createContext();

export const QuizzProvider = ({children}) => {
const value = useReducer(quizzReducer, initialState);

    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}