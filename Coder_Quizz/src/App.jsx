import React from 'react';
import './App.css'
import Welcome from './components/welcome'
import Question from './components/Questions';
import { useContext } from 'react';
import { QuizzContext } from './context/quizz';

function App() {
  const [quizzState, dispatch] = useContext(QuizzContext);

  return (

      <div className='app'>
        <h1>The Coder's Quizz</h1>
        {quizzState.gameStage === "Start" && <Welcome/>}
        {quizzState.gameStage === "Playing" && <Question/>}
        </div>
    
  )
}

export default App
