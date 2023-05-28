import { useContext } from "react"
import { QuizzContext } from "../context/quizz"
import Confetti from "react-confetti";
import WellDone from "../img/final.png"
import "./GameOver.css"

const GameOver = () => {
    const [quizzState, dispatch] = useContext(QuizzContext);

  return (
    <div id="gameover">
        <h2>Quiz Complete!</h2>
        <p>Score: {Math.round((quizzState.score / (quizzState.maxQuestion - 1)) * 100)}%</p> 
        <p>You answered {quizzState.score} out of {quizzState.maxQuestion -1} questions correctly</p>
          
          {quizzState.score / (quizzState.maxQuestion - 1) >= 0.7 //if score is bigger tgan 70%, the confetti will activate
          && <Confetti
          numberOfPieces={150}
          style={{ zIndex: 0 }} />}
          
      
        <img src={WellDone} alt="end-img"/>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
    </div>
  )
}

export default GameOver