import Quizz from "../img/quiz_main.png";
import "./Welcome.css";
import { useContext } from "react";
import { QuizzContext } from "../context/quizz";

const Welcome = () => {
  const [quizzState, dispatch] = useContext(QuizzContext);

  const startQuizz = () => {
    dispatch({ type: "NEW_GAME" }); // Reset the game state
    dispatch({ type: "CHANGE_STATE" }); // Transition to the next game stage
    dispatch({ type: "REORDER_QUESTIONS" }); // Randomize the questions
  };

  return (
    <div id="welcome">
      <h2>Welcome Fullstack Juniors!</h2>
      <p>Ready to crush your interviews?</p>
      <button onClick={startQuizz}>Start</button>
      <img src={Quizz} alt="Quizz-main" />
    </div>
  );
};

export default Welcome;
