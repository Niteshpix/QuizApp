import Header from "./Component/Header";
import Home from "./Component/Home";
import "./App.css";
import { useEffect, useState } from "react";
import Question from "./Component/Question";
import quizData from './data/quiz.json';
import End from "./Component/End";


let interval;
function App() {

  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);



 
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
   
  }

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);


  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }


  return (
    <div className="App">
      <Header />
      {step === 1 && <Home onQuizStart={quizStartHandler} />}

      {step === 2 && <Question 
      
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep} />}

        {step === 3 && <End 
         
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          time={time}/>}
          

         

    </div>
  );
}

export default App;
