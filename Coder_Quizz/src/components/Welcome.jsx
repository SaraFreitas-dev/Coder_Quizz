import Quizz from "../img/quiz_main.png"
import "./Welcome.css"
import { useContext } from "react";
import { QuizzContext } from "../context/quizz";


const welcome = () => {
const [quizzState, dispatch] = useContext(QuizzContext);

const startQuizz = () => {
    dispatch({ type: "NEW_GAME" }); // Dispatch the NEW_GAME action to reset the game state
    dispatch({ type: "CHANGE_STATE" }); // Dispatch the CHANGE_STATE action to transition to the next game stage
      
};

  return (
    <div id="welcome">
        <h2>Welcome  Fullstack Juniors!</h2>
        <p>Ready to crush your interviews?</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Start</button>
        <img src={Quizz} alt="Quizz-main"/>
    </div>
  );
};

export default welcome