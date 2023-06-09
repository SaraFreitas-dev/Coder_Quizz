import React from 'react';
import './App.css'
import Music from './components/Music';
import Welcome from './components/welcome'
import Question from './components/Questions';
import GameOver from './components/GameOver';
import { useContext } from 'react';
import { QuizzContext } from './context/quizz';
import { useEffect } from 'react';


function App() {
  const [quizzState, dispatch] = useContext(QuizzContext);

  // Randomize the questions
  useEffect(() =>{
dispatch({type: "REORDER_QUESTIONS"});
  }, [])

  return (

      <div className='app'>
        <div className="content">
        <h1>The Coder's Quizz</h1>
        {quizzState.gameStage === "Start" && <Welcome/>}
        {quizzState.gameStage === "Playing" && <Question/>}
        {quizzState.gameStage === "End" && <GameOver/>}
        <Music />
        </div></div>
    
  )
}

export default App
