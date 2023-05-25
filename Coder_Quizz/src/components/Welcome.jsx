import Quizz from "../img/quiz.svg"
import "./Welcome.css"
import { useContext } from "react";
import { QuizzContext } from "../context/quizz";


const welcome = () => {
const [quizzState, dispatch] = useContext(QuizzContext);

  return (
    <div id="welcome">
        <h2>Welcome!</h2>
        <p>Ready to crush your interviews?</p>
        <button onClick={() => dispatch({type})}>Start</button>
        <img src={Quizz} alt="Quizz-main"/>
    </div>
  );
};

export default welcome