import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES =["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
}

const quizzReducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE":
            return {
                gameStage: STAGES[1],
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

